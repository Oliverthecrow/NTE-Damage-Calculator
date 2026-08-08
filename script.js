//some portions were made or organized by AI, math for calculations were all
//checked and done by hand, and verified afterword for lots of edge cases.

document.getElementById('calculate-btn').addEventListener('click', () => {
  // Helper to extract clean floating point numbers
  var getInputValue = (id) => {
    var rawVal = document.getElementById(id).value;
    // Strip out commas and percent signs
    var cleaned = rawVal.replace(/[^0-9.-]/g, '');
    return parseFloat(cleaned) || 0;
  };

  function motionValueCalculator() {
    var damageRatio = getInputValue('MV') / 100;

    var baseAtk = getInputValue('BaseAtk');
    var AtkP = getInputValue('Atk%') / 100;
    var flatAtk = getInputValue('FlatAtk');
    var totalAttack = baseAtk * (1 + AtkP) + flatAtk;

    var dmgMult = getInputValue('Dmg%') / 100 + 1;
    var dmgTrueMult = getInputValue("DmgT") / 100 + 1;
    var totalDamageMult = dmgMult * dmgTrueMult;

    var defMult = 0;
    var charLV = getInputValue("CharLV");
    var eneLV = getInputValue("EneLV");
    var defI = getInputValue("DefI") / 100;
    var defR = getInputValue("DefR") / 100;
    var inTrain = document.getElementById('inTrain').checked;

    if (inTrain === true) {
      defMult = (charLV + 100) / ((eneLV + 90) * (1 - defI) * (1 - defR) + (charLV + 100));
    } else {
      defMult = (charLV + 100) / ((eneLV + 100) * (1 - defI) * (1 - defR) + (charLV + 100));
    }

    if (defMult > 1) {
      defMult = 1;
    }

    var res = getInputValue("EneRes") / 100;
    var resI = getInputValue("ResI") / 100;
    var resR = getInputValue("ResR") / 100;
    var resMult = (1 - res + resI + resR);

    if (resMult > 1) {
      resMult = (2 - (1 / (1 - res + resR + resI)));
    }

    var trueMult = getInputValue("TrueMult") / 100 + 1;

    var total = damageRatio * totalAttack * dmgMult * dmgTrueMult * defMult * resMult * trueMult;

    // Display formatted results
    document.getElementById('output-result').textContent = total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    document.getElementById("TotalDamage%").textContent = totalDamageMult.toFixed(2);
    document.getElementById('TotalAttack').textContent = totalAttack.toFixed(1);
    document.getElementById("TotalDefense").textContent = defMult.toFixed(3);
    document.getElementById("ResMult").textContent = resMult.toFixed(3);
  }

  // Execute calculation on click
  motionValueCalculator();
});

