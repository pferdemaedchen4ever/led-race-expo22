var b0=0;
var b1=0;
var b2=0;
var b3=0;
var b4=0;
var b5=0;
var b6=0;
var b7=0;
var b8=0;
var b9=0;
var b10=0;
var b11=0;
var b12=0;
var b13=0;
var b14=0;
var b15=0;
var b16=0;
var b17=0;
var b18=0;
var b19=0;
var b20=0;
var b21=0;
var b22=0;
var b23=0;
var b24=0;
var b25=0;
var b26=0;
var b27=0;
var b28=0;
var b29=0;
var b30=0;
function sortieren(a,b){
    return b - a;
}
let playerentry ={
    number: 0,
    track: "02.07.2022",
    punkte: 0,
}
let player1 = {
    number: 2486,
    track: "03.07.2022",
    punkte: 650,
    }
    let player2 = {
    number: 2449,
    track: "02.07.2022",
    punkte: 656,
    }
    let player3 = {
    number: 2442,
    track: "03.07.2022",
    punkte: 653,
    }
    let player4 = {
    number: 2445,
    track: "03.07.2022",
    punkte: 643,
    }
    let player5 = {
    number: 2500,
    track: "03.07.2022",
    punkte: 656,
    }
    let player6 = {
    number: 2413,
    track: "04.07.2022",
    punkte: 649,
    }
    let player7 = {
    number: 2418,
    track: "04.07.2022",
    punkte: 657,
    }
    let player8 = {
    number: 2419,
    track: "03.07.2022",
    punkte: 648,
    }
    let player9 = {
    number: 2432,
    track: "04.07.2022",
    punkte: 647,
    }
    let player10 = {
    number: 2300,
    track: "02.07.2022",
    punkte: 644,
    }
    let player11 = {
    number: 2453,
    track: "04.07.2022",
    punkte: 664,
    }
    let player12 = {
    number: 2420,
    track: "04.07.2022",
    punkte: 659,
    }
    let player13 = {
    number: 2430,
    track: "04.07.2022",
    punkte: 649,
    }
    let player14 = {
    number: 2436,
    track: "02.07.2022",
    punkte: 643,
    }
    let player15 = {
    number: 2487,
    track: "03.07.2022",
    punkte: 642,
    }
    let player16 = {
    number: 2454,
    track: "02.07.2022",
    punkte: 642,
    }
    let player17 = {
    number: 2424,
    track: "02.07.2022",
    punkte: 650,
    }
    let player18 = {
    number: 2498,
    track: "03.07.2022",
    punkte: 643,
    }
    let player19 = {
    number: 2488,
    track: "03.07.2022",
    punkte: 649,
    }
    let player20 = {
    number: 2456,
    track: "02.07.2022",
    punkte: 650,
    }
    let player21 = {
    number: 1784,
    track: "03.07.2022",
    punkte: 661,
    }
    let player22 = {
    number: 2421,
    track: "03.07.2022",
    punkte: 645,
    }
    let player23 = {
    number: 2417,
    track: "04.07.2022",
    punkte:657,
    }
    let player24 = {
    number: 2433,
    track: "03.07.2022",
    punkte: 644,
    }
    let player25 = {
    number: 2329,
    track: "02.07.2022",
    punkte: 645,
    }
    let player26 = {
    number: 2429,
    track: "04.07.2022",
    punkte: 664,
    }
    let player27 = {
    number: 2437,
    track: "02.07.2022",
    punkte: 646,
    }
    let player28 = {
    number: 2324,
    track: "02.07.2022",
    punkte: 661,
    }
    let player29 = {
    number: 2441,
    track: "04.07.2022",
    punkte: 643,
    }
    let player30 = {
    number: 2357,
    track: "02.07.2022",
    punkte: 657,
    }


    var bestzeit = [player1.punkte, player2.punkte, player3.punkte, player4.punkte, player5.punkte, player6.punkte, player7.punkte, player8.punkte, player9.punkte, player10.punkte, player11.punkte, player12.punkte, player13.punkte, player14.punkte, player15.punkte, player16.punkte, player17.punkte, player18.punkte, player19.punkte, player20.punkte, player21.punkte, player22.punkte, player23.punkte, player24.punkte, player25.punkte, player26.punkte, player27.punkte, player28.punkte, player29.punkte, player30.punkte, playerentry.punkte];
    bestzeit.sort(sortieren);

