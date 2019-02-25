$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        //document.addEventListener("backbutton", onBackKeyDown, true);
        deteclenguage();
        onInit();
        if(checkNetConnection()==true){
            var variablEE = obtenerVariables("variable");
            //-1 si si ingresa por primera vez o mata aplicacion
            if(variablEE == -1){
                existsData();
            }else if(variablEE==2){
                MSG_GO_ADD();
            }else{   
                //camibar el nombre del boton de ingresar --> agregar
                MSG_GO_ADD();
                $("#btn_left").removeAttr("hidden");
            }
        }else{
            $('#no_connection').modal('show');
            if (current_lang == 'es'){
                $('.titleMessage').text('Mensaje');
                $('.textNoConnection').text('No hay conexion de red');
                $('.btnok').text('Aceptar');
            }else{
               //modal para no conexcion
            }
        }
    }
    
    // function onBackKeyDown() {
    //     navigator.app.exitApp();     
    // }
});

$(window).load(function(){
    // deteclenguage();
    // onInit();
    // if(checkNetConnection()==true){
    //         var variablEE = obtenerVariables("variable");
    //         //-1 si si ingresa por primera vez o mata aplicacion
    //         if(variablEE == -1){
    //             existsData();
    //         }else if(variablEE==2){
    //             MSG_GO_ADD();
    //         }else{   
    //             //camibar el nombre del boton de ingresar --> agregar
    //             MSG_GO_ADD();
    //             $("#btn_left").removeAttr("hidden");
    //         }
    // }else{
    //     $('#no_connection').modal('show');
    //     if (current_lang == 'es'){
    //         $('.titleMessage').text('Mensaje');
    //         $('.textNoConnection').text('No hay conexion de red');
    //         $('.btnok').text('Aceptar');
    //     }else{
    //        //modal para no conexcion
    //     }
    // }
    
    /*esta funcion ocurre despues de que ya cargo toda la pagina*/
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
    $("#ip_1").keyup(function (event) {/*mientras estoy escrbiendo el numero*/
        var variable = $("#ip_1").val();
        if (variable > 255) {
            $("#ip_1").val("");
        } else {
            if (variable.length == 3) {
                document.getElementById("ip_2").select();
            }
        }
    }).keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57) {/*valores del 0 - 9 segun el tabal ascii*/
            return false;
        }
    });

    $("#ip_2").keyup(function (event) {/*mientras estoy escrbiendo el numero*/
        var variable = $("#ip_2").val();
        if (variable > 255) {
            $("#ip_2").val("");
        } else {
            if (variable.length == 3) {
                document.getElementById("ip_3").select();
            }
        }
    }).keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57) {/*valores del 0 - 9 segun el tabal ascii*/
            return false;
        }
    });

    $("#ip_3").keyup(function (event) {/*mientras estoy escrbiendo el numero*/
        var variable = $("#ip_3").val();
        if (variable > 255) {
            $("#ip_3").val("");
        } else {
            if (variable.length == 3) {
                document.getElementById("ip_4").select();
            }
        }
    }).keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57) {/*valores del 0 - 9 segun el tabal ascii*/
            return false;
        }
    });

    $("#ip_4").keyup(function (event) {/*mientras estoy escrbiendo el numero*/
        var variable = $("#ip_4").val();
        if (variable > 255) {
            $("#ip_4").val("");
        } else {
            if (variable.length == 3) {
                document.getElementById("port").select();
            }
        }
    }).keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57) {/*valores del 0 - 9 segun el tabal ascii*/
            return false;
        }
    });

    $("#port").keypress(function (event) {
        if (event.keyCode < 48 || event.keyCode > 57) {
            return false;
        }
    });
    $('input').keypress(function (event) {
        if(event.which == 13) {
            puBtnEnter();
        }
    });

    $('input').focusin(function (event) {
        $('.footer-tools').fadeOut();
    });
    $('input').focusout(function (event) {
        $('.footer-tools').fadeIn();
    });

    if($(window).width() < 768){
        $('#sitetext').focusin( function (event){
            $('.icon-public').slideUp();
        });
        $('#sitetext').focusout( function (event){
            $('.icon-public').slideDown();
        });
    }
        

    // set width input enter-domain
    $('.enter-domain').width($('.enter-ip').outerWidth(true));

    $('.control.prev').click(function(){
        $('.enter-ip').removeClass('move-right');
        $('.enter-domain').removeClass('move-right');
        if($('.enter-ip').hasClass('show')){
            $('.enter-ip').removeClass('show').addClass('move-left');
            $('.label-ip').removeClass('show');
            $('.enter-domain').addClass('show').removeClass('move-left');
            $('.label-domain').addClass('show');
        }else{
            $('.enter-domain').removeClass('show').addClass('move-left');
            $('.label-domain').removeClass('show');
            $('.enter-ip').addClass('show').removeClass('move-left');;  
            $('.label-ip').addClass('show');          
        }
    });

    $('.control.next').click(function(){
        $('.enter-ip').removeClass('move-left');
        $('.enter-domain').removeClass('move-left');
        if($('.enter-ip').hasClass('show')){
            $('.enter-ip').removeClass('show').addClass('move-right');
            $('.label-ip').removeClass('show');
            $('.enter-domain').addClass('show').removeClass('move-right');;
            $('.label-domain').addClass('show');
        }else{
            $('.enter-domain').removeClass('show').addClass('move-right');
            $('.label-domain').removeClass('show');
            $('.enter-ip').addClass('show').removeClass('move-right');;  
            $('.label-ip').addClass('show');          
        }
    });


    var protocol_insecurite= "http://";
    var protocol_securite= "https://";

    checkProtocol(protocol_insecurite);

    $('.check_protocol').click(function(){

        if($('.check_protocol').hasClass('checked')){

            checkProtocol(protocol_insecurite);
            $('.check_protocol').removeClass('checked');   

        }else{

            checkProtocol(protocol_securite);
            $('.check_protocol').addClass('checked');

        }

    });
    
});


