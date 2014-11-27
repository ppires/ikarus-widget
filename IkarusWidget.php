<?php

// Helper functions

function pp($obj)
{
    echo '<pre>';
    print_r($obj);
    echo '</pre>';
}

function puts($str)
{
    echo $str.'<br />';
}

error_reporting(E_ALL);
ini_set("display_errors", 2);






include dirname(__FILE__) . DIRECTORY_SEPARATOR . "IkarusAES.php";
include dirname(__FILE__) . DIRECTORY_SEPARATOR . "IkarusCrypt.php";

class IkarusWidget
{

    private $id;
    private $key;
    private $login;
    private $password;
    private $programs;
    private $airports;

    private $data;

    // variáveis passadas pelo cliente
    private $search_form_type;
    private $search_form_location;
    private $url_to_post_data;
    private $post_passenger_info;
    private $post_buyer_info;
    private $assets_url;

    public function __construct($id, $key, $login, $password, $programs, $airports, $options = array())
    {

        // pp($options);
        // pp($_POST);

        $this->id             = $id;
        $this->key            = $key;
        $this->login          = $login;
        $this->password       = $password;
        $this->airports       = $airports;
        $this->programs       = $programs;

        if(isset($options['search_form_type']))
            $this->search_form_type = strtolower($options['search_form_type']);
        else
            $this->search_form_type = 'post';

        if(isset($options['search_form_location']))
            $this->search_form_location = $options['search_form_location'];
        else
            $this->search_form_location = '';

        if(isset($options['post_data_info']))
        {
            $this->post_passenger_info = in_array('passenger', $options['post_data_info']);
            $this->post_buyer_info = in_array('buyer', $options['post_data_info']);
        }
        else
        {
            $this->post_passenger_info = false;
            $this->post_buyer_info = false;
        }

        if(isset($options['url_to_post_data']))
            $this->url_to_post_data = $options['url_to_post_data'];
        else
            $this->url_to_post_data = $this->search_form_location;

        if(isset($options['myappwebroot']) && $options['myappwebroot'] == 'cloud')
            $this->assets_url = $this->CdnAssetsUrl();
        else
            $this->assets_url = '/ikarus_widget';
            
            echo $this->assets_url;


        echo $this->configJs();
    }



    private function configJs()
    {
        $html = $this->assets();
        $html .= '
            <script>
                var IkarusJQuery = jQuery.noConflict(true);

                IkarusJQuery(document).ready(function(){
                    ikarusWidgetJs.addDatepickers();
                    ikarusWidgetJs.setAssetsUrl("'. $this->assets_url .'");
                });
            </script>';

        return $html;
    }


    private function assets()
    {
        $assets = "
            <link rel='stylesheet' type='text/css' href='{$this->assets_url}/css/jquery_ui/ikarus_widget_jquery.ui.1.10.0.ie.min.css' />
            <link rel='stylesheet' type='text/css' href='{$this->assets_url}/css/jquery_ui/ikarus_widget_jquery.ui-1.10.0.custom.min.css' />
            <link rel='stylesheet' type='text/css' href='{$this->assets_url}/css/plugins/select2/ikarus_widget_select2.min.css' />

            <link rel='stylesheet' type='text/css' href='{$this->assets_url}/css/bootstrap/ikarus_widget_bootstrap.min.css' />
            <link rel='stylesheet' type='text/css' href='{$this->assets_url}/css/bootstrap/ikarus_widget_bootstrap-responsive.min.css' />

            <script src='{$this->assets_url}/js/jquery/ikarus_widget_jquery.min.js'></script>
            <script src='{$this->assets_url}/js/jquery_ui/ikarus_widget_jquery-ui.min.js'></script>
            <script src='{$this->assets_url}/js/plugins/select2/ikarus_widget_select2.min.js'></script>

            <script src='{$this->assets_url}/js/ikarus_widget_accounting.min.js'></script>
            <script src='{$this->assets_url}/js/ikarus_widget_jquery.maskedinput.min.js'></script>


            <script src='{$this->assets_url}/js/ikarus-widget.min.js'></script>";
         // <script src='{$this->assets_url}/js/ikarus-widget.min.js'></script>

        return $assets;
    }




