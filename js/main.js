'use strict';
let deviceDataArray = localStorage.getItem('deviceList') ? JSON.parse(localStorage.getItem('deviceList')) : [];
var jsonObject;

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
                    <td>${jsonObject[device].CHARGE}</td>
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


    
    class availableDevices {

        filterItems(e) {
            e.preventDefault;
            $("#deviceList").empty();
            const tBody = document.getElementById("deviceList");
            for (var device = 0; device < jsonObject.length; device++) {

                if (deviceDataArray[device].STATUS == "Available") {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td>${jsonObject[device].MANUFACTURER}</td>
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].IMEINO}</td>
                    <td>${jsonObject[device].CHARGE}</td>
                    `;
                        
                            tBody.appendChild(tr);
                } 
            }
        }         
    }

    class noChargerDevices {

        filterItems(e) {
            e.preventDefault;
            $("#deviceList").empty();
            const tBody = document.getElementById("deviceList");
            for (var device = 0; device < jsonObject.length; device++) {

                if (deviceDataArray[device].STATUS == "No Charger") {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td>${jsonObject[device].MANUFACTURER}</td>
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].IMEINO}</td>
                    <td>${jsonObject[device].CHARGE}</td>
                    `;
                        
                            tBody.appendChild(tr);
                } 
            }
        }         
    }

    class notWorkingDevices {

        filterItems(e) {
            e.preventDefault;
            $("#deviceList").empty();
            const tBody = document.getElementById("deviceList");
            for (var device = 0; device < jsonObject.length; device++) {

                if (deviceDataArray[device].STATUS == "Not Working") {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td>${jsonObject[device].MANUFACTURER}</td>
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].IMEINO}</td>
                    <td>${jsonObject[device].CHARGE}</td>
                    `;
                        
                            tBody.appendChild(tr);
                } 
            }
        }            
    }

    class missingDevices {
        
        filterItems(e) {
            e.preventDefault;
            $("#deviceList").empty();
            const tBody = document.getElementById("deviceList");
            for (var device = 0; device < jsonObject.length; device++) {

                if (deviceDataArray[device].STATUS == "Missing") {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                    <td>${jsonObject[device].MANUFACTURER}</td>
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].IMEINO}</td>
                    <td>${jsonObject[device].CHARGE}</td>
                    `;
                        
                            tBody.appendChild(tr);
                } 
            }
        }            
    }


    let d1 = new availableDevices();
    let d2 = new noChargerDevices();
    let d3= new missingDevices();
    let d4 = new notWorkingDevices();

    var availableButton = document.getElementById('available_btn');
    var noCharger = document.getElementById('nocharger_btn');
    var missing = document.getElementById('missing_btn');
    var notWorking = document.getElementById('notworking_btn');

    availableButton.addEventListener('click',d1.filterItems);
    noCharger.addEventListener('click', d2.filterItems);
    missing.addEventListener('click', d3.filterItems);
    notWorking.addEventListener('click', d4.filterItems);

  