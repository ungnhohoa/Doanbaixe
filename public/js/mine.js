document.addEventListener("DOMContentLoaded", function () {
    var x = setInterval(function () {
        var config = {
            apiKey: "AIzaSyCTrA5Ulz-K3RQrexOS-1njfr8WB1phrrA",
            authDomain: "loli-767c7.firebaseapp.com",
            databaseURL: "https://loli-767c7.firebaseio.com",
            projectId: "loli-767c7",
            storageBucket: "loli-767c7.appspot.com",
        };

        firebase.initializeApp(config);

        var ref = firebase.database().ref();
        var length = document.getElementsByClassName("status").length;
        var list = document.getElementsByClassName("status");
        ref.on("value", function (snapshot) {
            var value = snapshot.val();
            for (var i = 0; i < length; i++) {
                if (value["Xe " + (i + 1)] == "stored") {
                    //document.getElementById("Xe" + (i + 1)).innerHTML = "Có xe";
                    document.getElementById("Xe" + (i + 1)).src ="xe.jpg";
                } else if (value["Xe " + (i + 1)] == "empty") {
                    document.getElementById("Xe" + (i + 1)).innerHTML = "Trống";
                }
            }
        }, function (error) {
            alert(JSON.stringify(error));
        });
    }, 3000);



}, false)