    public function widget()
    {
        echo $this->searchForm();

        if(isset($_POST["ikarusData"]) || isset($_GET["ikarusData"]))
        {
            if(isset($_POST["ikarusData"])) $this->data = $_POST["ikarusData"];
            if(isset($_GET["ikarusData"]))  $this->data = $_GET["ikarusData"];
            if ($this->validateParams())
            {
                echo $this->resultTable();
                echo $this->executeSearch();
            }
            else
                $this->data = null;
        }
    }



    public function searchForm()
    {
        if(!empty($this->data))
        {
            pp($this->data);

            if($this->data['trip'] == 'O')
                $str_hide_back_date = ' style="display: none;" ';
        }
        else $str_hide_back_date = "";

        $str_form = '
            <form name="IkarusWidgetSearch" method="'. $this->search_form_type .'" action="'. $this->search_form_location .'">
                <div class="ikarus_widget_container-fluid">
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span3">
                            <select id="ikarusDataTrip" name="ikarusData[trip]" onchange="ikarusWidgetJs.onChangeTrip();" class="ikarus_widget_span12 ikarus_widget_trip_input" placeholder="Origem">
                                <option value="R">Ida e Volta</option>
                                <option value="O">Somente Ida</option>
                            </select>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span6">
                            <select id="ikarusDataFrom" name="ikarusData[from]" placeholder="Origem" class="ikarus_widget_span12 ikarus_widget_airport_input">
                                <option value=""></option>';

        foreach ($this->airports as $acronym => $airport) :
            $str_form .= '
                                <option value="'. $acronym .'">'. $airport['name'] .'</option>';
        endforeach;

        $str_form .= '
                            </select>
                        </div>
                        <div class="ikarus_widget_span6">
                            <select id="ikarusDataTo" name="ikarusData[to]" placeholder="Destino" class="ikarus_widget_span12 ikarus_widget_airport_input">
                                <option value=""></option>';

        foreach ($this->airports as $acronym => $airport) :
            $str_form .= '
                                <option value="'. $acronym .'">'. $airport['name'] .'</option>';
        endforeach;

        $str_form .= '
                            </select>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span6">
                            <input id="ikarusDataDepartureDate" name="ikarusData[departureDate]" placeholder="Ida" class="ikarus_widget_date_input"></input>
                        </div>
                        <div id="ikarusDataBackDateDiv" class="ikarus_widget_span6"'. $str_hide_back_date .'>
                            <input id="ikarusDataBackDate" name="ikarusData[backDate]" placeholder="Volta" class="ikarus_widget_date_input"></input>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span4">
                            <select id="ikarusDataAdults" name="ikarusData[adults]" placeholder="Adultos" class="ikarus_widget_passenger_input">
                                <option value="1">1 adulto</option>
                                <option value="2">2 adultos</option>
                                <option value="3">3 adultos</option>
                                <option value="4">4 adultos</option>
                                <option value="5">5 adultos</option>
                                <option value="6">6 adultos</option>
                                <option value="7">7 adultos</option>
                                <option value="8">8 adultos</option>
                                <option value="9">9 adultos</option>
                            </select>
                        </div>
                        <div class="ikarus_widget_span4">
                            <select id="ikarusDataChildren" name="ikarusData[children]" placeholder="Crian&#231;as" class="ikarus_widget_passenger_input">
                                <option value="0">0 crian&#231;as</option>
                                <option value="1">1 crian&#231;a</option>
                                <option value="2">2 crian&#231;as</option>
                                <option value="3">3 crian&#231;as</option>
                                <option value="4">4 crian&#231;as</option>
                                <option value="5">5 crian&#231;as</option>
                                <option value="6">6 crian&#231;as</option>
                                <option value="7">7 crian&#231;as</option>
                                <option value="8">8 crian&#231;as</option>
                                <option value="9">9 crian&#231;as</option>
                            </select>
                        </div>
                        <div class="ikarus_widget_span4">
                            <select id="ikarusDataBabies" name="ikarusData[babies]" placeholder="Beb&#234;s" class="ikarus_widget_passenger_input">
                                <option value="0">0 beb&#234;s</option>
                                <option value="1">1 beb&#234;</option>
                                <option value="2">2 beb&#234;s</option>
                                <option value="3">3 beb&#234;s</option>
                                <option value="4">4 beb&#234;s</option>
                                <option value="5">5 beb&#234;s</option>
                                <option value="6">6 beb&#234;s</option>
                                <option value="7">7 beb&#234;s</option>
                                <option value="8">8 beb&#234;s</option>
                                <option value="9">9 beb&#234;s</option>
                            </select>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <input type="submit" value="Pesquisar" id="ikarusDataSearch" class="ikarus_widget_btn_input">
                        </div>
                    </div>
                </div>
            </form>';
        return $str_form;
    }