document.getElementById('Bcalculate-btn').addEventListener('click', () => {
  // Helper to extract clean floating point numbers safely
  var getInputValue = (id) => {
    var el = document.getElementById(id);
    if (!el) return 0;
    var cleaned = el.value.replace(/[^0-9.-]/g, '');
    return parseFloat(cleaned) || 0;
  };

  function BreakCalculator() {
    var enemyLevel = getInputValue("BEnemyLevel");
    var enemyMaxBreak = getInputValue("EnemyMaxBreak");
    var enemyDefReduction = getInputValue("BEnemyDefReduction") / 100;
    var enemyResReduction = getInputValue("BEnemyResReduction") / 100;

    //stuff that AI did
    var inTrain = document.getElementById("BinTrain") ? document.getElementById("BinTrain").checked : false;
    var whoBreaks1 = document.getElementById("BChar1") ? document.getElementById("BChar1").checked : false;
    var whoBreaks2 = document.getElementById("BChar2") ? document.getElementById("BChar2").checked : false;
    var whoBreaks3 = document.getElementById("BChar3") ? document.getElementById("BChar3").checked : false;
    var whoBreaks4 = document.getElementById("BChar4") ? document.getElementById("BChar4").checked : false;
    //ai stuff ends

    var char1Level = getInputValue("BChar1LV");
    var char1DefIgnore = getInputValue("B1DefIgnore") / 100;
    var char1ResIgnore = getInputValue("B1ResIgnore") / 100;
    var char1enemyResistance = getInputValue("B1EnemyResistance") / 100;
    var char1EBDC = getInputValue("B1EBDC") / 100;
    var char1BreakIntensity = getInputValue("B1BI");
    var char1TrueMult = getInputValue("B1True") / 100 + 1;
    var char1uniDefIgnore = getInputValue("B1UniDefIgnore") / 100;
    var char1uniResIgnore = getInputValue("B1UniResIgnore") / 100;

    var char2Level = getInputValue("BChar2LV");
    var char2DefIgnore = getInputValue("B2DefIgnore") / 100;
    var char2ResIgnore = getInputValue("B2ResIgnore") / 100;
    var char2enemyResistance = getInputValue("B2EnemyResistance") / 100;
    var char2EBDC = getInputValue("B2EBDC") / 100;
    var char2BreakIntensity = getInputValue("B2BI");
    var char2TrueMult = getInputValue("B2True") / 100 + 1;
    var char2uniDefIgnore = getInputValue("B2UniDefIgnore") / 100;
    var char2uniResIgnore = getInputValue("B2UniResIgnore") / 100;

    var char3Level = getInputValue("BChar3LV");
    var char3DefIgnore = getInputValue("B3DefIgnore") / 100;
    var char3ResIgnore = getInputValue("B3ResIgnore") / 100;
    var char3enemyResistance = getInputValue("B3EnemyResistance") / 100;
    var char3EBDC = getInputValue("B3EBDC") / 100;
    var char3BreakIntensity = getInputValue("B3BI");
    var char3TrueMult = getInputValue("B3True") / 100 + 1;
    var char3uniDefIgnore = getInputValue("B3UniDefIgnore") / 100;
    var char3uniResIgnore = getInputValue("B3UniResIgnore") / 100;

    var char4Level = getInputValue("BChar4LV");
    var char4DefIgnore = getInputValue("B4DefIgnore") / 100;
    var char4ResIgnore = getInputValue("B4ResIgnore") / 100;
    var char4enemyResistance = getInputValue("B4EnemyResistance") / 100;
    var char4EBDC = getInputValue("B4EBDC") / 100;
    var char4BreakIntensity = getInputValue("B4BI");
    var char4TrueMult = getInputValue("B4True") / 100 + 1;
    var char4uniDefIgnore = getInputValue("B4UniDefIgnore") / 100;
    var char4uniResIgnore = getInputValue("B4UniResIgnore") / 100;

    var char1DefMult = 0;
    var char2DefMult = 0;
    var char3DefMult = 0;
    var char4DefMult = 0;

    if (inTrain && whoBreaks1) {
      char1DefMult = (char1Level + 100) / ((enemyLevel + 90) * (1 - char1DefIgnore - char1uniDefIgnore) * (1 - enemyDefReduction) + (char1Level + 100));
    } else if (inTrain && !whoBreaks1) {
      char1DefMult = (char1Level + 100) / ((enemyLevel + 90) * (1 - char1uniDefIgnore) * (1 - enemyDefReduction) + (char1Level + 100));
    } else if (!inTrain && whoBreaks1) {
      char1DefMult = (char1Level + 100) / ((enemyLevel + 100) * (1 - char1DefIgnore - char1uniDefIgnore) * (1 - enemyDefReduction) + (char1Level + 100));
    } else {
      char1DefMult = (char1Level + 100) / ((enemyLevel + 100) * (1 - char1uniDefIgnore) * (1 - enemyDefReduction) + (char1Level + 100));
    }

    if (inTrain && whoBreaks2) {
      char2DefMult = (char2Level + 100) / ((enemyLevel + 90) * (1 - char2DefIgnore - char2uniDefIgnore) * (1 - enemyDefReduction) + (char2Level + 100));
    } else if (inTrain && !whoBreaks2) {
      char2DefMult = (char2Level + 100) / ((enemyLevel + 90) * (1 - char2uniDefIgnore) * (1 - enemyDefReduction) + (char2Level + 100));
    } else if (!inTrain && whoBreaks2) {
      char2DefMult = (char2Level + 100) / ((enemyLevel + 100) * (1 - char2DefIgnore - char2uniDefIgnore) * (1 - enemyDefReduction) + (char2Level + 100));
    } else {
      char2DefMult = (char2Level + 100) / ((enemyLevel + 100) * (1 - char2uniDefIgnore) * (1 - enemyDefReduction) + (char2Level + 100));
    }

    if (inTrain && whoBreaks3) {
      char3DefMult = (char3Level + 100) / ((enemyLevel + 90) * (1 - char3DefIgnore - char3uniDefIgnore) * (1 - enemyDefReduction) + (char3Level + 100));
    } else if (inTrain && !whoBreaks3) {
      char3DefMult = (char3Level + 100) / ((enemyLevel + 90) * (1 - char3uniDefIgnore) * (1 - enemyDefReduction) + (char3Level + 100));
    } else if (!inTrain && whoBreaks3) {
      char3DefMult = (char3Level + 100) / ((enemyLevel + 100) * (1 - char3DefIgnore - char3uniDefIgnore) * (1 - enemyDefReduction) + (char3Level + 100));
    } else {
      char3DefMult = (char3Level + 100) / ((enemyLevel + 100) * (1 - char3uniDefIgnore) * (1 - enemyDefReduction) + (char3Level + 100));
    }

    if (inTrain && whoBreaks4) {
      char4DefMult = (char4Level + 100) / ((enemyLevel + 90) * (1 - char4DefIgnore - char4uniDefIgnore) * (1 - enemyDefReduction) + (char4Level + 100));
    } else if (inTrain && !whoBreaks4) {
      char4DefMult = (char4Level + 100) / ((enemyLevel + 90) * (1 - char4uniDefIgnore) * (1 - enemyDefReduction) + (char4Level + 100));
    } else if (!inTrain && whoBreaks4) {
      char4DefMult = (char4Level + 100) / ((enemyLevel + 100) * (1 - char4DefIgnore - char4uniDefIgnore) * (1 - enemyDefReduction) + (char4Level + 100));
    } else {
      char4DefMult = (char4Level + 100) / ((enemyLevel + 100) * (1 - char4uniDefIgnore) * (1 - enemyDefReduction) + (char4Level + 100));
    }

    var char1ResMult = 0;
    if (whoBreaks1) {
      char1ResMult = 1 - char1enemyResistance + char1ResIgnore + char1uniResIgnore + enemyResReduction;
    } else {
      char1ResMult = 1 - char1enemyResistance + char1uniResIgnore + enemyResReduction;
    }
    if (char1ResMult > 1) {
      char1ResMult = 2 - (1 / char1ResMult);
    }

    var char2ResMult = 0;
    if (whoBreaks2) {
      char2ResMult = 1 - char2enemyResistance + char2ResIgnore + char2uniResIgnore + enemyResReduction;
    } else {
      char2ResMult = 1 - char2enemyResistance + char2uniResIgnore + enemyResReduction;
    }
    if (char2ResMult > 1) {
      char2ResMult = 2 - (1 / char2ResMult);
    }

    var char3ResMult = 0;
    if (whoBreaks3) {
      char3ResMult = 1 - char3enemyResistance + char3ResIgnore + char3uniResIgnore + enemyResReduction;
    } else {
      char3ResMult = 1 - char3enemyResistance + char3uniResIgnore + enemyResReduction;
    }
    if (char3ResMult > 1) {
      char3ResMult = 2 - (1 / char3ResMult);
    }

    var char4ResMult = 0;
    if (whoBreaks4) {
      char4ResMult = 1 - char4enemyResistance + char4ResIgnore + char4uniResIgnore + enemyResReduction;
    } else {
      char4ResMult = 1 - char4enemyResistance + char4uniResIgnore + enemyResReduction;
    }
    if (char4ResMult > 1) {
      char4ResMult = 2 - (1 / char4ResMult);
    }

    var baseBreakDmgArray = [
      91, 93, 96, 98, 101, 104, 106, 109, 111, 114,
      117, 119, 122, 124, 127, 130, 132, 135, 137, 140,
      148, 159, 170, 182, 193, 204, 214, 226, 241, 257,
      273, 289, 306, 325, 345, 367, 390, 413, 438, 462,
      488, 517, 548, 581, 621, 663, 707, 752, 800, 854,
      897, 942, 990, 1041, 1106, 1168, 1233, 1300, 1370, 1440,
      1515, 1604, 1693, 1788, 1896, 1990, 2083, 2184, 2285, 2384,
      2486, 2602, 2707, 2821, 2984, 3135, 3250, 3367, 3484, 3603
    ];

    var char1Total = 0;
    if (char1Level > 0 && char1Level <= 80) {
      char1Total = baseBreakDmgArray[char1Level - 1] * (enemyMaxBreak / 3) * char1DefMult * char1ResMult * (1 + char1BreakIntensity / 300 + char1EBDC) * char1TrueMult;
    }

    var char2Total = 0;
    if (char2Level > 0 && char2Level <= 80) {
      char2Total = baseBreakDmgArray[char2Level - 1] * (enemyMaxBreak / 3) * char2DefMult * char2ResMult * (1 + char2BreakIntensity / 300 + char2EBDC) * char2TrueMult;
    }

    var char3Total = 0;
    if (char3Level > 0 && char3Level <= 80) {
      char3Total = baseBreakDmgArray[char3Level - 1] * (enemyMaxBreak / 3) * char3DefMult * char3ResMult * (1 + char3BreakIntensity / 300 + char3EBDC) * char3TrueMult;
    }

    var char4Total = 0;
    if (char4Level > 0 && char4Level <= 80) {
      char4Total = baseBreakDmgArray[char4Level - 1] * (enemyMaxBreak / 3) * char4DefMult * char4ResMult * (1 + char4BreakIntensity / 300 + char4EBDC) * char4TrueMult;
    }

    var total = char1Total + char2Total + char3Total + char4Total;

    //some stuff ai did
    var formatOptions = {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    };

    document.getElementById('Bchar1-result').textContent = char1Total.toLocaleString(undefined, formatOptions);
    document.getElementById('Bchar2-result').textContent = char2Total.toLocaleString(undefined, formatOptions);
    document.getElementById('Bchar3-result').textContent = char3Total.toLocaleString(undefined, formatOptions);
    document.getElementById('Bchar4-result').textContent = char4Total.toLocaleString(undefined, formatOptions);

    document.getElementById('Boutput-result').textContent = total.toLocaleString(undefined, formatOptions);
  }

  BreakCalculator();
});

