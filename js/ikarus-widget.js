if($("input[id*='Birthday']"))
{
	$("input[id*='Birthday']").each(function( value) {
		$(this).mask("99/99/9999");
	});

}
if($("input[id*='Ssn']"))
{
	$("input[id*='Ssn']").each(function( value) {
		$(this).mask("999.999.999-99");
	});

}

function documentoMask(element, item)
{
	mask = $(element).val();

	$.mask.definitions['r']='[0-9\.]';

	if(mask == "CPF") $("#Passenger"+item+"Ssn").mask("999.999.999-99");
	else $("#Passenger"+item+"Ssn").mask("rrrrrrrrrrr");
}

function calculateAge(birthday, now) {
	var ageDifMs = now - birthday.getTime();
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}
/*
function calculateAge2(birthday, now) {

	birthday = birthday.split("-");
	now = now.split("-");
	anos = -1;
	if(parseInt(now[0]) - parseInt(birthday[0]) > 0 ) anos = parseInt(now[0]) - parseInt(birthday[0]) - 1;
	else if(parseInt(now[0]) - parseInt(birthday[0]) == 0 ) anos = 0;
	else return -1;

	meses = 0;
	if(parseInt(now[1]) - parseInt(birthday[1]) > 0 )
	{
		meses = parseInt(now[1]) - parseInt(birthday[1]);
		anos += 1;
	}
	else
	{
		meses = parseInt(birthday[1]) - parseInt(now[1]) - 1;
	}

	dias = 0;
	if(parseInt(now[2]) - parseInt(birthday[2]) > 0 )
	{
		dias = parseInt(now[2]) - parseInt(birthday[2]);
		meses += 1;
	}
	else
	{
		dias = parseInt(birthday[2]) - parseInt(now[2]);
	}

	var ageDifMs = now - birthday.getTime();
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

23/01/2014
10/10/2014

-13
-9
0*/
/*
azul_teste = '{"independentes":{"azul_miles":{"ida":[{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4430~ ~~CNF~11\/19\/2014 08:07~BSB~11\/19\/2014 09:43~","fee_arrival":"0","trip":"1","number":"4430","stops":0,"from":"CNF","to":"BSB","departure":1416391620,"arrival":1416397380},"Trip":[{"from":"CNF","to":"BSB","number":"4430","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416391620,"arrival":1416397380,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4950~ ~~CNF~11\/19\/2014 12:10~BSB~11\/19\/2014 13:35~","fee_arrival":"0","trip":"1","number":"4950","stops":0,"from":"CNF","to":"BSB","departure":1416406200,"arrival":1416411300},"Trip":[{"from":"CNF","to":"BSB","number":"4950","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416406200,"arrival":1416411300,"index":0}]},{"Flight":{"price_children":0,"price_adults":142.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4440~ ~~CNF~11\/19\/2014 18:12~BSB~11\/19\/2014 19:44~","fee_arrival":"0","trip":"1","number":"4440","stops":0,"from":"CNF","to":"BSB","departure":1416427920,"arrival":1416433440},"Trip":[{"from":"CNF","to":"BSB","number":"4440","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416427920,"arrival":1416433440,"index":0}]},{"Flight":{"price_children":0,"price_adults":181.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~S~~S114DTAD~14DT~~1~X|AD~9175~ ~~CNF~11\/19\/2014 22:15~BSB~11\/19\/2014 23:37~","fee_arrival":"0","trip":"1","number":"9175","stops":0,"from":"CNF","to":"BSB","departure":1416442500,"arrival":1416447420},"Trip":[{"from":"CNF","to":"BSB","number":"9175","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416442500,"arrival":1416447420,"index":0}]},{"Flight":{"price_children":0,"price_adults":499.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~O~~O100DTAD~00DT~~1~X|AD~2550~ ~~CNF~11\/19\/2014 06:47~SDU~11\/19\/2014 07:56~^AD~2642~ ~~SDU~11\/19\/2014 11:30~BSB~11\/19\/2014 13:29~","fee_arrival":"0","trip":"1","number":"2550","stops":1,"from":"CNF","to":"BSB","departure":1416386820,"arrival":1416410940},"Trip":[{"from":"CNF","to":"SDU","number":"2550","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416386820,"arrival":1416390960,"index":0},{"carrier":"AZUL","number":"2642","kind":"Conexao","from":"SDU","to":"BSB","departure":1416403800,"arrival":1416410940,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5166~ ~~CNF~11\/19\/2014 09:42~SDU~11\/19\/2014 10:56~^AD~2638~ ~~SDU~11\/19\/2014 15:28~BSB~11\/19\/2014 17:16~","fee_arrival":"0","trip":"1","number":"5166","stops":1,"from":"CNF","to":"BSB","departure":1416397320,"arrival":1416424560},"Trip":[{"from":"CNF","to":"SDU","number":"5166","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416397320,"arrival":1416401760,"index":0},{"carrier":"AZUL","number":"2638","kind":"Conexao","from":"SDU","to":"BSB","departure":1416418080,"arrival":1416424560,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5166~ ~~CNF~11\/19\/2014 09:42~SDU~11\/19\/2014 10:56~^AD~2642~ ~~SDU~11\/19\/2014 11:30~BSB~11\/19\/2014 13:29~","fee_arrival":"0","trip":"1","number":"5166","stops":1,"from":"CNF","to":"BSB","departure":1416397320,"arrival":1416410940},"Trip":[{"from":"CNF","to":"SDU","number":"5166","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416397320,"arrival":1416401760,"index":0},{"carrier":"AZUL","number":"2642","kind":"Conexao","from":"SDU","to":"BSB","departure":1416403800,"arrival":1416410940,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5071~ ~~CNF~11\/19\/2014 11:42~SDU~11\/19\/2014 12:43~^AD~2644~ ~~SDU~11\/19\/2014 17:21~BSB~11\/19\/2014 19:10~","fee_arrival":"0","trip":"1","number":"5071","stops":1,"from":"CNF","to":"BSB","departure":1416404520,"arrival":1416431400},"Trip":[{"from":"CNF","to":"SDU","number":"5071","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416404520,"arrival":1416408180,"index":0},{"carrier":"AZUL","number":"2644","kind":"Conexao","from":"SDU","to":"BSB","departure":1416424860,"arrival":1416431400,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5071~ ~~CNF~11\/19\/2014 11:42~SDU~11\/19\/2014 12:43~^AD~2638~ ~~SDU~11\/19\/2014 15:28~BSB~11\/19\/2014 17:16~","fee_arrival":"0","trip":"1","number":"5071","stops":1,"from":"CNF","to":"BSB","departure":1416404520,"arrival":1416424560},"Trip":[{"from":"CNF","to":"SDU","number":"5071","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416404520,"arrival":1416408180,"index":0},{"carrier":"AZUL","number":"2638","kind":"Conexao","from":"SDU","to":"BSB","departure":1416418080,"arrival":1416424560,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":619.9,"miles_children":0,"miles_adults":16000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~L~~L100DTAD~00DT~~3~X|AD~4211~ ~~CNF~11\/19\/2014 15:52~SDU~11\/19\/2014 16:47~^AD~2644~ ~~SDU~11\/19\/2014 17:21~BSB~11\/19\/2014 19:10~","fee_arrival":"0","trip":"1","number":"4211","stops":1,"from":"CNF","to":"BSB","departure":1416419520,"arrival":1416431400},"Trip":[{"from":"CNF","to":"SDU","number":"4211","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416419520,"arrival":1416422820,"index":0},{"carrier":"AZUL","number":"2644","kind":"Conexao","from":"SDU","to":"BSB","departure":1416424860,"arrival":1416431400,"index":1,"airplane":0}]}],"volta":[{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~9176~ ~~BSB~11\/26\/2014 06:29~CNF~11\/26\/2014 07:52~","fee_arrival":"0","trip":"2","number":"9176","stops":0,"from":"BSB","to":"CNF","departure":1416990540,"arrival":1416995520},"Trip":[{"from":"BSB","to":"CNF","number":"9176","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416990540,"arrival":1416995520,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~4431~ ~~BSB~11\/26\/2014 10:25~CNF~11\/26\/2014 11:56~","fee_arrival":"0","trip":"2","number":"4431","stops":0,"from":"BSB","to":"CNF","departure":1417004700,"arrival":1417010160},"Trip":[{"from":"BSB","to":"CNF","number":"4431","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417004700,"arrival":1417010160,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4951~ ~~BSB~11\/26\/2014 16:35~CNF~11\/26\/2014 17:59~","fee_arrival":"0","trip":"2","number":"4951","stops":0,"from":"BSB","to":"CNF","departure":1417026900,"arrival":1417031940},"Trip":[{"from":"BSB","to":"CNF","number":"4951","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417026900,"arrival":1417031940,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~4421~ ~~BSB~11\/26\/2014 21:01~CNF~11\/26\/2014 22:25~","fee_arrival":"0","trip":"2","number":"4421","stops":0,"from":"BSB","to":"CNF","departure":1417042860,"arrival":1417047900},"Trip":[{"from":"BSB","to":"CNF","number":"4421","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417042860,"arrival":1417047900,"index":0}]},{"Flight":{"price_children":0,"price_adults":222.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~S~~S114DTAD~14DT~~1~X|AD~2641~ ~~BSB~11\/26\/2014 08:43~SDU~11\/26\/2014 10:26~^AD~6991~ ~~SDU~11\/26\/2014 13:30~CNF~11\/26\/2014 14:48~","fee_arrival":"0","trip":"2","number":"2641","stops":1,"from":"BSB","to":"CNF","departure":1416998580,"arrival":1417020480},"Trip":[{"from":"BSB","to":"SDU","number":"2641","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416998580,"arrival":1417004760,"index":0},{"carrier":"AZUL","number":"6991","kind":"Conexao","from":"SDU","to":"CNF","departure":1417015800,"arrival":1417020480,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":222.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~S~~S114DTAD~14DT~~1~X|AD~2641~ ~~BSB~11\/26\/2014 08:43~SDU~11\/26\/2014 10:26~^AD~5084~ ~~SDU~11\/26\/2014 11:50~CNF~11\/26\/2014 13:00~","fee_arrival":"0","trip":"2","number":"2641","stops":1,"from":"BSB","to":"CNF","departure":1416998580,"arrival":1417014000},"Trip":[{"from":"BSB","to":"SDU","number":"2641","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416998580,"arrival":1417004760,"index":0},{"carrier":"AZUL","number":"5084","kind":"Conexao","from":"SDU","to":"CNF","departure":1417009800,"arrival":1417014000,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":135.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~2643~ ~~BSB~11\/26\/2014 14:45~SDU~11\/26\/2014 16:34~^AD~2557~ ~~SDU~11\/26\/2014 21:24~CNF~11\/26\/2014 22:32~","fee_arrival":"0","trip":"2","number":"2643","stops":1,"from":"BSB","to":"CNF","departure":1417020300,"arrival":1417048320},"Trip":[{"from":"BSB","to":"SDU","number":"2643","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417020300,"arrival":1417026840,"index":0},{"carrier":"AZUL","number":"2557","kind":"Conexao","from":"SDU","to":"CNF","departure":1417044240,"arrival":1417048320,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":135.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~2643~ ~~BSB~11\/26\/2014 14:45~SDU~11\/26\/2014 16:34~^AD~2553~ ~~SDU~11\/26\/2014 17:06~CNF~11\/26\/2014 18:24~","fee_arrival":"0","trip":"2","number":"2643","stops":1,"from":"BSB","to":"CNF","departure":1417020300,"arrival":1417033440},"Trip":[{"from":"BSB","to":"SDU","number":"2643","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417020300,"arrival":1417026840,"index":0},{"carrier":"AZUL","number":"2553","kind":"Conexao","from":"SDU","to":"CNF","departure":1417028760,"arrival":1417033440,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":135.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~2639~ ~~BSB~11\/26\/2014 18:46~SDU~11\/26\/2014 20:35~^AD~2557~ ~~SDU~11\/26\/2014 21:24~CNF~11\/26\/2014 22:32~","fee_arrival":"0","trip":"2","number":"2639","stops":1,"from":"BSB","to":"CNF","departure":1417034760,"arrival":1417048320},"Trip":[{"from":"BSB","to":"SDU","number":"2639","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417034760,"arrival":1417041300,"index":0},{"carrier":"AZUL","number":"2557","kind":"Conexao","from":"SDU","to":"CNF","departure":1417044240,"arrival":1417048320,"index":1,"airplane":0}]}]}}}';
azul_teste = JSON.parse(azul_teste);

gol_teste = '{"independentes":{"gol_miles":{"ida":[{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416407400,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":6000,"price_adults_combo":94.9},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"1684","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416401400,"to":"BSB","arrival":1416407400,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416402420,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":6000,"price_adults_combo":94.9},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"2082","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416396300,"to":"BSB","arrival":1416402420,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1082","from":"CNF","departure":1416391500,"stops":0,"to":"BSB","arrival":1416396900,"price_children":0,"price_adults":171.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","price_adults_combo":94.9},"Trip":[{"number":"1082","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416391500,"to":"BSB","arrival":1416396900,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1805","from":"CNF","departure":1416401880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","price_adults_combo":94.9},"Trip":[{"number":"1805","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416401880,"to":"GRU","arrival":1416407100,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1807","from":"CNF","departure":1416404880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":13000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":6000,"price_adults_combo":94.9},"Trip":[{"number":"1807","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416404880,"to":"GRU","arrival":1416411000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1084","from":"CNF","departure":1416408780,"stops":0,"to":"BSB","arrival":1416412560,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1084","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416408780,"to":"BSB","arrival":1416412560,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1809","from":"CNF","departure":1416412500,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1809","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416412500,"to":"GRU","arrival":1416417000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1086","from":"CNF","departure":1416420660,"stops":0,"to":"BSB","arrival":1416425160,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1086","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416420660,"to":"BSB","arrival":1416425160,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416446220,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"1692","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416440400,"to":"BSB","arrival":1416446220,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416441540,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"2092","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416435600,"to":"BSB","arrival":1416441540,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1088","from":"CNF","departure":1416430080,"stops":0,"to":"BSB","arrival":1416435540,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1088","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416430080,"to":"BSB","arrival":1416435540,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1090","from":"CNF","departure":1416440100,"stops":0,"to":"BSB","arrival":1416445260,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1090","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416440100,"to":"BSB","arrival":1416445260,"kind":"Primeiro","index":0}]}],"volta":[{"Flight":{"trip":2,"number":"1081","from":"BSB","departure":1416997380,"stops":0,"to":"CNF","arrival":1417002720,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1081","carrier":"GOL G3","airplane":"","from":"BSB","departure":1416997380,"to":"CNF","arrival":1417002720,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1083","from":"BSB","departure":1417005000,"stops":0,"to":"CNF","arrival":1417009440,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1083","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417005000,"to":"CNF","arrival":1417009440,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1085","from":"BSB","departure":1417024680,"stops":0,"to":"CNF","arrival":1417029240,"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1085","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417024680,"to":"CNF","arrival":1417029240,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1980","from":"BSB","departure":1417035360,"stops":0,"to":"CNF","arrival":1417039080,"price_children":0,"price_adults":346.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1980","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417035360,"to":"CNF","arrival":1417039080,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1089","from":"BSB","departure":1417040940,"stops":0,"to":"CNF","arrival":1417045980,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1089","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417040940,"to":"CNF","arrival":1417045980,"kind":"Primeiro","index":0}]}]}},"combos":{"gol_miles":[{"ida":[{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416407400,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"1684","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416401400,"to":"BSB","arrival":1416407400,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416402420,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"2082","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416396300,"to":"BSB","arrival":1416402420,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1082","from":"CNF","departure":1416391500,"stops":0,"to":"BSB","arrival":1416396900,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1082","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416391500,"to":"BSB","arrival":1416396900,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1805","from":"CNF","departure":1416401880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1805","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416401880,"to":"GRU","arrival":1416407100,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1807","from":"CNF","departure":1416404880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":13000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1807","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416404880,"to":"GRU","arrival":1416411000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1084","from":"CNF","departure":1416408780,"stops":0,"to":"BSB","arrival":1416412560,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1084","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416408780,"to":"BSB","arrival":1416412560,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1809","from":"CNF","departure":1416412500,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1809","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416412500,"to":"GRU","arrival":1416417000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1086","from":"CNF","departure":1416420660,"stops":0,"to":"BSB","arrival":1416425160,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1086","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416420660,"to":"BSB","arrival":1416425160,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416446220,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"1692","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416440400,"to":"BSB","arrival":1416446220,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416441540,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"2092","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416435600,"to":"BSB","arrival":1416441540,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1088","from":"CNF","departure":1416430080,"stops":0,"to":"BSB","arrival":1416435540,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1088","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416430080,"to":"BSB","arrival":1416435540,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1090","from":"CNF","departure":1416440100,"stops":0,"to":"BSB","arrival":1416445260,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1090","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416440100,"to":"BSB","arrival":1416445260,"kind":"Primeiro","index":0}]}],"volta":[{"Flight":{"trip":"2","number":"1081","from":"BSB","departure":1416997380,"stops":0,"to":"CNF","arrival":1417002720,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1081","carrier":"GOL G3","airplane":"","from":"BSB","departure":1416997380,"to":"CNF","arrival":1417002720,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1083","from":"BSB","departure":1417005000,"stops":0,"to":"CNF","arrival":1417009440,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1083","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417005000,"to":"CNF","arrival":1417009440,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1085","from":"BSB","departure":1417024680,"stops":0,"to":"CNF","arrival":1417029240,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1085","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417024680,"to":"CNF","arrival":1417029240,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1980","from":"BSB","departure":1417035360,"stops":0,"to":"CNF","arrival":1417039080,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1980","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417035360,"to":"CNF","arrival":1417039080,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1089","from":"BSB","departure":1417040940,"stops":0,"to":"CNF","arrival":1417045980,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1089","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417040940,"to":"CNF","arrival":1417045980,"kind":"Primeiro","index":0}]}]}]}}';
gol_teste = JSON.parse(gol_teste);

tam_teste = '{"independentes":{"tam_miles":{"ida":[{"Flight":{"trip":"1","number":"JJ3818","stops":0,"from":"CNF","to":"BSB","departure":1416393180,"arrival":1416397920,"price_children":0,"price_adults":222.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416393180,"arrival":1416397920,"number":"JJ3818","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3856","stops":0,"from":"CNF","to":"BSB","departure":1416403200,"arrival":1416408300,"price_children":0,"price_adults":124.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416403200,"arrival":1416408300,"number":"JJ3856","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3844","stops":0,"from":"CNF","to":"BSB","departure":1416429420,"arrival":1416434700,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416429420,"arrival":1416434700,"number":"JJ3844","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3854","stops":0,"from":"CNF","to":"BSB","departure":1416440040,"arrival":1416445260,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416440040,"arrival":1416445260,"number":"JJ3854","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3441","stops":1,"from":"CNF","to":"BSB","departure":1416389400,"arrival":1416411720,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416389400,"arrival":1416394200,"number":"JJ3441","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416405180,"arrival":1416411720,"number":"JJ3700","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3441","stops":1,"from":"CNF","to":"BSB","departure":1416389400,"arrival":1416416580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416389400,"arrival":1416394200,"number":"JJ3441","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416410340,"arrival":1416416580,"number":"JJ3706","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3753","stops":1,"from":"CNF","to":"BSB","departure":1416391440,"arrival":1416410580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416391440,"arrival":1416395040,"number":"JJ3753","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416403140,"arrival":1416410580,"number":"JJ3024","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3753","stops":1,"from":"CNF","to":"BSB","departure":1416391440,"arrival":1416417960,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416391440,"arrival":1416395040,"number":"JJ3753","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416411660,"arrival":1416417960,"number":"JJ3026","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3385","stops":1,"from":"CNF","to":"BSB","departure":1416392340,"arrival":1416417960,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GIG","departure":1416392340,"arrival":1416395820,"number":"JJ3385","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416411660,"arrival":1416417960,"number":"JJ3026","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3385","stops":1,"from":"CNF","to":"BSB","departure":1416392340,"arrival":1416420480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GIG","departure":1416392340,"arrival":1416395820,"number":"JJ3385","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GIG","to":"BSB","departure":1416413760,"arrival":1416420480,"number":"JJ3820","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416409260,"price_children":0,"price_adults":215,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416403200,"arrival":1416409260,"number":"JJ3718","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416411720,"price_children":0,"price_adults":245.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416405180,"arrival":1416411720,"number":"JJ3700","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416416580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416410340,"arrival":1416416580,"number":"JJ3706","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416418320,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416412200,"arrival":1416418320,"number":"JJ3582","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3213","stops":1,"from":"CNF","to":"BSB","departure":1416400200,"arrival":1416416580,"price_children":0,"price_adults":314.9,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416400200,"arrival":1416404940,"number":"JJ3213","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416410340,"arrival":1416416580,"number":"JJ3706","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3213","stops":1,"from":"CNF","to":"BSB","departure":1416400200,"arrival":1416425880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416400200,"arrival":1416404940,"number":"JJ3213","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416419700,"arrival":1416425880,"number":"JJ3579","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3345","stops":1,"from":"CNF","to":"BSB","departure":1416403080,"arrival":1416418320,"price_children":0,"price_adults":230,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416403080,"arrival":1416408300,"number":"JJ3345","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416412200,"arrival":1416418320,"number":"JJ3582","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3345","stops":1,"from":"CNF","to":"BSB","departure":1416403080,"arrival":1416425880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416403080,"arrival":1416408300,"number":"JJ3345","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416419700,"arrival":1416425880,"number":"JJ3579","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3345","stops":1,"from":"CNF","to":"BSB","departure":1416403080,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416403080,"arrival":1416408300,"number":"JJ3345","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3263","stops":1,"from":"CNF","to":"BSB","departure":1416403620,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416403620,"arrival":1416409020,"number":"JJ3263","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3769","stops":1,"from":"CNF","to":"BSB","departure":1416407640,"arrival":1416428460,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416407640,"arrival":1416410880,"number":"JJ3769","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GIG","to":"BSB","departure":1416422160,"arrival":1416428460,"number":"JJ3814","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3769","stops":1,"from":"CNF","to":"BSB","departure":1416407640,"arrival":1416429300,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416407640,"arrival":1416410880,"number":"JJ3769","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416422580,"arrival":1416429300,"number":"JJ3826","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3769","stops":1,"from":"CNF","to":"BSB","departure":1416407640,"arrival":1416431340,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416407640,"arrival":1416410880,"number":"JJ3769","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416425280,"arrival":1416431340,"number":"JJ3148","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3343","stops":1,"from":"CNF","to":"BSB","departure":1416408360,"arrival":1416425880,"price_children":0,"price_adults":234.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416408360,"arrival":1416411900,"number":"JJ3343","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416419700,"arrival":1416425880,"number":"JJ3579","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3343","stops":1,"from":"CNF","to":"BSB","departure":1416408360,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416408360,"arrival":1416411900,"number":"JJ3343","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3343","stops":1,"from":"CNF","to":"BSB","departure":1416408360,"arrival":1416433140,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416408360,"arrival":1416411900,"number":"JJ3343","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3082","stops":1,"from":"CNF","to":"BSB","departure":1416410040,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416410040,"arrival":1416414540,"number":"JJ3082","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3082","stops":1,"from":"CNF","to":"BSB","departure":1416410040,"arrival":1416433140,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416410040,"arrival":1416414540,"number":"JJ3082","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416429360,"price_children":0,"price_adults":234.9,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416433140,"price_children":0,"price_adults":326.5,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416441480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416443580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416433140,"price_children":0,"price_adults":326.5,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416441480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416443580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416444840,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416438300,"arrival":1416444840,"number":"JJ3218","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3759","stops":1,"from":"CNF","to":"BSB","departure":1416419580,"arrival":1416436860,"price_children":0,"price_adults":299.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416419580,"arrival":1416423180,"number":"JJ3759","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416430320,"arrival":1416436860,"number":"JJ3028","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3759","stops":1,"from":"CNF","to":"BSB","departure":1416419580,"arrival":1416446640,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416419580,"arrival":1416423180,"number":"JJ3759","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416440220,"arrival":1416446640,"number":"JJ3030","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416441480,"price_children":0,"price_adults":326.5,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416443580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416444840,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416438300,"arrival":1416444840,"number":"JJ3218","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416448740,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416442680,"arrival":1416448740,"number":"JJ3714","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416441480,"price_children":0,"price_adults":558.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416443580,"price_children":0,"price_adults":430,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416444840,"price_children":0,"price_adults":543.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416438300,"arrival":1416444840,"number":"JJ3218","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416448740,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416442680,"arrival":1416448740,"number":"JJ3714","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416452100,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":"1"},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416446100,"arrival":1416452100,"number":"JJ3180","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3755","stops":1,"from":"CNF","to":"BSB","departure":1416432360,"arrival":1416446640,"price_children":0,"price_adults":299.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416432360,"arrival":1416435600,"number":"JJ3755","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416440220,"arrival":1416446640,"number":"JJ3030","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3217","stops":1,"from":"CNF","to":"BSB","departure":1416434220,"arrival":1416448740,"price_children":0,"price_adults":363.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416434220,"arrival":1416439080,"number":"JJ3217","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416442680,"arrival":1416448740,"number":"JJ3714","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3341","stops":1,"from":"CNF","to":"BSB","departure":1416436560,"arrival":1416452100,"price_children":0,"price_adults":262.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":"1"},"Trip":[{"from":"CNF","to":"GRU","departure":1416436560,"arrival":1416441900,"number":"JJ3341","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416446100,"arrival":1416452100,"number":"JJ3180","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]}],"volta":[{"Flight":{"trip":"2","number":"JJ3845","stops":0,"from":"BSB","to":"CNF","departure":1417011960,"arrival":1417016400,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417011960,"arrival":1417016400,"number":"JJ3845","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3857","stops":0,"from":"BSB","to":"CNF","departure":1417027200,"arrival":1417032120,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417027200,"arrival":1417032120,"number":"JJ3857","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3819","stops":0,"from":"BSB","to":"CNF","departure":1417037760,"arrival":1417042320,"price_children":0,"price_adults":192,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417037760,"arrival":1417042320,"number":"JJ3819","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3853","stops":0,"from":"BSB","to":"CNF","departure":1417045320,"arrival":1417050900,"price_children":0,"price_adults":95,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417045320,"arrival":1417050900,"number":"JJ3853","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3181","stops":1,"from":"BSB","to":"CNF","departure":1416988620,"arrival":1417005840,"price_children":0,"price_adults":250.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1416988620,"arrival":1416994500,"number":"JJ3181","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417001100,"arrival":1417005840,"number":"JJ3344","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3181","stops":1,"from":"BSB","to":"CNF","departure":1416988620,"arrival":1417011480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1416988620,"arrival":1416994500,"number":"JJ3181","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417004340,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1416999420,"arrival":1417004340,"number":"JJ3262","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417007640,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417003080,"arrival":1417007640,"number":"JJ3216","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417011480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417018020,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417007640,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417003080,"arrival":1417007640,"number":"JJ3216","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417011480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417018020,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417021200,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":48.06,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417011480,"price_children":0,"price_adults":274.5,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417018020,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417021200,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417024680,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3723","stops":1,"from":"BSB","to":"CNF","departure":1416999660,"arrival":1417018020,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416999660,"arrival":1417005900,"number":"JJ3723","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3723","stops":1,"from":"BSB","to":"CNF","departure":1416999660,"arrival":1417021200,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1416999660,"arrival":1417005900,"number":"JJ3723","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3723","stops":1,"from":"BSB","to":"CNF","departure":1416999660,"arrival":1417024680,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416999660,"arrival":1417005900,"number":"JJ3723","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417018020,"price_children":0,"price_adults":191.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417024680,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417031220,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417031880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3578","stops":1,"from":"BSB","to":"CNF","departure":1417006920,"arrival":1417021200,"price_children":0,"price_adults":254.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"GRU","departure":1417006920,"arrival":1417012800,"number":"JJ3578","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3578","stops":1,"from":"BSB","to":"CNF","departure":1417006920,"arrival":1417031220,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417006920,"arrival":1417012800,"number":"JJ3578","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3578","stops":1,"from":"BSB","to":"CNF","departure":1417006920,"arrival":1417031880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417006920,"arrival":1417012800,"number":"JJ3578","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417024680,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417031220,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417031880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417038000,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":48.06,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417033800,"arrival":1417038000,"number":"JJ3326","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3457","stops":1,"from":"BSB","to":"CNF","departure":1417010700,"arrival":1417038000,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417010700,"arrival":1417020720,"number":"JJ3457","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417033800,"arrival":1417038000,"number":"JJ3326","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3457","stops":1,"from":"BSB","to":"CNF","departure":1417010700,"arrival":1417038780,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417010700,"arrival":1417020720,"number":"JJ3457","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417034520,"arrival":1417038780,"number":"JJ3264","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417031220,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417031880,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417038000,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417033800,"arrival":1417038000,"number":"JJ3326","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417038780,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417034520,"arrival":1417038780,"number":"JJ3264","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417042500,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417037880,"arrival":1417042500,"number":"JJ3224","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3827","stops":1,"from":"BSB","to":"CNF","departure":1417019820,"arrival":1417046040,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GIG","departure":1417019820,"arrival":1417025820,"number":"JJ3827","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"CNF","departure":1417042440,"arrival":1417046040,"number":"JJ3752","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3705","stops":1,"from":"BSB","to":"CNF","departure":1417024200,"arrival":1417038780,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417024200,"arrival":1417030680,"number":"JJ3705","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417034520,"arrival":1417038780,"number":"JJ3264","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3705","stops":1,"from":"BSB","to":"CNF","departure":1417024200,"arrival":1417042500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417024200,"arrival":1417030680,"number":"JJ3705","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417037880,"arrival":1417042500,"number":"JJ3224","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3705","stops":1,"from":"BSB","to":"CNF","departure":1417024200,"arrival":1417048500,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417024200,"arrival":1417030680,"number":"JJ3705","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3027","stops":1,"from":"BSB","to":"CNF","departure":1417026600,"arrival":1417046040,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"SDU","departure":1417026600,"arrival":1417032240,"number":"JJ3027","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"CNF","departure":1417042440,"arrival":1417046040,"number":"JJ3752","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3717","stops":1,"from":"BSB","to":"CNF","departure":1417033200,"arrival":1417048500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417033200,"arrival":1417038720,"number":"JJ3717","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3717","stops":1,"from":"BSB","to":"CNF","departure":1417033200,"arrival":1417056540,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":17000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1417033200,"arrival":1417038720,"number":"JJ3717","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417052100,"arrival":1417056540,"number":"JJ3442","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3721","stops":1,"from":"BSB","to":"CNF","departure":1417035240,"arrival":1417048500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417035240,"arrival":1417040880,"number":"JJ3721","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3721","stops":1,"from":"BSB","to":"CNF","departure":1417035240,"arrival":1417056540,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":17000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1417035240,"arrival":1417040880,"number":"JJ3721","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417052100,"arrival":1417056540,"number":"JJ3442","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3727","stops":1,"from":"BSB","to":"CNF","departure":1417035300,"arrival":1417048500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417035300,"arrival":1417041420,"number":"JJ3727","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3587","stops":1,"from":"BSB","to":"CNF","departure":1417035600,"arrival":1417056540,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":17000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"GRU","departure":1417035600,"arrival":1417041600,"number":"JJ3587","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417052100,"arrival":1417056540,"number":"JJ3442","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]}]}}}';
tam_teste = JSON.parse(tam_teste);
*/

