var select = document.getElementById("fontSize");
for (var i = 8; i <= 50; i++) {
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
} select.selectedIndex = 15;

document.getElementById("goodRatio").style.display = "block";
document.getElementById("badRatio").style.display = "none";

function setColour(colourName, colourLevel) {

    var colours = [
        //                    pohutukawa
        ['#fff8f8', '#fff1f2', '#ffe7e7', '#ffd5d5', '#ffbcbd', '#fa999b', '#f57f73', '#ef6d6b', '#e95958', '#e34647', '#d93a3f', '#c82630', '#b21c2a', '#9f2023'],
        //                    jaffa
        ['#fff8f5', '#fff2ed', '#ffe9e1', '#ffd9ca', '#ffc6b0', '#ffaf8f', '#ff976e', '#ff8455', '#fc723e', '#f3632d', '#e95219', '#d54209', '#c23802', '#a72f00'],
        //                    hokey pokey
        ['#fffcf0', '#fffae5', '#fff4d1', '#ffe8ac', '#ffe18d', '#ffd972', '#ffd35f', '#ffcb4f', '#ffc041', '#f9af2c', '#eb9600', '#d57800', '#b45600', '#943900'],
        //                    kiwifruit
        ['#fdfff1', '#fafee0', '#f3f9d4', '#eaf2bb', '#dfe8a4', '#d4df87', '#ccda70', '#c1d155', '#b8cb3d', '#acc313', '#9ab91a', '#88aa28', '#719c2f', '#659130'],
        //                    feijoa
        ['#f3fff6', '#ecfdf2', '#e1fbea', '#c6f3d5', '#a8eabe', '#87dfa5', '#6fd591', '#57c57b', '#3cb766', '#29a754', '#229b4b', '#1b8940', '#137b37', '#0f6d2f'],
        //                    waitomo
        ['#f1fff7', '#e8fef2', '#d9fae8', '#c4f6de', '#a8eed1', '#85e3bc', '#67d9aa', '#4ecf9a', '#34c58d', '#00bc82', '#00aa76', '#00986a', '#00825a', '#00714b'],
        //                    paua
        ['#f2fdff', '#e7fdff', '#d8fafd', '#c6f1f5', '#b2e8ef', '#94dfe8', '#77d6e1', '#52ccdb', '#24c0d3', '#00b3c8', '#02a5bc', '#0096ae', '#00869f', '#007893'],
        //                    tasman
        ['#f3faff', '#e1f3ff', '#cbeaff', '#aedfff', '#8dcefc', '#6bbcf4', '#52b0f0', '#3da5eb', '#279be9', '#148fe2', '#007acd', '#006ebd', '#0061af', '#00569e'],
        //                    tip top
        ['#f7faff', '#f0f6ff', '#e3ecff', '#d0dfff', '#bdd3ff', '#a1c0fe', '#84acfa', '#659af0', '#4d80e5', '#3b71dc', '#2f62c9', '#2656b7', '#1d479b', '#183c84'],
        //                    hebe
        ['#fcf7ff', '#fcefff', '#f2ddf8', '#e5c6eb', '#d1a9da', '#bc8cc5', '#ac78b8', '#9660a0', '#874f92', '#7b4288', '#683473', '#5c2b66', '#50215a', '#451b4f'],
        //                    pinot
        ['#fff5fe', '#ffedfc', '#f9e0f7', '#edc1e5', '#dc9ece', '#cb82bb', '#b468a0', '#a35489', '#944275', '#8a3467', '#812b5f', '#722152', '#661647', '#5a143f'],
        //                    mordor
        ['#fefafb', '#fbf5f6', '#f0e8e8', '#dfd3d4', '#c9b9b9', '#ad9696', '#94797a', '#806263', '#6f5253', '#5d4244', '#4d3739', '#422e2f', '#352524', '#291e1e'],
        //                    bluff oyster
        ['#faf9f8', '#f6f5f4', '#e8e6e3', '#d7d5d2', '#c4c0bc', '#aea9a5', '#9b9591', '#85807c', '#76716d', '#65605d', '#5a5653', '#44413d', '#393531', '#2f2c28'],
        //                    silver fern
        ['#fbfbfb', '#f7f7f7', '#e9e9e9', '#dadada', '#c9c9c9', '#b9b9b9', '#a1a1a1', '#888888', '#777777', '#666666', '#555555', '#444444', '#333333', '#222222'],
        //                    glacier
        ['#fafbfe', '#f4f6fc', '#e6e9ef', '#d3d8e2', '#bbc4d5', '#a4b1c5', '#8e9eb6', '#7b8ca6', '#6d7e98', '#5f6f88', '#546279', '#48546a', '#3e465c', '#323a4d'],
        //                    white
        ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
    ];

    document.getElementById('ls').style.color = colours[document.getElementById("textColour").value][document.getElementById("textLevel").value];

    document.getElementById('osc').style.backgroundColor = colours[document.getElementById("bgColour").value][document.getElementById("bgLevel").value];

    disableSelect();

    resultsContrast(document.getElementById('ls').style.color.substring(4, document.getElementById('ls').style.color.length - 1).replace(/ /g, '').split(','), document.getElementById('osc').style.backgroundColor.substring(4, document.getElementById('osc').style.backgroundColor.length - 1).replace(/ /g, '').split(','));

    getSuggestions(getRGB(document.getElementById('ls').style.color), getRGB(document.getElementById('osc').style.backgroundColor), colours);


}
function getRGB(rgb) {
    return rgb.substring(4, rgb.length - 1)
        .replace(/ /g, '')
        .split(',');
}
function getSuggestions(rgb1, rgb2, colors) {
    var fontresults = [];
    var colorresults = [];
    for (var i = 0; i <= 14; i++) {
        for (var j = 0; j <= 12; j++) {
            var rgb3 = hexToRgb(colors[i][j]);
            if (ratio(rgb2, rgb3) > 4) {
                var result = getColor(i + 1, j + 1);
                fontresults.push(result);
            } if (ratio(rgb1, rgb3) > 4) {
                var result = getColor(i + 1, j + 1);
                colorresults.push(result);
            }
        };
    };
    if (fontresults.length > 0) {
        document.getElementById("suggestion1").innerHTML = "You could change the font color to " + (fontresults[0])[0] + ' at level ' + (fontresults[0])[1] + " or to " + (fontresults[fontresults.length - 1])[0] + ' at level ' + (fontresults[fontresults.length - 1])[1];
    }
    if (colorresults.length > 0) {
        document.getElementById("suggestion2").innerHTML = "You could change the background color to " + (colorresults[0])[0] + ' at level ' + (colorresults[0])[1] + " or to " + (colorresults[colorresults.length - 1])[0] + ' at level ' + (colorresults[colorresults.length - 1])[1];
    }
}

