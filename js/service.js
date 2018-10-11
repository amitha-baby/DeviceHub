'use strict';
let deviceDataArray = localStorage.getItem('deviceList') ? JSON.parse(localStorage.getItem('deviceList')) : [];
var jsonObject="";


localStorage.setItem('deviceList', JSON.stringify(deviceDataArray));
const dataFromLocalStorage = JSON.parse(localStorage.getItem('deviceList'));
 

var request = new XMLHttpRequest();
var url = 'https://script.googleusercontent.com/a/macros/cabotsolutions.com/echo?user_content_key=IGUdrzEd5bHowjSL73tAMQouPMaK3VhGtNOsdqWbMugGYIYzNfzcPWNopRbl9yXKDu2885-wArBrcTXx9q-Yqdp1Q8GFEIk4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8N3YZ91GNx49FXyl5euMLmjnFAkueCBXj0iX0FmGGH8eysCHO9HnBESumQduuF82BG65TUsf-URlO8TeqEh96kujRJXaOC0_H5yDnhMzfu31zLqmv46PQV&lib=MMKXgi_qUFWSt0nTLnoLjrkylSQPUcriW';
    request.open('GET',url, true);
        
    request.onload = function () {
        var json = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var json = eval("(" + this.response + ")");
            jsonObject = json["user"];
            const tBody = document.getElementById("deviceList");

            function additem() {
                for (var device = 0; device < jsonObject.length; device++) {

                    const tr = document.createElement('tr');

                    tr.innerHTML = `
                    <td>${jsonObject[device].MANUFACTURER}</td>
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].IMEINO}</td>
                    <td>${jsonObject[device].IMEINO}</td>
                    `;

                    tBody.appendChild(tr);
                }
            }
     
        deviceDataArray.push(tBody.value);
        localStorage.setItem('deviceList', JSON.stringify(jsonObject));
            additem();

    } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            tBody.appendChild(errorMessage);
          }
        }
   
    request.send();
    
    

    let AvailableObj = {

        deviceName : 'Available',
        getItems : function filterItems(e) {
                    e.preventDefault;
                    $("#deviceList").empty();
                    const tBody = document.getElementById("deviceList");
                    for (var device = 0; device < jsonObject.length; device++) {
                        
                            if (deviceDataArray[device].STATUS == this.deviceName) {
                                console.log(this.deviceName);
                                    const tr = document.createElement('tr');
                                    tr.innerHTML = `
                                    <td>${jsonObject[device].MANUFACTURER}</td>
                                    <td>${jsonObject[device].NAME}</td>
                                    <td>${jsonObject[device].STATUS}</td>
                                    <td>${jsonObject[device].MODEL}</td>
                                    <td>${jsonObject[device].SERIALNO}</td>
                                    <td>${jsonObject[device].IMEINO}</td>
                                    <td>${jsonObject[device].IMEINO}</td>
                                    `;
                                
                                    tBody.appendChild(tr);
                        } 
                    }
                }         
    };

    let NochargerObj = { deviceName : 'No Charger'};

    let MissingObj = { deviceName : 'Missing'};
    
    let NotworkingObj = {deviceName : 'Not Working'};

    var availableButton = document.getElementById('available_btn');
    var noCharger = document.getElementById('nocharger_btn');
    var missing = document.getElementById('missing_btn');
    var notWorking = document.getElementById('notworking_btn');

    noCharger.addEventListener('click', AvailableObj.getItems);
    noCharger.addEventListener('click', AvailableObj.getItems.call(NochargerObj));
    missing.addEventListener('click', AvailableObj.getItems.call(MissingObj));
    notWorking.addEventListener('click', AvailableObj.getItems.call(NotworkingObj));





  
