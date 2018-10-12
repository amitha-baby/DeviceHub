'use strict';
let deviceDataArray = localStorage.getItem('deviceList') ? JSON.parse(localStorage.getItem('deviceList')) : [];
var jsonObject;

let availCount = 0;
let missingCount = 0;
let nochargerCount = 0;
let notworkingCount = 0;


let availDeviceClass = document.getElementById("availDeviceClass");
let missingDeviceClass = document.getElementById("missingDeviceClass");
let noChargerDeviceClass = document.getElementById("noChargerDeviceClass");
let notWorkingDeviceClass = document.getElementById("notWorkingDeviceClass");

localStorage.setItem('deviceList', JSON.stringify(deviceDataArray));
const dataFromLocalStorage = JSON.parse(localStorage.getItem('deviceList'));
 

var request = new XMLHttpRequest();
var url = 'https://script.googleusercontent.com/a/macros/cabotsolutions.com/echo?user_content_key=ty7IquT2VOsoRdotmAj7tz-TrCTNfDHns8Fgxxco8v2gXEP77_7QDAuaT9n2DnJvJjBtkZ_6ITLWuu4O7P5ZQps9IjIiAxrSm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8N3YZ91GNx49FXyl5euMLmjnFAkueCBXiaVRYyZM5cQbphKptrKjl7-hDBmQBEtxgKwTgRjX0_05v2N8Ym_oTBPLjKh6_FEGNGobvHn3QJCRhmlNqT-jbZ&lib=MvYB3dXCLYXIaqwPl1O-F3ZRuoRp3PEkk';
    request.open('GET',url, true);
        
    request.onload = function () {
        var json = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var json = eval("(" + this.response + ")");
            jsonObject = json["user"];
            const tBody = document.getElementById("deviceList");
            const deviceClass = document.getElementById("panelBody");

            function additem() {
                for (var device = 0; device < jsonObject.length; device++) {

                    if (deviceDataArray[device].STATUS == "Available") { availCount = availCount + 1;}
                    else if (deviceDataArray[device].STATUS == "Missing") { missingCount = missingCount + 1;}
                    else if (deviceDataArray[device].STATUS == "No Charger") { nochargerCount = nochargerCount + 1;}
                    else if (deviceDataArray[device].STATUS == "Not Working") { notworkingCount = notworkingCount + 1;}

                    const tr = document.createElement('tr');

                    tr.innerHTML = `
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].ID}</td>
                    <td>${jsonObject[device].OWNER}</td>
                    
                    `;

                    tBody.appendChild(tr);
                }     

                const availDeviceCount  = document.createElement('h2');
                const missingDeviceCount   = document.createElement('h2');
                const noChargerDeviceCount   = document.createElement('h2');
                const notWorkingDeviceCount   = document.createElement('h2');

            availDeviceCount.innerHTML = `<h2>${availCount}</h2>`;
            availDeviceClass.appendChild(availDeviceCount);

            missingDeviceCount.innerHTML = `<h2>${missingCount}</h2>`;
            missingDeviceClass.appendChild(missingDeviceCount);

            noChargerDeviceCount.innerHTML = `<h2>${nochargerCount}</h2>`;
            noChargerDeviceClass.appendChild(noChargerDeviceCount);

            notWorkingDeviceCount.innerHTML = `<h2>${notworkingCount}</h2>`;
            notWorkingDeviceClass.appendChild(notWorkingDeviceCount);

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
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].ID}</td>
                    <td>${jsonObject[device].OWNER}</td>
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
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].ID}</td>
                    <td>${jsonObject[device].OWNER}</td>
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
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].ID}</td>
                    <td>${jsonObject[device].OWNER}</td>
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
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].SERIALNO}</td>
                    <td>${jsonObject[device].ID}</td>
                    <td>${jsonObject[device].OWNER}</td>
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

  