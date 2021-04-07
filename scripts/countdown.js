//basic JavaScript code//x

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* eslint-env es6 */
/* eslint-disable */

//met behulp van W3schools website - bron in de ReadMe//

// voor de vereiste micro interactie, maak ik een countdown. Deze countdown geeft aan, wanneer de klant de rekening moet betalen / wanneer het geld automatisch afgeschreven word //


// datum vaststellen - datum tot nieuw afschrift van maandelijkse rekening // 
var newPaymentDate = new Date(" April 15, 2021 15:00:00").getTime();


// zorgen dat de uitkomst elke seconde updated - een interval [wanneer die updated] instellen // 
var data = setInterval(function () {

        // het precieze tijdstip van nu achterhalen // 
        var now = new Date().getTime();

        // berekenen hoe lang de tijd tot het einde van de countdown duurt // 
        var tijdtot = newPaymentDate - now;

        // wiskundige berekeningen om precies uit te rekenen, hoe lang de countdown nog duurt - qua dagen, uren. minuten en seconden //
        var days = Math.floor(tijdtot / (1000 * 60 * 60 * 24));
        var hours = Math.floor((tijdtot % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((tijdtot % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((tijdtot % (1000 * 60)) / 1000);

        // zorgt ervoor dat de uitkomst van de rekensom in de html komt bij mijn aangegeven plek via een Id //
        document.getElementById("countdownpayment").innerHTML = days + " days  " + hours + " hrs  " +
            minutes + " min  " + seconds + " sec  ";
    },
    1000);



// countdown 2 - geeft aan hoeveel dagen je nog gebruik mag maken van de Student Discount //


// datum vaststellen - datum tot einde van de student discount datum // 
var endDiscountDate = new Date(" July 7, 2022 00:00:00").getTime();


// zorgen dat de uitkomst elke seconde updated - een interval [wanneer die updated] instellen // 
var datum = setInterval(function () {

    var nu = new Date().getTime();

    var duur = endDiscountDate - nu;

    var days = Math.floor(duur / (1000 * 60 * 60 * 24));

    // zorgt ervoor dat de uitkomst van de rekensom in de html komt bij mijn aangegeven plek via een Id //
    document.getElementById("countdowndiscount").innerHTML = days + " days";

}, 1000);