function getColor(i, j) {
    var colors = new Map([
        [1, 'pohutakawa'],
        [2, 'jaffa'],
        [3, 'hokey pokey'],
        [4, 'kiwifruit'],
        [5, 'feijoa'],
        [6, 'waitomo'],
        [7, 'paua'],
        [8, 'tasman'],
        [9, 'tip top'],
        [10, 'hebe'],
        [11, 'pinot'],
        [12, 'mordor'],
        [13, 'bluff oyster'],
        [14, 'silver fern'],
        [15, 'glacier'],
        [16, 'white']
    ]);
    var levels = new Map([
        [1, 5],
        [2, 10],
        [3, 20],
        [4, 30],
        [5, 50],
        [6, 100],
        [7, 200],
        [8, 300],
        [9, 400],
        [10, 500],
        [11, 600],
        [12, 700],
        [13, 800],
        [14, 900]
    ]);
    var name = colors.get(i);
    var level = levels.get(j);
    return [name, level];
}

function hexToRgb(hex) {
    hex = hex.replace('#', '');
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
}


function resultsContrast(rgb1, rgb2) {
    var cc = ratio(rgb1, rgb2);
    document.getElementById("ratio").innerHTML = cc;

    if (cc < 4) { // check which normal/large text is used to determine if below the standards
        document.getElementById("goodRatio").style.display = "none";
        document.getElementById("badRatio").style.display = "block";
    } else {
        document.getElementById("goodRatio").style.display = "block";
        document.getElementById("badRatio").style.display = "none";
    }
}
function ratio(rgb1, rgb2) {
    var cc1 = luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05;
    var cc2 = luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05;

    if (cc1 >= cc2) {
        var cc = cc1 / cc2;
    }
    else {
        var cc = cc2 / cc1;
    }
    cc = round(cc, 2);
    return cc;
}