// Hash com informações dos aeroportos (sigla => nome)
var airports = '<?php if(isset($hashToAirports)) echo json_encode($hashToAirports); ?>';
airports = $.parseJSON(airports);

// Hash com informações dos programas de milhas (sigla => nome)
var programs = '<?php if(isset($programsByHash)) echo json_encode($programsByHash); ?>';
programs = $.parseJSON(programs);

var search = '<?php if(isset($pesquisa)) echo json_encode($pesquisa); ?>';
search = $.parseJSON(search);
if(search)
{
	search["adults"]   = parseInt(search["adults"]);
	search["children"] = parseInt(search["children"]);
	search["babies"]   = parseInt(search["babies"]);


	function validateFormSelectFlights()
	{
		if(search['trip'] == "R")
		{
			if($('#TransactionVooida').val() && $('#TransactionVoovolta').val()) return true;
			else
			{
				if(!$('#TransactionVoovolta').val())
				{
					$('#validaVooVoltaTabela').attr("style", "");
					$(window).scrollTop($("#tabela_volta").offset())

				}
				if(!$('#TransactionVooida').val())
				{
					$('#validaVooIdaTabela').attr("style", "");
					$(window).scrollTop($("#tabela_ida").offset())
				}
				return false;
			}
		}
		else
		{
			if($('#TransactionVooida').val()) return true;
			else
			{
				$('#validaVooIdaTabela').attr("style", "");
				return false;
			}
		}
	}


	jQuery.validator.addMethod("idadeadulta", function(value) {

		data = value.split("/");

		if(search["trip"] == "R") dataVoo = search["arrival"];
		else dataVoo = search["departure"];

		now = new Date(dataVoo+" 00:00:00");
		birth = new Date(data[2]+"-"+data[1]+"-"+data[0]+" 00:00:00");

		age = calculateAge(birth, now);

		if(age >= 12) return true;
		else return false;

	}, "Um passageiro adulto deve possuir mais que 12 anos até a data do(s) voo(s).");

	jQuery.validator.addMethod("idadecrianca", function(value) {

		data = value.split("/");

		if(search["trip"] == "R") dataVoo = search["arrival"];
		else dataVoo = search["departure"];

		now = new Date(dataVoo+" 00:00:00");
		birth = new Date(data[2]+"-"+data[1]+"-"+data[0]+" 00:00:00");

		age = calculateAge(birth, now);

		if(age < 12 && age >= 2) return true;
		else return false;

	}, "É considerado criança o passageiro entre 2 e 12 anos antes da data do(s) voo(s).");


	jQuery.validator.addMethod("idadebebe", function(value) {

		data = value.split("/");

		if(search["trip"] == "R") dataVoo = search["arrival"];
		else dataVoo = search["departure"];

		now = new Date(dataVoo+" 00:00:00");
		birth = new Date(data[2]+"-"+data[1]+"-"+data[0]+" 00:00:00");

		age = calculateAge(birth, now);

		if(age < 2) return true;
		else return false;

	}, "É considerado bebê o passageiro menor que 2 anos antes da data do(s) voo(s).");
}



