/*************INDEX**********/
function MSG_INSERT_ADDRESS_SERVER() {
    $("#lblmsg1").html("Ingrese la dirección IP");
    $("#lblmsg1Domain").html("Ingrese el Dominio");
}

function MSG_PORT() {
    $("#lblmsg2").html("Puerto");
}

function MSG_ALIAS() {
    $("#lblmsg3").html("Alias ");
}

function MSG_SITE() {
    $("#lblmsg4").html("Sitio");
}

function MSG_RETURN() {
    $("#txtpreferences_index").html("Atrás");
}


function MSG_GO_ADD() {
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
    if (current_lang == 'es')
        $("#btnenter").val("Agregar");
    else
        $("#btnenter").val("Add");

    $('.lblmsgNext').text("Siguiente");
}

function MSG_GO() {
    var lang = navigator.language.split("-");
    var current_lang = (lang[0]);
    // if (current_lang == 'es'){
    //     $("#btnenter").val("Ingresar");
    //     $("#btnenter").text("Ingresar");
    // }else{
    //     $("#btnenter").val("Ok");
    //     $("#btnenter").text("Ok");
    // }
}
// Errores Index
function MSG_CONNECTION_FAILURE() {
    if (current_lang == 'es')
        return $("#").html("Fallo de Conexión");
    else
        return $("#").html("Error Conection");
}

function MSG_INVALID_IP() {
    $("#").html("IP Invalida");
}
/**********************/


/*************LOGIN*********/
function MSG_IP_DOMAIN_SITE() {
    $("#lblIpDomain").html("IP/Dominio");
    $("#lblSite").html("Sitio");
}
function MSG_NUMBER_PIN() {
    $("#lbllmsg1").html("Ingrese su número Pin de empleado");
}
function MSG_REMEMBER_PIN() {
    $("#checktext").html("Recordar PIN");
}
function MSG_BACK_LOGIN() {
    $("#txtback_login").html("Atrás");
}
// function BTN_LOGIN() {
//     $("#btnlogin").val("Entrar");
//     $("#btnlogin").text("Entrar");
// }
function BTN_LOGIN() {
    $(".lblmsgNext").text("Siguiente");
}



/*****************************/

/****************MENU*************/
function MSG_LBL_MAINTITLE() {
    $(".isotipo").text("RCS iReports");
}
function MSG_LBL_GVS() {
    $("#lblgvst").html("Metas vs Ventas");
}
function MSG_LBL_SC() {
    $("#lblgvst_r2").html("Clasificación por Tienda");
}
function MSG_LBL_SC_D() {
    $("#lblgvsd_r2").html("Clasificación personalizado por Tienda");
}

function MSG_LBL_PP() {
    $("#lblgvst_r3").html("Progreso en % por tienda");
}

function MSG_LBL_PP_D() {
    $("#lblgvsd_r3").html("El progreso de ventas por tienda");
}

function MSG_LBL_GVS_D() {
    $("#lblgvsd").html("Compare sus metas vs ventas en tiempo real");
}
function MSG_LBL_WORKING() {
    $("#lblworkd").html("Más Reportes Proximamente...");
}

function MSG_LBL_SETDATE(){
    $("#Set_date").html("Establecer fecha");
    $(".lblSetDate").html("Establecer fecha");
    $(".lblMobile").html("Móvil");
    $(".lblDatabase").html("Calendario");

}


//Modal Menu
function MSG_LBL_CHANGE_CURRENT_SERVER(){
    $('.actual_server').text('Servidor Actual');
    $('#lblViewServer').text('Servidor Actual');
}
function MSG_LBL_CHANGE_ALIAS_T() {
    $("#lblchangealit").html("Servidores");
}
function MSG_LBL_CHANGE_ALIAS_HIDE_SHOW_REPORTS() {
    $("#lblHideTitle").html("Ocultar Reportes");
}
function MSG_LBL_CHANGE_ALIAS_BUTTON() {
    $("#add_alias").html("Añadir Servidor");
}
function MSG_LBL_CHANGE_ALIAS_SERVERS() {
    $("#servers_list").html("Servidores");
}
function MSG_LBL_CHANGE_ALIAS_CLOSE() {
    $(".close").html("X");
    $(".close.back").html("Atrás");
}