for (var ti=0; ti<30; ti++){
    if (bestzeit[ti] == player1.punkte && player1.number != 0 && b1==0 && b0==0){
        var p1n = document.getElementById(ti);
            p1n.innerHTML = player1.number;
            var p1tr = document.getElementById(ti+60);
            p1tr.innerHTML = player1.track;
            var p1t = document.getElementById(ti+90);
            p1t.innerHTML = player1.punkte;
            b1=1;
            b0=1;
}
    if (bestzeit[ti] == player2.punkte && player2.number != 0 && b1==0 && b2==0){
        var p2n = document.getElementById(ti);
            p2n.innerHTML = player2.number;
            var p2tr = document.getElementById(ti+60);
            p2tr.innerHTML = player2.track;
            var p2t = document.getElementById(ti+90);
            p2t.innerHTML = player2.punkte;
            b1=1;
            b2=1;
}
    if (bestzeit[ti] == player3.punkte && player3.number != 0 && b1==0 && b3==0){
        var p3n = document.getElementById(ti);
            p3n.innerHTML = player3.number;
            var p3tr = document.getElementById(ti+60);
            p3tr.innerHTML = player3.track;
            var p3t = document.getElementById(ti+90);
            p3t.innerHTML = player3.punkte;
            b1=1;
            b3=1;
}
    if (bestzeit[ti] == player4.punkte && player4.number != 0 && b1==0 && b4==0){
        var p4n = document.getElementById(ti);
            p4n.innerHTML = player4.number;
            var p4tr = document.getElementById(ti+60);
            p4tr.innerHTML = player4.track;
            var p4t = document.getElementById(ti+90);
            p4t.innerHTML = player4.punkte;
            b1=1;
            b4=1;
}
    if (bestzeit[ti] == player5.punkte && player5.number != 0 && b1==0 && b5==0){
        var p5n = document.getElementById(ti);
            p5n.innerHTML = player5.number;
            var p5tr = document.getElementById(ti+60);
            p5tr.innerHTML = player5.track;
            var p5t = document.getElementById(ti+90);
            p5t.innerHTML = player5.punkte;
            b1=1;
            b5=1;
}
    if (bestzeit[ti] == player6.punkte && player6.number != 0 && b1==0 && b6==0){
        var p6n = document.getElementById(ti);
            p6n.innerHTML = player6.number;
            var p6tr = document.getElementById(ti+60);
            p6tr.innerHTML = player6.track;
            var p6t = document.getElementById(ti+90);
            p6t.innerHTML = player6.punkte;
            b1=1;
            b6=1;
}
    if (bestzeit[ti] == player7.punkte && player7.number != 0 && b1==0 && b7==0){
        var p7n = document.getElementById(ti);
            p7n.innerHTML = player7.number;
            var p7tr = document.getElementById(ti+60);
            p7tr.innerHTML = player7.track;
            var p7t = document.getElementById(ti+90);
            p7t.innerHTML = player7.punkte;
            b1=1;
            b7=1;
}
    if (bestzeit[ti] == player8.punkte && player8.number != 0 && b1==0 && b8==0){
        var p8n = document.getElementById(ti);
            p8n.innerHTML = player8.number;
            var p8tr = document.getElementById(ti+60);
            p8tr.innerHTML = player8.track;
            var p8t = document.getElementById(ti+90);
            p8t.innerHTML = player8.punkte;
            b1=1;
            b8=1;
}
    if (bestzeit[ti] == player9.punkte && player9.number != 0 && b1==0 && b9==0){
        var p9n = document.getElementById(ti);
            p9n.innerHTML = player9.number;
            var p9tr = document.getElementById(ti+60);
            p9tr.innerHTML = player9.track;
            var p9t = document.getElementById(ti+90);
            p9t.innerHTML = player9.punkte;
            b1=1;
            b9=1;
}
    if (bestzeit[ti] == player10.punkte && player10.number != 0 && b1==0 && b10==0){
        var p10n = document.getElementById(ti);
            p10n.innerHTML = player10.number;
            var p10tr = document.getElementById(ti+60);
            p10tr.innerHTML = player10.track;
            var p10t = document.getElementById(ti+90);
            p10t.innerHTML = player10.punkte;
            b1=1;
            b10=1;
}
    if (bestzeit[ti] == player11.punkte && player11.number != 0 && b1==0 && b11==0){
        var p11n = document.getElementById(ti);
            p11n.innerHTML = player11.number;
            var p11tr = document.getElementById(ti+60);
            p11tr.innerHTML = player11.track;
            var p11t = document.getElementById(ti+90);
            p11t.innerHTML = player11.punkte;
            b1=1;
            b11=1;
}
    if (bestzeit[ti] == player12.punkte && player12.number != 0 && b1==0 && b12==0){
        var p12n = document.getElementById(ti);
            p12n.innerHTML = player12.number;
            var p12tr = document.getElementById(ti+60);
            p12tr.innerHTML = player12.track;
            var p12t = document.getElementById(ti+90);
            p12t.innerHTML = player12.punkte;
            b1=1;
            b12=1;
}
    if (bestzeit[ti] == player13.punkte && player13.number != 0 && b1==0 && b13==0){
        var p13n = document.getElementById(ti);
            p13n.innerHTML = player13.number;
            var p13tr = document.getElementById(ti+60);
            p13tr.innerHTML = player13.track;
            var p13t = document.getElementById(ti+90);
            p13t.innerHTML = player13.punkte;
            b1=1;
            b13=1;
}
    if (bestzeit[ti] == player14.punkte && player14.number != 0 && b1==0 && b14==0){
        var p14n = document.getElementById(ti);
            p14n.innerHTML = player14.number;
            var p14tr = document.getElementById(ti+60);
            p14tr.innerHTML = player14.track;
            var p14t = document.getElementById(ti+90);
            p14t.innerHTML = player14.punkte;
            b1=1;
            b14=1;
}
    if (bestzeit[ti] == player15.punkte && player15.number != 0 && b1==0 && b15==0){
        var p15n = document.getElementById(ti);
            p15n.innerHTML = player15.number;
            var p15tr = document.getElementById(ti+60);
            p15tr.innerHTML = player15.track;
            var p15t = document.getElementById(ti+90);
            p15t.innerHTML = player15.punkte;
            b1=1;
            b15=1;
}
    if (bestzeit[ti] == player16.punkte && player16.number != 0 && b1==0 && b16==0){
        var p16n = document.getElementById(ti);
            p16n.innerHTML = player16.number;
            var p16tr = document.getElementById(ti+60);
            p16tr.innerHTML = player16.track;
            var p16t = document.getElementById(ti+90);
            p16t.innerHTML = player16.punkte;
            b1=1;
            b16=1;
}
    if (bestzeit[ti] == player17.punkte && player17.number != 0 && b1==0 && b17==0){
        var p17n = document.getElementById(ti);
            p17n.innerHTML = player17.number;
            var p17tr = document.getElementById(ti+60);
            p17tr.innerHTML = player17.track;
            var p17t = document.getElementById(ti+90);
            p17t.innerHTML = player17.punkte;
            b1=1;
            b17=1;
}
    if (bestzeit[ti] == player18.punkte && player18.number != 0 && b1==0 && b18==0){
        var p18n = document.getElementById(ti);
            p18n.innerHTML = player18.number;
            var p18tr = document.getElementById(ti+60);
            p18tr.innerHTML = player18.track;
            var p18t = document.getElementById(ti+90);
            p18t.innerHTML = player18.punkte;
            b1=1;
            b18=1;
}
    if (bestzeit[ti] == player19.punkte && player19.number != 0 && b1==0 && b19==0){
        var p19n = document.getElementById(ti);
            p19n.innerHTML = player19.number;
            var p19tr = document.getElementById(ti+60);
            p19tr.innerHTML = player19.track;
            var p19t = document.getElementById(ti+90);
            p19t.innerHTML = player19.punkte;
            b1=1;
            b19=1;
}
    if (bestzeit[ti] == player20.punkte && player20.number != 0 && b1==0 && b20==0){
        var p20n = document.getElementById(ti);
            p20n.innerHTML = player20.number;
            var p20tr = document.getElementById(ti+60);
            p20tr.innerHTML = player20.track;
            var p20t = document.getElementById(ti+90);
            p20t.innerHTML = player20.punkte;
            b1=1;
            b20=1;
}
    if (bestzeit[ti] == player21.punkte && player21.number != 0 && b1==0 && b21==0){
        var p21n = document.getElementById(ti);
            p21n.innerHTML = player21.number;
            var p21tr = document.getElementById(ti+60);
            p21tr.innerHTML = player21.track;
            var p21t = document.getElementById(ti+90);
            p21t.innerHTML = player21.punkte;
            b1=1;
            b21=1;
}
    if (bestzeit[ti] == player22.punkte && player22.number != 0 && b1==0 && b22==0){
        var p22n = document.getElementById(ti);
            p22n.innerHTML = player22.number;
            var p22tr = document.getElementById(ti+60);
            p22tr.innerHTML = player22.track;
            var p22t = document.getElementById(ti+90);
            p22t.innerHTML = player22.punkte;
            b1=1;
            b22=1;
}
    if (bestzeit[ti] == player23.punkte && player23.number != 0 && b1==0 && b23==0){
        var p23n = document.getElementById(ti);
            p23n.innerHTML = player23.number;
            var p23tr = document.getElementById(ti+60);
            p23tr.innerHTML = player23.track;
            var p23t = document.getElementById(ti+90);
            p23t.innerHTML = player23.punkte;
            b1=1;
            b23=1;
}
    if (bestzeit[ti] == player24.punkte && player24.number != 0 && b1==0 && b24==0){
        var p24n = document.getElementById(ti);
            p24n.innerHTML = player24.number;
            var p24tr = document.getElementById(ti+60);
            p24tr.innerHTML = player24.track;
            var p24t = document.getElementById(ti+90);
            p24t.innerHTML = player24.punkte;
            b1=1;
            b24=1;
}
    if (bestzeit[ti] == player25.punkte && player25.number != 0 && b1==0 && b25==0){
        var p25n = document.getElementById(ti);
            p25n.innerHTML = player25.number;
            var p25tr = document.getElementById(ti+60);
            p25tr.innerHTML = player25.track;
            var p25t = document.getElementById(ti+90);
            p25t.innerHTML = player25.punkte;
            b1=1;
            b25=1;
}
    if (bestzeit[ti] == player26.punkte && player26.number != 0 && b1==0 && b26==0){
        var p26n = document.getElementById(ti);
            p26n.innerHTML = player26.number;
            var p26tr = document.getElementById(ti+60);
            p26tr.innerHTML = player26.track;
            var p26t = document.getElementById(ti+90);
            p26t.innerHTML = player26.punkte;
            b1=1;
            b26=1;
}
    if (bestzeit[ti] == player27.punkte && player27.number != 0 && b1==0 && b27==0){
        var p27n = document.getElementById(ti);
            p27n.innerHTML = player27.number;
            var p27tr = document.getElementById(ti+60);
            p27tr.innerHTML = player27.track;
            var p27t = document.getElementById(ti+90);
            p27t.innerHTML = player27.punkte;
            b1=1;
            b27=1;
}
    if (bestzeit[ti] == player28.punkte && player28.number != 0 && b1==0 && b28==0){
        var p28n = document.getElementById(ti);
            p28n.innerHTML = player28.number;
            var p28tr = document.getElementById(ti+60);
            p28tr.innerHTML = player28.track;
            var p28t = document.getElementById(ti+90);
            p28t.innerHTML = player28.punkte;
            b1=1;
            b28=1;
}
    if (bestzeit[ti] == player29.punkte && player29.number != 0 && b1==0 && b29==0){
        var p29n = document.getElementById(ti);
            p29n.innerHTML = player29.number;
            var p29tr = document.getElementById(ti+60);
            p29tr.innerHTML = player29.track;
            var p29t = document.getElementById(ti+90);
            p29t.innerHTML = player29.punkte;
            b1=1;
            b29=1;
}
    if (bestzeit[ti] == player30.punkte && player30.number != 0 && b1==0 && b30==0){
        var p30n = document.getElementById(ti);
            p30n.innerHTML = player30.number;
            var p30tr = document.getElementById(ti+60);
            p30tr.innerHTML = player30.track;
            var p30t = document.getElementById(ti+90);
            p30t.innerHTML = player30.punkte;
            b1=1;
            b30=1;
}
    if (bestzeit[ti] == playerentry.punkte && playerentry.number != 0){
        var pentryn = document.getElementById(ti);
            pentryn.innerHTML = playerentry.number;
            var pentrytr = document.getElementById(ti+60);
            pentrytr.innerHTML = playerentry.track;
            var pentryt = document.getElementById(ti+90);
            pentryt.innerHTML = playerentry.punkte;
    }
    b1=0;
}
