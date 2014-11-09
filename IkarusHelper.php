<?php

class OmegaHelper {

    public function __construct() {
        
    }
    
    public static function strtoupperlatin1($pToken){
        if($pToken == null) return null;
        else if(strlen($pToken)){
            $pToken = strtoupper(strtr($pToken, "?��?�??�?�?�?��????��?�??�?��", "?��?�??�?�?�?��????��?�??�?��"));
            return strtr($pToken, array("�" => "SS"));
        } else return null;
    }
    
    public static function strtolowerlatin1($pToken){
        if($pToken == null) return null;
        else if(strlen($pToken)){
            $pToken = strtolower(strtr($pToken, "?��?�??�?�?�?��????��?�??�?��", "?��?�??�?�?�?��????��?�??�?��"));
            return $pToken;
        } else return null;
    }
    public static function retiraAcentoParaComandoSQL($pToken){
        if($pToken == null) return null;
        else if($pToken == "null") return null;
        else if(!strlen($pToken)) return null;
        else {
            $vValor = substr($pToken, 1, -1);
            $vValorSemAcento = Helper::retiraAcento($vValor);
            return $vValorSemAcento;
        }
    }
    
    
    public static function retiraAcento($pToken){
        if($pToken == null) return null;
        else if(strlen($pToken)){
            
//            $pToken = preg_replace("/[^a-zA-Z0-9[-][_] ]/", "", strtr($pToken, "�??��?���?���?�??��?���?���?", "aaaaeeiooouucnAAAAEEIOOOUUCN"));
            $pToken = strtr($pToken, "�??��?���?���?�??��?���?���?", "aaaaeeiooouucnAAAAEEIOOOUUCN");
            return $pToken;
        } else return null;
    }
    
    public static function chamadaCurl($url){
        
          $handler = curl_init();        
            curl_setopt($handler, CURLOPT_TIMEOUT, 120);
            curl_setopt($handler, CURLOPT_RETURNTRANSFER, TRUE);
            
            curl_setopt($handler, CURLOPT_URL, $url);
            curl_setopt($handler, CURLOPT_HEADER, FALSE);

            $vUserAgent = "Portabilidade Witel 2.0/2.0 CFNetwork/548.0.4 Darwin/11.0.0";
            curl_setopt($handler, CURLOPT_USERAGENT, $vUserAgent);
            curl_setopt($handler, CURLOPT_SSL_VERIFYHOST, FALSE);        
            curl_setopt($handler, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($handler, CURLOPT_HTTPHEADER, array('Accept: text/plain,text/html', 'Accept-Charset: iso-8859-1, utf-8', 'Accept-Language: en-us, en-gb, pt-br'));
            curl_setopt($handler, CURLOPT_FOLLOWLOCATION, TRUE);
            
            $ret =  curl_exec($handler);
            
            return $ret;
    }
    
    public static function getSistemaOperacionalDoServidor(){
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            return WINDOWS;
        } else {
            return LINUX;
        }
    }
    public static function renomearDiretorio($pathAntigo, $pathNovo){
        
        if(is_dir($pathAntigo) && is_dir($pathNovo)){
            $idSO = Helper::getSistemaOperacionalDoServidor();
            switch ($idSO) {
                case WINDOWS:
                    $pathAntigo = str_replace("/", "\\", $pathAntigo);
                    $pathNovo = str_replace("/", "\\", $pathNovo);
                    break;
                case LINUX:
                    $pathAntigo = str_replace("\\", "/", $pathAntigo);
                    $pathNovo = str_replace("\\", "/", $pathNovo);
                    break;

                default:
                    break;
            }
            rename($pathAntigo, $pathNovo);
        }
    }
    
    public static function POSTGET($variavel){

        if(Helper::POST($variavel) != null)
            return Helper::POST($variavel);
        else return Helper::GET($variavel);

    }
    
    public static function padronizarNomeDePessoa($nomePessoa){
        
        $originais =     array(" De ", " Da ", " Do ", " Das ", " Dos ", " E ", "'", "�", "�", "�", "�", "�", "�", "�", "�");
        $substituicoes = array(" de ", " da ", " do ", " das ", " dos ", " e ", "\'", "�", "�", "�", "�", "�", "�", "�", "�");
                
        $nomePessoa = ucwords(strtolower($nomePessoa));
        $nomePessoa = str_replace($originais, $substituicoes, $nomePessoa);
        $nomePessoa = self::removerEspacosDuplicados($nomePessoa);
        
        return $nomePessoa;
        
    }
        
    public static function getArrayDePaginasIniciais(){
        
        $diretorios = array("forms", "lists", "pages");
        $arrListaOpcoes = array(); 
        
        foreach($diretorios as $diretorio){
            
            $dirHandler = opendir($diretorio);
        
            while(($arquivo = readdir($dirHandler)) !== false){
                
                if($arquivo != "." && $arquivo != ".."){
                    
                    $arrListaOpcoes["{$diretorio}/{$arquivo}"] = "{$diretorio}/{$arquivo}";
                    
                }
                
            }
                
        }
        
        return $arrListaOpcoes;
        
    }

    public static function getTituloDasPaginas() {

        $titulo = TITULO_PAGINAS;
        return $titulo;
        
    }

    public static function getValorParaListagem($valor, $nulo="---") {

        if (!strlen($valor)) {

            return $nulo;
            
        } else {

            return $valor;
            
        }
    }

    public static function getFiltroDeColuna() {

        $id = rand(0, 1000);

        $str = "<input id=\"filtro_{$id}\" type=\"text\" class=\"input_text\" value=\"\" onkeyup=\"javascript:filtrarColuna(this.parentNode, this.value);\" />";

        return $str;
    }

    public static function removerAspas($valor) {

        $search = array("\"", "'", "\'");
        $replace = array("", "", "");

        $valor = str_replace($search, $replace, $valor);

        return $valor;
    }

    public static function removerPontuacaoDeNumeros($valor) {

        $search = array(",", ".");
        $replace = array("", "");

        $valor = str_replace($search, $replace, $valor);

        return $valor;
    }

    public static function removerEspacosDuplicados($valor) {

        $valor = preg_replace('~\s{2,}~', ' ', $valor);

        return $valor;
    }

    public static function getCampoHidden($nome, $valor, $id=false) {

        if ($id) {

            $strId = "id=\"{$id}\"";
        } else {

            $strId = "";
        }

        $retorno = "<input type=\"hidden\" name=\"{$nome}\" value=\"{$valor}\" {$strId}/>";

        return $retorno;
    }

    public static function getLegenda($arrCorLegenda) {

        $strRetorno = "";

        foreach ($arrCorLegenda as $cor => $texto) {

            $strRetorno .= "<input type=\"button\" class=\"icone_legenda\" style=\"background-color: {$cor};\"> {$texto}<br />";
        }

        if (strlen($strRetorno)) {

            $strRetorno = self::removerOsUltimosCaracteresDaString($strRetorno, 6);
        }

        return $strRetorno;
    }

    public static function getObjeto($stringNomeClasse) {

        $obj = call_user_func_array(array($stringNomeClasse, "factory"), "");

        return $obj;
    }

    public static function getRetornoDeMetodo(&$obj, $nomeMetodo, $arrParametros=false) {

        if (!$arrParametros) {

            $arrParametros = array();
        }

        return call_user_func_array(array(&$obj, $nomeMetodo), $arrParametros);
    }

    public static function getAtributoDeObjeto(&$obj, $atributo) {

        $arr = get_object_vars($obj);

        return $arr[$atributo];
    }

    public static function getBotaoDeAjuda($textoTooltip, $imprimirEmDivSeparada) {

        $raiz = self::acharRaiz();

        if ($imprimirEmDivSeparada) {

            $rand = rand(0, 1000);

            echo "<div id=\"botao_ajuda_{$rand}\" style=\"display: none;\">{$textoTooltip}</div>";

            $textoTooltip = "botao_ajuda_{$rand}";
        }

        $strRetorno = "<a href=\"javascript: void(0)\" onmouseover=\"javascript: tip('$textoTooltip', undefined, undefined, new Array(380, 200));\" onmouseout=\"javascript:notip();\">
                                <img src=\"{$raiz}adm/imgs/padrao/ajuda.png\" border=\"0\">
                        </a>";

        return $strRetorno;
    }

    public static function tab2nbsp($string, $numeroNbspPorTab=3) {

        $strTab = self::getStringDeTabulacao($numeroNbspPorTab);

        $strRetorno = str_replace("\t", $strTab, $string);

        return $strRetorno;
    }