function MSG_LBL_CHANGE_ALIAS_HIDE_SHOW_REPORTS_T() {
    $("#hide_reports").html("Ocultar/Mostrar Reportes");
}

function MSG_LBL_CHANGE_ALIAS_CONFIRM() {
    $("#lblchangealic").html("¿Desea cambiar de Servidor?");
}
function MSG_LBL_DELETE_SERVER_MESSAGE() {
    $("#lbldeleteser").html("¿Desea eliminar este Servidor?");
}
function MSG_LBL_CHANGE_ALIAS_CONFIRM_SI() {
    $("#btnsi").html("Si");
    $("#btnsidelete").html("Si");
}
function MSG_LBL_CHANGE_ALIAS_SETTINGS(){
    $('#lblToolsTitle').html("Configuraciones"); 
    $('#txtServerT').text('Servidor: ');
    $('#txtIpT').text('IP/Dominio: ');
    $('#txtUserT').text('Usuario: ');
}

/* MSG LBL UPDATE VERSION - FJ */
function MSG_LBL_UPDATE_VERSION() {
    $('.lblSetMessage').html('Mensaje');
    $('.lblSetMsgUpdateVers1').html('Se requiere actualizar el servidor para poder utilizar esta versión.');
    $('.lblSetMsgUpdateVers2').html('Póngase en contacto con el proveedor.');
    $('.lblEmailSupport').html('soporte@retailcs.com');
    $('.lblEmailSupport').attr('href','mailto:soporte@retailcs.com');
}


// BANNER
function MSG_LBL_BANNER_SLIDER(){
    $('#lblTitleTools').text("Pruebe RCS Tools");
    $('#lblSubTitleTools').text("Con RCS Tools controle su inventario");
    
    $('#lblTitleToolsUpdate').text("Revise lo nuevo en RCS Reports");
    $('#lblSubTitleToolsUpdate').text("Nueva información útil para su negocio");

    $('#lblSlide1_h2').text("Mayor información");
    $('#lblSlide1_p').text("Visualice nuevos datos sobre la tienda en el Reporte de Metas vs Ventas");

    $('#lblSlide2_h2').text("Diccionario actualizado");
    $('#lblSlide2_p').text("Conozca acerca de la nueva información añadida al Reporte de Metas vs Ventas");

    $('#lblSlide3_h2').text("Mejora de interfaz");
    $('#lblSlide3_p').text("RCS Reports ofrece una renovada interfaz que facilita su uso");

    $('#image1').attr('src','../../img/img_slider1.png');
    $('#image2').attr('src','../../img/img_slider2.png');
    $('#image3').attr('src','../../img/img_slider3.png');
}

/******************************/


/**********STORES************/
function BTN_PREFERENCES_TXT() {
    $('#txtpreferences').html("Atrás");
    $('#txtpreferences_title').html("Preferencias");
}
function BTN_REFRESH() {
    $('#storetitle').html("Metas vs Ventas");
}
function OPT_COMBO_GENERAL() {
    $('.select-general .init p').html("Por Compañia");
    $('.select-general .item:nth-child(2) p').html("Por Compañia");
    $('.select-general .item:nth-child(3) p').html("Por Región");
    $('.select-general .item:nth-child(4) p').html("Por Tienda");
}
function OPT_COMBO_DATE() {
    $('.select-date .init p').html("Hoy");
    $('.select-date .item:nth-child(2) p').html("Hoy");
    $('.select-date .item:nth-child(3) p').html("Ayer");
    $('.select-date .item:nth-child(4) p').html("Inicio de Semana");
    $('.select-date .item:nth-child(5) p').html("Inicio de Mes");
    $('.select-date .item:nth-child(6) p').html("Inicio de Año");
}
function OPT_COMBO_STORES() {
    $('.select-region .init p').html("Seleccione Región");
    $('.select-region .item:nth-child(2) p').html("Seleccione Región");
}
//Preferences
function BTN_BACK() {
    $('#exit span').html("Regresar");
}

