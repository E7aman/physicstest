function checkForm(sr) {
    var c = 0;
    var first = sr.first.value;
    if (first == "c") {
        c++;
    } else {
        c += 0;
    }
    
    var second = sr.second.value;
    if (second == "b") {
        c++;
    } else {
        c += 0;
    }

    var thirth = sr.thirth.value;
    if (thirth == "c") {
        c++;
    } else {
        c += 0;
    }

    var fourth = sr.fourth.value;
    if (fourth == "d") {
        c++;
    } else {
        c += 0;
    }

    var fiveth = sr.fiveth.value;
    if (fiveth == "c") {
        c++;
    } else {
        c += 0;
    }

    var sixth = sr.sixth.value;
    if (sixth == "b") {
        c++;
    } else {
        c += 0;
    }

    var seventh = sr.seventh.value;
    if (seventh == "c") {
        c++;
    } else {
        c += 0;
    }

    var eighth = sr.eighth.value;
    if (eighth == "b") {
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
    if (tenth == "c") {
        c++;
    } else {
        c += 0;
    }

    var eleventh = sr.eleventh.value;
    if (eleventh == "a") {
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
    if (thirteenth == "d") {
        c++;
    } else {
        c += 0;
    }

    var fourteenth = sr.fourteenth.value;
    if (fourteenth == "c") {
        c++;
    } else {
        c += 0;
    }

    var fifteenth = sr.fifteenth.value;
    if (fifteenth == "c") {
        c++;
    } else {
        c += 0;
    }

    var sixteenth = sr.sixteenth.value;
    if (sixteenth == "c") {
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
    if (eighteenth == "d") {
        c++;
    } else {
        c += 0;
    }

    var nineteenth = sr.nineteenth.value;
    if (nineteenth == "d") {
        c++;
    } else {
        c += 0;
    }

    var twentieth = sr.twentieth.value;
    if (twentieth == "a") {
        c++;
    } else {
        c += 0;
    }
    const subval = document.getElementById("sub");
    subval.value = "Сіздің балыңыз: " + c + "/20";
    subval.style.cssText = "font-size: 22px;"

    // alert("Сіздің балыңыз: " + c + "/20");

return false;
}