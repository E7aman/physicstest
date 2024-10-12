function checkForm(sr) {
    var c = 0;
    var first = sr.first.value;
    if (first == "a") {
        c++;
    } else {
        c += 0;
    }
    
    var second = sr.second.value;
    if (second == "c") {
        c++;
    } else {
        c += 0;
    }

    var thirth = sr.thirth.value;
    if (thirth == "b") {
        c++;
    } else {
        c += 0;
    }

    var fourth = sr.fourth.value;
    if (fourth == "c") {
        c++;
    } else {
        c += 0;
    }

    var fiveth = sr.fiveth.value;
    if (fiveth == "e") {
        c++;
    } else {
        c += 0;
    }

    var sixth = sr.sixth.value;
    if (sixth == "a") {
        c++;
    } else {
        c += 0;
    }

    var seventh = sr.seventh.value;
    if (seventh == "b") {
        c++;
    } else {
        c += 0;
    }

    var eighth = sr.eighth.value;
    if (eighth == "d") {
        c++;
    } else {
        c += 0;
    }

    var ninth = sr.ninth.value;
    if (ninth == "a") {
        c++;
    } else {
        c += 0;
    }

    var tenth = sr.tenth.value;
    if (tenth == "d") {
        c++;
    } else {
        c += 0;
    }

    var eleventh = sr.eleventh.value;
    if (eleventh == "b") {
        c++;
    } else {
        c += 0;
    }

    var twelfth = sr.twelfth.value;
    if (twelfth == "c") {
        c++;
    } else {
        c += 0;
    }

    var thirteenth = sr.thirteenth.value;
    if (thirteenth == "b") {
        c++;
    } else {
        c += 0;
    }

    var fourteenth = sr.fourteenth.value;
    if (fourteenth == "d") {
        c++;
    } else {
        c += 0;
    }

    var fifteenth = sr.fifteenth.value;
    if (fifteenth == "e") {
        c++;
    } else {
        c += 0;
    }

    var sixteenth = sr.sixteenth.value;
    if (sixteenth == "a") {
        c++;
    } else {
        c += 0;
    }

    var seventeenth = sr.seventeenth.value;
    if (seventeenth == "c") {
        c++;
    } else {
        c += 0;
    }

    var eighteenth = sr.eighteenth.value;
    if (eighteenth == "a") {
        c++;
    } else {
        c += 0;
    }

    var nineteenth = sr.nineteenth.value;
    if (nineteenth == "a") {
        c++;
    } else {
        c += 0;
    }

    var twentieth = sr.twentieth.value;
    if (twentieth == "b") {
        c++;
    } else {
        c += 0;
    }
    const subval = document.getElementById("sub");
    subval.value = "Сіздің балыңыз: " + c + "/20";
    subval.style.cssText = "font-size: 22px;"
    // subval.style.cssText = "margin-left: -30px; @media(max-width: 812px){ margin-left: -95px;} @media(max-width: 560px){ margin-left: -110px;} @media(max-width: 444px){ margin-left: -130px;} @media(max-width: 372px){ margin-left: -150px;} @media(max-width: 360px){ margin-left: -160px;}";

    // alert("Сіздің балыңыз: " + c + "/20");

return false;
}