function checkProtocol(protocol) {
    
    if (localStorage.RCSReporst_Protocol == '' && localStorage.RCSReporst_Protocol == undefined) {
        localStorage.RCSReporst_Protocol = "http://";
    }

    localStorage.RCSReporst_Protocol = protocol;

}


function puBtnEnter() {
    var ip_1 = $("#ip_1").val();
    var ip_2 = $("#ip_2").val();
    var ip_3 = $("#ip_3").val();
    var ip_4 = $("#ip_4").val();

    var domain_input = $('#domain').val();

    var port = $("#port").val();
    var alias = $("#aliastext").val();
    var site = $("#sitetext").val();

    if( $('.enter-ip').hasClass('show') ){
        if (ip_1.length > 0 && ip_2.length > 0 && ip_3.length > 0 && ip_4.length > 0) {
            if (port.length > 0) {
                if (alias.length > 0) {
                    if (site.length > 0) {
                        site = site + "/WCFRCSReports.svc";
                        //site = site + "/Service1.svc";
                        var ip = ip_1 + "." + ip_2 + "." + ip_3 + "." + ip_4;
                        var urlBase = localStorage.RCSReporst_Protocol + ip + ":" + port + "/" + site;
                        var variablEE = obtenerVariables("variable");
                        //entra al ejecutar el APP
                        if (variablEE == -1) {
                            validIP(ip, port, urlBase, alias, "1", site, variablEE);
                        } else {
                            //entra al agregar un servidor
                            capture_variable(variablEE);
                            validIP(ip, port, urlBase, alias, "1", site, "1");
                        }
                    } else {
                        if (current_lang == 'es'){
                            mostrarModalGeneral("Sitio Inválido");
                        }
                        else{
                            mostrarModalGeneral("Invalid site");
                        }    
                    }
                } else {
                    if (current_lang == 'es'){
                        mostrarModalGeneral("Alias Inválido");

                    }else{
                        mostrarModalGeneral("Invalid alias");
                    }
                }
            } else {
                if (current_lang == 'es'){
                    mostrarModalGeneral("Puerto Inválido");
                }else{
                    mostrarModalGeneral("Invalid Port");
                }
            }
        }else{
            if (current_lang == 'es'){
                mostrarModalGeneral("IP Inválido");
            }else{
                mostrarModalGeneral("Invalid IP");
            }
        }
    }else{
        //esta mostrando Dominio
        if (domain_input.length > 0) {
            if (port.length > 0) {
                if (alias.length > 0) {
                    if (site.length > 0) {
                        site = site + "/WCFRCSReports.svc";
                        //site = site + "/Service1.svc";
                        var urlBase = localStorage.RCSReporst_Protocol + domain_input + ":" + port + "/" + site;
                        var variablEE = obtenerVariables("variable");
                        //entra al ejecutar el APP
                        if (variablEE == -1) {
                            validIP(domain_input, port, urlBase, alias, "1", site, variablEE);
                        } else {
                            //entra al agregar un servidor
                            capture_variable(variablEE);
                            validIP(domain_input, port, urlBase, alias, "1", site, "1");
                        }
                    } else {
                        if (current_lang == 'es'){
                            mostrarModalGeneral("Sitio Inválido");
                        }
                        else{
                            mostrarModalGeneral("Invalid site");
                        }    
                    }
                } else {
                    if (current_lang == 'es'){
                        mostrarModalGeneral("Alias Inválido");

                    }else{
                        mostrarModalGeneral("Invalid alias");
                    }
                }
            } else {
                if (current_lang == 'es'){
                    mostrarModalGeneral("Puerto Inválido");
                }else{
                    mostrarModalGeneral("Invalid Port");
                }
            }
        }else{
            if (current_lang == 'es'){
                mostrarModalGeneral("Dominio Inválido");
            }else{
                mostrarModalGeneral("Invalid Domain");
            }
        }
    }
        

}