    public static function getStringDeTabulacao($numeroDeTabulacoes) {

        $strRetorno = "";

        for ($i = 0; $i < $numeroDeTabulacoes; $i++) {

            $strRetorno .= "&nbsp;&nbsp;&nbsp;";
        }

        return $strRetorno;
    }

    public static $contadorDeIdsGreyBox = 1;

    public static function getLinkParaGreyBox($titulo, $url, $largura = LARGURA_PADRAO_GREYBOX, $altura = ALTURA_PADRAO_GREYBOX, $id = false, $parent=false) {

        $retorno = "";

        if ($id === false) {

            $idGB = Helper::$contadorDeIdsGreyBox++;

            $retorno = " id=\"link_greybox_{$idGB}\" ";
        }

        if ($parent !== false) {

            for ($i = 0; $i < $parent; $i++) {

                $strParent .= "parent.";
            }
        }

        Helper::imprimirComandoJavascript("$(function(){

                                         $(\"#link_greybox_{$idGB}\").click(function(){

                                             {$strParent}carregarConteudoDialog('{$url}');
                                             {$strParent}$(\"#div_dialog\").dialog(\"option\", \"width\", {$largura});
                                         {$strParent}$(\"#div_dialog\").dialog(\"option\", \"title\", \"{$titulo}\");
                                         {$strParent}$(\"#div_dialog\").dialog(\"open\");

                                        });

                                });"
        );

        return $retorno;
    }

    public static function getStringDasVariaveisPageETipo($incluirNomeDoScriptPHP5=false) {

        $string = "";

        if ($incluirNomeDoScriptPHP5)
            $string .= self::getNomeDoScriptAtual() . "?";

        $string .= "tipo=" . self::GET("tipo") . "&page=" . self::GET("page");

        return $string;
    }

    public static function getStringReferenteADeterminadasVariaveisGET($arrayVariaveis) {

        $retorno = "";

        if (!is_array($arrayVariaveis))
            $arrayVariaveis = array($arrayVariaveis);

        if (count($arrayVariaveis) == 1) {

            return "{$arrayVariaveis[0]}=" . self::GET($arrayVariaveis[0]);
        } else {

            foreach ($arrayVariaveis as $chaveGET) {

                $valor = self::GET($chaveGET);

                $retorno .= "&{$chaveGET}={$valor}";
            }
        }

        return $retorno;
    }

    public static function imprimirCamposHiddenReferentesADeterminadasVariaveisGET($arrayVariaveis) {

        $retorno = "";

        if (!is_array($arrayVariaveis))
            $arrayVariaveis = array($arrayVariaveis);

        foreach ($arrayVariaveis as $chaveGET) {

            $valor = self::GET($chaveGET);

            $retorno .= "<input type=\"hidden\" name=\"{$chaveGET}\" value=\"{$valor}\">
	    			   ";
        }

        print $retorno;
    }

    public static function imprimirCamposHiddenReferentesATodasAsVariaveisGET() {

        $retorno = "";

        $pagina = self::GET("page");
        $tipo = self::GET("tipo");

        foreach ($_GET as $chave => $valor) {

            if (is_array($valor)) {

                for ($i = 0; $i < count($valor); $i++) {

                    $retorno .= "<input type=\"hidden\" name=\"{$chave}[]\" value=\"{$valor[$i]}\">\n";
                }
            } else {

                $retorno .= "<input type=\"hidden\" name=\"{$chave}\" value=\"{$valor}\">\n";
            }
        }

        print $retorno;
    }

    public static function getDiaEHoraAtual() {

        return date("d/m/Y H:i:s");
    }

    public static function getDiaEHoraAtualSQL() {

        return date("Y-m-d H:i:s");
    }
    
    
    public static function getDiaAtualSQL() {

        return date("Y-m-d");
    }

    public static function getNomeDoUsuarioCorrente() {

        return self::SESSION("usuario_nome");
    }

    public static function getNodoNivelEstruturaUsuarioCorrente() {

        return self::SESSION(NIVEL_ESTRUTURA_USUARIO);
    }

    public static function getNomeFuncao($funcaoComParametros) {

        $nomeFuncao = substr($funcaoComParametros, 0, strpos($funcaoComParametros, "("));

        return $nomeFuncao;
    }

    public static function getParametrosFuncao($funcaoComParametros) {

        $temp1 = substr($funcaoComParametros, strpos($funcaoComParametros, "("));
        $temp2 = str_replace(array("(", ")"), array("", ""), $temp1);

        $array = explode(",", $temp2);

        return $array;
    }

    public static function imprimirCabecalhoParaFormatarAction($importarJQuery=false) {

        echo self::carregarArquivoCss(false, "adm/css/", "padrao");

        echo self::carregarArquivoJavascript(false, "recursos/js/", "core");
        echo self::carregarArquivoJavascript(false, "recursos/js/", "pngfix");
        
        if($importarJQuery){

            Javascript::setRaizDaEstrutura();
            echo Javascript::importarBibliotecaJQuery();

        }   
        
        self::imprimirComandoJavascriptComTimer("document.title='" . TITULO_PAGINAS . "'", 0, false);
    }

    public static function getComandoDeFecharJanelaPopup($mensagem=false) {

        $print = "<script language=\"javascript\">self.close();</script>";

        if ($mensagem) {

            $print .= "

    			<script language=\"javascript\">

    				opener.document.getElementById('textoMensagem').innerHTML='$mensagem';
    				opener.document.getElementById('box').style.display='block';
    				opener.document.getElementById('tabelaMensagem').class='okTabela';

    			</script>";
        }

        print $print;
    }

    public static function getPorcentagem($numerador, $denominadorTotal, $casasDecimais=1) {

        if (is_numeric($numerador) && is_numeric($denominadorTotal)) {

            $porcentagem = round(($numerador / $denominadorTotal) * 100, $casasDecimais);

            return $porcentagem . " %";
        } else {

            return "$numerador";
        }
    }

    public static function gerarArrayCoresHarmoniosas($numeroCores) {

        $verde = array('#cdec22', '#3dec22', '#22ec97');
        $azul = array('#6D67EF', '#a822ec', '#d522ec');
        $vermelho = array('#FF7A51', '#ff2244', '#ff4322');
        $amarelo = array('#ff5e24', '#ffc420', '#ffff20');

        $arrayRetorno = array();

        for ($i = 0; $i < $numeroCores; $i++) {

            $indice = floor($i / 4);

            if ($i % 4 == 0) {

                $arrayRetorno[] = $vermelho[$indice];
            } elseif ($i % 4 == 1) {

                $arrayRetorno[] = $azul[$indice];
            } elseif ($i % 4 == 2) {

                $arrayRetorno[] = $verde[$indice];
            } elseif ($i % 4 == 3) {

                $arrayRetorno[] = $amarelo[$indice];
            }
        }

        return $arrayRetorno;
    }

    public static function getValorNumericoComLegenda($valor, $legendaSingular, $legendaPlural) {

        if ($valor == 1) {

            return "{$valor} {$legendaSingular}";
        } else {

            if (!strlen($valor)) {

                $valor = 0;
            }

            return "{$valor} {$legendaPlural}";
        }
    }

    public static $letrasDoAlfabeto = array("A" => "A",
        "B" => "B",
        "C" => "C",
        "D" => "D",
        "E" => "E",
        "F" => "F",
        "G" => "G",
        "H" => "H",
        "I" => "I",
        "J" => "J",
        "K" => "K",
        "L" => "L",
        "M" => "M",
        "N" => "N",
        "O" => "O",
        "P" => "P",
        "Q" => "Q",
        "R" => "R",
        "S" => "S",
        "T" => "T",
        "U" => "U",
        "V" => "V",
        "W" => "W",
        "X" => "X",
        "Y" => "Y",
        "Z" => "Z");

    public static function getCheckBoxesAPartirDeArray($nomeCheckBox, $arrayValores, $valorSelecionado=false, $quebraDeLinha=false) {

        $strRetorno = "";

        if ($quebraDeLinha) {

            $strQuebraDeLinha = "<br />";
        }

        $registrosPorLinha = COLUNAS_FORMULARIOS;

        foreach ($arrayValores as $chave => $valor) {

            if (is_array($valorSelecionado) && in_array($chave, $valorSelecionado)) {

                $complemento = "checked=\"checked\"";
            } elseif ($chave == $valorSelecionado) {

                $complemento = "checked=\"checked\"";
            } else {

                $complemento = "";
            }

            $strRetorno .= "<input type=\"checkbox\" name=\"{$nomeCheckBox}\" id=\"{$nomeCheckBox}_{$chave}\" value=\"{$chave}\" {$complemento}>{$valor}{$strQuebraDeLinha}";
        }

        return $strRetorno;
    }

