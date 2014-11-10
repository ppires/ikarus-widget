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
ini_set("display_errors", 1);




include "IkarusAES.php";
include "IkarusCrypt.php";

class IkarusWidget
{

    private $id;
    private $key;
    private $login;
    private $password;
    private $data;

    public function __construct($id, $key, $login, $password)
    {
        $this->id       = $id;
        $this->key      = $key;
        $this->login    = $login;
        $this->password = $password;
    }



    public function widget()
    {
        if(isset($_POST["ikarusData"]))
        {
            if($this->validateParams($_POST["ikarusData"]))
            {
                $this->data = $_POST["ikarusData"];
                echo $this->resultTable();
                echo $this->searchResult();
            }
        }
    }



    public function form()
    {
        $str_form = '<form name="IkarusWidgetSearch" method="post">
                    <div class="ikarus_widget_container">
                        <div class="ikarus_widget_row">
                            <div class="ikarus_widget_span12">
                                <select id="ikarusDataTrip" name="ikarusData[trip]" onchange="onChangeTrip();" class="myform" placeholder="Origem">
                                    <option value="R">Ida e Volta</option>
                                    <option value="O">Somente Ida</option>
                                </select>
                            </div>
                        </div>
                        <div class="ikarus_widget_row">
                            <div class="ikarus_widget_span6">
                                <select id="ikarusDataFrom" name="ikarusData[from]" placeholder="Origem">
                                    <option value=""></option>
                                    <option value="ABZ">Aberdeen (ABZ)</option><option value="AFL">Alta Floresta (AFL)</option><option value="ATM">Altamira (ATM)</option><option value="AMS">Amsterdam (AMS)</option><option value="ANF">Antofagasta (ANF)</option><option value="AJU">Aracaju (AJU)</option><option value="ARU">Aracatuba (ARU)</option><option value="AUX">Araguaina (AUX)</option><option value="AQA">Araraquara (AQA)</option><option value="AAX">Araxa (AAX)</option><option value="AQP">Arequipa (AQP)</option><option value="ARI">Arica (ARI)</option><option value="AUA">Aruba (AUA)</option><option value="ASU">Assuncao (ASU)</option><option value="ATL">Atlanta (ATL)</option><option value="AUS">Austin (AUS)</option><option value="BBA">Balmaceda (BBA)</option><option value="BGI">Barbados (BGI)</option><option value="BCN">Barcelona (BCN)</option><option value="BAZ">Barcelos (BAZ)</option><option value="BRA">Barreiras (BRA)</option><option value="JTC">Bauru (JTC)</option><option value="BEL">Belem (BEL)</option><option value="BFS">Belfast (BFS)</option><option value="CNF">Belo Horizonte - Confins Intl (CNF)</option><option value="PLU">Belo Horizonte - Pampulha (PLU)</option><option value="BHZ">Belo Horizonte - Todos (BHZ)</option><option value="TXL">Berlim Berlin-Tegel Intl (TXL)</option><option value="BER">Berlin Todos (BER)</option><option value="BIO">Bilbao (BIO)</option><option value="BVB">Boa Vista (BVB)</option><option value="BOG">Bogota (BOG)</option><option value="BYO">Bonito (BYO)</option><option value="BOS">Boston Logan Intl (BOS)</option><option value="BSB">Brasilia (BSB)</option><option value="BRE">Bremen (BRE)</option><option value="BRU">Bruxelas (BRU)</option><option value="AEP">Buenos Aires Aeroparque (AEP)</option><option value="EZE">Buenos Aires Ezeiza Intl (EZE)</option><option value="BUE">Buenos Aires Todos (BUE)</option><option value="CFB">Cabo Frio (CFB)</option><option value="CFC">Cacador (CFC)</option><option value="OAL">Cacoal (OAL)</option><option value="CJC">Calama (CJC)</option><option value="CLV">Caldas Novas (CLV)</option><option value="YYC">Calgary (YYC)</option><option value="CPV">Campina Grande (CPV)</option><option value="VCP">Campinas Viracopos (VCP)</option><option value="CGR">Campo Grande (CGR)</option><option value="CAW">Campos dos Goytacazes (CAW)</option><option value="CCS">Caracas (CCS)</option><option value="CKS">Carajas (CKS)</option><option value="CAC">Cascavel (CAC)</option><option value="CXJ">Caxias do Sul (CXJ)</option><option value="XAP">Chapeco (XAP)</option><option value="ORD">Chicago O`Hare Intl (ORD)</option><option value="CIX">Chiclayo (CIX)</option><option value="MEX">Cidade do Mexico (MEX)</option><option value="AGT">Ciudad del Leste (AGT)</option><option value="CLE">Cleveland Hopkins Intl (CLE)</option><option value="CIZ">Coari (CIZ)</option><option value="UNA">Comandatuba (UNA)</option><option value="CRD">Comodoro Rivadavia (CRD)</option><option value="CCP">Concepcion (CCP)</option><option value="CPH">Copenhagen (CPH)</option><option value="CPO">Copiapo (CPO)</option><option value="COR">Cordoba (COR)</option><option value="CMG">Corumba (CMG)</option><option value="CCM">Criciuma (CCM)</option><option value="CZS">Cruzeiro do Sul (CZS)</option><option value="CGB">Cuiaba (CGB)</option><option value="CWB">Curitiba (CWB)</option><option value="CUZ">Cuzco (CUZ)</option><option value="DFW">Dallas Fort Worth Intl (DFW)</option><option value="DEN">Denver (DEN)</option><option value="DOU">Dourados (DOU)</option><option value="DUB">Dublin (DUB)</option><option value="DUS">Dusseldorf (DUS)</option><option value="EGE">Eagle County-Vail (EGE)</option><option value="EDI">Edinburgo (EDI)</option><option value="YEG">Edmonton (YEG)</option><option value="ERN">Eirunepe (ERN)</option><option value="FTE">El Calafate (FTE)</option><option value="ESR">El Salvador (ESR)</option><option value="ERM">Erechim (ERM)</option><option value="ARN">Estocolmo (ARN)</option><option value="STO">Estocolmo (STO)</option><option value="FAO">Faro (FAO)</option><option value="FEN">Fernando de Noronha (FEN)</option><option value="PHL">Filadelfia (PHL)</option><option value="FLN">Florianopolis (FLN)</option><option value="FOR">Fortaleza (FOR)</option><option value="IGU">Foz do Iguacu (IGU)</option><option value="FRC">Franca (FRC)</option><option value="FBE">Francisco Beltrao (FBE)</option><option value="FRA">Frankfurt (FRA)</option><option value="FNC">Funchal (FNC)</option><option value="GVA">Geneva (GVA)</option><option value="GYN">Goiania (GYN)</option><option value="GVR">Gov. Valadares (GVR)</option><option value="GPB">Guarapuava (GPB)</option><option value="HAM">Hamburgo (HAM)</option><option value="HAJ">Hanover (HAJ)</option><option value="IAH">Houston George Bush Intl (IAH)</option><option value="HUW">Humaita (HUW)</option><option value="IOS">Ilheus (IOS)</option><option value="IMP">Imperatriz (IMP)</option><option value="IPN">Ipatinga (IPN)</option><option value="IQQ">Iquique (IQQ)</option><option value="IQT">Iquitos (IQT)</option><option value="ITB">Itaituba (ITB)</option><option value="JAX">Jacksonville (JAX)</option><option value="JPR">Ji-Parana (JPR)</option><option value="JCB">Joacaba (JCB)</option><option value="JPA">Joao Pessoa (JPA)</option><option value="JOI">Joinville (JOI)</option><option value="JDO">Juazeiro do Norte (JDO)</option><option value="JDF">Juiz de Fora (JDF)</option><option value="JUL">Juliaca (JUL)</option><option value="LSC">La Serena (LSC)</option><option value="LAS">Las Vegas (LAS)</option><option value="LEC">Lencois Chapada Diamantina (LEC)</option><option value="LIM">Lima (LIM)</option><option value="LIS">Lisboa (LIS)</option><option value="LHR">Londres Heathrow Intl (LHR)</option><option value="LDB">Londrina (LDB)</option><option value="LAX">Los Angeles (LAX)</option><option value="MEA">Macae (MEA)</option><option value="MCP">Macapa (MCP)</option><option value="MCZ">Maceio (MCZ)</option><option value="MAD">Madri Barajas Intl (MAD)</option><option value="AGP">Malaga (AGP)</option><option value="MAO">Manaus (MAO)</option><option value="MAN">Manchester (MAN)</option><option value="MAB">Maraba (MAB)</option><option value="MII">Marilia (MII)</option><option value="MGF">Maringa (MGF)</option><option value="MDZ">Mendoza (MDZ)</option><option value="MIA">Miami Miami Intl (MIA)</option><option value="MXP">Milao Malpensa Intl (MXP)</option><option value="MSP">Minneapolis (MSP)</option><option value="MOC">Montes Claros (MOC)</option><option value="MVD">Montevideo (MVD)</option><option value="YMQ">Montreal (YMQ)</option><option value="YUL">Montreal (YUL)</option><option value="MUC">Munique (MUC)</option><option value="NAT">Natal (NAT)</option><option value="NVT">Navegantes (NVT)</option><option value="JFK">Nova Iorque J.F. Kennedy Intl (JFK)</option><option value="LGA">Nova Iorque La Guardia (LGA)</option><option value="NUE">Nuremberg (NUE)</option><option value="MCO">Orlando (MCO)</option><option value="OSL">Oslo (OSL)</option><option value="ZOS">Osorno (ZOS)</option><option value="YOW">Ottawa (YOW)</option><option value="PMW">Palmas (PMW)</option><option value="PIN">Parintins (PIN)</option><option value="CDG">Paris Charles de Gaulle Intl (CDG)</option><option value="PFB">Passo Fundo (PFB)</option><option value="POJ">Patos de Minas (POJ)</option><option value="PET">Pelotas (PET)</option><option value="PEK">Pequim (PEK)</option><option value="PNZ">Petrolina (PNZ)</option><option value="PHX">Phoenix (PHX)</option><option value="PIU">Piura (PIU)</option><option value="PDX">Portland (PDX)</option><option value="OPO">Porto (OPO)</option><option value="POA">Porto Alegre (POA)</option><option value="PXO">Porto Santo (PXO)</option><option value="BPS">Porto Seguro (BPS)</option><option value="PVH">Porto Velho (PVH)</option><option value="PPB">Presidente Prudente (PPB)</option><option value="PCL">Pucallpa (PCL)</option><option value="PEM">Puerto Maldonado (PEM)</option><option value="PMC">Puerto Montt (PMC)</option><option value="PUQ">Punta Arenas (PUQ)</option><option value="PUJ">Punta Cana (PUJ)</option><option value="PDP">Punta Del Este (PDP)</option><option value="YQB">Quebec (YQB)</option><option value="RDU">Raleigh Durham (RDU)</option><option value="REC">Recife (REC)</option><option value="REZ">Resende (REZ)</option><option value="RAO">Ribeirao Preto (RAO)</option><option value="RBR">Rio Branco (RBR)</option><option value="GIG">Rio de Janeiro - Galeao Intl (GIG)</option><option value="SDU">Rio de Janeiro - Santos Dumont (SDU)</option><option value="RIO">Rio de Janeiro - Todos (RIO)</option><option value="RGL">Rio Gallegos (RGL)</option><option value="RIG">Rio Grande (RIG)</option><option value="RVD">Rio Verde (RVD)</option><option value="ROO">Rondonopolis (ROO)</option><option value="ROS">Rosario (ROS)</option><option value="SLC">Salt Lake City (SLC)</option><option value="SLA">Salta (SLA)</option><option value="SSA">Salvador (SSA)</option><option value="SAN">San Diego San Diego Intl (SAN)</option><option value="SFO">San Francisco (SFO)</option><option value="SJC">San Jose (SJC)</option><option value="VVI">Santa Cruz de la Sierra (VVI)</option><option value="IRZ">Santa Isabel do Rio Negro (IRZ)</option><option value="RIA">Santa Maria (RIA)</option><option value="SRA">Santa Rosa (SRA)</option><option value="STM">Santarem (STM)</option><option value="SCL">Santiago (SCL)</option><option value="SCQ">Santiago De Compostela (SCQ)</option><option value="GEL">Santo Angelo (GEL)</option><option value="SDQ">Santo Domingo (SDQ)</option><option value="SJL">Sao Gabriel da Cachoeira (SJL)</option><option value="JDR">Sao Joao del-Rei (JDR)</option><option value="SJP">Sao Jose do Rio Preto (SJP)</option><option value="SJK">Sao Jose dos Campos (SJK)</option><option value="SLZ">Sao Luis (SLZ)</option><option value="CPQ">Sao Paulo - Campinas (CPQ)</option><option value="CGH">Sao Paulo - Congonhas (CGH)</option><option value="GRU">Sao Paulo - Guarulhos Intl (GRU)</option><option value="SAO">Sao Paulo - Todos (SAO)</option><option value="OLC">Sao Paulo de Olivenca (OLC)</option><option value="SEA">Seattle Tacoma Intl (SEA)</option><option value="OPS">Sinop (OPS)</option><option value="STR">Stuttgart Stuttgart Intl (STR)</option><option value="TBT">Tabatinga (TBT)</option><option value="TCQ">Tacna (TCQ)</option><option value="TPA">Tampa (TPA)</option><option value="TPP">Tarapoto (TPP)</option><option value="TFF">Tefe (TFF)</option><option value="ZCO">Temuco (ZCO)</option><option value="TFN">Tenerife (TFN)</option><option value="THE">Teresina (THE)</option><option value="NRT">Toquio Narita Intl (NRT)</option><option value="YYZ">Toronto (YYZ)</option><option value="TMT">Trombetas (TMT)</option><option value="TRU">Trujillo (TRU)</option><option value="TUR">Tucurui (TUR)</option><option value="UBA">Uberaba (UBA)</option><option value="UDI">Uberlandia (UDI)</option><option value="URG">Uruguaiana (URG)</option><option value="USH">Ushuaia (USH)</option><option value="ZAL">Valdivia (ZAL)</option><option value="YVR">Vancouver (YVR)</option><option value="VAG">Varginha (VAG)</option><option value="VIE">Vienna (VIE)</option><option value="BVH">Vilhena (BVH)</option><option value="VIX">Vitoria (VIX)</option><option value="VDC">Vitoria da Conquista (VDC)</option><option value="IAD">Washington Dulles Intl (IAD)</option><option value="DCA">Washington Ronald Reagan National (DCA)</option><option value="YWG">Winnipeg (YWG)</option><option value="ZRH">Zurique (ZRH)</option>
                                </select>
                            </div>
                            <div class="ikarus_widget_span6">
                                <select id="ikarusDataTo" name="ikarusData[to]" placeholder="Destino">
                                    <option value=""></option>
                                    <option value="ABZ">Aberdeen (ABZ)</option><option value="AFL">Alta Floresta (AFL)</option><option value="ATM">Altamira (ATM)</option><option value="AMS">Amsterdam (AMS)</option><option value="ANF">Antofagasta (ANF)</option><option value="AJU">Aracaju (AJU)</option><option value="ARU">Aracatuba (ARU)</option><option value="AUX">Araguaina (AUX)</option><option value="AQA">Araraquara (AQA)</option><option value="AAX">Araxa (AAX)</option><option value="AQP">Arequipa (AQP)</option><option value="ARI">Arica (ARI)</option><option value="AUA">Aruba (AUA)</option><option value="ASU">Assuncao (ASU)</option><option value="ATL">Atlanta (ATL)</option><option value="AUS">Austin (AUS)</option><option value="BBA">Balmaceda (BBA)</option><option value="BGI">Barbados (BGI)</option><option value="BCN">Barcelona (BCN)</option><option value="BAZ">Barcelos (BAZ)</option><option value="BRA">Barreiras (BRA)</option><option value="JTC">Bauru (JTC)</option><option value="BEL">Belem (BEL)</option><option value="BFS">Belfast (BFS)</option><option value="CNF">Belo Horizonte - Confins Intl (CNF)</option><option value="PLU">Belo Horizonte - Pampulha (PLU)</option><option value="BHZ">Belo Horizonte - Todos (BHZ)</option><option value="TXL">Berlim Berlin-Tegel Intl (TXL)</option><option value="BER">Berlin Todos (BER)</option><option value="BIO">Bilbao (BIO)</option><option value="BVB">Boa Vista (BVB)</option><option value="BOG">Bogota (BOG)</option><option value="BYO">Bonito (BYO)</option><option value="BOS">Boston Logan Intl (BOS)</option><option value="BSB">Brasilia (BSB)</option><option value="BRE">Bremen (BRE)</option><option value="BRU">Bruxelas (BRU)</option><option value="AEP">Buenos Aires Aeroparque (AEP)</option><option value="EZE">Buenos Aires Ezeiza Intl (EZE)</option><option value="BUE">Buenos Aires Todos (BUE)</option><option value="CFB">Cabo Frio (CFB)</option><option value="CFC">Cacador (CFC)</option><option value="OAL">Cacoal (OAL)</option><option value="CJC">Calama (CJC)</option><option value="CLV">Caldas Novas (CLV)</option><option value="YYC">Calgary (YYC)</option><option value="CPV">Campina Grande (CPV)</option><option value="VCP">Campinas Viracopos (VCP)</option><option value="CGR">Campo Grande (CGR)</option><option value="CAW">Campos dos Goytacazes (CAW)</option><option value="CCS">Caracas (CCS)</option><option value="CKS">Carajas (CKS)</option><option value="CAC">Cascavel (CAC)</option><option value="CXJ">Caxias do Sul (CXJ)</option><option value="XAP">Chapeco (XAP)</option><option value="ORD">Chicago O`Hare Intl (ORD)</option><option value="CIX">Chiclayo (CIX)</option><option value="MEX">Cidade do Mexico (MEX)</option><option value="AGT">Ciudad del Leste (AGT)</option><option value="CLE">Cleveland Hopkins Intl (CLE)</option><option value="CIZ">Coari (CIZ)</option><option value="UNA">Comandatuba (UNA)</option><option value="CRD">Comodoro Rivadavia (CRD)</option><option value="CCP">Concepcion (CCP)</option><option value="CPH">Copenhagen (CPH)</option><option value="CPO">Copiapo (CPO)</option><option value="COR">Cordoba (COR)</option><option value="CMG">Corumba (CMG)</option><option value="CCM">Criciuma (CCM)</option><option value="CZS">Cruzeiro do Sul (CZS)</option><option value="CGB">Cuiaba (CGB)</option><option value="CWB">Curitiba (CWB)</option><option value="CUZ">Cuzco (CUZ)</option><option value="DFW">Dallas Fort Worth Intl (DFW)</option><option value="DEN">Denver (DEN)</option><option value="DOU">Dourados (DOU)</option><option value="DUB">Dublin (DUB)</option><option value="DUS">Dusseldorf (DUS)</option><option value="EGE">Eagle County-Vail (EGE)</option><option value="EDI">Edinburgo (EDI)</option><option value="YEG">Edmonton (YEG)</option><option value="ERN">Eirunepe (ERN)</option><option value="FTE">El Calafate (FTE)</option><option value="ESR">El Salvador (ESR)</option><option value="ERM">Erechim (ERM)</option><option value="ARN">Estocolmo (ARN)</option><option value="STO">Estocolmo (STO)</option><option value="FAO">Faro (FAO)</option><option value="FEN">Fernando de Noronha (FEN)</option><option value="PHL">Filadelfia (PHL)</option><option value="FLN">Florianopolis (FLN)</option><option value="FOR">Fortaleza (FOR)</option><option value="IGU">Foz do Iguacu (IGU)</option><option value="FRC">Franca (FRC)</option><option value="FBE">Francisco Beltrao (FBE)</option><option value="FRA">Frankfurt (FRA)</option><option value="FNC">Funchal (FNC)</option><option value="GVA">Geneva (GVA)</option><option value="GYN">Goiania (GYN)</option><option value="GVR">Gov. Valadares (GVR)</option><option value="GPB">Guarapuava (GPB)</option><option value="HAM">Hamburgo (HAM)</option><option value="HAJ">Hanover (HAJ)</option><option value="IAH">Houston George Bush Intl (IAH)</option><option value="HUW">Humaita (HUW)</option><option value="IOS">Ilheus (IOS)</option><option value="IMP">Imperatriz (IMP)</option><option value="IPN">Ipatinga (IPN)</option><option value="IQQ">Iquique (IQQ)</option><option value="IQT">Iquitos (IQT)</option><option value="ITB">Itaituba (ITB)</option><option value="JAX">Jacksonville (JAX)</option><option value="JPR">Ji-Parana (JPR)</option><option value="JCB">Joacaba (JCB)</option><option value="JPA">Joao Pessoa (JPA)</option><option value="JOI">Joinville (JOI)</option><option value="JDO">Juazeiro do Norte (JDO)</option><option value="JDF">Juiz de Fora (JDF)</option><option value="JUL">Juliaca (JUL)</option><option value="LSC">La Serena (LSC)</option><option value="LAS">Las Vegas (LAS)</option><option value="LEC">Lencois Chapada Diamantina (LEC)</option><option value="LIM">Lima (LIM)</option><option value="LIS">Lisboa (LIS)</option><option value="LHR">Londres Heathrow Intl (LHR)</option><option value="LDB">Londrina (LDB)</option><option value="LAX">Los Angeles (LAX)</option><option value="MEA">Macae (MEA)</option><option value="MCP">Macapa (MCP)</option><option value="MCZ">Maceio (MCZ)</option><option value="MAD">Madri Barajas Intl (MAD)</option><option value="AGP">Malaga (AGP)</option><option value="MAO">Manaus (MAO)</option><option value="MAN">Manchester (MAN)</option><option value="MAB">Maraba (MAB)</option><option value="MII">Marilia (MII)</option><option value="MGF">Maringa (MGF)</option><option value="MDZ">Mendoza (MDZ)</option><option value="MIA">Miami Miami Intl (MIA)</option><option value="MXP">Milao Malpensa Intl (MXP)</option><option value="MSP">Minneapolis (MSP)</option><option value="MOC">Montes Claros (MOC)</option><option value="MVD">Montevideo (MVD)</option><option value="YMQ">Montreal (YMQ)</option><option value="YUL">Montreal (YUL)</option><option value="MUC">Munique (MUC)</option><option value="NAT">Natal (NAT)</option><option value="NVT">Navegantes (NVT)</option><option value="JFK">Nova Iorque J.F. Kennedy Intl (JFK)</option><option value="LGA">Nova Iorque La Guardia (LGA)</option><option value="NUE">Nuremberg (NUE)</option><option value="MCO">Orlando (MCO)</option><option value="OSL">Oslo (OSL)</option><option value="ZOS">Osorno (ZOS)</option><option value="YOW">Ottawa (YOW)</option><option value="PMW">Palmas (PMW)</option><option value="PIN">Parintins (PIN)</option><option value="CDG">Paris Charles de Gaulle Intl (CDG)</option><option value="PFB">Passo Fundo (PFB)</option><option value="POJ">Patos de Minas (POJ)</option><option value="PET">Pelotas (PET)</option><option value="PEK">Pequim (PEK)</option><option value="PNZ">Petrolina (PNZ)</option><option value="PHX">Phoenix (PHX)</option><option value="PIU">Piura (PIU)</option><option value="PDX">Portland (PDX)</option><option value="OPO">Porto (OPO)</option><option value="POA">Porto Alegre (POA)</option><option value="PXO">Porto Santo (PXO)</option><option value="BPS">Porto Seguro (BPS)</option><option value="PVH">Porto Velho (PVH)</option><option value="PPB">Presidente Prudente (PPB)</option><option value="PCL">Pucallpa (PCL)</option><option value="PEM">Puerto Maldonado (PEM)</option><option value="PMC">Puerto Montt (PMC)</option><option value="PUQ">Punta Arenas (PUQ)</option><option value="PUJ">Punta Cana (PUJ)</option><option value="PDP">Punta Del Este (PDP)</option><option value="YQB">Quebec (YQB)</option><option value="RDU">Raleigh Durham (RDU)</option><option value="REC">Recife (REC)</option><option value="REZ">Resende (REZ)</option><option value="RAO">Ribeirao Preto (RAO)</option><option value="RBR">Rio Branco (RBR)</option><option value="GIG">Rio de Janeiro - Galeao Intl (GIG)</option><option value="SDU">Rio de Janeiro - Santos Dumont (SDU)</option><option value="RIO">Rio de Janeiro - Todos (RIO)</option><option value="RGL">Rio Gallegos (RGL)</option><option value="RIG">Rio Grande (RIG)</option><option value="RVD">Rio Verde (RVD)</option><option value="ROO">Rondonopolis (ROO)</option><option value="ROS">Rosario (ROS)</option><option value="SLC">Salt Lake City (SLC)</option><option value="SLA">Salta (SLA)</option><option value="SSA">Salvador (SSA)</option><option value="SAN">San Diego San Diego Intl (SAN)</option><option value="SFO">San Francisco (SFO)</option><option value="SJC">San Jose (SJC)</option><option value="VVI">Santa Cruz de la Sierra (VVI)</option><option value="IRZ">Santa Isabel do Rio Negro (IRZ)</option><option value="RIA">Santa Maria (RIA)</option><option value="SRA">Santa Rosa (SRA)</option><option value="STM">Santarem (STM)</option><option value="SCL">Santiago (SCL)</option><option value="SCQ">Santiago De Compostela (SCQ)</option><option value="GEL">Santo Angelo (GEL)</option><option value="SDQ">Santo Domingo (SDQ)</option><option value="SJL">Sao Gabriel da Cachoeira (SJL)</option><option value="JDR">Sao Joao del-Rei (JDR)</option><option value="SJP">Sao Jose do Rio Preto (SJP)</option><option value="SJK">Sao Jose dos Campos (SJK)</option><option value="SLZ">Sao Luis (SLZ)</option><option value="CPQ">Sao Paulo - Campinas (CPQ)</option><option value="CGH">Sao Paulo - Congonhas (CGH)</option><option value="GRU">Sao Paulo - Guarulhos Intl (GRU)</option><option value="SAO">Sao Paulo - Todos (SAO)</option><option value="OLC">Sao Paulo de Olivenca (OLC)</option><option value="SEA">Seattle Tacoma Intl (SEA)</option><option value="OPS">Sinop (OPS)</option><option value="STR">Stuttgart Stuttgart Intl (STR)</option><option value="TBT">Tabatinga (TBT)</option><option value="TCQ">Tacna (TCQ)</option><option value="TPA">Tampa (TPA)</option><option value="TPP">Tarapoto (TPP)</option><option value="TFF">Tefe (TFF)</option><option value="ZCO">Temuco (ZCO)</option><option value="TFN">Tenerife (TFN)</option><option value="THE">Teresina (THE)</option><option value="NRT">Toquio Narita Intl (NRT)</option><option value="YYZ">Toronto (YYZ)</option><option value="TMT">Trombetas (TMT)</option><option value="TRU">Trujillo (TRU)</option><option value="TUR">Tucurui (TUR)</option><option value="UBA">Uberaba (UBA)</option><option value="UDI">Uberlandia (UDI)</option><option value="URG">Uruguaiana (URG)</option><option value="USH">Ushuaia (USH)</option><option value="ZAL">Valdivia (ZAL)</option><option value="YVR">Vancouver (YVR)</option><option value="VAG">Varginha (VAG)</option><option value="VIE">Vienna (VIE)</option><option value="BVH">Vilhena (BVH)</option><option value="VIX">Vitoria (VIX)</option><option value="VDC">Vitoria da Conquista (VDC)</option><option value="IAD">Washington Dulles Intl (IAD)</option><option value="DCA">Washington Ronald Reagan National (DCA)</option><option value="YWG">Winnipeg (YWG)</option><option value="ZRH">Zurique (ZRH)</option>
                                </select>
                            </div>
                        </div>
                        <div class="ikarus_widget_row">
                            <div class="ikarus_widget_span6">
                                <input id="ikarusDataDepartureDate" name="ikarusData[departureDate]" placeholder="Ida"></input>
                            </div>
                            <div class="ikarus_widget_span6">
                                <input id="ikarusDataBackDate" name="ikarusData[backDate]" placeholder="Volta"></input>
                            </div>
                        </div>
                        <div class="ikarus_widget_row">
                            <div class="ikarus_widget_span4">
                                <select id="ikarusDataAdults" name="ikarusData[adults]" placeholder="Adultos">
                                    <option value="1">1 adulto</option>
                                    <option value="0">0 adultos</option>
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
                                <select id="ikarusDataChildren" name="ikarusData[children]" placeholder="Crian&#231;as">
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
                                <select id="ikarusDataBabies" name="ikarusData[babies]" placeholder="Beb&#234;s">
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
                        <div class="ikarus_widget_row">
                            <div class="ikarus_widget_span12">
                                <input type="submit" value="Pesquisar" id="ikarusDataSearch">
                            </div>
                        </div>
                    </div>
                    </form>';
        return $str_form;
    }