function MSGS_ORDER() {
    $('.changeOrden span').html("Ordenar por");
    $('.checkbox_view #txtchksales').html("Ventas");
    $('.checkbox_view #txtchkgoals').html("Metas");
}


//Modal Stores
function MSG_DICT_TITLE() {
    $('#lblmodaldicc').html("Diccionario");
}

function BTN_OK() {
    $('.btnok').html("Aceptar");
}
function TITLE_MESSAGE(){
    $('.titleMessage').html("Mensaje");
}

/*****************************/


/*******MODAL_MENU_NEW_SERVER*****/

function MSG_TITLE_SELECT_ALIAS() {
    $('#').html("Seleccione su Alias");
}
function MSG_BTN_ADDALIAS() {
    $('#').html("Nuevo Alias");
}
/********************************************************/
/****************** REPORTE1**************************/
function MSG_COMPANY_1() {
    $('#filterGeneral').text("Por Compañia");
}
function MSG_LBL_COMPANY_1() {
    $('#lbl_By_company').text("Por Compañia");
}
function MSG_LBL_REGION_1() {
    $('#lbl_By_region').text("Por Región");
}
function MSG_LBL_STORE_1() {
    $('#lbl_By_Store').text("Por Tienda");
    $('.lbl_By_Store').text("Por Tienda");
}
function MSG_TXT_TITLE_1() {
    $('#top_txt_title').text("Opciones");
}
function MSG_SPN_HEADER_1() {
    $('#section_header').text("Elegir Filtros");
}
function MSG_COMBO_FILTER_STORE(){
    $('.lblFilter').text("Filtrar Tiendas");
    $('.filterStoresSales').text("Todos");
    $('.optionAll').text("Todos");
    $('.optionSale').text("↑Arriba");
    $('.optionGoal').text("↓Abajo");
}

function MSG_LBL_DET_DIC_1(){

    $('#TodayGoal').text("MH");
    $('#TodaySale').text("VH");

    $('#YesterdayGoal').text("MA");
    $('#YesterdaySale').text("VA");

    $('#WeekGoal').text("MS");
    $('#WeekSale').text("VS");

    $('#MonthGoal').text("MM");
    $('#MonthSale').text("VM");

    $('#ThisYearGoal').text("MAH");
    $('#ThisYearSale').text("VAH");

    $('#CompleteYearGoal').text("MAC");
    $('#CompleteYearSale').text("VAC");

    $('#LastYearGoal').text("MAP");
    $('#LastYearSale').text("VAP");


    $('#Visitors').text("VIS");
    $('#Trans').text("TRAN");
    $('#AvgTicket').text("TPR");
    $('#UnitPerTrans').text("UPR");


    $('#report1TG').text("Meta de hoy");
    $('#report1TS').text("Ventas de hoy");

    $('#report1YG').text("Meta de ayer");
    $('#report1YS').text("Ventas de ayer");

    $('#report1WG').text("Meta de la semana a la fecha");
    $('#report1WS').text("Ventas de la semana a la fecha");

    $('#report1MG').text("Meta del mes a la fecha");
    $('#report1MS').text("Ventas del mes a la fecha");

    $('#report1TYG').text("Meta del año a la fecha");
    $('#report1TYS').text("Ventas del año a la fecha");

    $('#report1CYG').text("Meta del año completo");
    $('#report1CYS').text("Ventas del año completo");

    $('#report1LYG').text("Meta del año pasado");
    $('#report1LYS').text("Ventas del año pasado");

    $('#report1VIS').text("Número de visitantes");
    $('#report1TRAN').text("Número de transacciones");
    $('#report1ADS').text("Ticket promedio");
    $('#report1UPT').text("Unidades promedio");

    $('#lblChooseRegion').text('Elegir Región');
}