var searchForm = '<?php if(isset($pesquisa)) echo json_encode($pesquisaForm); ?>';
searchForm = $.parseJSON(searchForm);
if(searchForm)
{
	$("#SearchesTrip").val(searchForm["trip"]);
	$("#SearchesFrom").val(searchForm["from"]);
	$("#SearchesTo").val(searchForm["to"]);
	$("#SearchesDeparture").val(searchForm["departure"]);
	$("#SearchesArrival").val(searchForm["arrival"]);
	$("#SearchesAdults").val(searchForm["adults"]);
	$("#SearchesChildren").val(searchForm["children"]);
	$("#SearchesBabies").val(searchForm["babies"]);
}


$(window).scroll(function(){

	//off = $("#localAnimate").offset();acompanhamentoDivAnime
	max = $("#localAnimate").height();
	max -= $("#acompanhamentoDivAnime").height();
	max = max - 100;

	if(($(window).scrollTop() < max) && $("body").width() >= 767)
	{
		$("#acompanhamentoDivAnime").stop().animate({ "marginTop": ($(window).scrollTop()) + "px"}, "slow");
	}
	if($("body").width() < 767)
	{
		$("#acompanhamentoDivAnime").stop().animate({ "marginTop": "0" + "px"}, "slow");
	}
});



function timestamp2BrasilHM(timestamp)
{
	time = new Date(parseInt(timestamp)*1000);
	hour = time.getHours();
	min = time.getMinutes();
	if(hour < 10) hour = "0" + hour;
	if(min  < 10) min  = "0" + min;
	time = hour+":"+min;

	return time;
}









function criarAcompanhamento(trecho, voo, preco, precoE, milhasA, milhasC)
{
	if(preco > 0) saldo = preco - precoE;
	else saldo = 0;

	str = "";
	if(trecho == "ida") str = "Ida";
	else str = "Volta";

	html = '<div id="saldoacompanhamento'+trecho+'" value="'+saldo+'" style="text-align: center; background-color: #71C2E2; color: #FFF; font-weight: bold; font-size: 16px;">';
		html += str;
	html += '</div>';
	html += '<div style="background-color: #FFFFFF">';
		html += '<table class="table" style="margin: 0px !important;">';
			for(i = 0; i < voo["Trip"].length; i++)
			{
				partida = timestamp2BrasilHM(voo["Trip"][i]["departure"]);
				chegada = timestamp2BrasilHM(voo["Trip"][i]["arrival"]);

				html += '<tr>';
					html += '<td style="border: none !important; padding: 2px !important;">'+voo["Trip"][i]["from"]+" "+partida+'</td>';
					html += '<td style="border: none !important; padding: 2px !important;">&rarr;</td>';
					html += '<td style="border: none !important; padding: 2px !important; text-align: right;">'+voo["Trip"][i]["to"]+" "+chegada+'</td>';
				html += '</tr>';
			}
		html += '</table>';
	html += '</div>';
	html += '<div style="background-color: #F5F5F5">';
		html += '<table class="table" data="" style="margin: 0px !important;">';
			html += '<tr>';

				paradas = voo["Trip"].length - 1;
				if(paradas == 0) paradas = "Voo Direto";
				else
				{
					if(paradas == 1) paradas = "1 Parada";
					else paradas = paradas+" Paradas";
				}

				part = new Date(parseInt(voo["Flight"]["departure"])*1000);
				cheg = new Date(parseInt(voo["Flight"]["arrival"])*1000);
				date = cheg - part;
				hd = parseInt((date/1000/60/60).toFixed(2));
				md = (date/1000/60/60 - parseInt(date/1000/60/60))*60;
				md = parseInt(md.toFixed(2));

				html += '<td style="border: none !important; padding: 2px !important;">'+paradas+'</td>';
				html += '<td style="border: none !important; padding: 2px !important; text-align: right;">Duração '+hd+"h "+md+"m"+'</td>';
			html += '</tr>';
		html += '</table>';
	html += '</div>';
	html += '<div style="background-color: #FFFFFF">';
		html += '<table class="table" style="margin: 0px !important;">';
			if(search["adults"] > 0)
			{
				html += '<tr>';
					html += '<td style="border: none !important; padding: 2px !important;">'+search["adults"]+' Adulto</td>';
					html += '<td style="border: none !important; padding: 2px !important; text-align: right;"><b>'+accounting.formatMoney(milhasA, "", 0, ".", "")+' pts</b></td>';
				html += '</tr>';
			}
			if(search["children"] > 0)
			{
				html += '<tr>';
					html += '<td style="border: none !important; padding: 2px !important;">'+search["children"]+'x Criança</td>';
					html += '<td style="border: none !important; padding: 2px !important; text-align: right;"><b>'+accounting.formatMoney(milhasC, "", 0, ".", "")+' pts</b></td>';
				html += '</tr>';
			}
			if(search["children"] > 0)
			{
				html += '<tr>';
					html += '<td style="border: none !important; padding: 2px !important;">'+search["babies"]+'x Bebê</td>';
					html += '<td style="border: none !important; padding: 2px !important; text-align: right;"><b>0 pts</b></td>';
				html += '</tr>';
			}
		html += '</table>';
	html += '</div>';
	html += '<div>';
		html += '<table class="table" style="margin: 0px !important;">';
			html += '<tr style="background-color: #F5F5F5">';
				html += '<td style="border: none !important; padding: 2px !important;">preço na Cia</td>';
				html += '<td width="10%" style="border: none !important; padding: 2px !important;">R$</td>';
				html += '<td style="border: none !important; padding: 2px !important; text-align: right;"><b>'+accounting.formatMoney(preco.toFixed(2), "", 2, ".", ",")+'</b></td>';
			html += '</tr>';
			html += '<tr style="background-color: #FFF">';
				html += '<td style="border: none !important; padding: 2px !important;">preço na BDS</td>';
				html += '<td width="10%" style="border: none !important; padding: 2px !important;">R$</td>';
				html += '<td style="border: none !important; padding: 2px !important; text-align: right;"><b>'+accounting.formatMoney(precoE.toFixed(2), "", 2, ".", ",")+'</b></td>';
			html += '</tr>';
		html += '</table>';
	html += '</div>';

	return html;
}

function criarAcompanhamentoEconomia()
{
	saldo1 = $("#saldoacompanhamentoida").attr("value");
	saldo2 = $("#saldoacompanhamentovolta").attr("value");

	if(saldo1) saldo1 = parseFloat(saldo1);
	else saldo1 = 0;
	if(saldo2) saldo2 = parseFloat(saldo2);
	else saldo2 = 0;

	if((saldo1+saldo2) < 0) bg_color = '#E06D2C';
	else bg_color = '#80C03B';

	html = '<div style="background-color: '+bg_color+'">';
	html += '<table class="table" style="margin: 0px !important;">';
	html += '<tr>';
	html += '<td style="border: none !important; padding: 2px !important; color: #FFF;"><b>Economia</b></td>';
	html += '<td style="border: none !important; padding: 2px !important; text-align: right; color: #FFF;"><b>'+accounting.formatMoney((saldo1+saldo2).toFixed(2), "R$ ", 2, ".", ",")+'</b></td>';
	html += '</tr>';
	html += '</table>';
	html += '</div>';

	$("#acompanhamentoeconomia").html(html);
}