    private function resultTable()
    {
        $resultTable = '
            <div class="ikarus_widget_continer-fluid">
                <div class="ikarus_widget_row-fluid">
                    <div class="ikarus_widget_span12">
                        <table class="ikarus_widget_table" style="margin-bottom:0; font-size: 13px" width="100%">
                            <thead>
                                <tr>
                                    <th colspan="10">
                                        <table id="delete_loaders_ida" width="100%">
                                            <tr id="validaVooIdaTabela" style="display: none;">
                                                <th colspan="10" style=" color: #F54519;"> Por favor selecione seu voo de Ida. </th>
                                            </tr>
                                            <tr id="verifica_loaders_ida">';
        foreach ($this->programs as $hash => $info) :
            if ($info['activated_sell'] == '1')
            {
                $resultTable .= '
                                                <td id="ida_'. $hash .'_searchLoader" align="center" style="text-align: center;">
                                                    <img src="'. $this->assets_url .'/images/'. $hash .'_ativo.png">
                                                    <br />
                                                    <img src="'. $this->assets_url .'/images/loading_'. $hash .'.gif">
                                                </td>';
            }
        endforeach;
        $resultTable .=     '
                                            </tr>
                                        </table>
                                    </th>
                                </tr>
                                <tr style="background-color: #eee;">
                                    <th style="text-align: center;">
                                        x
                                    </th>
                                    <th style="text-align: center;">
                                        Cia
                                    </th>
                                    <th style="text-align: center;">
                                        nº
                                    </th>
                                    <th style="text-align: center;">
                                        Paradas
                                    </th>
                                    <th style="text-align: center;">
                                        Partida
                                    </th>
                                    <th style="text-align: center;">
                                        Chegada
                                    </th>
                                    <th style="text-align: center;">
                                        na Cia
                                    </th>
                                    <th style="text-align: center;">
                                        em Milhas
                                    </th>
                                    <th style="text-align: center;">
                                        na BDS
                                    </th>
                                    <th style="text-align: center;">
                                        Info.
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="ikarus_widget_tabela-ida">
                            </tbody>
                        </table>';

        if ($this->data['trip'] == "R")
        {
            $resultTable .= '
                        <table data="" style="padding-top: 100px; margin-bottom:0; font-size: 13px" width="100%">
                            <thead>
                                <tr>
                                    <th colspan="10" style=" color: #F54519;"> Por favor selecione seu voo de Ida. </th>
                                </tr>
                                <tr>
                                    <th colspan="10">
                                        <table id="delete_loaders_ida" width="100%">
                                            <tr>';
            foreach ($this->programs as $hash => $info) :
                if ($info['activated_sell'] == '1')
                {
                    $resultTable .= '
                                                <td id="volta_'. $hash .'_searchLoader" align="center" style="text-align: center;">
                                                    <img src="'. $this->assets_url .'/images/'. $hash .'_ativo.png">
                                                    <br />
                                                    <img src="'. $this->assets_url .'/images/loading_'. $hash .'.gif">
                                                </td>';
                }
            endforeach;
            $resultTable .=     '
                                            </tr>
                                        </table>
                                    </th>
                                </tr>
                                <tr style="background-color: #eee;">
                                    <th style="text-align: center;">
                                        x
                                    </th>
                                    <th style="text-align: center;">
                                        Cia
                                    </th>
                                    <th style="text-align: center;">
                                        nº
                                    </th>
                                    <th style="text-align: center;">
                                        Paradas
                                    </th>
                                    <th style="text-align: center;">
                                        Partida
                                    </th>
                                    <th style="text-align: center;">
                                        Chegada
                                    </th>
                                    <th style="text-align: center;">
                                        na Cia
                                    </th>
                                    <th style="text-align: center;">
                                        em Milhas
                                    </th>
                                    <th style="text-align: center;">
                                        na BDS
                                    </th>
                                    <th style="text-align: center;">
                                        Info.
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="ikarus_widget_tabela-volta">
                            </tbody>
                        </table>';
        }

        $resultTable .= '
                    </div>
                </div>';

        $resultTable .= $this->passengerForms();

        $resultTable .= '
            </div>';

        return $resultTable;
    }



