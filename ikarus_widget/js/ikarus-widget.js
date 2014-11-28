window.ikarusWidgetJs = (function() {

    var _assetsUrl = '';

    var searchFlights = function(url, hash, programs, airports, search)
    {
        console.log(url);
        IkarusJQuery.ajax({
            url: url,
            timeout: 120000,
            type: 'GET',
            success: function(data)
            {
                data = data.substring(data.indexOf("{"), data.lastIndexOf("}")+1);
                if (data)
                {
                    // console.log('data '+ hash +": '"+ data + "'");
                    IkarusJQuery('#ida_'+ hash +'_searchLoader').remove();
                    IkarusJQuery('#volta_'+ hash +'_searchLoader').remove();
                    tempFlights = JSON.parse(data);
                    console.log('result '+ hash +":");
                    console.log(tempFlights);
                    IkarusJQuery('#ikarus_widget_tabela-ida').append(tr_flights(tempFlights['independentes'][hash]['ida'], 'ida', hash, programs, airports, search));
                    if (search['trip'] == 'R')
                    {
                        IkarusJQuery('#ikarus_widget_tabela-volta').append(tr_flights(tempFlights['independentes'][hash]['volta'], 'volta', hash, programs, airports, search));
                    }
                }
            },
            error: function(data)
            {
                console.log('Erro ao buscar voos: ' + hash);
            }
        });
    };



    var setAssetsUrl = function(url)
    {
        _assetsUrl = url;
        console.log('assets url: ' + _assetsUrl);
    }



    var addDatepickers = function()
    {
        IkarusJQuery("#ikarusDataDepartureDate").datepicker
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
            minDate: 0,
            onClose: function(selectedDate) {
                if (selectedDate) IkarusJQuery("#ikarusDataBackDate").datepicker( "option", "minDate", selectedDate );
            }
        });

        IkarusJQuery("#ikarusDataBackDate").datepicker
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

        IkarusJQuery("#ikarusDataFrom").ikarus_widget_select2();
        IkarusJQuery("#ikarusDataTo").ikarus_widget_select2();
    }





    var errorAppend = function(element, msg)
    {
        IkarusJQuery(element).parent().parent().append("<div class='ikarus_widget_validation_error'>"+msg+"</div>");
    }



    var validatePassengerForms = function(search)
    {
        // Validação nome do passageiro
        IkarusJQuery('.ikarus_widget_validation_error').each(function(i, element){
            IkarusJQuery(element).remove();
        });
        var valid = true;
        var nomes = IkarusJQuery("input[id$='Name']");
        for(i = 0; i < nomes.length; i++)
        {
            var nome = IkarusJQuery(nomes[i]).val();
            if(nome.match(/^[A-z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇ\s]+$/g) == null)
            {
                // validacao frase
                errorAppend(nomes[i], "Por favor não usar pontuações ou abreviações no seu nome.");
                valid = false;
            }
        }

        // Validação data de nascimento
        var nascimentos = IkarusJQuery("input[id$='Birthday']");
        for(i = 0; i < nascimentos.length; i++)
        {
            var nascimento = IkarusJQuery(nascimentos[i]).val();
            var tipo = IkarusJQuery(nascimentos[i]).attr("typePassenger");
            if(nascimento.match(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/g) == null)
            {
                errorAppend(nascimentos[i], "Data inválida.");
                valid = false;
            }
            else
            {
                var idade = ikarusWidgetJs.calculateAge(nascimento, search);
                if((tipo == "adult" && idade >= 12) || (tipo == "child" && (idade >= 2 || idade < 12)) || (tipo == "baby" && idade < 2))
                {
                    // remove validacao frase
                    // errorRemove(nascimentos[i], msg);
                }
                else
                {
                    // validacao frase
                    if(tipo == "adult" && idade < 12) msg = "Um passageiro adulto deve possuir mais que 12 anos até a data do(s) voo(s).";
                    if(tipo == "child" && (idade < 2 || idade >= 12)) msg = "É considerado criança o passageiro entre 2 e 12 anos antes da data do(s) voo(s).";
                    if(tipo == "baby" && idade >= 2) msg = "É considerado bebê o passageiro menor que 2 anos antes da data do(s) voo(s).";

                    errorAppend(nascimentos[i], msg);
                    valid = false;
                }
            }
        }

        // Validação do CPF
        if (false)
        {
            var ssns = IkarusJQuery("input[id$='Ssn']");
            for(var i = 0; i < ssns.length; i++)
            {
                var ssn = IkarusJQuery(ssns[i]).val();
                if(ssn)
                {
                    var ssntype = IkarusJQuery("#" + IkarusJQuery(ssns[i]).attr("id") + "type").val();
                    if(ssntype == "CPF")
                    {
                        if(!validarCPF(ssn))
                        {
                            // debugger;
                            errorAppend(ssns[i], "CPF Inválido.");
                            valid = false;
                        }
                    }
                }
            }
        }

        return valid;
    }



    var validarCPF = function(strCPF)
    {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000")
            return false;
        for (var i = 1; i <= 9; i++)
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11))
            Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) )
            return false;
        Soma = 0;
        for (i = 1; i <= 10; i++)
            Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11))
            Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) )
            return false;
        return true;
    }




    var onChangeTrip = function(element)
    {
        if (IkarusJQuery('#ikarusDataTrip').val() == "R")
        {
            IkarusJQuery('#ikarusDataBackDateDiv').show(500);
        }
        else {
            IkarusJQuery('#ikarusDataBackDateDiv').hide(500);
        }
    }


    var calculateAge = function(birthday, search) {
        var data = birthday.split("/");
        if (search["trip"] == "R") dataVoo = search["backDate"].split("/");
        else dataVoo = search["departureDate"].split("/");
        var now = new Date(dataVoo[2], dataVoo[1], dataVoo[0], 0, 0, 0);
        var birth = new Date(data[2], data[1], data[0], 0, 0, 0);

        var ageDifMs = now - birth.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }



    var makeCssNormalPrecos = function(id)
    {
        // ...
    }


    function makeTodosCssNormalPrecos(id)
    {
        // ...
    }


    function makeCssComboPrecos(id)
    {
        if(IkarusJQuery("#inputVoo__"+id).attr("sellingmode") == "2")
        {
            IkarusJQuery("#trVoo__"+id+" td div");
        }
    }



    var fillsearchForm = function(search)
    {
        IkarusJQuery("#ikarusDataTrip").val(search["trip"]);
        IkarusJQuery("#ikarusDataFrom").ikarus_widget_select2("val", search["from"]);
        IkarusJQuery("#ikarusDataTo").ikarus_widget_select2("val", search["to"]);
        IkarusJQuery("#ikarusDataDepartureDate").val(search["departureDate"]);
        IkarusJQuery("#ikarusDataBackDate").val(search["backDate"]);
        IkarusJQuery("#ikarusDataAdults").val(search["adults"]);
        IkarusJQuery("#ikarusDataChildren").val(search["children"]);
        IkarusJQuery("#ikarusDataBabies").val(search["babies"]);
    };


    var fecharTodosVoos = function(trecho, naoFechar)
    {
        trs = IkarusJQuery('tr[id*="trVoo__'+trecho+'__"]');
        count = trs.length;
        for(i=0; i< count; i++)
        {
            trFechar = IkarusJQuery(trs[i]);

            if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

            trFechar.prop("checked", false);
            trFechar.fadeOut("fast");
            id = IkarusJQuery(trs[i]).attr('id');
            id = id.split('__');
            nameId = id[2];
            for(j=3; j< id.length; j++) nameId += '__'+id[j];
            fecharDetalhes(nameId);
        }
    };


    var abrirTodosVoos = function(trecho, naoFechar)
    {
        trs = IkarusJQuery('tr[id*="trVoo__'+trecho+'__"]');
        count = trs.length;
        for(i=0; i< count; i++)
        {
            trFechar = IkarusJQuery(trs[i]);

            if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

            trFechar.prop("checked", false);
            trFechar.fadeIn("slow");
            id = IkarusJQuery(trs[i]).attr('id');
            id = id.split('__');
            nameId = id[2];
            for(j=3; j< id.length; j++) nameId += '__'+id[j];
            fecharDetalhes(nameId);
        }
    };



    var fecharVoosOperadora = function(trecho, operadora, naoFechar)
    {
        trs = IkarusJQuery('tr[id*="trVoo__'+trecho+'__'+operadora+'"]');
        count = trs.length;
        for(i=0; i< count; i++)
        {
            trFechar = IkarusJQuery(trs[i]);
            if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

            trFechar.fadeOut("slow");

            IkarusJQuery('#inputVoo__'+trFechar.attr('id').replace("trVoo__", "")).prop("checked", false);

            id = trFechar.attr('id');
            id = id.split('__');
            nameId = id[2];
            for(j=3; j< id.length; j++) nameId += '__'+id[j];
            fecharDetalhes(nameId);
        }
    };


    var abrirVoosOperadora = function(trecho, operadora, naoFechar)
    {
        trs = IkarusJQuery('tr[id*="trVoo__'+trecho+'__'+operadora+'"]');
        count = trs.length;
        for(i=0; i< count; i++)
        {
            trFechar = IkarusJQuery(trs[i]);
            if(trFechar.attr('id') == ("trVoo__"+naoFechar)) continue;

            trFechar.fadeIn("slow");

            IkarusJQuery('#inputVoo__'+trFechar.attr('id').replace("trVoo__", "")).prop("checked", false);

            id = trFechar.attr('id');
            id = id.split('__');
            nameId = id[2];
            for(j=3; j< id.length; j++) nameId += '__'+id[j];
            fecharDetalhes(nameId);
        }
    };


    var abrirDetalhes = function(id)
    {
        IkarusJQuery('#btnOpenDetails__'+id).attr('style', 'display:none;');
        IkarusJQuery("#trDetails__"+id).fadeIn("slow");
        IkarusJQuery('#btnCloseDetails__'+id).attr('style', '');
    };

    var fecharDetalhes = function(id)
    {
        IkarusJQuery('#btnCloseDetails__'+id).attr('style', 'display:none;');
        IkarusJQuery("#trDetails__"+id).fadeOut("slow");
        IkarusJQuery('#btnOpenDetails__'+id).attr('style', '');
    };


    var timestamp2BrasilHM = function(timestamp)
    {
        time = new Date(parseInt(timestamp)*1000);
        hour = time.getHours();
        min = time.getMinutes();
        if(hour < 10) hour = "0" + hour;
        if(min  < 10) min  = "0" + min;
        time = hour+":"+min;

        return time;
    };


    var documentoMask = function(element, item)
    {
        mask = IkarusJQuery(element).val();
        IkarusJQuery.mask.definitions['r'] = '[0-9A-Za-z\.-]';
        if(mask == "CPF") IkarusJQuery("#Passenger"+item+"Ssn").mask("999.999.999-99");
        else IkarusJQuery("#Passenger"+item+"Ssn").mask("rrrr?rrrrrrrrrrrrrrrr");
    }






    var tr_flights = function(voos, way, hash, programs, airports, search)
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


            if(valorDinheiroAdt > 0) txtDinheiroAdt = ikarusAccounting.formatMoney(valorDinheiroAdt.toFixed(2), "R$ ", 2, ".", ",");
            else txtDinheiroAdt = " não informado ";
            if(valorDinheiroCri > 0) txtDinheiroCri = ikarusAccounting.formatMoney(valorDinheiroCri.toFixed(2), "R$ ", 2, ".", ",");
            else txtDinheiroCri = " não informado ";

            if(valorMilhasAdt > 0) txtMilhasAdt = ikarusAccounting.formatMoney(valorMilhasAdt, "", 0, ".", "");
            else txtMilhasAdt = " não informado ";
            if(valorMilhasCri > 0) txtMilhasCri = ikarusAccounting.formatMoney(valorMilhasCri, "", 0, ".", "");
            else txtMilhasCri = " não informado ";

            if(valorEmpresaAdt > 0) txtEmpresaAdt = ikarusAccounting.formatMoney(valorEmpresaAdt.toFixed(2), "R$ ", 2, ".", ",");
            else txtEmpresaAdt = " não informado ";
            if(valorEmpresaCri > 0) txtEmpresaCri = ikarusAccounting.formatMoney(valorEmpresaCri.toFixed(2), "R$ ", 2, ".", ",");
            else txtEmpresaCri = " não informado ";

            if(valorComboDinheiroAdt > 0) txtComboDinheiroAdt = ikarusAccounting.formatMoney(valorComboDinheiroAdt.toFixed(2), "R$ ", 2, ".", ",");
            else txtComboDinheiroAdt = " não informado ";
            if(valorComboDinheiroCri > 0) txtComboDinheiroCri = ikarusAccounting.formatMoney(valorComboDinheiroCri.toFixed(2), "R$ ", 2, ".", ",");
            else txtComboDinheiroCri = " não informado ";

            if(valorComboMilhasAdt > 0) txtComboMilhasAdt = ikarusAccounting.formatMoney(valorComboMilhasAdt, "", 0, ".", "");
            else txtComboMilhasAdt = " não informado ";
            if(valorComboMilhasCri > 0) txtComboMilhasCri = ikarusAccounting.formatMoney(valorComboMilhasCri, "", 0, ".", "");
            else txtComboMilhasCri = " não informado ";

            if(valorComboEmpresaAdt > 0) txtComboEmpresaAdt = ikarusAccounting.formatMoney(valorComboEmpresaAdt.toFixed(2), "R$ ", 2, ".", ",");
            else txtComboEmpresaAdt = " não informado ";
            if(valorComboEmpresaCri > 0) txtComboEmpresaCri = ikarusAccounting.formatMoney(valorComboEmpresaCri.toFixed(2), "R$ ", 2, ".", ",");
            else txtComboEmpresaCri = " não informado ";



            taxaembarque = parseFloat(voos[i]["Flight"]["pre_fee"])+parseFloat(voos[i]["Flight"]["fee_departure"])+parseFloat(voos[i]["Flight"]["fee_arrival"]);
            taxaembarque = ikarusAccounting.formatMoney(taxaembarque.toFixed(2), "R$ ", 2, ".", ",");




            json_flight = JSON.stringify(voos[i]);


            if(totalEmpresa > 0 || totalDinheiro > 0 || totalMilhas > 0 || totalComboEmpresa > 0 || totalComboDinheiro > 0 || totalComboMilhas > 0)
            {
                html += "<tr id='trVoo__"+way+"__"+hash+"__"+i+"' hash='"+hash+"' selling_mode='"+programs[hash]["selling_mode"]+"'>";


                    html += "<td>";
                        if(totalEmpresa > 0)
                        {
                            html += "<input type='checkbox' onchange='javascript:ikarusWidgetJs.buyRules(this, "+ JSON.stringify(search) +", "+ JSON.stringify(programs) +");' ";
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
                            html += "<input type='checkbox' onchange='javascript:ikarusWidgetJs.buyRules(this, "+ JSON.stringify(search) +");' style='display:none;' ";
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
                        // html += "<img src='/images/"+hash+"_ativo.png' class='choice-header' style='max-width: 46px !important;' alt=''>";
                        html += "<img src='"+ _assetsUrl + '/images/' + hash +"_ativo.png' class='choice-header' style='max-width: 46px !important;' alt=''>";
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



                    html += "<td style='text-align:center;vertical-align:middle;'>";
                        html += "<div>"
                            html += "<bottom id='btnCloseDetails__"+way+"__"+hash+"__"+i+"' style='display: none;' onclick=\"ikarusWidgetJs.fecharDetalhes('"+way+"__"+hash+"__"+i+"');\"><b>-</b></bottom>"
                            html += "<bottom id='btnOpenDetails__"+way+"__"+hash+"__"+i+"' onclick=\"ikarusWidgetJs.abrirDetalhes('"+way+"__"+hash+"__"+i+"');\"><b>+</b></bottom>"
                        html += "</div>"
                    html += "</td>";

                html += "</tr>";

                html += "<tr style='display: none;' id='trDetails__"+way+"__"+hash+"__"+i+"'>";
                    html += "<td colspan='10' style='background-color: "+programs[hash]['color']+";'>";
                        html += "<div class='ikarus_widget_container-fluid'>";
                            html += "<div class='ikarus_widget_row-fluid tituloDetalhesVoo'>";
                                html += "Detalhes do Voo";
                            html += "</div>";
                            html += "<div class='ikarus_widget_row-fluid'>";
                                html += "<div class='ikarus_widget_span12'>";
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
    };




    var buyRules = function(elemento, search, programs)
    {
        input = IkarusJQuery(elemento);
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

        info_voo = input.attr('value');
        IkarusJQuery('#info_voo_' + trecho).attr('value', info_voo);

        if(operacao)
        {
            selected = IkarusJQuery('input[id*="inputVoo__'+id+'"]');
            voo = JSON.parse(selected.val());
            IkarusJQuery('#TransactionVoo'+trecho).val(selected.val());

            if(trecho == "ida") str = "Ida";
            if(trecho == "volta") str = "Volta";
            IkarusJQuery('#validaVoo'+str+'Tabela').attr("style", "display: none;");


            fecharTodosVoos(trecho, id);


            totalDinheiro = parseFloat(voo["Flight"]["totalDinheiro"]);
            totalEmpresa = parseFloat(voo["Flight"]["totalEmpresa"]);
            totalComboDinheiro = parseFloat(voo["Flight"]["totalComboDinheiro"]);
            totalComboEmpresa = parseFloat(voo["Flight"]["totalComboEmpresa"]);

            // usa preco combo

            usandoCombo = false;
            if(search["trip"] == "R")
            {

                selectedIda = IkarusJQuery('input[id*="inputVoo__ida"]:checked');
                selectedVolta = IkarusJQuery('input[id*="inputVoo__volta"]:checked');
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
                                // IkarusJQuery("#acompanhamento"+trecho).html(criarAcompanhamento(trecho, voo, totalComboDinheiro, totalComboEmpresa, milhasA, milhasC));
                                makeCssComboPrecos(id);
                            }
                            else
                            {
                                milhasA = parseInt(voo["Flight"]["miles_adults"]);
                                milhasC = parseInt(voo["Flight"]["miles_children"]);
                                // IkarusJQuery("#acompanhamento"+trecho).html(criarAcompanhamento(trecho, voo, totalDinheiro, totalEmpresa, milhasA, milhasC));
                                makeCssNormalPrecos(id);
                            }

                            outro = IkarusJQuery('input[id*="inputVoo__'+outroTrecho+'"]:checked');
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
                                // IkarusJQuery("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalComboDinheiro2, totalComboEmpresa2, milhasA2, milhasC2));
                                makeCssComboPrecos(idOutro);
                            }
                            else
                            {
                                milhasA2 = parseInt(outroVoo["Flight"]["miles_adults"]);
                                milhasC2 = parseInt(outroVoo["Flight"]["miles_children"]);
                                // IkarusJQuery("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalDinheiro2, totalEmpresa2, milhasA2, milhasC2));
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
                // IkarusJQuery("#acompanhamento"+trecho).html(criarAcompanhamento(trecho, voo, totalDinheiro, totalEmpresa, milhasA, milhasC));
                makeCssNormalPrecos(id);

                outro = IkarusJQuery('input[id*="inputVoo__'+outroTrecho+'"]:checked');
                if(outro.length > 0)
                {
                    idOutro = outro.attr("id");
                    idOutro = idOutro.replace("inputVoo__", "");

                    outroVoo = JSON.parse(outro.val());
                    totalDinheiro2 = parseFloat(outroVoo["Flight"]["totalDinheiro"]);
                    totalEmpresa2 = parseFloat(outroVoo["Flight"]["totalEmpresa"]);
                    milhasA2 = parseInt(outroVoo["Flight"]["miles_adults"]);
                    milhasC2 = parseInt(outroVoo["Flight"]["miles_children"]);

                    // IkarusJQuery("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalDinheiro2, totalEmpresa2, milhasA2, milhasC2));
                    makeCssNormalPrecos(idOutro);
                }
            }

            // criarAcompanhamentoEconomia();


            IkarusJQuery(window).scrollTop(IkarusJQuery("#tabela_"+trecho).offset())
        }
        else
        {
            IkarusJQuery('#TransactionVoo'+trecho).val("");

            abrirTodosVoos(trecho, id);
            if(trecho == "ida") str = "Ida";
            else str = "Volta";

            makeTodosCssNormalPrecos();

            IkarusJQuery("#acompanhamento"+trecho).html('<div id="saldoacompanhamento'+trecho+'" value="0" style="text-align: center; background-color: #71C2E2; color: #FFF; font-weight: bold; font-size: 16px;">'+str+'</div><div style="text-align: center; color: #ADADAD;">nenhum voo selecionado</div>');
            outro = IkarusJQuery('input[id*="inputVoo__'+outroTrecho+'"]:checked');
            if(outro.length > 0)
            {
                outroVoo = JSON.parse(outro.val());
                totalDinheiro = parseFloat(outroVoo["Flight"]["totalDinheiro"]);
                totalEmpresa = parseFloat(outroVoo["Flight"]["totalEmpresa"]);
                milhasA = parseInt(outroVoo["Flight"]["miles_adults"]);
                milhasC = parseInt(outroVoo["Flight"]["miles_children"]);

                // IkarusJQuery("#acompanhamento"+outroTrecho).html(criarAcompanhamento(outroTrecho, outroVoo, totalDinheiro, totalEmpresa, milhasA, milhasC));
            }

            // criarAcompanhamentoEconomia();
        }
    };

    return {
        fillsearchForm: fillsearchForm,
        searchFlights: searchFlights,
        setAssetsUrl: setAssetsUrl,

        buyRules: buyRules,
        documentoMask: documentoMask,
        onChangeTrip: onChangeTrip,
        addDatepickers: addDatepickers,
        abrirDetalhes: abrirDetalhes,
        fecharDetalhes: fecharDetalhes,
        validatePassengerForms: validatePassengerForms,
        calculateAge: calculateAge
    };
})();