    public static function getNivelSimilaridade($idNivel) {

        $idNivel = intval($idNivel, 10);
        $retorno = "";

        switch ($idNivel) {

            case 1:
                $retorno = "Baixa";
                break;
            case 2:
                $retorno = "M�dia";
                break;
            case 3:
                $retorno = "Alta";
                break;
        }

        return $retorno;
    }

    public static function getStringBoolean($valorBoolean) {

        if ($valorBoolean) {

            return "true";
        } else {

            return "false";
        }
    }

    public static function getStringDasVariaveisDaUrl() {

        return $_SERVER[QUERY_STRING];
    }

    public static function getStringDasVariaveisDaUrlComExcessoes($arrExcecoes) {

        $string = urldecode($_SERVER["QUERY_STRING"]);

        if (strlen($string) > 1) {

            $pedacos = explode("&", $string);

            if (!is_array($arrExcecoes)) {

                $arrExcecoes = array($arrExcecoes);
            }

            for ($i = 0; $i < count($pedacos); $i++) {

                $excecao = false;

                foreach ($arrExcecoes as $valor) {

                    if (substr($pedacos[$i], 0, strlen($valor) + 1) == $valor . "=") {

                        $excecao = true;
                    }
                }

                if (!$excecao) {

                    $strValor .= $pedacos[$i] . "&";
                }
            }

            return $strValor;
        }

        return "";
    }

    public static function getUrlCodificada() {

        return urlencode($_SERVER[REQUEST_URI]);
    }

    public static function getUrlDecodificada($urlCodificada) {

        return urldecode($urlCodificada);
    }

    public static function getPathParaLibGrafica() {

        $retorno = self::acharRaiz();
        $retorno .= "recursos/libs/jpgraph/";

        return $retorno;
    }

    public static function getDiasToMesesAnos($dias) {

        $anos = 0;
        $meses = 0;

        $anos = floor($dias / 365);

        if ($anos % 365) {

            $meses = floor(($anos % 365) / 30);
        } elseif ($dias < 365) {

            $meses = floor($dias / 30);
        }

        $strRetorno = "";

        if ($anos) {

            $strRetorno .= ( $anos == 1) ? "{$anos} ano" : "{$anos} anos";
        }

        if ($meses) {

            if (strlen($strRetorno))
                $strRetorno .= " e ";

            $strRetorno .= ( $anos == 1) ? "{$anos} mes" : "{$anos} meses";
        }

        if (!strlen($strRetorno)) {

            $strRetorno = "0 meses";
        }

        return "{$strRetorno}";
    }

    public static function acharRaiz($retornarNumeroNiveis=false) {

        $retorno = "";
        $numero = 0;

        while (1) {

            if (!file_exists("{$retorno}__root")) {

                $retorno .= "../";
                $numero++;
                
            } else {

                break;
            }
        }

        if ($retornarNumeroNiveis) {

            return $numero;
        } else {

            return $retorno;
        }
    }

    public static function mudarLocation($location) {

        print "

        <script language=\"javascript\">

        	document.location.href=\"{$location}\";

        </script>";
    }

    public static function nl2br($texto) {

        $texto = str_replace("\n", "<br>", $texto);
        $texto = str_replace("\r", "", $texto);
        $texto = str_replace("\t", "", $texto);

        return $texto;
    }

    public static function substituirNulosPorZero($array) {

        if (is_array($array)) {

            foreach ($array as $chave => $valor) {

                if (trim($valor) == "") {

                    $array[$chave] = 0;
                }
            }
        }

        return $array;
    }

    public static function getValorNumerico($texto) {

        if (!is_numeric($texto) || trim($texto) == "") {

            return 0;
        }

        else
            return $texto;
    }

    public static function getTagDoFavicon() {

        $path = self::acharRaiz();
        return "<link rel=\"shortcut icon\" href=\"{$path}favicon.ico\" type=\"image/x-icon\" />";
    }

    public static function importarBibliotecaParaGerarPDF() {

        $path = self::acharRaiz() . "recursos/libs/dompdf/";

        require_once("{$path}dompdf_config.inc.php");
    }

    public static function removerArquivosTemporarios() {

        $timeNow = time();

        $path = self::acharRaiz() . "temp/";

        $arquivos = self::getTodosOsArquivosDoDiretorio($path);

        foreach ($arquivos as $arquivo) {

            $timeArquivo = filemtime($path . $arquivo);

            if ($timeNow - $timeArquivo > 3600 * TIMEOUT_TEMPORARIOS_EM_HORAS) {

                unlink($path . $arquivo);
            }
        }
    }

    public static function getTodosOsArquivosDoDiretorio($directory, $recursive = false) {
        $result = array();
        $handle = opendir($directory);
        while ($datei = readdir($handle)) {
            if (($datei != '.') && ($datei != '..') && ($datei != '.htaccess')) {
                $file = $directory . $datei;
                if (is_dir($file)) {
                    if ($recursive) {
                        $result = array_merge($result, getAllFiles($file . '/'));
                    }
                } else {
                    $result[] = $file;
                }
            }
        }

        closedir($handle);
        return $result;
    }

    public static function getCaminhoArquivo($pathCompleto) {

        $posicao1 = strrpos($pathCompleto, "/");

        return substr($pathCompleto, 0, $posicao1);
    }

    public static function getNomeDoScriptAtual() {

        $fullName = $_SERVER["SCRIPT_NAME"];
        $scriptName = substr($fullName, strrpos($fullName, "/") + 1);

        return $scriptName;
    }
    
    public static function getDiaDaSemanaPorExtenso($diaDaSemanaISO){
        
        if(is_numeric($diaDaSemanaISO) && $diaDaSemanaISO >= 1 && $diaDaSemanaISO <= 7){

            switch($diaDaSemanaISO){
                case "1":
                    return "Segunda-Feira";
                    break;
                case "2":
                    return "Ter�a-Feira";
                    break;
                case "3":
                    return "Quarta-Feira";
                    break;
                case "4":
                    return "Quinta-Feira";
                    break;
                case "5":
                    return "Sexta-Feira";
                    break;
                case "6":
                    return "S�bado";
                    break;
                case "7":
                    return "Domingo";
                    break;

            }

        }
        
    }

    public static function getDiferencaEntreDatasEmDias($timestamp1, $timestamp2) {

        $maiorTimestamp = 0;
        $menorTimestamp = 0;

        if ($timestamp1 >= $timestamp2) {

            $maiorTimestamp = $timestamp1;
            $menorTimestamp = $timestamp2;
        }

        if ($timestamp1 < $timestamp2) {

            $menorTimestamp = $timestamp1;
            $maiorTimestamp = $timestamp2;
        }

        $diferenca = ($maiorTimestamp - $menorTimestamp) / SEGUNDOS_EM_UM_DIA;

        return $diferenca;
    }
    
    public static function getUnixTimestampDeHora($hora){
        
        $hora = str_replace("'", "", $hora);
        
        if(substr_count($hora, ":") > 0){
        
            $partes = explode(":", $hora);
            
            if(count($partes) == 2){
                
                $retorno = mktime($partes[0], $partes[1], 0, 1, 1, 2000, 0);
                
            }
            elseif(count($partes) == 3){
                
                $retorno = mktime($partes[0], $partes[1], $partes[2], 1, 1, 2000, 0);
                
            }
            
        }
        
        return $retorno;
        
    }

    public static function getUnixTimestamp($data) {

        $obj = new Generic_DAO();

        $timeStamp = 0;

        if (substr_count($data, ":") > 0) {

            $data = self::formatarDataTimeParaComandoSQL($data);
            $data = str_replace("'", "", $data);
            
            $arrCampos = explode("-", $data);

            $ano = $arrCampos[0];
            $mes = $arrCampos[1];

            $arrCampos = explode(" ", $arrCampos[2]);

            $dia = $arrCampos[0];

            $arrCampos = explode(":", $arrCampos[1]);

            $hora = $arrCampos[0];
            $min = $arrCampos[1];
            $seg = $arrCampos[2];
                        
            $timeStamp = mktime($hora, $min, $seg, $mes, $dia, $ano);
            
            return $timeStamp;
            
        } else {

            $data = self::formatarDataParaComandoSQL($data);
            $data = str_replace("'", "", $data);

            if (substr_count($data, "-") == 2) {

                $arrCampos = explode("-", $data);

                $ano = $arrCampos[0];
                $mes = $arrCampos[1];
                $dia = $arrCampos[2];

                $timeStamp = mktime(0, 0, 0, $mes, $dia, $ano);
            } elseif (substr_count($data, "/") == 2) {

                $arrCampos = explode("/", $data);

                $ano = $arrCampos[2];
                $mes = $arrCampos[1];
                $dia = $arrCampos[0];

                $timeStamp = mktime(0, 0, 0, $mes, $dia, $ano);
            }            

            return $timeStamp;
        }

        return false;
    }

