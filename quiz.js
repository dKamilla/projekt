// lehetséges csoportok: köteles kezdő, köteles haladó, boulder kezdő, boulder haladó, sziklamászás, gyorsmászás, semmi (nem ajánlott)
let kiiras = document.getElementById("teszt");
let ajanlas = "";
document.getElementById("bekuldes").addEventListener("click", calc)
let boulder_k = "Kedző boulder ezdés: ha egyelőre nem tudsz megbarátkozni 10-15 méteres magasságokkal mindenképpen azt ajánljuk, hogy boulder edzéssel kezdj, itt megtanulhatod a mászás alapjait, és később már biztosabb alapokkal merészkedhetsz magasabb falakra is."
let kotel_k = "Kezdő köteles edzés: ha kezdő vagy, de jól bírod a magasságot vagy jelenleg is sportos életmódot folytatsz, próbáld ki bátran a köteles mászást!"
let semmi = "Ha nagyon félsz a magasságtól, vagy kardió típusú mozgásra vágysz, kezdőként érdemes lehet más sportba belevágni, esetleg később visszatérni!"
let boulder_h = "Haladó boulder edzés: ha már van tapasztalatod, de bizonytalanul mozogsz magasban, vagy inkább a kikapcsolódásra, mintsem a biztonságra szeretnél fókuszálni, esetleg csak ritkábban van időd mászni, egy haladó boulder edzés megfelelő lehet számodra!"
let kotel_h = "Haladó köteles edzés: ha már tapasztalt vagy, de az elmúlt időben nem jutott időd a sportra, és a magasban is otthonosan mozogsz, egy haladó köteles edzés megfelelő kihívást jelenthet számodra!"
let szikla = "Sziklamászás: ha már otthonosan mozogsz a falon és újabb kihivások elé állítanád magad, mélyedj bele bátran a sziklamászás világába! Ez a kurzus kizárólag tavasszal és nyáron végezhető, addig benti, épített falon tudsz gyakorolni, elsajátítani a megfelelő biztonsági szabályokat."
let gyorsmaszas = "Gyorsmászás: ha már otthonosan mozogsz a falmászás világában, de emellett kardió jellegű mozgásra is vágynál és kipróbálnál valami újat, vágj bele a gyorsmászásba!"


function calc() {
    let valaha;
    if (document.getElementById("soha").checked) {
        valaha = "soha";
    } else if (document.getElementById("parszor").checked) {
        valaha = "parszor";
    } else if (document.getElementById("regen").checked) {
        valaha = "regen";
    } else if (document.getElementById("sokat").checked) {
        valaha = "sokat";
    }
    let magas;
    if (document.getElementById("nagyon").checked) {
        magas = "nagyon";
    } else if (document.getElementById("kicsit").checked) {
        magas = "kicsit";
    } else if (document.getElementById("nem").checked) {
        magas = "nem";
    }
    let jelenleg;
    if (document.getElementById("jigen").checked) {
        jelenleg = "jigen";
    } else if (document.getElementById("jnem").checked) {
        jelenleg = "jnem";
    }
    const eronlet = document.getElementById("eronlet").checked;
    const mobilitas = document.getElementById("mobilitas").checked;
    const hajlekonysag = document.getElementById("hajlekonysag").checked;
    const allokepesseg = document.getElementById("allokepesseg").checked;
    const kikapcs = document.getElementById("kikapcs").checked;
    const kihivas = document.getElementById("kihivas").checked;
    const csapat = document.getElementById("csapat").checked;
    const kardio = document.getElementById("kardio").checked;
    const hetiIdo = parseInt(document.getElementById("szam").value);

    if (valaha == "soha" || valaha == "parszor") {
        if (magas == "kicsit" && jelenleg == "jnem") {
            ajanlas = boulder_k;
        } else if (magas == "nem" || (jelenleg == "jigen" && magas != "nagyon")) {
            ajanlas = kotel_k;
        }
        if (magas == "nagyon" || (kardio && !csapat && !kihivas && !kikapcs)) {
            ajanlas = semmi
        }
    }

    else if (valaha == "regen" || valaha == "sokat") {
        if (magas == "nem" && jelenleg == "jnem") {
            if (eronlet || allokepesseg || kihivas) {
                if (hetiIdo == 1) {
                    ajanlas = boulder_h;
                }
                else {
                    ajanlas = kotel_h
                }
            }
            else { ajanlas = kotel_h }
        }
        else if (magas == "nem" && jelenleg == "jigen" && (kihivas || csapat)) {
            ajanlas = szikla;
        }
        else if (magas == "kicsit" || kikapcs || hajlekonysag || mobilitas) {
            ajanlas = boulder_h;
        }
        else if (jelenleg == "jigen" && kardio && (magas == "nem")) {
            ajanlas = gyorsmaszas;
        }
        else {
            ajanlas = kotel_h
        }
    }

    if (csapat && ajanlas != szikla && ajanlas != semmi) { ajanlas += "Csoportos edzést ajánlunk." }
    else if (ajanlas == szikla) { ajanlas += " Ezt a kurzust kizárólag csoportos óra keretein belül lehet választani." }
    else if (ajanlas != semmi) { ajanlas += " Egyéni órát javaslunk." }
    if (mobilitas || hajlekonysag && ajanlas != semmi) { ajanlas += " Ha a mászás mellett szívesen koncentrálnál a mobilitásra és/vagy a hajlékonyságra, az órák mellett érdemes ilyen típusú gyakorlatokat végezned, de edződ felé is bátran jelezd igényedet!" }

    //ha valamit nem tölt ki jelez 
    if (!valaha || !magas || !jelenleg || (!eronlet && !mobilitas && !hajlekonysag && !allokepesseg) || (!csapat && !kihivas && !kikapcs && !kardio)) {
        alert("Pontosabb eredményekért minden kérdésre válaszolj!")
    }
    else { kiiras.innerHTML = `<h3 id=kiir>Neked ajánljuk</h3> ${ajanlas}`; }
}
