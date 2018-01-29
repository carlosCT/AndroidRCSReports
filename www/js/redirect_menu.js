$(document).ready(function(){

    var RCSReportsAppVersion = localStorage.RCSReportsAppVersion;
    alert(RCSReportsAppVersion);

    /*document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        
        var RCSReportsAppVersion = localStorage.RCSReportsAppVersion;
        alert(RCSReportsAppVersion);
        //goToVerificateAppVersion();
    }*/
});


function goToVerificateAppVersion() {
    //If not WS updated or AppVersion updated then redirect menu.html
    try {
        var query1 = "SELECT * FROM " + TABLE_URL + " WHERE  " + KEY_USE + " = '1'";
        localDB.transaction(function (transaction) {
            transaction.executeSql(query1, [], function (tx, results) {
                var c_ip = results.rows.item(0).ip;
                var c_port = results.rows.item(0).port;
                var c_site = results.rows.item(0).site;

                var query2 = "SELECT " + KEY_PIN + " FROM " + TABLE_CONFIGURATION;
                localDB.transaction(function (transaction) {
                    transaction.executeSql(query2, [], function (transaction, results) {
                        var pin = results.rows.item(0).pin;
                        var query3 = "SELECT * FROM " + TABLE_REPORTS;
                        localDB.transaction(function (transaction) {
                            transaction.executeSql(query3, [], function (transaction, results) {
                                var yurl = 'http://' + c_ip + ':' + c_port + '/' + c_site + '/login/session/post';
                                var array = {Pin: pin};

                                $.ajax({
                                    url: yurl,
                                    timeout: 15000,
                                    type: 'POST',
                                    data: JSON.stringify(array),
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
                                        
                                        if (data.successful == 1) {
                                            //WS Version
                                            localStorage.RCSReportsWSVersion=data.version;
                                        }

                                        // Validate version
                                        if (localStorage.RCSReportsWSVersion!=localStorage.RCSReportsAppVersion || localStorage.RCSReportsWSVersion==undefined || localStorage.RCSReportsAppVersion==undefined) {
                                            //Redirect menu screen
                                            window.location.href = "menu.html";
                                        }
                                    },
                                    error: function (xhr, ajaxOptions, thrownError) {
                                        console.log(xhr.status);
                                        console.log(xhr.statusText);
                                        console.log(xhr.responseText);
                                        
                                        if (current_lang == 'es') {
                                            mostrarModalGeneral("Error de Conexión");
                                        } else {
                                            mostrarModalGeneral("No Connection");
                                        }
                                    }
                                });
                            });
                        });
                    });
                });
            });
        });
    } catch (e) {
        console.log("Error updateState " + e + ".");
    }
}