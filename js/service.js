'use strict';
let workingDeviceArray = localStorage.getItem('workingDeviceList') ? JSON.parse(localStorage.getItem('workingDeviceList')) : [];
var jsonObjectOfWorkingDevices = [];

localStorage.setItem('workingDeviceList', JSON.stringify(workingDeviceArray));
let workingDataFromLocalStorage = JSON.parse(localStorage.getItem('workingDeviceList'));
let deviceLocalStorage = JSON.parse(localStorage.getItem('deviceList'));

var htprequest = new XMLHttpRequest();
var theurl = 'https://script.googleusercontent.com/a/macros/cabotsolutions.com/echo?user_content_key=XRO3kmgiFQPdI2Wv2ERb3yKlvnP3ByoPexin-K67K11uDeJHw514J469rmt-2JFUCqGmbh9OF-xF_owAyF0gPpzxKrWmcZK7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8N3YZ91GNx49FXyl5euMLmjnFAkueCBXj0iX0FmGGH8eysCHO9HnBESumQduuF82BG65TUsf-URlO8TeqEh96kujRJXaOC0_H5yDnhMzfu31zLqmv46PQV&lib=MMKXgi_qUFWSt0nTLnoLjrkylSQPUcriW';
    htprequest.open('GET',theurl, true);
        
    htprequest.onload = function () {
        var json = JSON.parse(this.response);
        if (htprequest.status >= 200 && htprequest.status < 400) {
            var json = eval("(" + this.response + ")");
            jsonObjectOfWorkingDevices = json["user"];
            const tBody = document.getElementById("deviceList");

            function addDeviceData() {
                for (var device = 0; device < deviceLocalStorage.length; device++) {
                    const tr = document.createElement('tr');
                    if (deviceLocalStorage[device].STATUS == "Available") {
                        for (var workdevice = 0; workdevice < workingDataFromLocalStorage.length; workdevice++) {
                            if(deviceDataArray[device].SERIALNO == workingDataFromLocalStorage[workdevice].SERIALNO) {
                                
                                tr.innerHTML = `
                                <td>${workingDataFromLocalStorage[workdevice].NAME}</td>
                                <td>${workingDataFromLocalStorage[workdevice].MODEL}</td>
                                <td>${workingDataFromLocalStorage[workdevice].STATUS}</td>
                                <td>${workingDataFromLocalStorage[workdevice].SERIALNO}</td>
                                <td>${deviceDataArray[device].ID}</td>
                                <td>${deviceDataArray[device].OWNER}</td>`;

                                tBody.appendChild(tr);
                            }    
                        }
                    }
                }
            }
     
        workingDeviceArray.push(tBody);
        localStorage.setItem('workingDeviceList', JSON.stringify(jsonObjectOfWorkingDevices));
        addDeviceData();

    } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            tBody.appendChild(errorMessage);
          }
        }
   
    htprequest.send();