function abrirDetalhes(id)
{
	$('#btnOpenDetails__'+id).attr('style', 'display:none;');
	$("#trDetails__"+id).fadeIn("slow");
	$('#btnCloseDetails__'+id).attr('style', '');
}

function fecharDetalhes(id)
{
	$('#btnCloseDetails__'+id).attr('style', 'display:none;');
	$("#trDetails__"+id).fadeOut("slow");
	$('#btnOpenDetails__'+id).attr('style', '');
}








function fecharVoosOperadora(trecho, operadora, naoFechar)
{
	trs = $('tr[id*="trVoo__'+trecho+'__'+operadora+'"]');
	count = trs.length;
	for(i=0; i< count; i++)
	{
		trFechar = $(trs[i]);
		if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

		trFechar.fadeOut("slow");

		$('#inputVoo__'+trFechar.attr('id').replace("trVoo__", "")).prop("checked", false);

		id = trFechar.attr('id');
		id = id.split('__');
		nameId = id[2];
		for(j=3; j< id.length; j++) nameId += '__'+id[j];
		fecharDetalhes(nameId);
	}
}

function abrirVoosOperadora(trecho, operadora, naoFechar)
{
	trs = $('tr[id*="trVoo__'+trecho+'__'+operadora+'"]');
	count = trs.length;
	for(i=0; i< count; i++)
	{
		trFechar = $(trs[i]);
		if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

		trFechar.fadeIn("slow");

		$('#inputVoo__'+trFechar.attr('id').replace("trVoo__", "")).prop("checked", false);

		id = trFechar.attr('id');
		id = id.split('__');
		nameId = id[2];
		for(j=3; j< id.length; j++) nameId += '__'+id[j];
		fecharDetalhes(nameId);
	}
}








function fecharTodosVoos(trecho, naoFechar)
{
	trs = $('tr[id*="trVoo__'+trecho+'__"]');
	count = trs.length;
	for(i=0; i< count; i++)
	{
		trFechar = $(trs[i]);

		if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

		trFechar.prop("checked", false);
		trFechar.fadeOut("slow");
		id = $(trs[i]).attr('id');
		id = id.split('__');
		nameId = id[2];
		for(j=3; j< id.length; j++) nameId += '__'+id[j];
		fecharDetalhes(nameId);
	}
}

function abrirTodosVoos(trecho, naoFechar)
{
	trs = $('tr[id*="trVoo__'+trecho+'__"]');
	count = trs.length;
	for(i=0; i< count; i++)
	{
		trFechar = $(trs[i]);

		if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

		trFechar.prop("checked", false);
		trFechar.fadeIn("slow");
		id = $(trs[i]).attr('id');
		id = id.split('__');
		nameId = id[2];
		for(j=3; j< id.length; j++) nameId += '__'+id[j];
		fecharDetalhes(nameId);
	}
}





function atualizaPrecoPromoSell2()
{

}


function atualizaPrecoNormalSell2()
{

}







function makeCssComboPrecos(id)
{
	if($("#inputVoo__"+id).attr("sellingmode") == "2")
	{
		$("#trVoo__"+id+" td div");

	}
}

function makeCssNormalPrecos(id)
{

}

function makeTodosCssNormalPrecos(id)
{

}