/************************ funcion valida IP ********************************************/
/*esta funcion es muy importante para no tener problemas de no poder ingresar a datos de servidores*/
//entra al ejecutar el APP
function validIP(ip, port, _url, alias, use, site, variable) {
    var xurl = 'http://' + ip + ':' + port + '/' + site + '/Country/';
    $.ajax({
        type: 'GET',
        timeout: 15000,
        url: xurl,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: true,
        crossdomain: true,
        beforeSend: function () {
            showLoading();
        },
        complete: function () {
            hideLoading();
        },
        success: function (data, textStatus, XMLHttpRequest) {
            console.log('Error: ' + textStatus);
            console.log('url ' + _url + " - xurl: " + xurl);
            console.log("COMPLETADO ... COMPLETADO");
            //entra al ejecutar el APP
            if (variable == -1) {
                firstServer(ip, port, xurl, alias, use, site, variable);
            } else { 
                newServer(ip, port, xurl, alias, use, site, variable);
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(xhr.statusText);
            console.log(xhr.responseText);
            //hideLoading();
            if (current_lang == 'es'){
                mostrarModalGeneral("Error de Conexión");
            }else{
                mostrarModalGeneral("Connection Fail");
            }
        }
    });
}


function newServer(ip, port, urlbase, alias, activo, site, variable) {
    
    try {
        window.location.href = "login.html?" +
                                    "ip=" + ip +
                                    "&port=" + port +
                                    "&urlbase=" + urlbase +
                                    "&alias=" + alias +
                                    "&activo=1" +
                                    "&site=" + site +
                                    "&variable=" + variable;
    } catch (e) {
        console.log("Error updateState " + e + ".");
    }

}


function firstServer(ip, port, urlbase, alias, activo, site, variable) {
    
    window.location.href = "login.html?" +
            "ip=" + ip +
            "&port=" + port +
            "&urlbase=" + urlbase +
            "&alias=" + alias +
            "&activo=1" +
            "&site=" + site +
            "&variable=" + variable;
}