    public static function GET($variavel) {

        return ($_GET[$variavel]);
    }

    public static function POST($variavel) {

        return ($_POST[$variavel]);
    }

    public static function SESSION($variavel) {

        return ($_SESSION[$variavel]);
    }

    public static function includePHP($niveisRaiz=false, $caminhoApartirRaiz, $includeOnce=true) {

        if ($niveisRaiz === false) {

            $strRaiz = self::acharRaiz();
        } else {

            $strRaiz = self::getStringNiveisAteRaiz($niveisRaiz);
        }

        if (is_file($strRaiz . $caminhoApartirRaiz)) {

            include($strRaiz . "adm/imports/instancias.php");

            if ($includeOnce) {

                include_once($strRaiz . $caminhoApartirRaiz);
            } else {

                include($strRaiz . $caminhoApartirRaiz);
            }
        } else {

            self::imprimirMensagem("Erro: O arquivo <font color=\"#FF0000\">{$caminhoApartirRaiz}</font> n�o foi encontrado.", MENSAGEM_ERRO);
        }
    }

    public static function removerQuebrasDeLinha($string, $substituirPorEspaco=false) {

        $arrSearch = array("\r\n", "\n");

        if ($substituirPorEspaco) {

            $arrReplace = array(" ", " ");
        } else {

            $arrReplace = array("", "");
        }

        return str_replace($arrSearch, $arrReplace, $string);
    }

    public static function gerarMenuPopup($idDiferenciacaoDiv, $arrayLinksMenu, $organograma=false) {

        $retorno = array("id" => "menu_popup_{$idDiferenciacaoDiv}",
            "conteudo" => "");

        $alturaDiv = count($arrayLinksMenu) * 13;

        $objLink = new Link();

        $maiorTexto = 0;

        foreach ($arrayLinksMenu as $objLink) {

            $objLink->organograma = $organograma;

            $strRetorno .= "&bull;&nbsp;{$objLink->montarLink()}<br />";

            $larguraTexto = strlen($objLink->label);

            if ($larguraTexto > $maiorTexto) {

                $maiorTexto = $larguraTexto;
            }
        }

        $larguraDiv = 30 + ceil($maiorTexto * 6.5);

        $strRetorno = "<div id=\"menu_popup_{$idDiferenciacaoDiv}\" onclick=\"javascript:this.style.display='none';\" class=\"div_menu_popup\" style=\"display: none; height:{$alturaDiv}px; width:{$larguraDiv}px;\">" . $strRetorno;

        $strRetorno .= "</div>";

        $retorno["conteudo"] = $strRetorno;

        return $retorno;
    }

    public static function gerarPopupDeInformacao($id, $informacao, $classeCss="div_menu_informacoes", $arrEstiloAdicional=false, $larguraDinamica=false) {

        $objLink = new Link();

        if ($larguraDinamica) {

            $larguraDiv = 30 + ceil($informacao * 6.5);
            $arrEstiloAdicional[] = "width: {$larguraDiv}px";
        }

        if (count($arrEstiloAdicional)) {

            foreach ($arrEstiloAdicional as $estiloAdicional) {

                $strEstiloAdicional .= "$estiloAdicional; ";
            }
        }

        $strRetorno = "<div id=\"{$id}\" onclick=\"javascript:this.style.display='none';\" class=\"{$classeCss}\" style=\"display: none; {$arrEstiloAdicional}\">{$informacao}";

        $strRetorno .= "</div>";

        return $strRetorno;
    }

    public static function getComandoJavascript($stringComando) {

        if ($stringComando) {

            $string = "

        	<script type=\"text/javascript\">

        		{$stringComando};

            </script>";

            return $string;
        }
    }

    public static function getComandoJavascriptComTimer($stringComando, $timerEmSegundos, $infinitamente=true, $imprimirTagScript=true) {

        if ($stringComando) {

            $intervalo = 0;

            if (is_numeric($timerEmSegundos)) {

                $intervalo = $timerEmSegundos * 1000;
            }

            if ($infinitamente) {

                $funcaoJs = "setInterval";
            } else {

                $funcaoJs = "setTimeout";
            }


            if ($imprimirTagScript) {

                $string .= "<script type=\"text/javascript\">";
            }

            $string .= "{$funcaoJs}(function(){ {$stringComando} }, $intervalo);";

            if ($imprimirTagScript) {

                $string .= "</script>";
            }

            return $string;
        }
    }

    public static function imprimirComandoJavascript($stringComando) {

        echo self::getComandoJavascript($stringComando);
    }

    public static function imprimirComandoJavascriptComTimer($stringComando, $timerEmSegundos, $infinitamente=false) {

        echo self::getComandoJavascriptComTimer($stringComando, $timerEmSegundos, $infinitamente);
    }

    public static function imprimirComandoJavascriptAoCarregarDocumento($stringComando, $timerEmSegundos=false, $infinitamente=false) {

        if ($timerEmSegundos) {

            $comandoInterno = self::getComandoJavascriptComTimer($stringComando, $timerEmSegundos, $infinitamente, false);
        } else {

            $comandoInterno = $stringComando;
        }

        $strComando = "

			<script type=\"text/javascript\">

        		$('document').ready(function(){{$comandoInterno}});

            </script>";

        echo $strComando;
    }

    public static function carregarArquivoJavascript($niveisRaiz, $diretorioApartirRaiz, $arquivoSemExtensao, $forcarLimpezaDoCache=false) {

        if ($forcarLimpezaDoCache === true) {

            $complementoArquivo = "?" . self::getUnixTimestamp(date("Y-m-d"));
        }

        if ($niveisRaiz === false) {

            $strRaiz = self::acharRaiz();
        } else {

            $strRaiz = self::getStringNiveisAteRaiz($niveisRaiz);
        }

        $diretorioApartirRaiz = self::getPathComBarra($diretorioApartirRaiz);

        $strPrint = "<script type=\"text/javascript\" src=\"{$strRaiz}{$diretorioApartirRaiz}{$arquivoSemExtensao}.js{$complementoArquivo}\" ></script>\n";

        return $strPrint;
    }

    public static function carregarArquivoCss($niveisRaiz, $diretorioApartirRaiz, $arquivoSemExtensao) {

        if ($niveisRaiz === false) {

            $strRaiz = self::acharRaiz();
        } else {

            $strRaiz = self::getStringNiveisAteRaiz($niveisRaiz);
        }

        $diretorioApartirRaiz = self::getPathComBarra($diretorioApartirRaiz);

        $strPrint = "<link type=\"text/css\" rel=\"stylesheet\" href=\"{$strRaiz}{$diretorioApartirRaiz}{$arquivoSemExtensao}.css\" />\n";

        return $strPrint;
    }

    public static function getPathComBarra($path) {

        if (!(substr($path, strlen($path) - 1, 1) == "/")) {

            $path = $path . "/";
        }

        return $path;
    }

    public static function getPathComBarrasUnix($path) {

        return str_replace("\\", "/", $path);
    }

    public static function getExtensaoDoArquivo($pathOuNomeDoArquivo) {

        if (substr_count($pathOuNomeDoArquivo, "tar.gz") > 0) {

            $extensao = "tar.gz";
        } else {

            $pos1 = strrpos($pathOuNomeDoArquivo, '.');
            $extensao = substr($pathOuNomeDoArquivo, $pos1 + 1);
        }

        return $extensao;
    }

    public static function corrigirBarrasPath($path) {

        if (SISTEMA_OPERACIONAL == WINDOWS) {

            $path = str_replace("/", "\\", $path);
            return $path;
        } else {

            return $path;
        }
    }

    public static function getStringNiveisAteRaiz($int=false) {

        if ($int === false) {

            return self::acharRaiz();
        }

        $strRetorno = "";

        for ($i = 0; $i < $int; $i++) {

            $strRetorno .= "../";
        }

        return $strRetorno;
    }