function luminanace(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function swapColours() {
    var textc = document.getElementById("textColour").value;
    var textl = document.getElementById("textLevel").value;
    var bgc = document.getElementById("bgColour").value;
    var bgl = document.getElementById("bgLevel").value;

    document.getElementById("textColour").value = bgc;
    document.getElementById("textLevel").value = bgl;
    document.getElementById("bgColour").value = textc;
    document.getElementById("bgLevel").value = textl;

    setColour();
}

function changeSize(size) {
    // change div text font size.
    document.getElementById("ls").style.fontSize = size + "px";
}

function disableSelect() {

    if (document.getElementById("textColour").value == '15') {
        document.getElementById("textLevel").disabled = true;
        document.getElementsByClassName("change")[0].innerHTML = '-';
        document.getElementsByClassName("change")[1].innerHTML = '-';
        document.getElementsByClassName("change")[2].innerHTML = '-';
        document.getElementsByClassName("change")[3].innerHTML = '-';
        document.getElementsByClassName("change")[4].innerHTML = '-';
        document.getElementsByClassName("change")[5].innerHTML = '-';
        document.getElementsByClassName("change")[6].innerHTML = '-';
        document.getElementsByClassName("change")[7].innerHTML = '-';
        document.getElementsByClassName("change")[8].innerHTML = '-';
        document.getElementsByClassName("change")[9].innerHTML = '-';
        document.getElementsByClassName("change")[10].innerHTML = '-';
        document.getElementsByClassName("change")[11].innerHTML = '-';
        document.getElementsByClassName("change")[12].innerHTML = '-';
        document.getElementsByClassName("change")[13].innerHTML = '-';
    }
    else {
        document.getElementsByClassName("change")[0].innerHTML = '5';
        document.getElementsByClassName("change")[1].innerHTML = '10';
        document.getElementsByClassName("change")[2].innerHTML = '20';
        document.getElementsByClassName("change")[3].innerHTML = '30';
        document.getElementsByClassName("change")[4].innerHTML = '50';
        document.getElementsByClassName("change")[5].innerHTML = '100';
        document.getElementsByClassName("change")[6].innerHTML = '200';
        document.getElementsByClassName("change")[7].innerHTML = '300';
        document.getElementsByClassName("change")[8].innerHTML = '400';
        document.getElementsByClassName("change")[9].innerHTML = '500';
        document.getElementsByClassName("change")[10].innerHTML = '600';
        document.getElementsByClassName("change")[11].innerHTML = '700';
        document.getElementsByClassName("change")[12].innerHTML = '800';
        document.getElementsByClassName("change")[13].innerHTML = '900';
        document.getElementById("textLevel").disabled = false;
    }

    if (document.getElementById("bgColour").value == '15') {
        document.getElementById("bgLevel").disabled = true;
        document.getElementsByClassName("bg-lvl-option")[0].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[1].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[2].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[3].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[4].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[5].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[6].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[7].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[8].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[9].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[10].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[11].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[12].innerHTML = '-';
        document.getElementsByClassName("bg-lvl-option")[13].innerHTML = '-';
    }
    else {
        document.getElementsByClassName("bg-lvl-option")[0].innerHTML = '5';
        document.getElementsByClassName("bg-lvl-option")[1].innerHTML = '10';
        document.getElementsByClassName("bg-lvl-option")[2].innerHTML = '20';
        document.getElementsByClassName("bg-lvl-option")[3].innerHTML = '30';
        document.getElementsByClassName("bg-lvl-option")[4].innerHTML = '50';
        document.getElementsByClassName("bg-lvl-option")[5].innerHTML = '100';
        document.getElementsByClassName("bg-lvl-option")[6].innerHTML = '200';
        document.getElementsByClassName("bg-lvl-option")[7].innerHTML = '300';
        document.getElementsByClassName("bg-lvl-option")[8].innerHTML = '400';
        document.getElementsByClassName("bg-lvl-option")[9].innerHTML = '500';
        document.getElementsByClassName("bg-lvl-option")[10].innerHTML = '600';
        document.getElementsByClassName("bg-lvl-option")[11].innerHTML = '700';
        document.getElementsByClassName("bg-lvl-option")[12].innerHTML = '800';
        document.getElementsByClassName("bg-lvl-option")[13].innerHTML = '900';
        document.getElementById("bgLevel").disabled = false;
    }
}