function buyRules(elemento)
{
	input = $(elemento);
	operacao = input.prop("checked");
	hash = input.attr('hash');

	id = input.attr('id');
	id = id.replace("inputVoo__", "");

	// ida azul miles 0
	infos = id.split('__');
	trecho = infos[0];
	hash   = infos[1];
	numero = infos[2];


	outroTrecho = "";
	if(trecho == "ida") outroTrecho = "volta";
	if(trecho == "volta") outroTrecho = "ida";


	if(operacao)
	{
		selected = $('input[id*="inputVoo__'+id+'"]');
		voo = JSON.parse(selected.val());
		$('#TransactionVoo'+trecho).val(selected.val());

		if(trecho == "ida") str = "Ida";
		if(trecho == "volta") str = "Volta";
		$('#validaVoo'+str+'Tabela').attr("style", "display: none;");


		fecharTodosVoos(trecho, id);


		totalDinheiro = parseFloat(voo["Flight"]["totalDinheiro"]);
		totalEmpresa = parseFloat(voo["Flight"]["totalEmpresa"]);
		totalComboDinheiro = parseFloat(voo["Flight"]["totalComboDinheiro"]);
		totalComboEmpresa = parseFloat(voo["Flight"]["totalComboEmpresa"]);

		// usa preco combo

		usandoCombo = false;
		if(search["trip"] == "R")
		{

			selectedIda = $('input[id*="inputVoo__ida"]:checked');
			selectedVolta = $('input[id*="inputVoo__volta"]:checked');
			if(selectedIda.length > 0 && selectedVolta.length > 0)
			{
				hashIda   = selectedIda.attr('hash');
				hashVolta = selectedVolta.attr('hash');
				if(hashIda == hashVolta)
				{
					if(programs[hashIda]["selling_mode"] == "2")
					{
						if(totalComboEmpresa < totalEmpresa && totalComboEmpresa > 0)
						{
							milhasA = parseInt(voo["Flight"]["miles_adults_combo"]);
							milhasC = parseInt(voo["Flight"]["miles_children_combo"]);
							$("#acompanhamento"+trecho).html(criarAcompanhamento(trecho, voo, totalComboDinheiro, totalComboEmpresa, milhasA, milhasC));
							makeCssComboPrecos(id);
						}
						else
						{
							milhasA = parseInt(voo["Flight"]["miles_adults"]);
							milhasC = parseInt(voo["Flight"]["miles_children"]);
							$("#acompanhamento"+trecho).html(criarAcompanhamento(trecho, voo, totalDinheiro, totalEmpresa, milhasA, milhasC));
							makeCssNormalPrecos(id);
						}

						outro = $('input[id*="inputVoo__'+outroTrecho+'"]:checked');
						idOutro = outro.attr("id");
						idOutro = idOutro.replace("inputVoo__", "");
						outroVoo = JSON.parse(outro.val());
						totalDinheiro2 = parseFloat(outroVoo["Flight"]["totalDinheiro"]);
						totalEmpresa2 = parseFloat(outroVoo["Flight"]["totalEmpresa"]);
						totalComboDinheiro2 = parseFloat(outroVoo["Flight"]["totalComboDinheiro"]);
						totalComboEmpresa2 = parseFloat(outroVoo["Flight"]["totalComboEmpresa"]);

						if(totalComboEmpresa2 < totalEmpresa2 && totalComboEmpresa2 > 0)
						{
							milhasA2 = parseInt(outroVoo["Flight"]["miles_adults_combo"]);
							milhasC2 = parseInt(outroVoo["Flight"]["miles_children_combo"]);
							$("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalComboDinheiro2, totalComboEmpresa2, milhasA2, milhasC2));
							makeCssComboPrecos(idOutro);
						}
						else
						{
							milhasA2 = parseInt(outroVoo["Flight"]["miles_adults"]);
							milhasC2 = parseInt(outroVoo["Flight"]["miles_children"]);
							$("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalDinheiro2, totalEmpresa2, milhasA2, milhasC2));
							makeCssNormalPrecos(idOutro);
						}

						usandoCombo = true;
					}
				}
			}

		}

		if(!usandoCombo)
		{
			milhasA = parseInt(voo["Flight"]["miles_adults"]);
			milhasC = parseInt(voo["Flight"]["miles_children"]);
			$("#acompanhamento"+trecho).html(criarAcompanhamento(trecho, voo, totalDinheiro, totalEmpresa, milhasA, milhasC));
			makeCssNormalPrecos(id);

			outro = $('input[id*="inputVoo__'+outroTrecho+'"]:checked');
			if(outro.length > 0)
			{
				idOutro = outro.attr("id");
				idOutro = idOutro.replace("inputVoo__", "");

				outroVoo = JSON.parse(outro.val());
				totalDinheiro2 = parseFloat(outroVoo["Flight"]["totalDinheiro"]);
				totalEmpresa2 = parseFloat(outroVoo["Flight"]["totalEmpresa"]);
				milhasA2 = parseInt(outroVoo["Flight"]["miles_adults"]);
				milhasC2 = parseInt(outroVoo["Flight"]["miles_children"]);

				$("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalDinheiro2, totalEmpresa2, milhasA2, milhasC2));
				makeCssNormalPrecos(idOutro);
			}
		}

		criarAcompanhamentoEconomia();


		$(window).scrollTop($("#tabela_"+trecho).offset())
	}
	else
	{
		$('#TransactionVoo'+trecho).val("");

		abrirTodosVoos(trecho, id);
		if(trecho == "ida") str = "Ida";
		else str = "Volta";

		makeTodosCssNormalPrecos();

		$("#acompanhamento"+trecho).html('<div id="saldoacompanhamento'+trecho+'" value="0" style="text-align: center; background-color: #71C2E2; color: #FFF; font-weight: bold; font-size: 16px;">'+str+'</div><div style="text-align: center; color: #ADADAD;">nenhum voo selecionado</div>');
		outro = $('input[id*="inputVoo__'+outroTrecho+'"]:checked');
		if(outro.length > 0)
		{
			outroVoo = JSON.parse(outro.val());
			totalDinheiro = parseFloat(outroVoo["Flight"]["totalDinheiro"]);
			totalEmpresa = parseFloat(outroVoo["Flight"]["totalEmpresa"]);
			milhasA = parseInt(outroVoo["Flight"]["miles_adults"]);
			milhasC = parseInt(outroVoo["Flight"]["miles_children"]);

			$("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalDinheiro, totalEmpresa, milhasA, milhasC));
		}

		criarAcompanhamentoEconomia();
	}
}








function tr_flights(voos, way, hash)
{
	html = "";
	for(i = 0; i < voos.length; i++)
	{
		voos[i]["Flight"]["hash"] = hash;

		partida = timestamp2BrasilHM(voos[i]["Flight"]["departure"]);
		chegada = timestamp2BrasilHM(voos[i]["Flight"]["arrival"]);

		if(!voos[i]["Flight"]["price_adults"]) valorDinheiroAdt = 0;
		else valorDinheiroAdt = parseFloat(voos[i]["Flight"]["price_adults"]);
		if(!voos[i]["Flight"]["price_children"]) valorDinheiroCri = 0;
		else valorDinheiroCri = parseFloat(voos[i]["Flight"]["price_children"]);

		if(!voos[i]["Flight"]["miles_adults"]) valorMilhasAdt = 0;
		else valorMilhasAdt = parseInt(voos[i]["Flight"]["miles_adults"]);
		if(!voos[i]["Flight"]["miles_children"]) valorMilhasCri = 0;
		else valorMilhasCri = parseInt(voos[i]["Flight"]["miles_children"]);

		if(!voos[i]["Flight"]["miles_adults"]) valorEmpresaAdt = 0;
		else valorEmpresaAdt = parseFloat(voos[i]["Flight"]["miles_adults"])*programs[hash]["price"]/10000;
		if(!voos[i]["Flight"]["miles_children"]) valorEmpresaCri = 0;
		else valorEmpresaCri = parseFloat(voos[i]["Flight"]["miles_children"])*programs[hash]["price"]/10000;



		voos[i]["Flight"]["price_adults"]     = valorDinheiroAdt;
		voos[i]["Flight"]["price_children"]   = valorDinheiroCri;
		voos[i]["Flight"]["miles_adults"]     = valorMilhasAdt;
		voos[i]["Flight"]["miles_children"]   = valorMilhasCri;
		voos[i]["Flight"]["empresa_adults"]   = valorEmpresaAdt;
		voos[i]["Flight"]["empresa_children"] = valorEmpresaCri;


		if(voos[i]["Flight"]["price_adults_combo"]) valorComboDinheiroAdt = 0;
		else valorComboDinheiroAdt = parseFloat(voos[i]["Flight"]["price_adults_combo"]);
		if(!voos[i]["Flight"]["price_children_combo"]) valorComboDinheiroCri = 0;
		else valorComboDinheiroCri = parseFloat(voos[i]["Flight"]["price_children_combo"]);

		if(!voos[i]["Flight"]["miles_adults_combo"]) valorComboMilhasAdt = 0;
		else valorComboMilhasAdt = parseInt(voos[i]["Flight"]["miles_adults_combo"]);
		if(!voos[i]["Flight"]["miles_children_combo"]) valorComboMilhasCri = 0;
		else valorComboMilhasCri = parseInt(voos[i]["Flight"]["miles_children_combo"]);

		if(!voos[i]["Flight"]["miles_adults_combo"]) valorComboEmpresaAdt = 0;
		else valorComboEmpresaAdt = parseFloat(voos[i]["Flight"]["miles_adults_combo"])*programs[hash]["price"]/10000;
		if(!voos[i]["Flight"]["miles_children_combo"]) valorComboEmpresaCri = 0;
		else valorComboEmpresaCri = parseFloat(voos[i]["Flight"]["miles_children_combo"])*programs[hash]["price"]/10000;



		voos[i]["Flight"]["price_adults_combo"]     = valorComboDinheiroAdt;
		voos[i]["Flight"]["price_children_combo"]   = valorComboDinheiroCri;
		voos[i]["Flight"]["miles_adults_combo"]     = valorComboMilhasAdt;
		voos[i]["Flight"]["miles_children_combo"]   = valorComboMilhasCri;
		voos[i]["Flight"]["empresa_adults_combo"]   = valorComboEmpresaAdt;
		voos[i]["Flight"]["empresa_children_combo"] = valorComboEmpresaCri;


		totalDinheiro = parseFloat((valorDinheiroAdt*search["adults"] + valorDinheiroCri*search["children"]).toFixed(2));
		totalMilhas = parseInt((valorMilhasAdt*search["adults"] + valorMilhasCri*search["children"]).toFixed(0));
		totalEmpresa = parseFloat((valorEmpresaAdt*search["adults"] + valorEmpresaCri*search["children"]).toFixed(2));

		totalComboDinheiro = parseFloat((valorComboDinheiroAdt*search["adults"] + valorComboDinheiroCri*search["children"]).toFixed(2));
		totalComboMilhas = parseInt((valorComboMilhasAdt*search["adults"] + valorComboMilhasCri*search["children"]).toFixed(0));
		totalComboEmpresa = parseFloat((valorComboEmpresaAdt*search["adults"] + valorComboEmpresaCri*search["children"]).toFixed(2));

		voos[i]["Flight"]["totalDinheiro"] = totalDinheiro;
		voos[i]["Flight"]["totalMilhas"] = totalMilhas;
		voos[i]["Flight"]["totalEmpresa"] = totalEmpresa;
		voos[i]["Flight"]["totalComboDinheiro"] = totalComboDinheiro;
		voos[i]["Flight"]["totalComboMilhas"] = totalComboMilhas;
		voos[i]["Flight"]["totalComboEmpresa"] = totalComboEmpresa;


		if(valorDinheiroAdt > 0) txtDinheiroAdt = accounting.formatMoney(valorDinheiroAdt.toFixed(2), "R$ ", 2, ".", ",");
		else txtDinheiroAdt = " não informado ";
		if(valorDinheiroCri > 0) txtDinheiroCri = accounting.formatMoney(valorDinheiroCri.toFixed(2), "R$ ", 2, ".", ",");
		else txtDinheiroCri = " não informado ";

		if(valorMilhasAdt > 0) txtMilhasAdt = accounting.formatMoney(valorMilhasAdt, "", 0, ".", "");
		else txtMilhasAdt = " não informado ";
		if(valorMilhasCri > 0) txtMilhasCri = accounting.formatMoney(valorMilhasCri, "", 0, ".", "");
		else txtMilhasCri = " não informado ";

		if(valorEmpresaAdt > 0) txtEmpresaAdt = accounting.formatMoney(valorEmpresaAdt.toFixed(2), "R$ ", 2, ".", ",");
		else txtEmpresaAdt = " não informado ";
		if(valorEmpresaCri > 0) txtEmpresaCri = accounting.formatMoney(valorEmpresaCri.toFixed(2), "R$ ", 2, ".", ",");
		else txtEmpresaCri = " não informado ";

		if(valorComboDinheiroAdt > 0) txtComboDinheiroAdt = accounting.formatMoney(valorComboDinheiroAdt.toFixed(2), "R$ ", 2, ".", ",");
		else txtComboDinheiroAdt = " não informado ";
		if(valorComboDinheiroCri > 0) txtComboDinheiroCri = accounting.formatMoney(valorComboDinheiroCri.toFixed(2), "R$ ", 2, ".", ",");
		else txtComboDinheiroCri = " não informado ";

		if(valorComboMilhasAdt > 0) txtComboMilhasAdt = accounting.formatMoney(valorComboMilhasAdt, "", 0, ".", "");
		else txtComboMilhasAdt = " não informado ";
		if(valorComboMilhasCri > 0) txtComboMilhasCri = accounting.formatMoney(valorComboMilhasCri, "", 0, ".", "");
		else txtComboMilhasCri = " não informado ";

		if(valorComboEmpresaAdt > 0) txtComboEmpresaAdt = accounting.formatMoney(valorComboEmpresaAdt.toFixed(2), "R$ ", 2, ".", ",");
		else txtComboEmpresaAdt = " não informado ";
		if(valorComboEmpresaCri > 0) txtComboEmpresaCri = accounting.formatMoney(valorComboEmpresaCri.toFixed(2), "R$ ", 2, ".", ",");
		else txtComboEmpresaCri = " não informado ";



		taxaembarque = parseFloat(voos[i]["Flight"]["pre_fee"])+parseFloat(voos[i]["Flight"]["fee_departure"])+parseFloat(voos[i]["Flight"]["fee_arrival"]);
		taxaembarque = accounting.formatMoney(taxaembarque.toFixed(2), "R$ ", 2, ".", ",");




		json_flight = JSON.stringify(voos[i]);


		if(totalEmpresa > 0 || totalDinheiro > 0 || totalMilhas > 0 || totalComboEmpresa > 0 || totalComboDinheiro > 0 || totalComboMilhas > 0)
		{
			html += "<tr id='trVoo__"+way+"__"+hash+"__"+i+"' hash='"+hash+"' selling_mode='"+programs[hash]["selling_mode"]+"'>";


				html += "<td>";
					if(totalEmpresa > 0)
					{
						html += "<input type='checkbox' onchange='buyRules(this);' ";
						html += "hash='" + hash + "' ";
						html += "sellingmode='" + programs[hash]["selling_mode"] + "' ";
						html += "id='inputVoo__" + way + "__" + hash + "__" + i +"' ";
						html += "name='voos__" + way + "' ";
						html += "flightDataParadas='" + voos[i]["Flight"]["stops"] + "' ";
						html += "flightDataPartida='" + voos[i]["Flight"]["departure"] + "' ";
						html += "flightDataChegada='" + voos[i]["Flight"]["arrival"] + "' ";

						html += "flightDataAdtCia='" + valorDinheiroAdt + "' ";
						html += "flightDataCriCia='" + valorDinheiroCri + "' ";
						html += "flightDataAdtCiaCombo='" + valorComboDinheiroAdt + "' ";
						html += "flightDataCriCiaCombo='" + valorComboDinheiroCri + "' ";

						html += "flightDataAdtMil='" + valorMilhasAdt + "' ";
						html += "flightDataCriMil='" + valorMilhasCri + "' ";
						html += "flightDataAdtMilCombo='" + valorComboMilhasAdt + "' ";
						html += "flightDataCriMilCombo='" + valorComboMilhasCri + "' ";

						html += "flightDataAdtEmp='" + valorEmpresaAdt + "' ";
						html += "flightDataCriEmp='" + valorEmpresaCri + "' ";
						html += "flightDataAdtEmpCombo='" + valorComboEmpresaAdt + "' ";
						html += "flightDataCriEmpCombo='" + valorComboEmpresaCri + "' ";

						html += "value='" + json_flight + "'/>";
					}
					else
					{
						html += "<input type='checkbox' onchange='buyRules(this);' style='display:none;' ";
						html += "hash='" + hash + "' ";
						html += "sellingmode='" + programs[hash]["selling_mode"] + "' ";
						html += "id='inputVoo__" + way + "__" + hash + "__" + i +"' ";
						html += "name='voos__" + way + "' ";
						html += "flightDataParadas='" + voos[i]["Flight"]["stops"] + "' ";
						html += "flightDataPartida='" + voos[i]["Flight"]["departure"] + "' ";
						html += "flightDataChegada='" + voos[i]["Flight"]["arrival"] + "' ";

						html += "flightDataAdtCia='" + valorDinheiroAdt + "' ";
						html += "flightDataCriCia='" + valorDinheiroCri + "' ";
						html += "flightDataAdtCiaCombo='" + valorComboDinheiroAdt + "' ";
						html += "flightDataCriCiaCombo='" + valorComboDinheiroCri + "' ";

						html += "flightDataAdtMil='" + valorMilhasAdt + "' ";
						html += "flightDataCriMil='" + valorMilhasCri + "' ";
						html += "flightDataAdtMilCombo='" + valorComboMilhasAdt + "' ";
						html += "flightDataCriMilCombo='" + valorComboMilhasCri + "' ";

						html += "flightDataAdtEmp='" + valorEmpresaAdt + "' ";
						html += "flightDataCriEmp='" + valorEmpresaCri + "' ";
						html += "flightDataAdtEmpCombo='" + valorComboEmpresaAdt + "' ";
						html += "flightDataCriEmpCombo='" + valorComboEmpresaCri + "' ";

						html += "value='" + json_flight + "' disabled/>";
					}
				html += "</td>";


				html += "<td>";
					html += "<img src='/img/"+hash+"_ope.png' class='choice-header' style='max-width: 46px !important;' alt=''>";
				html += "</td>";


				html += "<td style='white-space: normal; word-break: break-all !important;'>"+voos[i]["Flight"]["number"]+"</td>";


				html += "<td>"+voos[i]["Flight"]["stops"]+"</td>";


				html += "<td title='"+airports[voos[i]["Flight"]["from"]]["name"]+"'>"+voos[i]["Flight"]["from"]+" "+partida+"</td>";


				html += "<td title='"+airports[voos[i]["Flight"]["to"]]["name"]+"'>"+voos[i]["Flight"]["to"]+" "+chegada+"</td>";



				cssEmp = "" ;
				if(totalDinheiro > totalEmpresa && totalEmpresa > 0) cssEmp = "compensa" ;
				else if(totalComboDinheiro > totalComboEmpresa && totalComboEmpresa > 0) cssEmp = "compensa" ;

				tdCia = "<td>";
				tdMilhas = "<td>";
				tdEmpresa = "<td class='"+cssEmp+"' >";
				// Modo combo pode existir
				if(search["trip"] == "R")
				{
					// Modo combo existe
					if(programs[hash]["selling_mode"] == "2")
					{

						if(totalEmpresa > 0 || totalDinheiro > 0 || totalMilhas > 0)
						{
							if(search["children"] > 0)
							{
								if(valorEmpresaAdt == valorEmpresaCri && valorDinheiroAdt == valorDinheiroCri && valorMilhasAdt == valorMilhasCri)
								{
									tdCia += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'>"+txtDinheiroAdt+"</div>";
									tdMilhas += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'>"+txtMilhasAdt+"</div>";
									tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'>"+txtEmpresaAdt+"</div>";
								}
								else
								{
									tdCia     += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'><div>"+txtDinheiroAdt+" adt</div><div>"+txtDinheiroCri+" cri</div></div>";
									tdMilhas  += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'><div>"+txtMilhasAdt+" adt</div><div>"+txtMilhasCri+" cri</div></div>";
									tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'><div>"+txtEmpresaAdt+" adt</div><div>"+txtEmpresaCri+" cri</div></div>";
								}
							}
							else
							{
								tdCia     += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'>"+txtDinheiroAdt+"</div>";
								tdMilhas  += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'>"+txtMilhasAdt+"</div>";
								tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'>"+txtEmpresaAdt+"</div>";
							}
						}

						if(totalComboEmpresa > 0 || totalComboDinheiro > 0 || totalComboMilhas > 0)
						{
							if(search["children"] > 0)
							{
								if(valorComboEmpresaAdt == valorComboEmpresaCri && valorComboDinheiroAdt == valorComboDinheiroCri && valorComboMilhasAdt == valorComboMilhasCri)
								{
									tdCia += "<div id='valorComboCia__"+way+"__"+hash+"__"+i+"'>"+txtComboDinheiroAdt+"</div>";
									tdMilhas += "<div id='valorComboMil__"+way+"__"+hash+"__"+i+"'>"+txtComboMilhasAdt+"</div>";
									tdEmpresa += "<div id='valorComboEmp__"+way+"__"+hash+"__"+i+"'>"+txtComboEmpresaAdt+"</div>";
								}
								else
								{
									tdCia     += "<div id='valorComboCia__"+way+"__"+hash+"__"+i+"'><div>"+txtComboDinheiroAdt+" adt</div><div>"+txtComboDinheiroCri+" cri</div></div>";
									tdMilhas  += "<div id='valorComboMil__"+way+"__"+hash+"__"+i+"'><div>"+txtComboMilhasAdt+" adt</div><div>"+txtComboMilhasCri+" cri</div></div>";
									tdEmpresa += "<div id='valorComboEmp__"+way+"__"+hash+"__"+i+"'><div>"+txtComboEmpresaAdt+" adt</div><div>"+txtComboEmpresaCri+" cri</div></div>";
								}
							}
							else
							{
								tdCia     += "<div id='valorComboCia__"+way+"__"+hash+"__"+i+"'>"+txtComboDinheiroAdt+"</div>";
								tdMilhas  += "<div id='valorComboMil__"+way+"__"+hash+"__"+i+"'>"+txtComboMilhasAdt+"</div>";
								tdEmpresa += "<div id='valorComboEmp__"+way+"__"+hash+"__"+i+"'>"+txtComboEmpresaAdt+"</div>";
							}
						}
					}
					// Modo combo nao existe
					else
					{
						if(search["children"] > 0)
						{
							if(valorEmpresaAdt == valorEmpresaCri && valorDinheiroAdt == valorDinheiroCri && valorMilhasAdt == valorMilhasCri)
							{
								tdCia += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'>"+txtDinheiroAdt+"</div>";
								tdMilhas += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'>"+txtMilhasAdt+"</div>";
								tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'>"+txtEmpresaAdt+"</div>";
							}
							else
							{
								tdCia     += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'><div>"+txtDinheiroAdt+" adt</div><div>"+txtDinheiroCri+" cri</div></div>";
								tdMilhas  += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'><div>"+txtMilhasAdt+" adt</div><div>"+txtMilhasCri+" cri</div></div>";
								tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'><div>"+txtEmpresaAdt+" adt</div><div>"+txtEmpresaCri+" cri</div></div>";
							}
						}
						else
						{
							tdCia     += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'>"+txtDinheiroAdt+"</div>";
							tdMilhas  += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'>"+txtMilhasAdt+"</div>";
							tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'>"+txtEmpresaAdt+"</div>";
						}
					}
				}
				else
				{
					if(search["children"] > 0)
					{
						if(valorEmpresaAdt == valorEmpresaCri && valorDinheiroAdt == valorDinheiroCri && valorMilhasAdt == valorMilhasCri)
						{
							tdCia += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'>"+txtDinheiroAdt+"</div>";
							tdMilhas += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'>"+txtMilhasAdt+"</div>";
							tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'>"+txtEmpresaAdt+"</div>";
						}
						else
						{
							tdCia     += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'><div>"+txtDinheiroAdt+" adt</div><div>"+txtDinheiroCri+" cri</div></div>";
							tdMilhas  += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'><div>"+txtMilhasAdt+" adt</div><div>"+txtMilhasCri+" cri</div></div>";
							tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'><div>"+txtEmpresaAdt+" adt</div><div>"+txtEmpresaCri+" cri</div></div>";
						}
					}
					else
					{
						tdCia     += "<div id='valorCia__"+way+"__"+hash+"__"+i+"'>"+txtDinheiroAdt+"</div>";
						tdMilhas  += "<div id='valorMil__"+way+"__"+hash+"__"+i+"'>"+txtMilhasAdt+"</div>";
						tdEmpresa += "<div id='valorEmp__"+way+"__"+hash+"__"+i+"'>"+txtEmpresaAdt+"</div>";
					}
				}
				tdCia += "</td>";
				tdMilhas += "</td>";
				tdEmpresa += "</td>";


				html += tdCia + tdMilhas + tdEmpresa;



				html += "<td>";
					html += "<div>"
						html += "<bottom id='btnCloseDetails__"+way+"__"+hash+"__"+i+"' class='btn btn-danger btn-mini' style='display: none;' onclick=\"fecharDetalhes('"+way+"__"+hash+"__"+i+"');\"><i class='icon-remove'></i></bottom>"
						html += "<bottom id='btnOpenDetails__"+way+"__"+hash+"__"+i+"' class='btn btn-success btn-mini' onclick=\"abrirDetalhes('"+way+"__"+hash+"__"+i+"');\"><i class='icon-zoom-in'></i></bottom>"
					html += "</div>"
				html += "</td>";

			html += "</tr>";

			html += "<tr style='display: none;' id='trDetails__"+way+"__"+hash+"__"+i+"'>";
				html += "<td colspan='10' style='background-color: "+programs[hash]['color']+";'>";
					html += "<div class='container-fluid'>";
						html += "<div class='row-fluid tituloDetalhesVoo'>";
							html += "Detalhes do Voo";
						html += "</div>";
						html += "<div class='row-fluid'>";
							html += "<div class='span12'>";
									html += "<table class='myCustomTable' align='center' width='100%' cellspacing='0' cellpadding='0' style='margin-bottom: 30px; background-color: #FFF;'>";
										html += "<tr style='background-color: #F3F3F3;'>";
											html += "<th style='text-align:center;'>A&eacute;rea</th>";
											html += "<th style='text-align:center;'>Aeronave</th>";
											html += "<th style='text-align:center;'>Sa&iacute;da</th>";
											html += "<th style='text-align:center;'>Chegada</th>";
										html += "</tr>";
										contColor = 0;

										for(j = 0; j < voos[i]["Trip"].length; j++)
										{
											partida = timestamp2BrasilHM(voos[i]["Trip"][j]["departure"]);
											chegada = timestamp2BrasilHM(voos[i]["Trip"][j]["arrival"]);

											html += "<tr>";
												html += "<td class='linhaDetalhesVoos"+(j%2)+"'>";
													html += "<b>"+voos[i]["Trip"][j]["carrier"]+"</b>";
												html += "</td>";
												html += "<td class='linhaDetalhesVoos"+(j%2)+"'>";
													html += "<b>"+voos[i]["Trip"][j]["number"]+"</b>";
													if(voos[i]["Trip"][j]["airplane"] != 0 && voos[i]["Trip"][j]["airplane"].length > 3)
													{
														html += "<BR>";
														html += ""+voos[i]["Trip"][j]["airplane"]+"";
													}
												html += "</td>";
												html += "<td class='linhaDetalhesVoos"+(j%2)+"'>";
													html += ""+airports[voos[i]["Trip"][j]["from"]]["name"]+"";
													html += " ["+partida+"] ";
												html += "</td>";
												html += "<td class='linhaDetalhesVoos"+(j%2)+"'>";
													html += ""+airports[voos[i]["Trip"][j]["to"]]["name"]+"";
													html += " ["+chegada+"] ";
												html += "</td>";
											html += "</tr>";
											contColor += 1;
										}
										html += "<tr>";
											html += "<td colspan='4' class='linhaDetalhesVoos"+(contColor%2)+"'>";
												html += "Taxa da embarque/desembarque: "+taxaembarque;
											html += "</td>";
										html += "</tr>";
									html += "</table>";
							html += "</div>";
						html += "</div>";
					html += "</div>";
				html += "</td>";
			html += "</tr>";
		}
	}
	return html;
}





/*
azul_teste = '{"independentes":{"azul_miles":{"ida":[{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4430~ ~~CNF~11\/19\/2014 08:07~BSB~11\/19\/2014 09:43~","fee_arrival":"0","trip":"1","number":"4430","stops":0,"from":"CNF","to":"BSB","departure":1416391620,"arrival":1416397380},"Trip":[{"from":"CNF","to":"BSB","number":"4430","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416391620,"arrival":1416397380,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4950~ ~~CNF~11\/19\/2014 12:10~BSB~11\/19\/2014 13:35~","fee_arrival":"0","trip":"1","number":"4950","stops":0,"from":"CNF","to":"BSB","departure":1416406200,"arrival":1416411300},"Trip":[{"from":"CNF","to":"BSB","number":"4950","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416406200,"arrival":1416411300,"index":0}]},{"Flight":{"price_children":0,"price_adults":142.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4440~ ~~CNF~11\/19\/2014 18:12~BSB~11\/19\/2014 19:44~","fee_arrival":"0","trip":"1","number":"4440","stops":0,"from":"CNF","to":"BSB","departure":1416427920,"arrival":1416433440},"Trip":[{"from":"CNF","to":"BSB","number":"4440","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416427920,"arrival":1416433440,"index":0}]},{"Flight":{"price_children":0,"price_adults":181.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~S~~S114DTAD~14DT~~1~X|AD~9175~ ~~CNF~11\/19\/2014 22:15~BSB~11\/19\/2014 23:37~","fee_arrival":"0","trip":"1","number":"9175","stops":0,"from":"CNF","to":"BSB","departure":1416442500,"arrival":1416447420},"Trip":[{"from":"CNF","to":"BSB","number":"9175","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416442500,"arrival":1416447420,"index":0}]},{"Flight":{"price_children":0,"price_adults":499.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~O~~O100DTAD~00DT~~1~X|AD~2550~ ~~CNF~11\/19\/2014 06:47~SDU~11\/19\/2014 07:56~^AD~2642~ ~~SDU~11\/19\/2014 11:30~BSB~11\/19\/2014 13:29~","fee_arrival":"0","trip":"1","number":"2550","stops":1,"from":"CNF","to":"BSB","departure":1416386820,"arrival":1416410940},"Trip":[{"from":"CNF","to":"SDU","number":"2550","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416386820,"arrival":1416390960,"index":0},{"carrier":"AZUL","number":"2642","kind":"Conexao","from":"SDU","to":"BSB","departure":1416403800,"arrival":1416410940,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5166~ ~~CNF~11\/19\/2014 09:42~SDU~11\/19\/2014 10:56~^AD~2638~ ~~SDU~11\/19\/2014 15:28~BSB~11\/19\/2014 17:16~","fee_arrival":"0","trip":"1","number":"5166","stops":1,"from":"CNF","to":"BSB","departure":1416397320,"arrival":1416424560},"Trip":[{"from":"CNF","to":"SDU","number":"5166","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416397320,"arrival":1416401760,"index":0},{"carrier":"AZUL","number":"2638","kind":"Conexao","from":"SDU","to":"BSB","departure":1416418080,"arrival":1416424560,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5166~ ~~CNF~11\/19\/2014 09:42~SDU~11\/19\/2014 10:56~^AD~2642~ ~~SDU~11\/19\/2014 11:30~BSB~11\/19\/2014 13:29~","fee_arrival":"0","trip":"1","number":"5166","stops":1,"from":"CNF","to":"BSB","departure":1416397320,"arrival":1416410940},"Trip":[{"from":"CNF","to":"SDU","number":"5166","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416397320,"arrival":1416401760,"index":0},{"carrier":"AZUL","number":"2642","kind":"Conexao","from":"SDU","to":"BSB","departure":1416403800,"arrival":1416410940,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5071~ ~~CNF~11\/19\/2014 11:42~SDU~11\/19\/2014 12:43~^AD~2644~ ~~SDU~11\/19\/2014 17:21~BSB~11\/19\/2014 19:10~","fee_arrival":"0","trip":"1","number":"5071","stops":1,"from":"CNF","to":"BSB","departure":1416404520,"arrival":1416431400},"Trip":[{"from":"CNF","to":"SDU","number":"5071","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416404520,"arrival":1416408180,"index":0},{"carrier":"AZUL","number":"2644","kind":"Conexao","from":"SDU","to":"BSB","departure":1416424860,"arrival":1416431400,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":529.9,"miles_children":0,"miles_adults":12000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~N~~N100DTAD~00DT~~1~X|AD~5071~ ~~CNF~11\/19\/2014 11:42~SDU~11\/19\/2014 12:43~^AD~2638~ ~~SDU~11\/19\/2014 15:28~BSB~11\/19\/2014 17:16~","fee_arrival":"0","trip":"1","number":"5071","stops":1,"from":"CNF","to":"BSB","departure":1416404520,"arrival":1416424560},"Trip":[{"from":"CNF","to":"SDU","number":"5071","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416404520,"arrival":1416408180,"index":0},{"carrier":"AZUL","number":"2638","kind":"Conexao","from":"SDU","to":"BSB","departure":1416418080,"arrival":1416424560,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":619.9,"miles_children":0,"miles_adults":16000,"pre_fee":"0","fee_departure":23.37,"url_fee":"0~L~~L100DTAD~00DT~~3~X|AD~4211~ ~~CNF~11\/19\/2014 15:52~SDU~11\/19\/2014 16:47~^AD~2644~ ~~SDU~11\/19\/2014 17:21~BSB~11\/19\/2014 19:10~","fee_arrival":"0","trip":"1","number":"4211","stops":1,"from":"CNF","to":"BSB","departure":1416419520,"arrival":1416431400},"Trip":[{"from":"CNF","to":"SDU","number":"4211","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416419520,"arrival":1416422820,"index":0},{"carrier":"AZUL","number":"2644","kind":"Conexao","from":"SDU","to":"BSB","departure":1416424860,"arrival":1416431400,"index":1,"airplane":0}]}],"volta":[{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~9176~ ~~BSB~11\/26\/2014 06:29~CNF~11\/26\/2014 07:52~","fee_arrival":"0","trip":"2","number":"9176","stops":0,"from":"BSB","to":"CNF","departure":1416990540,"arrival":1416995520},"Trip":[{"from":"BSB","to":"CNF","number":"9176","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416990540,"arrival":1416995520,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~4431~ ~~BSB~11\/26\/2014 10:25~CNF~11\/26\/2014 11:56~","fee_arrival":"0","trip":"2","number":"4431","stops":0,"from":"BSB","to":"CNF","departure":1417004700,"arrival":1417010160},"Trip":[{"from":"BSB","to":"CNF","number":"4431","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417004700,"arrival":1417010160,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~4951~ ~~BSB~11\/26\/2014 16:35~CNF~11\/26\/2014 17:59~","fee_arrival":"0","trip":"2","number":"4951","stops":0,"from":"BSB","to":"CNF","departure":1417026900,"arrival":1417031940},"Trip":[{"from":"BSB","to":"CNF","number":"4951","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417026900,"arrival":1417031940,"index":0}]},{"Flight":{"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~4421~ ~~BSB~11\/26\/2014 21:01~CNF~11\/26\/2014 22:25~","fee_arrival":"0","trip":"2","number":"4421","stops":0,"from":"BSB","to":"CNF","departure":1417042860,"arrival":1417047900},"Trip":[{"from":"BSB","to":"CNF","number":"4421","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417042860,"arrival":1417047900,"index":0}]},{"Flight":{"price_children":0,"price_adults":222.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~S~~S114DTAD~14DT~~1~X|AD~2641~ ~~BSB~11\/26\/2014 08:43~SDU~11\/26\/2014 10:26~^AD~6991~ ~~SDU~11\/26\/2014 13:30~CNF~11\/26\/2014 14:48~","fee_arrival":"0","trip":"2","number":"2641","stops":1,"from":"BSB","to":"CNF","departure":1416998580,"arrival":1417020480},"Trip":[{"from":"BSB","to":"SDU","number":"2641","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416998580,"arrival":1417004760,"index":0},{"carrier":"AZUL","number":"6991","kind":"Conexao","from":"SDU","to":"CNF","departure":1417015800,"arrival":1417020480,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":222.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~S~~S114DTAD~14DT~~1~X|AD~2641~ ~~BSB~11\/26\/2014 08:43~SDU~11\/26\/2014 10:26~^AD~5084~ ~~SDU~11\/26\/2014 11:50~CNF~11\/26\/2014 13:00~","fee_arrival":"0","trip":"2","number":"2641","stops":1,"from":"BSB","to":"CNF","departure":1416998580,"arrival":1417014000},"Trip":[{"from":"BSB","to":"SDU","number":"2641","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1416998580,"arrival":1417004760,"index":0},{"carrier":"AZUL","number":"5084","kind":"Conexao","from":"SDU","to":"CNF","departure":1417009800,"arrival":1417014000,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":135.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~2643~ ~~BSB~11\/26\/2014 14:45~SDU~11\/26\/2014 16:34~^AD~2557~ ~~SDU~11\/26\/2014 21:24~CNF~11\/26\/2014 22:32~","fee_arrival":"0","trip":"2","number":"2643","stops":1,"from":"BSB","to":"CNF","departure":1417020300,"arrival":1417048320},"Trip":[{"from":"BSB","to":"SDU","number":"2643","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417020300,"arrival":1417026840,"index":0},{"carrier":"AZUL","number":"2557","kind":"Conexao","from":"SDU","to":"CNF","departure":1417044240,"arrival":1417048320,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":135.9,"miles_children":0,"miles_adults":7000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~T~~T121DTAD~21DT~~1~X|AD~2643~ ~~BSB~11\/26\/2014 14:45~SDU~11\/26\/2014 16:34~^AD~2553~ ~~SDU~11\/26\/2014 17:06~CNF~11\/26\/2014 18:24~","fee_arrival":"0","trip":"2","number":"2643","stops":1,"from":"BSB","to":"CNF","departure":1417020300,"arrival":1417033440},"Trip":[{"from":"BSB","to":"SDU","number":"2643","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417020300,"arrival":1417026840,"index":0},{"carrier":"AZUL","number":"2553","kind":"Conexao","from":"SDU","to":"CNF","departure":1417028760,"arrival":1417033440,"index":1,"airplane":0}]},{"Flight":{"price_children":0,"price_adults":135.9,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"url_fee":"0~V~~V128CLTA~28CL~~5~X|AD~2639~ ~~BSB~11\/26\/2014 18:46~SDU~11\/26\/2014 20:35~^AD~2557~ ~~SDU~11\/26\/2014 21:24~CNF~11\/26\/2014 22:32~","fee_arrival":"0","trip":"2","number":"2639","stops":1,"from":"BSB","to":"CNF","departure":1417034760,"arrival":1417048320},"Trip":[{"from":"BSB","to":"SDU","number":"2639","airplane":0,"carrier":"AZUL","kind":"Primeiro","departure":1417034760,"arrival":1417041300,"index":0},{"carrier":"AZUL","number":"2557","kind":"Conexao","from":"SDU","to":"CNF","departure":1417044240,"arrival":1417048320,"index":1,"airplane":0}]}]}}}';
azul_teste = JSON.parse(azul_teste);

gol_teste = '{"independentes":{"gol_miles":{"ida":[{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416407400,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":6000,"price_adults_combo":94.9},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"1684","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416401400,"to":"BSB","arrival":1416407400,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416402420,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":6000,"price_adults_combo":94.9},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"2082","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416396300,"to":"BSB","arrival":1416402420,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1082","from":"CNF","departure":1416391500,"stops":0,"to":"BSB","arrival":1416396900,"price_children":0,"price_adults":171.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","price_adults_combo":94.9},"Trip":[{"number":"1082","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416391500,"to":"BSB","arrival":1416396900,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1805","from":"CNF","departure":1416401880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","price_adults_combo":94.9},"Trip":[{"number":"1805","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416401880,"to":"GRU","arrival":1416407100,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1807","from":"CNF","departure":1416404880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":13000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":6000,"price_adults_combo":94.9},"Trip":[{"number":"1807","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416404880,"to":"GRU","arrival":1416411000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1084","from":"CNF","departure":1416408780,"stops":0,"to":"BSB","arrival":1416412560,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1084","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416408780,"to":"BSB","arrival":1416412560,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1809","from":"CNF","departure":1416412500,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1809","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416412500,"to":"GRU","arrival":1416417000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1086","from":"CNF","departure":1416420660,"stops":0,"to":"BSB","arrival":1416425160,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1086","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416420660,"to":"BSB","arrival":1416425160,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416446220,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"1692","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416440400,"to":"BSB","arrival":1416446220,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416441540,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":10000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"2092","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416435600,"to":"BSB","arrival":1416441540,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1088","from":"CNF","departure":1416430080,"stops":0,"to":"BSB","arrival":1416435540,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1088","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416430080,"to":"BSB","arrival":1416435540,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1090","from":"CNF","departure":1416440100,"stops":0,"to":"BSB","arrival":1416445260,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","miles_adults_combo":null,"price_adults_combo":null},"Trip":[{"number":"1090","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416440100,"to":"BSB","arrival":1416445260,"kind":"Primeiro","index":0}]}],"volta":[{"Flight":{"trip":2,"number":"1081","from":"BSB","departure":1416997380,"stops":0,"to":"CNF","arrival":1417002720,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1081","carrier":"GOL G3","airplane":"","from":"BSB","departure":1416997380,"to":"CNF","arrival":1417002720,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1083","from":"BSB","departure":1417005000,"stops":0,"to":"CNF","arrival":1417009440,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1083","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417005000,"to":"CNF","arrival":1417009440,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1085","from":"BSB","departure":1417024680,"stops":0,"to":"CNF","arrival":1417029240,"price_children":0,"price_adults":132.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1085","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417024680,"to":"CNF","arrival":1417029240,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1980","from":"BSB","departure":1417035360,"stops":0,"to":"CNF","arrival":1417039080,"price_children":0,"price_adults":346.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1980","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417035360,"to":"CNF","arrival":1417039080,"kind":"Primeiro","index":0}]},{"Flight":{"trip":2,"number":"1089","from":"BSB","departure":1417040940,"stops":0,"to":"CNF","arrival":1417045980,"price_children":0,"price_adults":125.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1089","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417040940,"to":"CNF","arrival":1417045980,"kind":"Primeiro","index":0}]}]}},"combos":{"gol_miles":[{"ida":[{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416407400,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"1684","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416401400,"to":"BSB","arrival":1416407400,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1801","from":"CNF","departure":1416389340,"stops":1,"to":"BSB","arrival":1416402420,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1801","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416389340,"to":"GRU","arrival":1416393900,"kind":"Primeiro","index":0},{"number":"2082","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416396300,"to":"BSB","arrival":1416402420,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1082","from":"CNF","departure":1416391500,"stops":0,"to":"BSB","arrival":1416396900,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1082","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416391500,"to":"BSB","arrival":1416396900,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1805","from":"CNF","departure":1416401880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1805","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416401880,"to":"GRU","arrival":1416407100,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1807","from":"CNF","departure":1416404880,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":829.9,"miles_children":0,"miles_adults":13000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1807","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416404880,"to":"GRU","arrival":1416411000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1084","from":"CNF","departure":1416408780,"stops":0,"to":"BSB","arrival":1416412560,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1084","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416408780,"to":"BSB","arrival":1416412560,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1809","from":"CNF","departure":1416412500,"stops":1,"to":"BSB","arrival":1416427980,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1809","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416412500,"to":"GRU","arrival":1416417000,"kind":"Primeiro","index":0},{"number":"2088","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416420900,"to":"BSB","arrival":1416427980,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1086","from":"CNF","departure":1416420660,"stops":0,"to":"BSB","arrival":1416425160,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1086","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416420660,"to":"BSB","arrival":1416425160,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416446220,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"1692","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416440400,"to":"BSB","arrival":1416446220,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"2017","from":"CNF","departure":1416428340,"stops":1,"to":"BSB","arrival":1416441540,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"2017","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416428340,"to":"GRU","arrival":1416432900,"kind":"Primeiro","index":0},{"number":"2092","carrier":"GOL G3","airplane":"","from":"GRU","departure":1416435600,"to":"BSB","arrival":1416441540,"kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"1088","from":"CNF","departure":1416430080,"stops":0,"to":"BSB","arrival":1416435540,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1088","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416430080,"to":"BSB","arrival":1416435540,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"1090","from":"CNF","departure":1416440100,"stops":0,"to":"BSB","arrival":1416445260,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0"},"Trip":[{"number":"1090","carrier":"GOL G3","airplane":"","from":"CNF","departure":1416440100,"to":"BSB","arrival":1416445260,"kind":"Primeiro","index":0}]}],"volta":[{"Flight":{"trip":"2","number":"1081","from":"BSB","departure":1416997380,"stops":0,"to":"CNF","arrival":1417002720,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1081","carrier":"GOL G3","airplane":"","from":"BSB","departure":1416997380,"to":"CNF","arrival":1417002720,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1083","from":"BSB","departure":1417005000,"stops":0,"to":"CNF","arrival":1417009440,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1083","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417005000,"to":"CNF","arrival":1417009440,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1085","from":"BSB","departure":1417024680,"stops":0,"to":"CNF","arrival":1417029240,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1085","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417024680,"to":"CNF","arrival":1417029240,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1980","from":"BSB","departure":1417035360,"stops":0,"to":"CNF","arrival":1417039080,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1980","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417035360,"to":"CNF","arrival":1417039080,"kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"1089","from":"BSB","departure":1417040940,"stops":0,"to":"CNF","arrival":1417045980,"price_children":0,"price_adults":94.9,"miles_children":0,"miles_adults":6000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0"},"Trip":[{"number":"1089","carrier":"GOL G3","airplane":"","from":"BSB","departure":1417040940,"to":"CNF","arrival":1417045980,"kind":"Primeiro","index":0}]}]}]}}';
gol_teste = JSON.parse(gol_teste);

tam_teste = '{"independentes":{"tam_miles":{"ida":[{"Flight":{"trip":"1","number":"JJ3818","stops":0,"from":"CNF","to":"BSB","departure":1416393180,"arrival":1416397920,"price_children":0,"price_adults":222.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416393180,"arrival":1416397920,"number":"JJ3818","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3856","stops":0,"from":"CNF","to":"BSB","departure":1416403200,"arrival":1416408300,"price_children":0,"price_adults":124.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416403200,"arrival":1416408300,"number":"JJ3856","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3844","stops":0,"from":"CNF","to":"BSB","departure":1416429420,"arrival":1416434700,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416429420,"arrival":1416434700,"number":"JJ3844","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3854","stops":0,"from":"CNF","to":"BSB","departure":1416440040,"arrival":1416445260,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"BSB","departure":1416440040,"arrival":1416445260,"number":"JJ3854","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"1","number":"JJ3441","stops":1,"from":"CNF","to":"BSB","departure":1416389400,"arrival":1416411720,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416389400,"arrival":1416394200,"number":"JJ3441","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416405180,"arrival":1416411720,"number":"JJ3700","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3441","stops":1,"from":"CNF","to":"BSB","departure":1416389400,"arrival":1416416580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416389400,"arrival":1416394200,"number":"JJ3441","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416410340,"arrival":1416416580,"number":"JJ3706","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3753","stops":1,"from":"CNF","to":"BSB","departure":1416391440,"arrival":1416410580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416391440,"arrival":1416395040,"number":"JJ3753","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416403140,"arrival":1416410580,"number":"JJ3024","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3753","stops":1,"from":"CNF","to":"BSB","departure":1416391440,"arrival":1416417960,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416391440,"arrival":1416395040,"number":"JJ3753","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416411660,"arrival":1416417960,"number":"JJ3026","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3385","stops":1,"from":"CNF","to":"BSB","departure":1416392340,"arrival":1416417960,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GIG","departure":1416392340,"arrival":1416395820,"number":"JJ3385","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416411660,"arrival":1416417960,"number":"JJ3026","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3385","stops":1,"from":"CNF","to":"BSB","departure":1416392340,"arrival":1416420480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GIG","departure":1416392340,"arrival":1416395820,"number":"JJ3385","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GIG","to":"BSB","departure":1416413760,"arrival":1416420480,"number":"JJ3820","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416409260,"price_children":0,"price_adults":215,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416403200,"arrival":1416409260,"number":"JJ3718","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416411720,"price_children":0,"price_adults":245.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416405180,"arrival":1416411720,"number":"JJ3700","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416416580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416410340,"arrival":1416416580,"number":"JJ3706","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3201","stops":1,"from":"CNF","to":"BSB","departure":1416394860,"arrival":1416418320,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416394860,"arrival":1416399720,"number":"JJ3201","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416412200,"arrival":1416418320,"number":"JJ3582","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3213","stops":1,"from":"CNF","to":"BSB","departure":1416400200,"arrival":1416416580,"price_children":0,"price_adults":314.9,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416400200,"arrival":1416404940,"number":"JJ3213","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416410340,"arrival":1416416580,"number":"JJ3706","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3213","stops":1,"from":"CNF","to":"BSB","departure":1416400200,"arrival":1416425880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416400200,"arrival":1416404940,"number":"JJ3213","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416419700,"arrival":1416425880,"number":"JJ3579","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3345","stops":1,"from":"CNF","to":"BSB","departure":1416403080,"arrival":1416418320,"price_children":0,"price_adults":230,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416403080,"arrival":1416408300,"number":"JJ3345","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416412200,"arrival":1416418320,"number":"JJ3582","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3345","stops":1,"from":"CNF","to":"BSB","departure":1416403080,"arrival":1416425880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416403080,"arrival":1416408300,"number":"JJ3345","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416419700,"arrival":1416425880,"number":"JJ3579","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3345","stops":1,"from":"CNF","to":"BSB","departure":1416403080,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416403080,"arrival":1416408300,"number":"JJ3345","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3263","stops":1,"from":"CNF","to":"BSB","departure":1416403620,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416403620,"arrival":1416409020,"number":"JJ3263","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3769","stops":1,"from":"CNF","to":"BSB","departure":1416407640,"arrival":1416428460,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416407640,"arrival":1416410880,"number":"JJ3769","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GIG","to":"BSB","departure":1416422160,"arrival":1416428460,"number":"JJ3814","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3769","stops":1,"from":"CNF","to":"BSB","departure":1416407640,"arrival":1416429300,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416407640,"arrival":1416410880,"number":"JJ3769","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416422580,"arrival":1416429300,"number":"JJ3826","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3769","stops":1,"from":"CNF","to":"BSB","departure":1416407640,"arrival":1416431340,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416407640,"arrival":1416410880,"number":"JJ3769","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416425280,"arrival":1416431340,"number":"JJ3148","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3343","stops":1,"from":"CNF","to":"BSB","departure":1416408360,"arrival":1416425880,"price_children":0,"price_adults":234.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416408360,"arrival":1416411900,"number":"JJ3343","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416419700,"arrival":1416425880,"number":"JJ3579","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3343","stops":1,"from":"CNF","to":"BSB","departure":1416408360,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416408360,"arrival":1416411900,"number":"JJ3343","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3343","stops":1,"from":"CNF","to":"BSB","departure":1416408360,"arrival":1416433140,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"GRU","departure":1416408360,"arrival":1416411900,"number":"JJ3343","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3082","stops":1,"from":"CNF","to":"BSB","departure":1416410040,"arrival":1416429360,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416410040,"arrival":1416414540,"number":"JJ3082","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3082","stops":1,"from":"CNF","to":"BSB","departure":1416410040,"arrival":1416433140,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416410040,"arrival":1416414540,"number":"JJ3082","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416429360,"price_children":0,"price_adults":234.9,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416422700,"arrival":1416429360,"number":"JJ3710","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416433140,"price_children":0,"price_adults":326.5,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416441480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3114","stops":1,"from":"CNF","to":"BSB","departure":1416415440,"arrival":1416443580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416415440,"arrival":1416419760,"number":"JJ3114","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416433140,"price_children":0,"price_adults":326.5,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416426840,"arrival":1416433140,"number":"JJ3722","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416441480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416443580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3203","stops":1,"from":"CNF","to":"BSB","departure":1416418380,"arrival":1416444840,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416418380,"arrival":1416423480,"number":"JJ3203","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416438300,"arrival":1416444840,"number":"JJ3218","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3759","stops":1,"from":"CNF","to":"BSB","departure":1416419580,"arrival":1416436860,"price_children":0,"price_adults":299.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416419580,"arrival":1416423180,"number":"JJ3759","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416430320,"arrival":1416436860,"number":"JJ3028","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3759","stops":1,"from":"CNF","to":"BSB","departure":1416419580,"arrival":1416446640,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416419580,"arrival":1416423180,"number":"JJ3759","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416440220,"arrival":1416446640,"number":"JJ3030","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416441480,"price_children":0,"price_adults":326.5,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416443580,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416444840,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416438300,"arrival":1416444840,"number":"JJ3218","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3223","stops":1,"from":"CNF","to":"BSB","departure":1416422400,"arrival":1416448740,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416422400,"arrival":1416427080,"number":"JJ3223","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416442680,"arrival":1416448740,"number":"JJ3714","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416441480,"price_children":0,"price_adults":558.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416435120,"arrival":1416441480,"number":"JJ3712","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416443580,"price_children":0,"price_adults":430,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416437040,"arrival":1416443580,"number":"JJ3724","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416444840,"price_children":0,"price_adults":543.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416438300,"arrival":1416444840,"number":"JJ3218","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416448740,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416442680,"arrival":1416448740,"number":"JJ3714","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3122","stops":1,"from":"CNF","to":"BSB","departure":1416427560,"arrival":1416452100,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":"1"},"Trip":[{"from":"CNF","to":"CGH","departure":1416427560,"arrival":1416432480,"number":"JJ3122","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416446100,"arrival":1416452100,"number":"JJ3180","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3755","stops":1,"from":"CNF","to":"BSB","departure":1416432360,"arrival":1416446640,"price_children":0,"price_adults":299.5,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"SDU","departure":1416432360,"arrival":1416435600,"number":"JJ3755","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"BSB","departure":1416440220,"arrival":1416446640,"number":"JJ3030","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3217","stops":1,"from":"CNF","to":"BSB","departure":1416434220,"arrival":1416448740,"price_children":0,"price_adults":363.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":0},"Trip":[{"from":"CNF","to":"CGH","departure":1416434220,"arrival":1416439080,"number":"JJ3217","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"BSB","departure":1416442680,"arrival":1416448740,"number":"JJ3714","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"1","number":"JJ3341","stops":1,"from":"CNF","to":"BSB","departure":1416436560,"arrival":1416452100,"price_children":0,"price_adults":262.9,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":23.37,"fee_arrival":"0","seat":"1"},"Trip":[{"from":"CNF","to":"GRU","departure":1416436560,"arrival":1416441900,"number":"JJ3341","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"BSB","departure":1416446100,"arrival":1416452100,"number":"JJ3180","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]}],"volta":[{"Flight":{"trip":"2","number":"JJ3845","stops":0,"from":"BSB","to":"CNF","departure":1417011960,"arrival":1417016400,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417011960,"arrival":1417016400,"number":"JJ3845","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3857","stops":0,"from":"BSB","to":"CNF","departure":1417027200,"arrival":1417032120,"price_children":0,"price_adults":131,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417027200,"arrival":1417032120,"number":"JJ3857","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3819","stops":0,"from":"BSB","to":"CNF","departure":1417037760,"arrival":1417042320,"price_children":0,"price_adults":192,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417037760,"arrival":1417042320,"number":"JJ3819","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3853","stops":0,"from":"BSB","to":"CNF","departure":1417045320,"arrival":1417050900,"price_children":0,"price_adults":95,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CNF","departure":1417045320,"arrival":1417050900,"number":"JJ3853","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0}]},{"Flight":{"trip":"2","number":"JJ3181","stops":1,"from":"BSB","to":"CNF","departure":1416988620,"arrival":1417005840,"price_children":0,"price_adults":250.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1416988620,"arrival":1416994500,"number":"JJ3181","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417001100,"arrival":1417005840,"number":"JJ3344","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3181","stops":1,"from":"BSB","to":"CNF","departure":1416988620,"arrival":1417011480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1416988620,"arrival":1416994500,"number":"JJ3181","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417004340,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1416999420,"arrival":1417004340,"number":"JJ3262","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417007640,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417003080,"arrival":1417007640,"number":"JJ3216","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417011480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3719","stops":1,"from":"BSB","to":"CNF","departure":1416990300,"arrival":1417018020,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416990300,"arrival":1416995940,"number":"JJ3719","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417007640,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417003080,"arrival":1417007640,"number":"JJ3216","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417011480,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417018020,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3173","stops":1,"from":"BSB","to":"CNF","departure":1416992400,"arrival":1417021200,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":48.06,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1416992400,"arrival":1416998580,"number":"JJ3173","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417011480,"price_children":0,"price_adults":274.5,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417007760,"arrival":1417011480,"number":"JJ3053","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417018020,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417021200,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3711","stops":1,"from":"BSB","to":"CNF","departure":1416997200,"arrival":1417024680,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416997200,"arrival":1417003020,"number":"JJ3711","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3723","stops":1,"from":"BSB","to":"CNF","departure":1416999660,"arrival":1417018020,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416999660,"arrival":1417005900,"number":"JJ3723","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3723","stops":1,"from":"BSB","to":"CNF","departure":1416999660,"arrival":1417021200,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1416999660,"arrival":1417005900,"number":"JJ3723","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3723","stops":1,"from":"BSB","to":"CNF","departure":1416999660,"arrival":1417024680,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1416999660,"arrival":1417005900,"number":"JJ3723","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417018020,"price_children":0,"price_adults":191.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417013400,"arrival":1417018020,"number":"JJ3115","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417024680,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417031220,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3701","stops":1,"from":"BSB","to":"CNF","departure":1417004220,"arrival":1417031880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417004220,"arrival":1417010220,"number":"JJ3701","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3578","stops":1,"from":"BSB","to":"CNF","departure":1417006920,"arrival":1417021200,"price_children":0,"price_adults":254.9,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"GRU","departure":1417006920,"arrival":1417012800,"number":"JJ3578","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417017300,"arrival":1417021200,"number":"JJ3360","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3578","stops":1,"from":"BSB","to":"CNF","departure":1417006920,"arrival":1417031220,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417006920,"arrival":1417012800,"number":"JJ3578","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3578","stops":1,"from":"BSB","to":"CNF","departure":1417006920,"arrival":1417031880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417006920,"arrival":1417012800,"number":"JJ3578","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417024680,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417020840,"arrival":1417024680,"number":"JJ3220","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417031220,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417031880,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3703","stops":1,"from":"BSB","to":"CNF","departure":1417009440,"arrival":1417038000,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":48.06,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417009440,"arrival":1417015440,"number":"JJ3703","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417033800,"arrival":1417038000,"number":"JJ3326","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3457","stops":1,"from":"BSB","to":"CNF","departure":1417010700,"arrival":1417038000,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417010700,"arrival":1417020720,"number":"JJ3457","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417033800,"arrival":1417038000,"number":"JJ3326","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3457","stops":1,"from":"BSB","to":"CNF","departure":1417010700,"arrival":1417038780,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GRU","departure":1417010700,"arrival":1417020720,"number":"JJ3457","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417034520,"arrival":1417038780,"number":"JJ3264","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417031220,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":11000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417025940,"arrival":1417031220,"number":"JJ3123","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417031880,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417027860,"arrival":1417031880,"number":"JJ3202","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417038000,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417033800,"arrival":1417038000,"number":"JJ3326","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417038780,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417034520,"arrival":1417038780,"number":"JJ3264","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3709","stops":1,"from":"BSB","to":"CNF","departure":1417016400,"arrival":1417042500,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":9000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417016400,"arrival":1417022940,"number":"JJ3709","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417037880,"arrival":1417042500,"number":"JJ3224","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3827","stops":1,"from":"BSB","to":"CNF","departure":1417019820,"arrival":1417046040,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":45.6,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"GIG","departure":1417019820,"arrival":1417025820,"number":"JJ3827","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"CNF","departure":1417042440,"arrival":1417046040,"number":"JJ3752","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3705","stops":1,"from":"BSB","to":"CNF","departure":1417024200,"arrival":1417038780,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417024200,"arrival":1417030680,"number":"JJ3705","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417034520,"arrival":1417038780,"number":"JJ3264","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3705","stops":1,"from":"BSB","to":"CNF","departure":1417024200,"arrival":1417042500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417024200,"arrival":1417030680,"number":"JJ3705","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417037880,"arrival":1417042500,"number":"JJ3224","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3705","stops":1,"from":"BSB","to":"CNF","departure":1417024200,"arrival":1417048500,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417024200,"arrival":1417030680,"number":"JJ3705","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3027","stops":1,"from":"BSB","to":"CNF","departure":1417026600,"arrival":1417046040,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":8000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"SDU","departure":1417026600,"arrival":1417032240,"number":"JJ3027","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"SDU","to":"CNF","departure":1417042440,"arrival":1417046040,"number":"JJ3752","airplane":"Airbus Industrie A319","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3717","stops":1,"from":"BSB","to":"CNF","departure":1417033200,"arrival":1417048500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417033200,"arrival":1417038720,"number":"JJ3717","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3717","stops":1,"from":"BSB","to":"CNF","departure":1417033200,"arrival":1417056540,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":17000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1417033200,"arrival":1417038720,"number":"JJ3717","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417052100,"arrival":1417056540,"number":"JJ3442","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3721","stops":1,"from":"BSB","to":"CNF","departure":1417035240,"arrival":1417048500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417035240,"arrival":1417040880,"number":"JJ3721","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3721","stops":1,"from":"BSB","to":"CNF","departure":1417035240,"arrival":1417056540,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":17000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"CGH","departure":1417035240,"arrival":1417040880,"number":"JJ3721","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417052100,"arrival":1417056540,"number":"JJ3442","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3727","stops":1,"from":"BSB","to":"CNF","departure":1417035300,"arrival":1417048500,"price_children":0,"price_adults":161,"miles_children":0,"miles_adults":5000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":0},"Trip":[{"from":"BSB","to":"CGH","departure":1417035300,"arrival":1417041420,"number":"JJ3727","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"CGH","to":"CNF","departure":1417044180,"arrival":1417048500,"number":"JJ3226","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]},{"Flight":{"trip":"2","number":"JJ3587","stops":1,"from":"BSB","to":"CNF","departure":1417035600,"arrival":1417056540,"price_children":0,"price_adults":0,"miles_children":0,"miles_adults":17000,"pre_fee":"0","fee_departure":24.03,"fee_arrival":"0","seat":"5"},"Trip":[{"from":"BSB","to":"GRU","departure":1417035600,"arrival":1417041600,"number":"JJ3587","airplane":"Airbus Industrie A321","carrier":"Tam Linhas Aereas","kind":"Primeiro","index":0},{"from":"GRU","to":"CNF","departure":1417052100,"arrival":1417056540,"number":"JJ3442","airplane":"Airbus Industrie A320","carrier":"Tam Linhas Aereas","kind":"Conexao","index":1}]}]}}}';
tam_teste = JSON.parse(tam_teste);
*/




function searchFlights(url, hash, tentativas_gol_miles)
{
	if (company == 'gol')
	{
		$.ajax({
			url: url,
			type: 'GET',
			success: function(data)
			{
				$('#ikarus_widget_inbound_'+'gol_miles'+'_searchLoader').remove();
				$('#ikarus_widget_outbound_'+'gol_miles'+'_searchLoader').remove();

				hashFlights = 'gol_miles';
				tempFlights = JSON.parse(data);

				$('#ikarus_widget_tabela_inbound').append(ikarusWidgetTrFlights(tempFlights['independentes'][hashFlights]['ida'], 'ida', hashFlights));
				$('#ikarus_widget_tabela_outbound').append(ikarusWidgetTrFlights(tempFlights['independentes'][hashFlights]['volta'], 'volta', hashFlights));
			},
			error: function(data)
			{
				if(tentativas_gol_miles > 0)
				{
					$('#ikarus_widget_inbound_'+'gol_miles'+'_searchLoader').remove();
					$('#ikarus_widget_outbound_'+'gol_miles'+'_searchLoader').remove();
				}
				searchgol_miles(tentativas_gol_miles - 1);
			}
		});
	}
}