    public static function imprimirMensagem($mensagem, $tipoMensagem = MENSAGEM_OK) {

        $mensagemOriginal = $mensagem;

        //substitui \n por <br />
        $mensagem = nl2br($mensagem);

        if ($tipoMensagem == MENSAGEM_OK) {
            echo "<div class='div_mensagem_ok'><table width='98%' border='0' align='center' cellpadding='0' cellspacing='0'><tr><td class='td_mensagem_ok'>&nbsp;</td><td class='div_conteudo_mensagem'>{$mensagem}</td></tr></table></div>";
        }

        if ($tipoMensagem == MENSAGEM_INFO) {
            echo "<div class='div_mensagem_info'><table width='98%' border='0' align='center' cellpadding='0' cellspacing='0'><tr><td class='td_mensagem_info'>&nbsp;</td><td class='div_conteudo_mensagem'>{$mensagem}</td></tr></table></div>";
        } elseif ($tipoMensagem == MENSAGEM_WARNING) {
            echo "<div class='div_mensagem_warning'><table width='98%' border='0' align='center' cellpadding='0' cellspacing='0'><tr><td class='td_mensagem_warning'>&nbsp;</td><td class='div_conteudo_mensagem'>{$mensagem}</td></tr></table></div>";
        } elseif ($tipoMensagem == MENSAGEM_ERRO) {
            echo "<div class='div_mensagem_erro'><table width='98%' border='0' align='center' cellpadding='0' cellspacing='0'><tr><td class='td_mensagem_erro'>&nbsp;</td><td class='div_conteudo_mensagem'>{$mensagem}</td></tr></table></div>";
        } elseif ($tipoMensagem == MENSAGEM_ASK) {
            echo "<div class='div_mensagem_info'><table width='98%' border='0' align='center' cellpadding='0' cellspacing='0'><tr><td class='td_mensagem_info'>&nbsp;</td><td class='div_conteudo_mensagem'>{$mensagem}</td></tr></table></div>";
        }

        echo "\n";

        return "";
    }

    public static function getBarraDaNextAction($arr) {

        $strRetorno = "\t<table class=\"table_next_action\">";
        $strRetorno .= "\t\t<tr class=\"tr_next_action\">";

        $i = 0;

        foreach ($arr as $chave => $valor) {

            if (count($arr) == 1) {

                $strRetorno .= "\t\t\t<td class=\"td_next_action\"><input type=\"hidden\" id=\"next_action\" name=\"next_action\" value=\"{$chave}\" ></td>";
                break;
                
            }

            if (is_numeric(self::GET("id1"))) {

                $checked = (strpos($chave, "list_") == 0) ? "checked=\"checked\"" : "";
                
            } else {

                $checked = $i == 0 ? "checked=\"checked\"" : "";
            }

            $titulo = ($i == 0) ? "Ap�s esta opera��o:&nbsp;" : "";

            $strRetorno .= "\t\t\t<td class=\"td_next_action\">{$titulo}<input id=\"next_action_{$i}\" type=\"radio\" name=\"next_action\" {$checked} value=\"{$chave}\" /><label for=\"next_action_{$i}\">{$valor}</label></td>";

            $i++;
        }

        $strRetorno .= "\t\t</tr>";
        $strRetorno .= "\t</table>";

        return $strRetorno;
    }

    public static function getBarraDeBotoesDoFormulario($botaoLimpar=true, $botaoCadastrar=true, $isEdicao=false, $labelAlternativo="", $botaoVoltar=true, $actionVoltar=false, $mostrarNoRodapeDaPagina=true) {

        $idDiv = "";

        if ($mostrarNoRodapeDaPagina) {

            $idDiv = "div_barra_de_acoes";
        }

        $strRetorno = "<div id=\"{$idDiv}\">\n";
        $strRetorno .= "\t<table class=\"table_botoes_form\">\n";
        $strRetorno .= "\t\t<tr class=\"tr_botoes_form\">\n";
        $strRetorno .= "\t\t\t<td class=\"td_botoes_form\">\n";

        if ($botaoVoltar) {

            if (!$actionVoltar) {

                $actionVoltar = "history.go(-1);";
            } else {

                $actionVoltar = "document.location.href='$actionVoltar'";
            }

            $strRetorno .= "\t\t\t\t<input class=\"botoes_form\" type=\"button\" value=\"Voltar\" id=\"botao_submit\" onclick=\"javascript:{$actionVoltar}\">\n";
        }

        if ($botaoLimpar) {

            if (strlen($strRetorno))
                $strRetorno .= "&nbsp;";

            $strRetorno .= "\t\t\t\t<input class=\"botoes_form\" type=\"reset\" value=\"Limpar\">\n";
        }

        if ($botaoCadastrar && self::GET("visualizacao") != "true") {

            if (strlen($strRetorno))
                $strRetorno .= "&nbsp;";

            $label = "Salvar Dados";

            if ($isEdicao)
                $label = "Salvar Altera��es";

            if ($labelAlternativo != "")
                $label = $labelAlternativo;

            $strRetorno .= "\t\t\t\t<input class=\"botoes_form\" type=\"submit\" value=\"$label\">\n";
        }


        $strRetorno .= "\t\t\t</td>\n";
        $strRetorno .= "\t\t</tr>\n";
        $strRetorno .= "\t</table>\n";
        $strRetorno .= "</div>\n";

        return $strRetorno;
    }

    public static function imprimirBarraBotoes($botoes) {

        $strRetorno = "\t<table class=\"table_botoes_form\">\n";
        $strRetorno .= "\t\t<tr class=\"tr_botoes_form\">\n";
        $strRetorno .= "\t\t\t<td class=\"td_botoes_form\">\n";

        for ($i = 0; $i < count($botoes); $i++) {

            $tipo = $botoes[$i]->tipo;
            $label = $botoes[$i]->label;
            $action = $botoes[$i]->action;

            if (strlen($action) > 0)
                $strAction = "onclick=\"$action\";";

            $strRetorno .= "\t\t\t\t<input class=\"botoes_form\" type=\"$tipo\" {$strAction} value=\"$label\">\n";
        }

        $strRetorno .= "\t\t\t</td>\n";
        $strRetorno .= "\t\t</tr>\n";
        $strRetorno .= "\t</table>\n";

        return $strRetorno;
    }

    public static function imprimirBotoesAjax($botaoLimpar=true, $botaoCadastrar=true, $isEdicao=false) {

        $strRetorno = "\t<table class=\"table_botoes_form\">\n";
        $strRetorno .= "\t\t<tr class=\"tr_botoes_form\">\n";
        $strRetorno .= "\t\t\t<td class=\"td_botoes_form\">\n";

        if ($botaoLimpar) {

            $strRetorno .= "\t\t\t\t<input class=\"botoes_form\" type=\"reset\" value=\"Limpar\">\n";
        }

        if ($botaoLimpar && $botaoCadastrar)
            $strRetorno .= "&nbsp;";

        if ($botaoCadastrar) {

            $label = "Carregar Lista";

            if ($isEdicao)
                $label = "Editar";

            $strRetorno .= "\t\t\t\t<input id=\"botao_ok\" class=\"botoes_form\" type=\"button\" value=\"$label\" onclick=\"javascript:carregarAjaxAtual(false);\">\n";
        }


        $strRetorno .= "\t\t\t</td>\n";
        $strRetorno .= "\t\t</tr>\n";
        $strRetorno .= "\t</table>\n";

        return $strRetorno;
    }

    public static function imprimirBotoesList($botaoLimpar=true, $botaoPesquisar=true, $labelAlternativo=false) {

        $strRetorno = "\t<table class=\"table_botoes_filter\">";
        $strRetorno .= "\t\t<tr class=\"tr_botoes_form\">";
        $strRetorno .= "\t\t\t<td class=\"td_botoes_form\">";

        if ($botaoLimpar) {

            $strRetorno .= "<input class=\"botoes_form\" type=\"reset\" value=\"Limpar\">";
        }

        if ($botaoLimpar && $botaoPesquisar)
            $strRetorno .= "&nbsp;";

        if ($botaoPesquisar) {

            if ($labelAlternativo) {

                $label = $labelAlternativo;
            } else {

                $label = "Pesquisar";
            }

            $strRetorno .= "<input class=\"botoes_form\" type=\"submit\" value=\"{$label}\">";
        }


        $strRetorno .= "\t\t\t</td>";
        $strRetorno .= "\t\t</tr>";
        $strRetorno .= "\t</table>";

        return $strRetorno;
    }

