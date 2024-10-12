function checkForm(sr) {
    var c = 0;
    var first = sr.first.value;
    if (first == "b") {
        c++;
    } else {
        c += 0;
    }
    
    var second = sr.second.value;
    if (second == "d") {
        c++;
    } else {
        c += 0;
    }

    // var thirth = sr.thirth.value;
    // if (thirth == "a") {
    //     c++;
    // } else {
    //     c += 0;
    // }

    // var fourth = sr.fourth.value;
    // if (fourth == "a") {
    //     c++;
    // } else {
    //     c += 0;
    // }

    var fiveth = sr.fiveth.value;
    if (fiveth == "b") {
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
    if (ninth == "e") {
        c++;
    } else {
        c += 0;
    }

    var tenth = sr.tenth.value;
    if (tenth == "b") {
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

    // var thirteenth = sr.thirteenth.value;
    // if (thirteenth == "e") {
    //     c++;
    // } else {
    //     c += 0;
    // }

    var fourteenth = sr.fourteenth.value;
    if (fourteenth == "d") {
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
    if (sixteenth == "e") {
        c++;
    } else {
        c += 0;
    }

    // var seventeenth = sr.seventeenth.value;
    // if (seventeenth == "b") {
    //     c++;
    // } else {
    //     c += 0;
    // }

    var eighteenth = sr.eighteenth.value;
    if (eighteenth == "b") {
        c++;
    } else {
        c += 0;
    }

    // var nineteenth = sr.nineteenth.value;
    // if (nineteenth == "c") {
    //     c++;
    // } else {
    //     c += 0;
    // }

    var twentieth = sr.twentieth.value;
    if (twentieth == "a") {
        c++;
    } else {
        c += 0;
    }
    const subval = document.getElementById("sub");
    subval.value = "Сіздің балыңыз: " + c + "/15";
    subval.style.cssText = "font-size: 22px;";
    
    // alert("Сіздің балыңыз: " + c + "/15");

return false;
}