function MSG_MODAL_OK_1() {
    $('#btnok').text("Aceptar");
}
function MSG_BACK_1() {
    $('#txtBack').text("Atrás");
}
function MSG_CHOOSEDATE_1() {
    $('#lblChooseDate').text("Elegir una Fecha");
}
function MSG_TODAY_1() {
    $('#lblToday').text("Hoy");
}
function MSG_YESTERDAY_1() {
    $('#lblYesterday').text("Ayer");
}
function MSG_WEEK_1() {
    $('#lblWeek').text("Inicio de Semana");
}
function MSG_MONTH_1() {
    $('#lblMonth').text("Inicio de Mes");
}
function MSG_YEAR_1() {
    $('#lblYear').text("Inicio de Año");
    $('#lblLastYear').text('Año Pasado');
}
function MSG_VISUALIZATION_1() {
    $('#lblVisualization').text("Visualización");
}
function MSG_SHOWCURRENT_1(){
    $('.text-checkbox.current').text("Show Actual");
}
function MSG_SHOWGLOBAL_1(){
    $('.text-checkbox.global').text("Show Global");
}
function MSG_TODAYP_1(){
    $('#lblTodayP').text("Hoy");
}

/************REPORTE 2  *******************/



function MSG_RETURN_2() {
    $("#txtReturn").text("Atrás");
}

function MSG_TITLE_OPTIONS_22() {
    $("#txt_title2").text("Opciones");
}

function MSG_TITLE_ALL_REGION_2() {
    $("#filterClasification").text("Todas las Clasificaciones");
}

function MSG_CHOOSE_RANGE_2() {
    $("#lblChooseRange").text("Elegir rango");
}

function MSG_DATE_START_2() {
    $("#lbldateStart").text("Fecha de inicio");
}

function MSG_DATE_END_2() {
    $("#lbldateEnd").text("Fecha de fin");
}

function MSG_CHOOSE_DATE_COMPARE_2() {
    $("#lblChooseCompare").text("Elegir fecha de comparación");
}

function MSG_DATE_COMPARE_2() {
    $("#lbldateToCompare").text("Fecha de comparación");
}

function MSG_BACK_2() {
    $("#txtback").text("Atrás");
}

function MSG_INFORMATION_2() {
    $(".lblChangeRange").text("Cambiar Rango");
    $(".lblClasificationRange").text("Rango de Clasificación");
}

function MSG_CHOOSE_CLASIFICATION_2() {
    $("#lblChooseClasification").text("Eligir Clasificación");
}

function MSG_ALL_CLASIFICATION_2() {
    $("#lblAllClasification").text("Todas las Clasificaciones");
}

function MSG_VERY_GOOD_2() {
    $("#lblVeryGood").text("Muy bueno");
}

function MSG_CALEN_VERYGOOD_2() {
    $("#clblVeryGood").text("Muy bueno");
}
function MSG_CALEN_GOOD_2() {
    $("#clblGood").text("Bueno");
}

function MSG_CALEN_ACCEPTABLE_2() {
    $("#clblAcceptable").text("Aceptable");
}
function MSG_CALEN_DEFICIENT_2() {
    $("#clblDeficient").text("Deficiente");
}

function MSG_CALEN_CRITICAL_2() {
    $("#clblCritical").text("Critico");
}

function MSG_CALEN_VERYCRITICAL_2() {
    $("#clblVeryCritical").text("Muy crítico");
}

function MSG_CANCEL_2() {
    $(".btn.btn-modal.left").text("Cancelar");
}

function MSG_OK_2() {
    $(".btn.btn-modal.right").text("Aceptar");
}

function MSG_GOOD_2() {
    $("#lblGood").text("Bien");
}
function MSG_ACCEPTABLE_2() {
    $("#lblAcceptable").text("Aceptable");
}

function MSG_DEFICIENT_2() {
    $("#lblDeficient").html("Deficiente");
}

function MSG_CRITICAL_2() {
    $("#lblCritical").text("Crítico");
}
function MSG_VERY_CRITICAL_2() {
    $("#lblVeryCritical").text("Muy crítico");
}


/*******************************************/

/**************REPORTE3***************/


function MSG_RETURN_3() {
    $("#txtpreferences").text("Atrás");
}

function MSG_BACK_3() {
    $("#txtBack").text("Atrás");
}


function MSG_CHOOSE_RANGE_3() {
    $("#lblChooseRange").text("Elegir rango");
}

function MSG_DATE_START_3() {
    $("#lbldateStart").text("Fecha de inicio");
}
function MSG_DATE_END_3() {
    $("#lbldateEnd").text("Fecha de fin");
}