    public static function getUrlAction($actionPar, $id="") {

        $posInicial = 0;

        if (substr_count($actionPar, "ajax")) {

            $posInicial = strpos($actionPar, "ajax") + 5;

            $action = substr($actionPar, 0, strpos($actionPar, "ajax") + 4);
            $page = substr($actionPar, $posInicial);
        } else {

            $action = substr($actionPar, 0, strpos($actionPar, "_"));
            $page = substr($actionPar, $posInicial + strpos($actionPar, "_") + 1);
        }

        if ($action == "add") {

            $strRet = "index.php?tipo=forms&page=$page";
        } elseif ($action == "add_ajax") {

            $strRet = "index.php?tipo=ajax_pages&page=$page";
        } elseif ($action == "edit") {

            $strRet = "index.php?tipo=forms&page=$page&id1=$id";
        } elseif ($action == "edit_ajax") {

            $strRet = "index.php?tipo=ajax_pages&page=$page&id1=$id";
        } elseif ($action == "list") {

            if (isset($_POST["url_origem"])) {

                $strRet = self::getUrlDecodificada(self::POST("url_origem"));
            } else {

                $strRet = "index.php?tipo=lists&page=$page";
            }
        } else {

            $strRet = "index.php?tipo=$action&page=$page";
        }

        return $strRet;
    }

    public static function apagarArquivo($pathApartirDaRaiz) {

        if (file_exists($pathApartirDaRaiz)) {

            unlink($pathApartirDaRaiz);
        }
    }

    public static function verificarUploadArquivo($nomeCampo) {

        if ($_FILES[$nomeCampo]["tmp_name"] != "") {

            return true;
        }

        return false;
    }

    public static function getTipoCampo($campo) {

        if (strpos($campo, "_DATETIME") !== false) {

            return "DATETIME";
        } elseif (strpos($campo, "_DATE") !== false) {

            return "DATE";
        } elseif (strpos($campo, "_FLOAT") !== false) {

            return "FLOAT";
        } elseif (strpos($campo, "_INT") !== false) {

            return "INT";
        } elseif (strpos($campo, "_BOOLEAN") !== false) {

            return "BOOLEAN";
        } elseif (strpos($campo, "_IMAGEM") !== false) {

            return "IMAGEM";
        } elseif (strpos($campo, "_ARQUIVO") !== false) {

            return "ARQUIVO";
        } elseif (strpos($campo, "cpf") !== false) {

            return "CPF";
        } elseif (strpos($campo, "cnpj") !== false) {

            return "CNPJ";
        } elseif (strpos($campo, "cep") !== false) {

            return "CEP";
        } elseif (strpos($campo, "email") !== false) {

            return "EMAIL";
        } elseif (strpos(strtolower($campo), "telefone") !== false || strpos(strtolower($campo), "celular"
                        || substr(strtolower($campo), strlen($campo) - 3, strlen($campo)) == "tel")) {

            return "TELEFONE";
        } else {

            return "TEXTO";
        }
    }

    public static function getLimitesRegsPaginacao($regsPagina) {

        $pagAtual = self::getPaginaAtual();
        $primeiroReg = ($pagAtual - 1) * $regsPagina;

        return array($primeiroReg, $regsPagina);
    }

    public static function getNumeroPaginas($regsPagina, $regsTotal) {

        return ceil($regsTotal / $regsPagina);
    }

    public static function getPaginaAtual() {

        if (self::GET("pagina")) {

            $pagina = self::GET("pagina");
        } else {

            $pagina = 1;
        }

        return $pagina;
    }

    public static function isNull($valor) {

        if ($valor == "null" || trim($valor) == "" || $valor == null || $valor == "'null'")
            return true;
        else
            return false;
    }

    public static function getArrayComIntervaloNumerico($inicio=1, $fim=100) {

        $arrRetorno = array();

        for ($i = $inicio; $i <= $fim; $i++) {

            $arrRetorno[$i] = $i;
        }

        return $arrRetorno;
    }

    public static function getOptionsIntervaloNumerico($inicio=1, $fim=100, $selecionado=false) {

        $strRetorno .= "<option value=\"\"></option>\n";

        for ($i = $inicio; $i <= $fim; $i++) {

            $selected = ($selecionado != false && $i == $selecionado) ? "selected=\"selected\"" : "";

            $strRetorno .= "<option $selected value=\"$i\">$i</option>\n";
        }

        return $strRetorno;
    }

    public static function getNomeDoArquivoEmPathCompleto($path) {

        $inicioArquivo = strrpos($path, "/");
        $arquivo = substr($path, $inicioArquivo);
        $arquivo = str_replace("/", "", $arquivo);

        return $arquivo;
    }

    public static function getUltimoIndiceComValorNaoNulo($array) {

        $i = 0;

        for ($i = count($array) - 1; $i >= 0; $i--) {

            if ($array[$i] != 0) {

                break;
            }
        }

        return $i;
    }

    public static function getSubconjuntoNaoNuloDoArray($array) {

        $ultimoIndex = self::getUltimoIndiceComValorNaoNulo($array);

        return array_slice($array, 0, $ultimoIndex + 1, true);
    }

    public static function formatarDataGraficoParaExibicao($data) {

        $partes = explode(" ", $data);

        $ano = $partes[0];
        $mes = $partes[1];

        $mes = self::getAbreviacaoMes($mes);

        return "{$mes}/{$ano}";
    }

    public static function getStringComPrimeirasLetrasDasPalavrasUC($string) {

        $arrExcessoes = array(" e ", " de ", " da ", " do ", " das ", " dos ", "III", "II");

        $arrUCExcessoes = array(" E ", " De ", " Da ", " Do ", " Das ", " Dos ", "Iii", "Ii");

        $string = ucwords(mb_strtolower($string));

        $string = str_replace($arrUCExcessoes, $arrExcessoes, $string);

        return $string;
    }

    public static function getAbreviacaoMes($mesNumerico) {

        if (!is_numeric($mesNumerico))
            return "";


        $mes = $mesNumerico + 0;
        $mesRetorno = "";

        switch ($mes) {

            case 1:
                $mesRetorno = "Jan";
                break;
            case 2:
                $mesRetorno = "Fev";
                break;
            case 3:
                $mesRetorno = "Mar";
                break;
            case 4:
                $mesRetorno = "Abr";
                break;
            case 5:
                $mesRetorno = "Mai";
                break;
            case 6:
                $mesRetorno = "Jun";
                break;
            case 7:
                $mesRetorno = "Jul";
                break;
            case 8:
                $mesRetorno = "Ago";
                break;
            case 9:
                $mesRetorno = "Set";
                break;
            case 10:
                $mesRetorno = "Out";
                break;
            case 11:
                $mesRetorno = "Nov";
                break;
            case 12:
                $mesRetorno = "Dez";
                break;
            default:
                $mesRetorno = "";
                break;
        }

        return $mesRetorno;
    }

    public static function getActionParaExibicao($action) {

        switch ($action) {

            case "add":
                $retorno = "Adi��o de Registro";
                break;
            case "add_ajax":
                $retorno = "Adi��o de Multiplos Registros";
                break;
            case "edit":
                $retorno = "Edi��o de Registro";
                break;
            case "edit_ajax":
                $retorno = "Edi��o de Multiplos Registros";
                break;
            case "remove":
                $retorno = "Remo��o de Registro";
                break;
            case "login":
                $retorno = "Login do Sistema";
                break;
            case "logout":
                $retorno = "Logout do Sistema";
                break;
            default:
                $retorno = $action;
        }

        return $retorno;
    }
    
    public static function getResultSetToArrayDeUmCampo($resultSet) {

        if (mysqli_num_rows($resultSet) > 0) {
            
            mysqli_data_seek($resultSet, 0);
        }

        $arrayRetorno = array();

        for ($i = 0; $registro = mysqli_fetch_array($resultSet); $i++) {

            $indice = $i;

            $arrayRetorno[$indice] = $registro[0];
        }
        

        return $arrayRetorno;
    }
    public static function getResultSetToLista($resultSet, $colunaIndiceDoResultSet){
        
        $matriz = self::getResultSetToMatriz($resultSet, 0, 1, $colunaIndiceDoResultSet);
        
        $listaRetorno = array();
        
        for($i=0; $i < count($matriz); $i++){
            
            $listaRetorno[$matriz[$i][0]] = $matriz[$i][0];
            
        }
        
        return $listaRetorno;
        
    }

    public static function getResultSetToMatriz($resultSet, $assoc=1, $num=1, $colunaIndiceDoResultSet=false) {

        if(!function_exists("mysqli_connect")){
        
            if (mysql_num_rows($resultSet) > 0) {

                mysql_data_seek($resultSet, 0);
                
            }
        
        }
        else{
            
            if (mysqli_num_rows($resultSet) > 0) {

                mysqli_data_seek($resultSet, 0);
                
            }
            
        }

        if ($assoc && !$num)
            $constante = MYSQL_ASSOC;

        elseif (!$assoc && $num)
            $constante = MYSQL_NUM;

        elseif ($assoc && $num)
            $constante = MYSQL_BOTH;

        $arrayRetorno = array();

        if(!function_exists("mysqli_connect")){
            
            for ($i = 0; $registro = mysql_fetch_array($resultSet, $constante); $i++) {

                if ($colunaIndiceDoResultSet) {

                    $indice = $registro[$colunaIndiceDoResultSet];
                } else {

                    $indice = $i;
                }

                $arrayRetorno[$indice] = $registro;
            }
            
        }
        else{
            
            for ($i = 0; $registro = mysqli_fetch_array($resultSet, $constante); $i++) {

                if ($colunaIndiceDoResultSet) {

                    $indice = $registro[$colunaIndiceDoResultSet];
                } else {

                    $indice = $i;
                }

                $arrayRetorno[$indice] = $registro;
            }            
            
        }
        
        

        return $arrayRetorno;
    }

