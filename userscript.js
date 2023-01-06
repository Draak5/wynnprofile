
const LevelRequirements = [
    {lvl: 0, req: 0, tot: 0},
    {lvl: 1, req: 110, tot: 110},
    {lvl: 2, req: 190, tot: 300},
    {lvl: 3, req: 275, tot: 575},
    {lvl: 4, req: 385, tot: 960},
    {lvl: 5, req: 505, tot: 1465},
    {lvl: 6, req: 645, tot: 2110},
    {lvl: 7, req: 790, tot: 2900},
    {lvl: 8, req: 940, tot: 3840},
    {lvl: 9, req: 1100, tot: 4940},
    {lvl: 10, req: 1370, tot: 6310},
    {lvl: 11, req: 1570, tot: 7880},
    {lvl: 12, req: 1800, tot: 9680},
    {lvl: 13, req: 2090, tot: 11770},
    {lvl: 14, req: 2400, tot: 14170},
    {lvl: 15, req: 2720, tot: 16890},
    {lvl: 16, req: 3100, tot: 19990},
    {lvl: 17, req: 3600, tot: 23590},
    {lvl: 18, req: 4150, tot: 27740},
    {lvl: 19, req: 4800, tot: 32540},
    {lvl: 20, req: 5300, tot: 37840},
    {lvl: 21, req: 5900, tot: 43740},
    {lvl: 22, req: 6750, tot: 50490},
    {lvl: 23, req: 7750, tot: 58240},
    {lvl: 24, req: 8900, tot: 67140},
    {lvl: 25, req: 10200, tot: 77340},
    {lvl: 26, req: 11650, tot: 88990},
    {lvl: 27, req: 13300, tot: 102290},
    {lvl: 28, req: 15200, tot: 117490},
    {lvl: 29, req: 17150, tot: 134640},
    {lvl: 30, req: 19600, tot: 154240},
    {lvl: 31, req: 22100, tot: 176340},
    {lvl: 32, req: 24900, tot: 201240},
    {lvl: 33, req: 28000, tot: 229240},
    {lvl: 34, req: 31500, tot: 260740},
    {lvl: 35, req: 35500, tot: 296240},
    {lvl: 36, req: 39900, tot: 336140},
    {lvl: 37, req: 44700, tot: 380840},
    {lvl: 38, req: 50000, tot: 430840},
    {lvl: 39, req: 55800, tot: 486640},
    {lvl: 40, req: 62000, tot: 548640},
    {lvl: 41, req: 68800, tot: 617440},
    {lvl: 42, req: 76400, tot: 693840},
    {lvl: 43, req: 84700, tot: 778540},
    {lvl: 44, req: 93800, tot: 872340},
    {lvl: 45, req: 103800, tot: 976140},
    {lvl: 46, req: 114800, tot: 1090940},
    {lvl: 47, req: 126800, tot: 1217740},
    {lvl: 48, req: 140000, tot: 1357740},
    {lvl: 49, req: 154500, tot: 1512240},
    {lvl: 50, req: 170300, tot: 1682540},
    {lvl: 51, req: 187600, tot: 1870140},
    {lvl: 52, req: 206500, tot: 2076640},
    {lvl: 53, req: 227000, tot: 2303640},
    {lvl: 54, req: 249500, tot: 2553140},
    {lvl: 55, req: 274000, tot: 2827140},
    {lvl: 56, req: 300500, tot: 3127640},
    {lvl: 57, req: 329500, tot: 3457140},
    {lvl: 58, req: 361000, tot: 3818140},
    {lvl: 59, req: 395000, tot: 4213140},
    {lvl: 60, req: 432200, tot: 4645340},
    {lvl: 61, req: 472300, tot: 5117640},
    {lvl: 62, req: 515800, tot: 5633440},
    {lvl: 63, req: 562800, tot: 6196240},
    {lvl: 64, req: 613700, tot: 6809940},
    {lvl: 65, req: 668600, tot: 7478540},
    {lvl: 66, req: 728000, tot: 8206540},
    {lvl: 67, req: 792000, tot: 8998540},
    {lvl: 68, req: 860000, tot: 9858540},
    {lvl: 69, req: 935000, tot: 10793540},
    {lvl: 70, req: 1040400, tot: 11833940},
    {lvl: 71, req: 1154400, tot: 12988340},
    {lvl: 72, req: 1282600, tot: 14270940},
    {lvl: 73, req: 1414800, tot: 15685740},
    {lvl: 74, req: 1567500, tot: 17253240},
    {lvl: 75, req: 1730400, tot: 18983640},
    {lvl: 76, req: 1837000, tot: 20820640},
    {lvl: 77, req: 1954800, tot: 22775440},
    {lvl: 78, req: 2077600, tot: 24853040},
    {lvl: 79, req: 2194400, tot: 27047440},
    {lvl: 80, req: 2325600, tot: 29373040},
    {lvl: 81, req: 2455000, tot: 31828040},
    {lvl: 82, req: 2645000, tot: 34473040},
    {lvl: 83, req: 2845000, tot: 37318040},
    {lvl: 84, req: 3141100, tot: 40459140},
    {lvl: 85, req: 3404710, tot: 43863850},
    {lvl: 86, req: 3782160, tot: 47646010},
    {lvl: 87, req: 4151400, tot: 51797410},
    {lvl: 88, req: 4604100, tot: 56401510},
    {lvl: 89, req: 5057300, tot: 61458810},
    {lvl: 90, req: 5533840, tot: 66992650},
    {lvl: 91, req: 6087120, tot: 73079770},
    {lvl: 92, req: 6685120, tot: 79764890},
    {lvl: 93, req: 7352800, tot: 87117690},
    {lvl: 94, req: 8080800, tot: 95198490},
    {lvl: 95, req: 8725600, tot: 103924090},
    {lvl: 96, req: 9578400, tot: 113502490},
    {lvl: 97, req: 10545600, tot: 124048090},
    {lvl: 98, req: 11585600, tot: 135633690},
    {lvl: 99, req: 12740000, tot: 148373690},
    {lvl: 100, req: 14418250, tot: 162791940},
    {lvl: 101, req: 16280000, tot: 179071940},
    {lvl: 102, req: 21196500, tot: 200268440},
    {lvl: 103, req: 23315500, tot: 223583940},
    {lvl: 104, req: 25649000, tot: 249232940},
    {lvl: 105, req: 249232940, tot: 498465880},
    {lvl: 106, req: 0, tot: 498465880}];