function MSG_CHOOSE_DATE_COMPARE_3() {
    $("#lblChooseCompare").text("Elegir fecha de comparación");
}

function MSG_DATE_COMPARE_3() {
    $("#lbldateToCompare").text("Fecha de comparación");
}

function MSG_DICTIONARY() {
    $(".lblmodaldicc").text("Diccionario");
    $(".dictionary").text("Mostrar Diccionario");
}



function MSG_TOTALMONTHGOAL_3() {
    $("#lblTotalMonthGoal").text("Meta mensual por tienda");
}

function MSG_TOTALGOALSTORE_3() {
    $("#lblTotalGoalAll").text("Meta total mensual de la empresa");
}

function MSG_TEXT_ACUMULATE_PECENT_SALE_3() {
    $("#lblAcumulatePercentSale").text("Porcentaje acumulado de ventas");
}
function MSG_TEXT_ACUMULATE_PERCENT_GOAL_3() {
    $("#lblAcumulatePercentGoal").text("Porcentaje acumulado de metas");
}
function MSG_TEXT_OPTIONS_3() {
    $("#txt_Options").text("Opciones");
}

function MSG_TEXT_OK_3() {
    $("#txt_ok").text("Aceptar");
}

function MSG_TEXT_CHOOSE_REGION_3() {
    $("#txt_choose_region").text("Elegir Región");
}


/*****************************************************/

/***********************OPTIONS MENU REPORT 4***************************/

function MSG_LBL_TITLE_MENU_R4() {
    $('#lblgvst_r4').html("Gráfico Avanzado");
}

function MSG_LBL_TITLE_MENU_DETAIL_R4() {
    $("#lblgvsd_r4").html("Visualiza ventas, metas y punto de equilibrio graficamente");
}

function MSG_TITLE_DIALOGSTORE_R4() {
    $("#title_store_menu_r4").html("Elija su tienda");
}

function MSG_OK_R4() {
    $("#btnStore").html("Aceptar");
}

function MSG_CHOOSE_RANGE_4() {
    $("#lblChooseRange").text("Elegir rango");
}
function MSG_OPTIONS_4() {
    $("#lbl_Options").text("Opciones");
}
function MSG_BACK_4() {
    $("#lblBack").text("Atrás");
}
function MSG_CHOOSE_MARGEN_4(){
    $("#lblChooseMargen").text("Elegir margen");
}

 
function MODAL_R4(){
    $("#lblEnterMargen").text("Introduzca el Margen");
    $("#lblMargenValue").text("Valor de Margen");
    $("#lblCancel").text("Cancelar");
    $("#lblOk").text("Aceptar");
}

/***********************OPTIONS MENU REPORT 5***************************/

function MSG_LBL_TITLE_MENU_R5() {
    $('#lblgvst_r5').text("Alcance de Meta");
}

function MSG_LBL_TITLE_MENU_DETAIL_R5() {
    $("#lblgvsd_r5").text("Mira y compara el progreso de venta por empleado");
}

function MSG_TITLE_DIALOGSTORE_R5() {
    $("#title_store_menu_r5").text("Elija su tienda");
}

function MSG_OK_R5() {
    $("#btnStore5").text("Aceptar");
}




/***********************************************************/
/******************MENU REPORT 4**********************/

function MSG_LBL_RETURN_R4() {
    $("#txtpreferences_r4").html("Atrás");
}

function MSG_DATE_START_R4() {
    $("#lblDateStart_r4").html("Fecha Inicio");
}
function MSG_DATE_END_R4() {
    $("#lblDateEnd_r4").html("Fecha Fin");
}

//Grafico reprot 4 
function MSG_SALES() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Venta";
    } else {
        return "Sale";
    }
}
function MSG_GOAL() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Meta";
    } else {
        return "Goal";
    }
}
function MSG_BREAKEVEN() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Punto Equilibrio";
    } else {
        return "Breakeven";
    }
}
function MSG_TOTAL_GOAL() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Meta Total";
    } else {
        return "Total Goal";
    }
}
//

