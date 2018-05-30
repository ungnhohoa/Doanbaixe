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
  //      var length = document.getElementsByClassName("status").length;
    //    var list = document.getElementsByClassName("status");
        ref.on("value", function (snapshot) {
            var value = snapshot.val();
            if(value["In"]=="stored"){
                   document.getElementById("XeIn").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6gn27EtmFP5GYIV7DVIkWBMI47c4Kl7Wg8zUD8w4F2VP4cPN";

            }
            else{
                   document.getElementById("XeIn").src = "https://upload.wikimedia.org/wikipedia/commons/1/11/Hinweiszeichen_17a_empty.jpg";
            }
              if(value["Out"]=="stored"){
                   document.getElementById("XeOut").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6gn27EtmFP5GYIV7DVIkWBMI47c4Kl7Wg8zUD8w4F2VP4cPN";

            }
            else{
                   document.getElementById("XeOut").src = "https://upload.wikimedia.org/wikipedia/commons/1/11/Hinweiszeichen_17a_empty.jpg";
            }
            for (var i = 0; i < 7; i++) {
                if (value["Xe " + (i + 1)] == "stored") {
                   // document.getElementById("Xe" + (i + 1)).innerHTML = "Có xe";
                   document.getElementById("Xe" + (i + 1)).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6gn27EtmFP5GYIV7DVIkWBMI47c4Kl7Wg8zUD8w4F2VP4cPN";

                } else if (value["Xe " + (i + 1)] == "empty") {
                    //document.getElementById("Xe" + (i + 1)).innerHTML = "Trống";
                    document.getElementById("Xe" + (i + 1)).src = "https://upload.wikimedia.org/wikipedia/commons/1/11/Hinweiszeichen_17a_empty.jpg";
                }
            }
        }, function (error) {
            alert(JSON.stringify(error));
        });
    }, 3000);



}, false)