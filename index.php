<meta charset="UTF-8">
<?php


/* ========================================================================================================================== */
/* =  Ikarus Webservice Widget Copyright 2014, isLogic                                                                      = */
/* =                                                                                                                        = */
/* =  Os arquivos "IkarusWidget.php", "IkarusWidget.php" e "IkarusWidget.php" devem estar na mesma pasta.                   = */
/* =                                                                                                                        = */
/* =                                                                                                                        = */
/* =  IkarusWidget::__construct($id, $key, $login, $password, $options);                                                    = */
/* =      -> $id, $key, $login, $password são os dados recebidos após a assinatura. Para usar nossa sandbox basta não       = */
/* =         alterar os valores originais do código.                                                                        = */
/* =      -> $options são as configurações básicas estão especificadas abaixo:                                              = */
/* =                                                                                                                        = */
/* =         $options = array(                                                                                              = */
/* =                                                                                                                        = */
/* =             "search_form_type"     => "GET",          // Tipo de envio dos dados.                                       = */
/* =                                                                                                                        = */
/* =             "search_form_location" => "",             // "" para mesma página ou "/sua_uri" para outra localização.     = */
/* =                                                                                                                        = */
/* =             "post_data_info"       => array(          // Após selecionar os voos da pesquisa o usuário poderá informar  = */
/* =                                         "passenger",  // os dados do passageiro e também seus dados. Você pode remover  = */
/* =                                         "buyer"       // ambos os dados para somente disponbilizar a pesquisa.          = */
/* =                                       ),                                                                               = */
/* =                                                                                                                        = */
/* =             "url_to_post_data"     => "/teste.php",   // Localização do post com os dados dos voos, passageiros, ou     = */
/* =                                                       // cliente.                                                       = */
/* =                                                                                                                        = */
/* =             "myappwebroot"         => "cloud"         // "cloud" para incluir js, css, e img do nosso servidor.         = */
/* =                                                       // "local" para usar localmente. Para o uso local você deverá     = */
/* =                                                       // copiar a pasta ikarus_widget para o webroot de sua aplicação.  = */
/* =         );                                                                                                             = */
/* =                                                                                                                        = */
/* =                                                                                                                        = */
/* =  O método IkarusWidget::searchForm() retorna a string do formulário de pesquisa que pode ser impressa em  qualquer     = */
/* =  ponto de seu código, dessa forma você pode escolher a localização do seu formulário de pesquisa.                      = */
/* =                                                                                                                        = */
/* =                                                                                                                        = */
/* =  O método IkarusWidget::resultTable() retorna a string com a tabelas para o resultado das pesquisa. Deverá ser         = */
/* =  impressa na pagina de destino da pesquisa obrigatoriamente. OBS: as tabelas não são retornadas caso não encontre os   = */
/* =  parâmetros da busca.                                                                                                  = */
/* =                                                                                                                        = */
/* =                                                                                                                        = */
/* =  Segue abaixo um exemplo de uso:                                                                                       = */
/* =                                                                                                                        = */
/* ========================================================================================================================== */

?>



<div align="center">
    <div style="width:40%;">

        <?php
        // incluir os arquivos abaixo:
        include "IkarusWidget.php";
        include "airports.php";
        include "programs.php";


        $login = "sandbox";
        $password = "Lnvcvhkf6UAcsO89g45x";
        $id = "san";
        $key = "9c541da9da4b9a55d9d273cc17ea6f36";

        $options = array(
            "search_form_type"     => "GET",
            "search_form_location" => "",

            "post_data_content"    => array("passenger", "buyer"),
            "url_to_post_data"     => "/teste.php",
            "myappwebroot"         => "local"
        );

        $ikarus = new IkarusWidget($id, $key, $login, $password, $programs, $airports, $options);
        $ikarus->widget();

        ?>

    </div>
</div>