//Grafico reprot 6 
function MSG_REPORT6_YEARA() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Año Actual";
    } else {
        return "Current Year";
    }
}

function MSG_REPORT6_YEARP() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Año Pasado";
    } else {
        return "Last Year";
    }
}

function MSG_REPORT6_SALES() {
    lang = navigator.language.split("-");
    current_lang = (lang[0]);
    if (current_lang == 'es') {
        return "Ventas";
    } else {
        return "Sales";
    }
}
//

function MSG_TITLE_DS_R4() {
    $(".title_store_r4").html("Elegir tienda");
}
function MSG_DS_OKR4() {
    $("#btn_ok_r4").html("Aceptar");
}

function MSG_DATESTART_R4() {
    $("#lbldateStartR4").html("Fecha de inicio");
}
function MSG_DATEEND_R4() {
    $("#lbldateEndR4").html("Fecha de fin");
}

function MODAL_ORIENTATION_R4(){
     $(".textRotateScreen").text("Por favor, Gire a la Posición Horizontal");
     $(".title_rotateScreen_R4").text("Mensaje");
}
/****************************************************/

// Opciones de Actual Global
function MSGS_TEXT_OPTIONS(){
     $(".txtCurrent").text("Mostral Actual");
     $(".txtGlobal").text("Mostrar Global");
}

function MSG_ALL_REGION(){
    $(".filterRegion").text("Todas las Regiones");
}


//Sign out
function MSGS_SIGNOUT(){
    $('#btnSignOut').text("Cerrar sesión");
    $('#lblSignOut').text("¿Está seguro que quiere cerrar sesión?");
    $('#btnYesSignOut').text("Si");
}


//report 6//
function MSG_TITLE_DIALOGSTORE_R6(){
    $('#title_store_menu_r6').text('Elija su tienda');
}

//Language5
function changeLanguage5(){
     //head
        $('#txtReturn').text('Atrás');
        $('#lblDateEnd').text('Fecha fin');
        $('#lblDateStart').text('Fecha inicio');
        //tabla head
        $('thead th:nth-child(1)').text('Empleados');
        $('thead th:nth-child(2)').text('Unidades Vendidas');
        $('thead th:nth-child(3)').text('Vental Total');
        $('thead th:nth-child(4)').text('Meta');
        //range date head
        $('.ChooseRange').text('Elegir Rango');
        $('.ChooseStore').text('Elegir Tienda');
        $('.close').text("Cerrar");
        $('thead th:nth-child(2)').text('Unidades Vendidas');
        $('thead th:nth-child(3)').text('Vental Total');
        $('thead th:nth-child(4)').text('Meta');
        $('#lbldateEnd').text('Fecha fin');
        $('#lbldateStart').text('Fecha inicio');
        $('.txt_options').text("Opciones");
        $('#txtBack').text("Atrás");
        
        $('.titleMessage').text('Mensaje');
        $('.btnok').text('Aceptar');
        $(".textRotateScreen").text("Por favor, Gire a la Posición Horizontal");
        $(".title_rotateScreen_R5").text("Mensaje");
        
}

//Language6
function changeLanguage6(){
    $('#txtpreferences_r6').text('Atrás');
    $('#lblBack').text('Atrás');
    $('.title_Date_r6').text('Elegir Fecha');
    $('.title_store_r6').text('Elegir Tienda');
    $('.date-3').text('Inicio de Semana');
    $('.date-4').text('Inicio de Mes');
    $('.date-5').text('Inicio de Año');
    $('.nameDate').text('Inicio de Semana');
    $('.close').text('X');
    $('.btnok').text('Aceptar');
    $('.titleMessage').text('Mensaje');
    $('.titleTopBarOpt').text('Opciones');
    $(".textRotateScreen").text("Por favor, Gire a la Posición Horizontal");
    $(".title_rotateScreen_R6").text("Mensaje"); 
}