    private function passengerForms()
    {
        $forms = '';

        if ($this->post_passenger_info)
        {
            $forms .= '
                <form name="IkarusWidgetPassengers" class="validate-form" method="post" action="'. $this->url_to_post_data .'" onsubmit=\'return ikarusWidgetJs.validatePassengerForms('. json_encode($this->data) .')\'>
                    <div class="ikarus_widget_row-fluid">';

            $counter = 0;
            for ($i = 1; $i <= $this->data['adults']; $i++)
            {
                $forms .= $this->adultForm($i, $counter);
                $counter++;
                if ($counter % 3 == 0)
                {
                    $forms .= '
                    </div>
                    <div class="ikarus_widget_row-fluid">';
                }
            }

            for ($i = 1; $i <= $this->data['children']; $i++)
            {
                $forms .= $this->childForm($i, $counter);
                $counter++;
                if ($counter % 3 == 0)
                {
                    $forms .= '
                    </div>
                    <div class="ikarus_widget_row-fluid">';
                }
            }

            for ($i = 1; $i <= $this->data['babies']; $i++)
            {
                $forms .= $this->babyForm($i, $counter);
                $counter++;
                if ($counter % 3 == 0)
                {
                    $forms .= '
                    </div>
                    <div class="ikarus_widget_row-fluid">';
                }
            }
            $forms .= '
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12" align="center">
                            <input type="submit" value="Enviar dados" class="ikarus_widget_btn_input" style="float: none;">
                        </div>
                    </div>
                </form>';
            $forms .= $this->formsInputMasks();
        }

        if ($this->post_buyer_info)
        {
            // Adicionar aqui forms do comprador

            // nome
            // telefone
            // email de contato
        }

        return $forms;
    }



    private function formsInputMasks()
    {
        $script = '
            <script>
                IkarusJQuery("input.birthDateInput").mask("99/99/9999");
                IkarusJQuery("input.cpfcnpj").mask("999.999.999-99");
            </script>';

        return $script;
    }



    private function adultForm($number, $counter)
    {
        $form = '
            <div class="ikarus_widget_span4">
                <div class="ikarus_widget_container-fluid">
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <h1 style="text-align: center; font-size: 23px;">Passageiro Adulto '. $number .'</h1>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Nome Completo: <b style="color: #FF0000; font-size:15px;">*</b></label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Name" name="data[Passenger]['. $counter .'][name]" class="ikarus_widget_span4" data-rule-completename="true" data-rule-required="true" maxlength="400" style="width: 100%;" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Data de Nascimento: <b style="color: #FF0000; font-size:15px;">*</b></label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Birthday" name="data[Passenger]['. $counter .'][birthday]" class="ikarus_widget_span4 birthDateInput" data-rule-idadeadulta="true" data-rule-required="true" style="width: 100%;" type="text" placeholder="dd/mm/aaaa" typePassenger="adult">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span5">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Documento: </label>
                                <div class="ikarus_widget_controls">
                                    <select id="Passenger'. $counter .'Ssntype" name="data[Passenger]['. $counter .'][ssntype]" class="ikarus_widget_span5" onchange="ikarusWidgetJs.documentoMask(this, \''. $counter .'\')" style="width: 100%;">
                                        <option value="CPF">CPF</option>
                                        <option value="RG">RG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ikarus_widget_span7">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">&nbsp;</label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Ssn" name="data[Passenger]['. $counter .'][ssn]" class="ikarus_widget_span7 cpfcnpj" style="width: 100%;" maxlength="50" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- ikarus_widget_container-fluid -->
            </div><!-- ikarus_widget_span4 -->';

        return $form;
    }

