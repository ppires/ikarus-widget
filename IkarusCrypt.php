<?php

class IkarusCrypt extends IkarusAES
{

	var $key128;
	var $key192;
	var $key256;

	public function __construct($valor)
	{
		$this->key128 = $valor;
		$this->key192	= "8e73b0f7da0e6452c810f32b809079e562f8ead2522c6b7b";
		$this->key256	= "603deb1015ca71be2b73aef0857d77811f352c073b6108d72d9810a30914dff4";

		parent::__construct();

	}

       public function criaValorDaChaveCriptografada( $vetorValor){
            $str ="";
            for($i = 0 ;$i < count($vetorValor); $i++){
                $str .= $vetorValor[$i];
            }
            $str .= VALOR_CHAVE_SMARTMILHAS;
            return $str;
        }
//
//        function codificaValorParametro($valor){
//            $token = $valor;
//            $token = base64_encode($token);
//            $token = urlencode($token);
//            return $token;
//        }
//
//        function decodificaValorParametro($valor){
//            $token = $valor;
//            $token = urldecode( $token);
//            $token = base64_decode($token);
//            return $token;
//        }
//
        function cryptLink($url, $vetorParametro, $vetorValor)
	{
            $str = "";
            for($i = 0 ; $i < count($vetorParametro); $i++){
                if(strlen($str)) $str .= "&";

                $str .= urlencode($vetorParametro[$i])."=".urlencode($vetorValor[$i]);
            }
            $str .= "&".urlencode(CHAVE_SMARTMILHAS)."=".urlencode($this->criaValorDaChaveCriptografada($vetorValor));

            $valor = $this->crypt($str);

//            $valor = base64_encode($cript);
//            $valor = urlencode($valor);
            return $url."?pCampo=".$valor;
        }


        function decryptLink($token) {

            if($token == null || strlen( trim( $token)) == 0 )
                return false;
            $obj = $this->decrypt($token);

//            $obj = base64_decode($obj);
//            $obj = urldecode($obj);

            $vetorTokens = split("&", $obj);
            $objParametroChave = null;
            $vetorObj = array();
            $chave = "";
            $vetorValor = array();
            for($i = 0 ; $i < count($vetorTokens); $i++){
                $chaveValor = split("=", $vetorTokens[$i]);


                $objParametro = new Parametro(urldecode($chaveValor[0]), urldecode($chaveValor[1]));

                if(strcmp($objParametro->chave ,CHAVE_SMARTMILHAS) == 0){
                    $objParametroChave = $objParametro;

                } else{
                    $vetorObj[count($vetorObj)] = $objParametro;
                    $vetorValor[count($vetorValor)] = $objParametro->valor;
                }
            }
            $chaveCriptografada = $this->criaValorDaChaveCriptografada($vetorValor);

            if($objParametroChave != null){
                if($chaveCriptografada != $objParametroChave->valor)
                    return false;
                else return $vetorObj;
            } else return false;
        }


        function verificaChave($vetorObj, $objParametroChave){

            $objParametroChave = null;

            $chave = "";
            for($i = 0 ; $i < $vetorObj; $i++){
                $objParametro = $vetorObj[count($vetorObj)] ;
                $chave .= $objParametro->valor;
            }
            $chave .= VALOR_CHAVE_SMARTMILHAS;
            $chaveCriptografada = $this->crypt($chave);

            if($objParametroChave != null){
                if($chaveCriptografada != $objParametroChave->valor)
                    return false;
                else return true;
            }
            return false;
        }


	function crypt($t)
	{
		if(!$t)
		{
			return false;
		}
		else
		{

			$tamanho = strlen($t);
                $tcrypt = "";
	        if($tamanho > 16)
	        {
	            $iteracoes = ceil($tamanho / 16);

	            for($i=0; $i<$iteracoes; $i++)
	            {
	                $pedaco = substr($t, $i*16, 16);

	                $thex = $this->stringToHex($pedaco);
	                $tcrypt .= $this->encrypt($thex, $this->key128);
	            }
	        }
	        else
	        {
				$thex = $this->stringToHex($t);
				$tcrypt = $this->encrypt($thex, $this->key128);
	        }

	        return $tcrypt;

		}
	}


	function decrypt($t)
	{

		if(!$t)
		{
			return false;
		}
		else
		{
	        $tamanho = strlen($t);
	        $tstring = "";
	        if($tamanho > 32)
	        {
				$iteracoes = ceil($tamanho / 32);

				for($i=0; $i<$iteracoes; $i++)
	            {
	                $pedaco = substr($t, $i*32, 32);

	                $tcrypt = $this->decryptAES($pedaco, $this->key128);
	                $tstring .= $this->hexToString($tcrypt);
	            }
	        }
	        else
	        {
			    $tcrypt = $this->decryptAES($t, $this->key128);
			    $tstring = $this->hexToString($tcrypt);
	        }

			return $tstring;

		}
	}

}

?>