//Language7
function changeLanguage7(){
    $('#txtpreferences').text('Atrás');
    $(".close").html("X");
    MSG_COMPANY_1();
    MSG_LBL_COMPANY_1();
    MSG_LBL_REGION_1();
    MSG_LBL_STORE_1();
    MSG_TXT_TITLE_1();
    MSG_SPN_HEADER_1();

    MSG_MODAL_OK_1();
    MSG_BACK_1();
    MSG_CHOOSEDATE_1();
    MSG_TODAY_1();
    MSG_YESTERDAY_1();
    MSG_WEEK_1();
    MSG_MONTH_1();
    MSG_YEAR_1();
    MSG_VISUALIZATION_1();
    MSG_SHOWCURRENT_1();
    MSG_SHOWGLOBAL_1();
    MSG_TODAYP_1();
    MSG_LBL_DET_DIC_1();
    MSG_DICTIONARY();
    MSG_COMBO_FILTER_STORE();
    /***************************************/
    MSGS_TEXT_OPTIONS();
   
}

//Language8
function changeLanguage8(){
    $('#txtpreferences').text('Atrás');
    $(".close").html("X");
    MSG_COMPANY_1();
    MSG_LBL_COMPANY_1();
    MSG_LBL_REGION_1();
    MSG_LBL_STORE_1();
    MSG_TXT_TITLE_1();
    MSG_SPN_HEADER_1();
   
    
    MSG_MODAL_OK_1();
    MSG_BACK_1();
    MSG_CHOOSEDATE_1();
    MSG_TODAY_1();
    MSG_YESTERDAY_1();
    MSG_WEEK_1();
    MSG_MONTH_1();
    MSG_YEAR_1();
    MSG_VISUALIZATION_1();
    MSG_SHOWCURRENT_1();
    MSG_SHOWGLOBAL_1();
    MSG_TODAYP_1();
    MSG_LBL_DET_DIC_1();
    MSG_DICTIONARY();
    MSG_COMBO_FILTER_STORE();
    /***************************************/
    MSGS_TEXT_OPTIONS();
   
}

//Language9
function changeLanguage9(){
    $('#txtpreferences').text('Atrás');
    $('#txtBack').text("Atrás");
    $('#lblChooseDate').text('Elegir Fecha');
    $('.titleTopBar').text("Opciones");
    $('.title_rotateScreen_R9').text('Mensaje');
    $('.textRotateScreen').text("Por favor, Gire a la Posición Horizontal");
    $('.btnok').text('Aceptar');
    $('.titleMessage').html("Mensaje");
    $('#lblToday').text("Hoy");
    $('#lblYesterday').text("Ayer");
    $('#lblWeek').text("Inicio de Semana");
    $('#lblMonth').text("Inicio de Mes");
    $('#lblYear').text("Inicio de Año");
    $('#lblTodayP').text("Hoy");
    
}

//Language10
function changeLanguage10(){
    $('#txtpreferences').text('Atrás');
    $('#txtBack').text("Atrás");
    $('#lblChooseDate').text('Elegir Fecha');
    $('.titleTopBar').text("Opciones");
    $('.title_rotateScreen_R10').text('Mensaje');
    $('.textRotateScreen').text("Por favor, Gire a la Posición Horizontal");
    $('.btnok').text('Aceptar');
    $('.titleMessage').html("Mensaje");
    $('#lblToday').text("Hoy");
    $('#lblYesterday').text("Ayer");
    $('#lblWeek').text("Inicio de Semana");
    $('#lblMonth').text("Inicio de Mes");
    $('#lblYear').text("Inicio de Año");
    $('#lblTodayP').text("Hoy");
   
}


//Language11
function changeLanguage11(){
    $('#txtpreferences').text('Atrás');
    $('#txtBack').text("Atrás");
    $('.titleTopBar').text("Opciones");
    $('.title_rotateScreen_R11').text('Mensaje');
    $('.textRotateScreen').text("Por favor, Gire a la Posición Horizontal");
    $('#lblChooseDate').text('Elegir Fecha');
    $('.btnok').text('Aceptar');
    $('.titleMessage').html("Mensaje");
    $('#lblToday').text("Hoy");
    $('#lblYesterday').text("Ayer");
    $('#lblWeek').text("Inicio de Semana");
    $('#lblMonth').text("Inicio de Mes");
    $('#lblYear').text("Inicio de Año");
    $('#lblTodayP').text("Hoy");
   
}