    private function childForm($number, $counter)
    {
        $form = '
            <div class="ikarus_widget_span4">
                <div class="ikarus_widget_container-fluid">
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <h1 style="text-align: center; font-size: 23px;">Passageiro Criança '. $number .'</h1>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Nome Completo: <b style="color: #FF0000; font-size:15px;">*</b></label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Name" name="data[Passenger]['. $counter .'][name]" class="ikarus_widget_span4" data-rule-completename="true" data-rule-required="true" maxlength="400" style="width: 100%;" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Data de Nascimento: <b style="color: #FF0000; font-size:15px;">*</b></label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Birthday" name="data[Passenger]['. $counter .'][birthday]" class="ikarus_widget_span4 birthDateInput" data-rule-idadecrianca="true" data-rule-required="true" style="width: 100%;" type="text" placeholder="dd/mm/aaaa" typePassenger="child">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span5">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Documento: </label>
                                <div class="ikarus_widget_controls">
                                    <select id="Passenger'. $counter .'Ssntype" name="data[Passenger]['. $counter .'][ssntype]" class="ikarus_widget_span5" onchange="ikarusWidgetJs.documentoMask(this, \''. $counter .'\')" style="width: 100%;">
                                        <option value="CPF">CPF</option>
                                        <option value="RG">RG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ikarus_widget_span7">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">&nbsp;</label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Ssn" name="data[Passenger]['. $counter .'][ssn]" class="ikarus_widget_span7 cpfcnpj" style="width: 100%;" maxlength="50" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- ikarus_widget_container-fluid -->
            </div><!-- ikarus_widget_span4 -->';

        return $form;
    }

    private function babyForm($number, $counter)
    {
        $form = '
            <div class="ikarus_widget_span4">
                <div class="ikarus_widget_container-fluid">
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <h1 style="text-align: center; font-size: 23px;">Passageiro Bebê '. $number .'</h1>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Nome Completo: <b style="color: #FF0000; font-size:15px;">*</b></label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Name" name="data[Passenger]['. $counter .'][name]" class="ikarus_widget_span4" data-rule-completename="true" maxlength="400" style="width: 100%;" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span12">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Data de Nascimento: <b style="color: #FF0000; font-size:15px;">*</b></label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Birthday" name="data[Passenger]['. $counter .'][birthday]" class="ikarus_widget_span4 birthDateInput" data-rule-idadebebe="true" data-rule-required="true" style="width: 100%;" type="text" placeholder="dd/mm/aaaa" typePassenger="baby">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ikarus_widget_row-fluid">
                        <div class="ikarus_widget_span5">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">Documento: </label>
                                <div class="ikarus_widget_controls">
                                    <select id="Passenger'. $counter .'Ssntype" name="data[Passenger]['. $counter .'][ssntype]" class="ikarus_widget_span5" onchange="ikarusWidgetJs.documentoMask(this, \''. $counter .'\')" style="width: 100%;">
                                        <option value="CPF">CPF</option>
                                        <option value="RG">RG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="ikarus_widget_span7">
                            <div class="ikarus_widget_control-group">
                                <label class="ikarus_widget_control-label" for="validation_name">&nbsp;</label>
                                <div class="ikarus_widget_controls">
                                    <input id="Passenger'. $counter .'Ssn" name="data[Passenger]['. $counter .'][ssn]" class="ikarus_widget_span7 cpfcnpj" style="width: 100%;" maxlength="50" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- ikarus_widget_container-fluid -->
            </div><!-- ikarus_widget_span4 -->';

        return $form;
    }