//stuff that AI did
document.addEventListener("DOMContentLoaded", () => {
  var inputs = document.querySelectorAll(".format-percent, .format-number");

  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      let val = e.target.value.replace(/[^0-9.-]/g, ""); // strip non-numeric symbols
      e.target.value = val;
    });

    input.addEventListener("blur", (e) => {
      let rawVal = parseFloat(e.target.value);

      if (isNaN(rawVal)) {
        e.target.value = "";
        return;
      }

      if (e.target.classList.contains("format-percent")) {
        e.target.value = rawVal + "%";
      } else {
        e.target.value = rawVal.toLocaleString();
      }
    });
  });
});

//stuff that AI did
document.addEventListener("DOMContentLoaded", () => {
  var inputs = document.querySelectorAll(".format-percent, .format-number");

  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      let val = e.target.value.replace(/[^0-9.-]/g, "");
      e.target.value = val;
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.target.blur();
        document.getElementById('calculate-btn').click();
        document.getElementById('Bcalculate-btn').click();
      }
    });

    input.addEventListener("blur", (e) => {
      var cleanValue = e.target.value.replace(/[^0-9.-]/g, "");
      let rawVal = parseFloat(cleanValue);

      if (isNaN(rawVal)) {
        e.target.value = "";
        return;
      }

      if (e.target.classList.contains("format-percent")) {
        e.target.value = rawVal + "%";
      } else {
        e.target.value = rawVal.toLocaleString();
      }
    });
  });
});

//theme switching
var themes = [{ wallpaper: "Images/Fadia.png", accent: "#8aadf4" }, { wallpaper: "Images/Hotori.png", accent: "#ee99a0" }, { wallpaper: "Images/Mint.png", accent: "#a6da95" }, { wallpaper: "Images/Shinku.jpg", accent: "#74c7ec" }]
function applyRandomTheme() {
  var randomTheme = themes[Math.floor(Math.random() * themes.length)];
  document.documentElement.style.setProperty('--accent', randomTheme.accent);
  document.documentElement.style.setProperty('--bg-image', `url("${randomTheme.wallpaper}")`);
}

//stuff that AI did
document.addEventListener("DOMContentLoaded", () => {
  applyRandomTheme();
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.calc-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetCalcId = btn.getAttribute('data-calc');
      sections.forEach(section => {
        if (section.id === targetCalcId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      applyRandomTheme();
    });
  });
});

