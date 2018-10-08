'use strict';
let deviceDataArray = localStorage.getItem('deviceList') ? JSON.parse(localStorage.getItem('deviceList')) : [];
var jsonObject;

localStorage.setItem('deviceList', JSON.stringify(deviceDataArray));
const dataFromLocalStorage = JSON.parse(localStorage.getItem('deviceList'));
 

var request = new XMLHttpRequest();
var url = 'https://script.googleusercontent.com/a/macros/cabotsolutions.com/echo?user_content_key=zCJnmt801-Kq6J7pODUnA_Klq7NIkTrmt8YyROy-QXtMxHmdIymRSAv4CZuF7UMMyUU-raC-yb_ZI-9Nrhp0zK5YJMUSBjSNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8N3YZ91GNx49FXyl5euMLmjnFAkueCBXiaVRYyZM5cQbphKptrKjl7-hDBmQBEtxgKwTgRjX0_05v2N8Ym_oTBPLjKh6_FEGNGobvHn3QJCRhmlNqT-jbZ&lib=MvYB3dXCLYXIaqwPl1O-F3ZRuoRp3PEkk';
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
                    <td>${jsonObject[device].SLNO}</td>
                    <td>${jsonObject[device].NAME}</td>
                    <td>${jsonObject[device].STATUS}</td>
                    <td>${jsonObject[device].MODEL}</td>
                    <td>${jsonObject[device].ID}</td>
                    <td>${jsonObject[device].OWNER}</td>
                    <td>${jsonObject[device].LOCATION}</td>
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



    var availableButton = document.getElementById('available_btn');
    var noCharger = document.getElementById('nocharger_btn');
    var missing = document.getElementById('missing_btn');
    var notWorking = document.getElementById('notworking_btn');

    availableButton.addEventListener('click', filterItems);
    noCharger.addEventListener('click', filterItems);
    missing.addEventListener('click', filterItems);
    notWorking.addEventListener('click', filterItems);

  
    function filterItems(e){
        e.preventDefault;
        $("#deviceList").empty();
        const tBody = document.getElementById("deviceList");
        for (var device = 0; device < jsonObject.length; device++) {

            if (deviceDataArray[device].STATUS == "Available") {
                const tr = document.createElement('tr');
                        tr.innerHTML = `
                        <td>${deviceDataArray[device].SLNO}</td>
                        <td>${deviceDataArray[device].NAME}</td>
                        <td>${deviceDataArray[device].STATUS}</td>
                        <td>${deviceDataArray[device].MODEL}</td>
                        <td>${deviceDataArray[device].ID}</td>
                        <td>${deviceDataArray[device].OWNER}</td>
                        <td>${deviceDataArray[device].LOCATION}</td>
                        `;
                      
                        tBody.appendChild(tr);
            } 
        }           
    }