    private function validateParams()
    {
        $ok =   preg_match('/^R|O$/',                          $this->data["trip"],          $matches) &&
                preg_match('/^[A-Z]{3}$/',                     $this->data["from"],          $matches) &&
                preg_match('/^[A-Z]{3}$/',                     $this->data["to"],            $matches) &&
                preg_match('/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/', $this->data["departureDate"], $matches) &&
                preg_match('/^[1-9]$/',                        $this->data["adults"],        $matches) &&
                preg_match('/^[0-9]$/',                        $this->data["children"],      $matches) &&
                preg_match('/^[0-9]$/',                        $this->data["babies"],        $matches);

        if ($this->data["trip"] == 'R')
        {
            $ok = $ok && preg_match('/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/', $this->data["backDate"], $matches);
        }
        else
        {
            $this->data['backDate'] = $this->data['departureDate'];
        }

        return $ok;
    }



    private function formatDate($date)
    {
        $date = explode("/", $date);
        $date = $date[2] . "-" . $date[1] . "-" . $date[0];
        return $date;
    }



    private function encryptParams()
    {
        $querySearch  = $this->data['trip'] . ";" . $this->data['from'] . ";" . $this->data['to'] . ";" . $this->formatDate($this->data['departureDate']) . ";";
        $querySearch .= $this->formatDate($this->data['backDate']) . ";" . $this->data['adults'] . ";" . $this->data['children'] . ";" . $this->login . ";" . $this->password;
        // pp($querySearch);

        $ikarusCrypt = new IkarusCrypt($this->key);

        return $ikarusCrypt->crypt($querySearch);
    }



    private function fetchSearchURLs()
    {
        if($this->login == "sandbox")
        {
            $encryptedSearch = $this->encryptParams();
            
            $urls = array();
            foreach ($this->programs as $hash => $info) :
            if ($info['activated_sell'] == '1')
            {
                $urls[$info["wsname"]]  = "http://104.131.166.6/flights/" . $info["wsname"] . "/index.php?search=" . $encryptedSearch . "&sm=" . $this->id;
            }
            endforeach;
        }
        else
        {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, "http://ws.islogic.com.br/flights/ikarus_ws_resolver.php");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            $output = curl_exec($ch);
            curl_close($ch);

            $urls = json_decode($output, true);

            $encryptedSearch = $this->encryptParams();
            $programs = array_keys($urls);

            for($i=0; $i < count($programs); $i++)
            {
                $urls[$programs[$i]] .= $programs[$i] . "/index.php?search=" . $encryptedSearch . "&sm=" . $this->id;
            }
        }
        return $urls;
    }


    private function executeSearch()
    {
        $urls = $this->fetchSearchURLs();
        $js = '
                <script>
                    IkarusJQuery(document).ready(function(){
                        ikarusWidgetJs.fillsearchForm('. json_encode($this->data) .');';
        foreach ($this->programs as $hash => $info) :
            if ($info['activated_sell'] == '1')
            {
                $js .= '
                        ikarusWidgetJs.searchFlights("'. $urls[$info['wsname']] .'", "'. $hash .'", '. json_encode($this->programs) .', '. json_encode($this->airports) .', '. json_encode($this->data) .');';
            }
        endforeach;
        $js .= '
                    });
                </script>';

        return $js;
    }



    private function CdnAssetsUrl()
    {
        // se requisição for HTTPS
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
            return 'https://b0cd121070f4f386acbd-2eb8a6300f37edb7ee8c5206c9b8eeee.ssl.cf5.rackcdn.com';
        else
            return 'http://a4c1b54576e846a59bc6-2eb8a6300f37edb7ee8c5206c9b8eeee.r66.cf5.rackcdn.com';
    }
}

?>
