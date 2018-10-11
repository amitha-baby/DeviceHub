const tbody = document.getElementById("device-list");

var request = new XMLHttpRequest();
var theurl='https://script.googleusercontent.com/a/macros/cabotsolutions.com/echo?user_content_key=zCJnmt801-Kq6J7pODUnA_Klq7NIkTrmt8YyROy-QXtMxHmdIymRSAv4CZuF7UMMyUU-raC-yb_ZI-9Nrhp0zK5YJMUSBjSNm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP8N3YZ91GNx49FXyl5euMLmjnFAkueCBXiaVRYyZM5cQbphKptrKjl7-hDBmQBEtxgKwTgRjX0_05v2N8Ym_oTBPLjKh6_FEGNGobvHn3QJCRhmlNqT-jbZ&lib=MvYB3dXCLYXIaqwPl1O-F3ZRuoRp3PEkk';
    request.open('GET',theurl, true);
        
    request.onload = function () {
    var json_object = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        var json_object = eval("(" + this.response + ")");
        var device_list = json_object["user"];
   

        for (var device = 0; device < device_list.length; device++) {

            const tr = document.createElement('tr');

            tr.innerHTML = `
            <td>${device_list[device].SL_NO}</td>
            <td>${device_list[device].Name}</td>
            <td>${device_list[device].Status}</td>
            <td>${device_list[device].Model}</td>
            <td>${device_list[device].ID}</td>
            <td>${device_list[device].Owner}</td>
            <td>${device_list[device].Location}</td>
            `;
            tbody.appendChild(tr);
        }

    } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Gah, it's not working!`;
            tbody.appendChild(errorMessage);
          }
        }
        
    request.send();