    public static function getMatrizLinearToArray($matriz) {

        $retorno = array();

        for ($i = 0; $i < count($matriz); $i++) {

            $retorno[] = $matriz[$i][0];
        }

        return $retorno;
    }

    public static function somarValoresComAMesmaChaveDeDoisArrays($array1, $array2) {

        $arrResult = array_merge($array1, $array2);

        for ($i = 0; $i < count($arrResult); $i++) {

            $arrResult[$i] = 0;
        }

        foreach ($arrResult as $chave => $valor) {

            $valor1 = 0;
            $valor2 = 0;

            if (isset($array1[$chave]))
                $valor1 = $array1[$chave];

            if (isset($array2[$chave]))
                $valor2 = $array2[$chave];

            $arrResult[$chave] = $valor1 + $valor2;
        }
    }

    public static function getArrayComTodosOsValoresIguais($numeroPosicoes, $valor) {

        $arrRetorno = array();

        for ($i = 0; $i < $numeroPosicoes; $i++) {

            $arrRetorno[] = $valor;
        }

        return $arrRetorno;
    }

    public static function appendResultSetToArray($array, $resultSet, $assoc=1, $num=1) {

        if ($assoc && !$num)
            $constante = MYSQL_ASSOC;

        elseif (!$assoc && $num)
            $constante = MYSQL_NUM;

        elseif ($assoc && $num)
            $constante = MYSQL_BOTH;

        $arrayRetorno = $array;

        for ($i = count($array); $registro = mysqli_fetch_array($resultSet, $constante); $i++) {

            $arrayRetorno[$i] = $registro;
        }

        return $arrayRetorno;
    }

    public static function appendArrayToArray($arrayMenor, $arrayRetorno) {

        $j = 0;

        if (count($arrayMenor) == 0)
            return $arrayRetorno;

        $condicao = count($arrayRetorno) + count($arrayMenor);

        for ($i = count($arrayRetorno); $i < $condicao; $i++) {

            $arrayRetorno[$i] = $arrayMenor[$j];
            $j++;
        }

        return $arrayRetorno;
    }

    public static function getCabecalhoDeFieldsetDeExpansao($idComponente, $idNivel, $titulo, $estadoInicial = INVISIVEL, $funcaoExpansao = "") {

        $imagemCliqueParaExpandir = "imgs/padrao/expandir.png";
        $imagemCliqueParaEsconder = "imgs/padrao/esconder.png";

        if ($estadoInicial == VISIVEL) {

            $classPadrao = "div_expansao_visivel";
            $imagemPadrao = $imagemCliqueParaEsconder;
            $borderPadrao = "1px;";
        } else {

            $classPadrao = "div_expansao_invisivel";
            $imagemPadrao = $imagemCliqueParaExpandir;
            $borderPadrao = "0px;";
        }

        $strRetorno .= "<fieldset id=\"fieldset_{$idComponente}\" class=\"fieldset_expansao\" style=\"border-width: {$borderPadrao}\">
        					<legend class=\"legend_expansao\">

        						<a href=\"javascript:void(0)\" class=\"link_vermelho\" id=\"link_$idComponente\"
        						   onclick=\"javascript:alterarVisibilidadeDiv(new Array('{$idComponente}'), 'div_expansao_visivel', 'div_expansao_invisivel', 'imagem_{$idComponente}', '{$imagemCliqueParaExpandir}', '{$imagemCliqueParaEsconder}', 'fieldset_{$idComponente}');
        						   if(document.getElementById('ajax_carregado_{$idComponente}').value == '0'){ $funcaoExpansao } \">
            					<img src=\"{$imagemPadrao}\" border=\"0\" id=\"imagem_{$idComponente}\"
            				    style=\"cursor: pointer;\" />
                                {$titulo}
                                </a>

                            </legend>
        				";

        $strRetorno .= "<input type=\"hidden\" id=\"ajax_carregado_{$idComponente}\" value=\"0\">";

        $strRetorno .= "<div id=\"{$idComponente}\" class=\"{$classPadrao}\">";

        return $strRetorno;
    }

    public static function getRodapeDeFieldsetDeExpansao() {

        $strRetorno .= "</div>";
        $strRetorno .= "</fieldset>";

        return $strRetorno;
    }

    public static function removerOsUltimosCaracteresDaString($string, $numeroCaracteres=1) {

        return substr($string, 0, strlen($string) - ($numeroCaracteres));
    }

    public static function removerOsPrimeirosCaracteresDaString($string, $numeroCaracteres=1) {

        return substr($string, $numeroCaracteres, strlen($string) - ($numeroCaracteres));
    }

    public static function formatarCampoTextoHTMLParaSQL($string) {

        return htmlentities($string, ENT_QUOTES);
    }

    public static function formatarFloatParaComandoSQL($numero) {

        $numero = trim($numero);

        if ($numero == "" || $numero == null)
            return "null";

        if (substr_count($numero, ",") > 0) {

            $retorno = str_replace(".", "", $numero);
            $retorno = str_replace(",", ".", $retorno);
        } else {
            
            if(substr_count($numero, ".") == 0 && is_numeric($numero)){
                
                $numero = "{$numero}.00";
                
            }

            $retorno = $numero;
        }

        return $retorno;
    }

    public static function formatarFloatParaExibicao($numero, $casasDecimais=2) {

        if (trim($numero) == "" || $numero == null)
            return "";
        
        if(substr_count($numero, ",") > 0){
            
            return $numero;
            
        }
        else{

            return number_format($numero, $casasDecimais, ',', '.');
    
        }
        
    }

    public static function formatarDataParaComandoSQL($valor) {

        if ($valor == "null" || trim($valor) == "") {

            return "null";
            
        } else {

            if (substr_count($valor, "/") == 2) {

                $partes = explode("/", $valor);
                $retorno = "'" . $partes[2] . "-" . $partes[1] . "-" . $partes[0] . "'";

                return $retorno;
                
            }
            elseif (substr_count($valor, "/") == 1) {

                $partes = explode("/", $valor);

                if (strlen($partes[1]) == 2) {

                    if ($partes[1] <= 99) {

                        $partes[1] = "20{$partes[1]}";
                    } else {

                        $partes[1] = "19{$partes[1]}";
                    }
                }

                $retorno = "'" . $partes[1] . "-" . $partes[0] . "-01'";

                return $retorno;
                
            }
            elseif (substr_count($valor, "-") > 0) {

                $valor = str_replace("'", "", $valor);

                return "'{$valor}'";
                
            }
            elseif (substr_count($valor, "/") == 0 && strlen($valor) > 0) {

                $retorno = "'" . $valor . "-01-01'";

                return $retorno;
                
            }
        }

        return "null";
    }

    public static function formatarDataParaExibicao($valor) {

        if ($valor == "null" || trim($valor) == "") {

            return "";
            
        } else {

            if (substr_count($valor, "-") > 0) {
                
                if(strlen($valor) == 19){
                    
                    $valor = substr($valor, 0, 10);
                    
                }

                $partes = explode("-", $valor);
                $retorno = $partes[2] . "/" . $partes[1] . "/" . $partes[0];

                return $retorno;
            }
        }

        return "";
    }

    public static function formatarHoraParaComandoSQL($valor) {

        if ($valor == "null" || trim($valor) == "") {

            return "null";
        } elseif (strlen($valor) == 5) {

            return "'{$valor}:00'";
        } elseif (strlen($valor) == 8) {

            return "'$valor'";
        } else {

            return $valor;
        }
    }

    public static function formatarHoraParaExibicao($valor) {

        if ($valor == "null" || trim($valor) == "") {

            return "";
        } elseif (strlen($valor) == 8) {

            $valor = self::removerOsUltimosCaracteresDaString($valor, 3);
            return $valor;
        } elseif (strlen($valor) == 5) {

            return $valor;
        } else {

            return "";
        }
    }