    private function resultTable()
    {
        $resultTable = '<table class="table myCustomTable" data="" style="margin-bottom:0; font-size: 13px;">
            <thead>
                <tr>
                    <th colspan="10">
                        <table id="delete_loaders_ida" width="100%">
                            <tr id="validaVooIdaTabela" style="display: none;">
                                <th colspan="10" style=" color: #F54519;"> Por favor selecione seu voo de Ida. </th>
                            </tr>
                            <tr id="verifica_loaders_ida">
                                <td id="ida_tam_searchLoader" align="center" style="text-align: center;">
                                    <img src="http://ikarus.islogic.com.br/img/tam_miles_ativo.png">
                                    <br />
                                    <img src="http://ikarus.islogic.com.br/img/loading_tam.gif">
                                </td>
                                <td id="ida_gol_searchLoader" align="center" style="text-align: center;">
                                    <img src="http://ikarus.islogic.com.br/img/gol_miles_ativo.png">
                                    <br />
                                    <img src="http://ikarus.islogic.com.br/img/loading_gol.gif">
                                </td>
                                <td id="ida_azul_searchLoader" align="center" style="text-align: center;">
                                    <img src="http://ikarus.islogic.com.br/img/azul_miles_ativo.png">
                                    <br />
                                    <img src="http://ikarus.islogic.com.br/img/loading_azul.gif">
                                </td>
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
            <tbody id="tabela_ida">
            </tbody>
        </table>';

        // $resultTable = '<table></table>';
        return $resultTable;
    }



    private function validateParams($data)
    {
        return  preg_match('/^R|O$/',                          $data["trip"],          $matches) &&
                preg_match('/^[A-Z]{3}$/',                     $data["from"],          $matches) &&
                preg_match('/^[A-Z]{3}$/',                     $data["to"],            $matches) &&
                preg_match('/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/', $data["departureDate"], $matches) &&
                preg_match('/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/', $data["backDate"],      $matches) &&
                preg_match('/^[1-9]$/',                        $data["adults"],        $matches) &&
                preg_match('/^[0-9]$/',                        $data["children"],      $matches) &&
                preg_match('/^[0-9]$/',                        $data["babies"],        $matches);
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

        return $urls;
    }



    private function searchResult()
    {
        $urls = $this->fetchSearchURLs();
        pp($urls);
        puts($urls['azul']);
        $js = ' <script>
                    // $(document).ready(function(){
                        console.log("opa!");

                    // });
                </script>';

        return $js;
    }
}

?>