const horseValueIds = {
    brown: "brhorse",
    black: "blhorse",
    chestnut: "cnhorse",
    white: "whhorse"
};
const bankPageId = "bankpages";
const mTomesId = "mythictomes";
const uniqueMsId = "uniqmythic";
const powderTypes = ["Fire", "Air", "Water", "Earth", "Thunder"]
var currentUser = null;


function getEPouchValue(ind) {
    return getCheckboxValue("epouch"+ind);
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


var FETCHEDAPIDATA = null;

function initialize() {
    var name = urlParams.get('name')
    document.getElementById("mainheader").innerText = name+"'s Profile";

    fetchApi(name);
}

function fetchApi(name) {
    console.log("FETCHING API DATA")
    fetch('https://api.wynncraft.com/v2/player/'+ name + '/stats')
        .then(response => response.json())
        .then(data => {
            FETCHEDAPIDATA = data;
            currentUser = data.data[0].username;
            document.getElementById("inputuser").value = currentUser;
            handleApiData(data);
        });
}

function handleApiData(data) {
    if (data.code == 400) {
        document.getElementById("mainheader").innerText = "User Not Found";
        return;
    }

    //console.log(data.data[0]);
    document.getElementById("mainheader").innerText = "["+data.data[0].meta.tag.value + "] " + data.data[0].username+"'s Profile";
    if (data.data[0].meta.tag.value == null) document.getElementById("mainheader").innerText = data.data[0].username+"'s Profile";


    var characters = data.data[0].characters;
    for (var i in characters) {
        var char = characters[i];
        addCharacterDiv(char)
    }
}

function p(x) {
    return (x*100).toString().substring(0,5);
}

function addCharacterDiv(char) {
    var card = document.createElement('div');
    card.classList.add('character-card');
    
    comp = totalCompletion(char);

    var nameElem = document.createElement('h1');
    nameElem.textContent = char.type + " - Lv. " + char.professions.combat.level + " - " + p(comp.summary) + "%";
    card.appendChild(nameElem);
    
    var progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.setAttribute("style", "width:"+(comp.summary*100)+"%");
    card.appendChild(progressBar);
    
    card = addCardValue(card, comp.combatLv, 'Combat Level');
    card = addCardValue(card, comp.profLv, 'Profession Level');
    card = addCardValue(card, comp.dungeons, 'Dungeons Completed');
    card = addCardValue(card, comp.raids, 'Raids Completed');
    card = addCardValue(card, comp.discoveries, "Discoveries");
    card = addCardValue(card, comp.quests, "Quests");

    document.body.appendChild(card);

}


function addCardValue(card, comp, txt) {
    var elem = document.createElement('p');
    elem.textContent = txt+": " + p(comp.value) + "% ("+comp.index+"/"+comp.key+")";
    card.appendChild(elem);
    return card;
}


function totalCompletion(char) {
    //console.log(char);
    completions = {};

    // Level Completion
    var currentTotalXp = LevelRequirements[char.professions.combat.level].req * char.professions.combat.xp/100 + LevelRequirements[char.professions.combat.level-1].tot;
    //console.log(currentTotalXp)
    completions.combatLv = {
        value: currentTotalXp / 498465880,
        index: char.professions.combat.level,
        key: 106
    };

    // Skill Completions
    completions.profLv = {value: 0};
    var profs = ["alchemism", "armouring", "cooking", "farming",
        "fishing", "jeweling", "mining", "scribing", "tailoring",
        "weaponsmithing", "woodcutting", "woodworking"];
    for (var i in profs) {
        completions.profLv.value += char.professions[profs[i]].level;
    }
    completions.profLv = {
        value: completions.profLv.value / (132 * 12),
        index: completions.profLv.value,
        key: 132 * 12
    };
    
    // Dungeon Completions
    completions.dungeons = {
        value: char.dungeons.list.length / 17,
        index: char.dungeons.list.length,
        key: 17
    };
    
    // Raid Completions
    completions.raids = {
        value: char.raids.list.length / 4,
        index: char.raids.list.length,
        key: 4
    };

    // Quest Count					/ 138
        // Mini-Quest Count			    / 125
    completions.quests = {
        value: char.quests.completed / (138 + 125),
        index: char.quests.completed,
        key: 138+125
    };
    

    // Discovery Count				/ 494
        // Secret Discovery Count		/ 105
    completions.discoveries = {
        value: char.discoveries / (494+105),
        index: char.discoveries,
        key: 494+105
    };

    if (getCheckboxValue("usemanual")) {
        // Emerald Pouches				/ 10
        var tot = 0;
        for (var i = 0; i < 10; i++) {
            if (getEPouchValue(i)) tot ++;
        }
        completions.epouches = {
            value: tot/10,
            index: tot,
            key: 10
        }

        // Bank Page Count				/ 21
        completions.bankpages = {
            value: getNumberValue(bankPageId) / 21,
            index: getNumberValue(bankPageId),
            key: 21
        }

        // Powder Count				    / 64 x 30
        var tot = 0;
        for (var i in powderTypes) {
            var pdType = powderTypes[i];
            for (var j = 1; j <= 6; j++) {
                if (getCheckboxValue("pd"+j+pdType)) tot++;
            }
        }
        completions.powderstacks = {
            value: tot / 30,
            index: tot,
            key: 30
        }

        // Maxed Horses				    / 4 (15, 25, 35, 40)
        tot = 0;
        for (var horse in horseValueIds) {
            if (getCheckboxValue(horseValueIds[horse])) tot++;
        }
        completions.horses = {
            value: tot / 4,
            index: tot,
            key: 4
        }

        // Mythic Tomes				    / 6
        completions.mythicTomes = {
            value: getNumberValue(mTomesId) / 6,
            index: getNumberValue(mTomesId),
            key: 6
        }
        // Own Unique Mythics			/ 51
        completions.uniqueMythics = {
            value: getNumberValue(uniqueMsId) / 51,
            index: getNumberValue(uniqueMsId),
            key: 51
        }
    }


    // summary
    var compLen = Object.keys(completions).length;
    var tot = 0;
    for (var i in completions) {
        tot += completions[i].value;
    }
    completions.summary = tot / compLen;

    //console.log(completions);
    return completions

}

function getNumberValue(id) {
    return document.getElementById(id).value;
}
function getCheckboxValue(id) {
    return document.getElementById(id).checked;
}


initialize();


var fetchTime = 0
function update() {
    checkName = getNumberValue("inputuser")
    if (currentUser != checkName) {
        fetchTime++
        if (fetchTime > 10) {
            fetchTime = 0;
            fetchApi(checkName);
        }
    }

    if (FETCHEDAPIDATA == null) return;
    if (FETCHEDAPIDATA.code == 400) return;

    var cards = document.getElementsByClassName("character-card");
    for (var i = cards.length-1; i >= 0; i--) {
        cards[i].remove()
    }
    handleApiData(FETCHEDAPIDATA);
}

setInterval(() => {update()}, 100)