    public static function formatarDataTimeParaComandoSQL($valor) {
        
        $valor = str_replace("'", "", $valor);
        
        if($valor == "null" || trim($valor) == "") {

            return "null";
            
        }
        elseif(substr_count($valor, "/") == 2 && substr_count($valor, ":") == 2) {

            $date = substr($valor, 0, 10);
            $hora = substr($valor, 11, 8);

            $partes = explode("/", $date);
            $date = $partes[2] . "-" . $partes[1] . "-" . $partes[0];

            return "'" . $date . " " . $hora . "'";
            
        }
        elseif(substr_count($valor, "-") == 2 && substr_count($valor, ":") == 2) {

            return "'{$valor}'";
            
        }        
        elseif(is_numeric($valor)) {

            $retorno = date("'Y-m-d H:i:s'", $valor);

            return $retorno;
            
        }
        else{
            
            return "null";
            
        }
        
    }

    public static function formatarDataTimeParaExibicao($valor) {

        if ($valor == "null" || trim($valor) == "") {

            return "";
        } elseif (substr_count($valor, "-") > 0) {

            $retorno = substr($valor, 8, 2) . "/" . substr($valor, 5, 2) . "/" . substr($valor, 0, 4) . " " . substr($valor, 11, 8);

            return $retorno;
        }

        return "";
    }

    public static function imprimirMensagemNaoFormatada($mensagem) {

        print str_replace("\n", "<br />", $mensagem) . "<br />";
    }

    public static function getRadioList($nome, $arrayDeChavesEValores, $valorSelecionado, $arrayInativos=false) {

        foreach ($arrayDeChavesEValores as $chave => $valor) {

            if (is_array($arrayInativos) && in_array($chave, $arrayInativos)) {

                $complemento = "disabled=\"disabled\"";
            } else {

                $complemento = "";
            }

            $strRetorno .= "\t\t\t<input type=\"radio\" name=\"{$nome}\" id=\"{$nome}\" value=\"{$chave}\" " . (($chave == $valorSelecionado) ? "checked" : "") . " {$complemento}/>{$valor}\n&nbsp;&nbsp;";
        }

        return $strRetorno;
    }

    public static function getLinguaPadrao($deflang = LINGUA_PADRAO) {

        if ($deflang)
            return $deflang;

        $http_accept = $_SERVER["HTTP_ACCEPT_LANGUAGE"];

        if (isset($http_accept) && strlen($http_accept) > 1) {

            $x = explode(",", $http_accept);

            foreach ($x as $val) {

                if (preg_match("/(.*);q=([0-1]{0,1}\.\d{0,4})/i", $val, $matches))
                    $lang[$matches[1]] = (float) $matches[2];
                else
                    $lang[$val] = 1.0;
            }

            $qval = 0.0;
            foreach ($lang as $key => $value) {

                if ($value > $qval) {
                    $qval = (float) $value;
                    $deflang = $key;
                }
            }
        }

        return strtolower($deflang);
    }

    public static $arrayDeCores = array('14C079', 'EBE37D', 'AAD6DF', '86F24E', 'C3BEE5', 'EAB19D', 'EEEDFF', 'F17A6A', '80A4F6');
    public static $contadorNoArrayDeCores = 0;

    public static function getCorDoArrayGlobal() {

        if (self::$contadorNoArrayDeCores >= count(self::$arrayDeCores)) {

            self::$contadorNoArrayDeCores = 0;
        }

        $retorno = self::$arrayDeCores[self::$contadorNoArrayDeCores];
        self::$contadorNoArrayDeCores++;

        return $retorno;
    }

    public static function getCorAleatoria() {

        mt_srand((double) microtime() * 1000000);
        $c = '';

        while (strlen($c) < 6) {

            $c .= sprintf("%02X", mt_rand(0, 255));
        }

        return $c;
    }

    public static function getEnderecoIPDoCliente() {

        return $_SERVER[REMOTE_ADDR];
    }

    public static function imprimirArquivoFonteFormatado($arquivoFonte, $incluirFieldset=true) {

        if ($incluirFieldset) {

            $identificador = rand(1, 1000);
            print self::getCabecalhoDeFieldsetDeExpansao("error_{$identificador}", "{$identificador}", "C�digo Fonte do Arquivo {$arquivoFonte}", INVISIVEL);
        }

        highlight_file($arquivoFonte);

        if ($incluirFieldset) {

            print self::getRodapeDeFieldsetDeExpansao();
        }
    }

    public static function getStringBacktrace($stringBacktrace) {

        if (MODO_DE_DEPURACAO && in_array(self::getEnderecoIPDoCliente(), Seguranca::getIPsAutorizadosNaDepuracao())) {

            return $stringBacktrace;
        } else {

            return "N�o dispon�vel";
        }
    }

    public static function getMDC($a, $b) {

        if ($b > $a)
            return self::getMDC($b, $a);
        if ($b == 0)
            return $a;
        return self::getMDC($b, $a % $b);
    }

    public static function getMDCdoArray($array) {

        if (count($array) < 1)
            return false;
        if (count($array) == 1)
            return $array[0];
        if ($array[0] == 1)
            return array(1);
        array_unshift($array, self::getMDC(array_shift($array), array_shift($array)));

        return self::getMDCdoArray($array);
    }

    public static function getBarraDeCoresPreferidas($idDoInput, $arrayDeCoresPreferidas) {

        foreach ($arrayDeCoresPreferidas as $valor) {

            $strRetorno .= "<input value=\"\" cor=\"{$valor}\" onclick=\"javascript: mudarCorDaPaleta('$idDoInput', this);\" type=\"button\" class=\"botao_de_selecao_de_cor\" style=\"background-color: #{$valor};\" />";
        }

        return $strRetorno;
    }

    public static function getVazio($valor) {

        return null;
    }
    
    public static function removerVariavelDaUrl($url, $nomeVariavel){
        
        $posicao = strrpos($url, "{$nomeVariavel}=");
        
        if($posicao !== false){
            
            $posicaoUltimaVariavel = strrpos($url, "&");
            
            if($posicaoUltimaVariavel > $posicao){
                
                $strRetorno = substr($url, 0, $posicao-1) . substr($url, $posicaoUltimaVariavel);
                
            }
            else{
                
                $strRetorno = substr($url, 0, $posicao-1);
                
            }
            
            return $strRetorno;
            
        }
        else{
            
            return $url;
            
        }
         
    }
    
    public function removerVariaveisDaUrl($url, $arrNomesVariaveis){
        
        foreach($arrNomesVariaveis as $nomeVariavel){
            
            $url = self::removerVariavelDaUrl($url, $nomeVariavel);
            
        }
        
        if(substr_count($url, "?") == 0){
            
            $url .= "?";
            
        }
        
        return $url;
        
    }
    
    public static function getUrlDeReferenciaSemVariaveisDeMensagem(){
        
        $urlReferencia  = $_SERVER["HTTP_REFERER"];
        
        return self::removerVariaveisDaUrl($urlReferencia, array("msgErro", "msgSucesso"));
        
    }
    
    public static function verificarEmail($email){

       $email = strtolower($email);

       if(eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)) {

           return 1;

       }
       else{

           return 0;

       }
                
    }
    
    public static function removerMascaraDeTelefone($telefone){
        
        $strRetorno = "";
        
        for($i=0; $i < strlen($telefone); $i++){
            
            $posicao = substr($telefone, $i, 1);
            
            if(is_numeric($posicao)){
                
                $strRetorno .= $posicao;
                
            }            
            
        }
        
        if(strlen($strRetorno) == 8){
            
            $strRetorno = PREFIXO_PADRAO_TELEFONE . $strRetorno;
            
        }
        elseif(strlen($strRetorno) != 10){
            
            $strRetorno = "";
            
        }
                
        return $strRetorno;
                
    }
        
    public static function removerCaracteresEspeciais($texto){
        
        $arrayCaracteresEspeciais = array("�", "�", "�", "�", "�", "�", "�", "�", "�");
        $arrayCaracteresAceitos =   array("a", "a", "a", "e", "i", "o", "o", "u", "c");
        
        $texto = str_replace($arrayCaracteresEspeciais, $arrayCaracteresAceitos, $texto);
        
        return $texto;
        
    }
    
    public static function getArrayComChaveEValorDasVariaveisDaURL($url){
        
        if(strlen($url)){
            
            $dadosURL = parse_url($url);
            
            if(isset($dadosURL["query"]) && strlen($dadosURL["query"])){
            
                parse_str($dadosURL["query"], $arrSaida);
                
                return $arrSaida;
            
            }
            else{
                
                return false;
                
            }
            
        }
        else{
            
            return false;
            
        }
        
    }

}

?>