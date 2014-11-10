<meta charset="UTF-8">



<link rel="stylesheet" type="text/css" href="css/jquery_ui/jquery.ui.1.10.0.ie.css" />
<link rel="stylesheet" type="text/css" href="css/jquery_ui/jquery.ui-1.10.0.custom.css" />
<link rel="stylesheet" type="text/css" href="css/plugins/select2/select2.css" />

<link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="css/bootstrap/bootstrap-responsive.css" />

<script src="js/jquery/jquery.min.js"></script>
<script src="js/jquery_ui/jquery-ui.min.js"></script>
<script src="js/plugins/select2/select2.js"></script>


<script>
    var IkarusJQuery = jQuery.noConflict();
</script>



<?php

include "IkarusWidget.php";


$login = "ikarus"; // seu login
$password = "Fzw12QR5ZfPfC6LYUncL"; // sua senha(a que é gerada junto com o token e não é a mesma usada para entrar no nosso site).
$id = "ika";
$key = "db5dd55d77bd7320ba2a467c05c16ce1";


$ikarus = new IkarusWidget($id, $key, $login, $password);

echo $ikarus->form();
$ikarus->widget();
//echo $ikarus->resultTable();

?>



<script>
    
		IkarusJQuery( "#ikarusDataDepartureDate" ).datepicker
		({
			prevText: 'Anterior',
			nextText: 'Próximo',
			numberOfMonths: 2,
			dateFormat: 'dd/mm/yy',
			dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
			dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
			dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
			monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
			monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
			minDate: 0
		});
        IkarusJQuery( "#ikarusDataBackDate" ).datepicker
        ({
            prevText: 'Anterior',
            nextText: 'Próximo',
            numberOfMonths: 2,
            dateFormat: 'dd/mm/yy',
            dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
            dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
            dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
            monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
            monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
            minDate: 0
        });
        
        IkarusJQuery("#ikarusDataFrom").select2();
        IkarusJQuery("#ikarusDataTo").select2();
</script>

































