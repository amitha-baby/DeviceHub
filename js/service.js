'use strict';
let deviceDataArray = localStorage.getItem('deviceList') ? JSON.parse(localStorage.getItem('deviceList')) : [];
var jsonObject;
let availDeviceClass = document.getElementById("availDeviceClass");
let deviceCount = document.getElementById("deviceCount");

localStorage.setItem('deviceList', JSON.stringify(deviceDataArray));
const dataFromLocalStorage = JSON.parse(localStorage.getItem('deviceList'));
 

var request = new XMLHttpRequest();
var url = 'https://script.googleusercontent.com/a/macros/cabotsolutions.com/echo?user_content_key=eAtfK3Mj4Sc9pxlqG22-XwrnweTYqxoSHVpBH3dtzsJtGBgy9g48G4KO6gohC2Oei_haqkgbn-wAJd-mdGA2U6AH1n4uZ3I4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8N3YZ91GNx49FXyl5euMLmjnFAkueCBXj0iX0FmGGH8eysCHO9HnBESumQduuF82BG65TUsf-URlO8TeqEh96kujRJXaOC0_H5yDnhMzfu31zLqmv46PQV&lib=MMKXgi_qUFWSt0nTLnoLjrkylSQPUcriW';
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