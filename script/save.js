function player_data_save() {
    player_data = [{
        name: document.getElementById("name").value
        ,race: document.getElementById("race").value 
        ,character_class: document.getElementById("class").value 
        ,maxhp: document.getElementById("mhp").value 
        ,passive_perception: document.getElementById("pass_percep").value 
        ,profficiency_bonus: document.getElementById("prof_bonus").value 
        ,initiative: document.getElementById("initiative").value
        ,ac: document.getElmentById("ac").value
    },{
        str: document.getElementById("str").value 
        ,str_bonus: document.getElementById("str_bonus").value 
        ,athletics: document.getElementById("athl").value 
        ,int: document.getElementById("int").value 
        ,int_bonus: document.getElementById("int_bonus").value 
        ,arcana: document.getElementById("arc").value 
        ,history: document.getElementById("his").value 
        ,investigation: document.getElementById("inv").value 
        ,nature: document.getElementById("nat").value 
        ,religion: document.getElementById("reli").value 
        ,wis: document.getElementById("wis").value 
        ,wis_bonus: document.getElementById("wis_bonus").value 
        ,animal_handling: document.getElementById("anhan").value 
        ,insight: document.getElementById("ins").value 
        ,medicine: document.getElementById("med").value 
        ,perception: document.getElementById("percep").value 
        ,survival: document.getElementById("surv").value 
        ,dex: document.getElementById("dex").value 
        ,dex_bonus: document.getElementById("dex_bonus").value 
        ,acrobatics: document.getElementById("acro").value 
        ,stealth: document.getElementById("stea").value 
        ,sleight_of_hand: document.getElementById("soh").value 
        ,cha: document.getElementById("cha").value 
        ,cha_bonus: document.getElementById("cha_bonus").value 
        ,persuation: document.getElementById("pers").value 
        ,deception: document.getElementById("dec").value 
        ,intimidation: document.getElementById("inti").value 
        ,performance: document.getElementById("perf").value 
        ,con: document.getElementById("con").value 
        ,con_bonus: document.getElementById("con_bonus").value 

        ,traits: document.getElementById("traits").value
    },{
        plat: document.getElementById("plat").value 
        ,gold: document.getElementById("gold").value 
        ,elec: document.getElementById("elec").value 
        ,silv: document.getElementById("silv").value 
        ,copp: document.getElementById("copp").value 
        ,profficiencies: document.getElementById("prof").value  
        ,inventory: document.getElementById("invent").value 
    },{
        spellsave: document.getElementById("spell_save").value 
        ,spellattack: document.getElementById("spell_atk_bonus").value 
        ,cantrips: document.getElementById("cantrips").value 
        ,lvl1spells: document.getElementById("lvl1spells").value 
        ,lvl2spells: document.getElementById("lvl2spells").value 
        ,lvl3spells: document.getElementById("lvl3spells").value 
        ,lvl4spells: document.getElementById("lvl4spells").value 
        ,lvl5spells: document.getElementById("lvl5spells").value 
        ,lvl6spells: document.getElementById("lvl6spells").value 
        ,lvl7spells: document.getElementById("lvl7spells").value 
        ,lvl8spells: document.getElementById("lvl8spells").value 
        ,lvl9spells: document.getElementById("lvl9spells").value 
    }];

    var player_data_JSON = new Blob([JSON.stringify(player_data)], {type: "application/json"});
    
    let a = document.createElement('a');
    a.download = document.getElementById('name').value;
    a.href = URL.createObjectURL(player_data_JSON);
    a.click();
    document.removeChild(a);
}

function player_data_load(){
    let loaded_data = document.getElementById('file_select').files[0];
    let fileread = new FileReader();
    fileread.onload = function (e) {
        let content = e.target.result;
        var stat = JSON.parse(content);

        document.getElementById("name").value = stat[0].name
        document.getElementById("race").value = stat[0].race
        document.getElementById("class").value = stat[0].character_class
        document.getElementById("mhp").value = stat[0].maxhp
        document.getElementById("pass_percep").value = stat[0].passive_perception
        document.getElementById("prof_bonus").value = stat[0].profficiency_bonus
        document.getElementById("initiative").value = stat[0].initiative
        document.getElementById("ac").value = stat[0].initiative
    
        document.getElementById("str").value = stat[1].str
        document.getElementById("str_bonus").value = stat[1].str_bonus
        document.getElementById("athl").value = stat[1].athletics
        document.getElementById("int").value = stat[1].int
        document.getElementById("int_bonus").value = stat[1].int_bonus
        document.getElementById("arc").value = stat[1].arcana
        document.getElementById("his").value = stat[1].history
        document.getElementById("inv").value = stat[1].investigation
        document.getElementById("nat").value = stat[1].nature
        document.getElementById("reli").value = stat[1].religion
        document.getElementById("wis").value = stat[1].wis
        document.getElementById("wis_bonus").value = stat[1].wis_bonus
        document.getElementById("anhan").value = stat[1].animal_handling
        document.getElementById("ins").value = stat[1].insight
        document.getElementById("med").value = stat[1].medicine
        document.getElementById("percep").value = stat[1].perception
        document.getElementById("surv").value = stat[1].survival
        document.getElementById("dex").value = stat[1].dex
        document.getElementById("dex_bonus").value = stat[1].dex_bonus
        document.getElementById("acro").value = stat[1].acrobatics
        document.getElementById("stea").value = stat[1].stealth
        document.getElementById("soh").value = stat[1].sleight_of_hand
        document.getElementById("cha").value = stat[1].cha
        document.getElementById("cha_bonus").value = stat[1].cha_bonus
        document.getElementById("pers").value = stat[1].persuation
        document.getElementById("dec").value = stat[1].deception
        document.getElementById("inti").value = stat[1].intimidation
        document.getElementById("perf").value = stat[1].performance
        document.getElementById("con").value = stat[1].con
        document.getElementById("con_bonus").value = stat[1].con_bonus
    
        document.getElementById("traits").value = stat[1].traits
    
        document.getElementById("plat").value = stat[2].plat
        document.getElementById("gold").value = stat[2].gold
        document.getElementById("elec").value = stat[2].elec
        document.getElementById("silv").value = stat[2].silv
        document.getElementById("copp").value = stat[2].copp
        document.getElementById("prof").value  = stat[2].profficiencies
        document.getElementById("invent").value = stat[2].inventory

        document.getElementById("spell_save").value = stat[3].spellsave
        document.getElementById("spell_atk_bonus").value = stat[3].spellattack
        document.getElementById("cantrips").value = stat[3].cantrips
        document.getElementById("lvl1spells").value = stat[3].lvl1spells
        document.getElementById("lvl2spells").value = stat[3].lvl2spells
        document.getElementById("lvl3spells").value = stat[3].lvl3spells
        document.getElementById("lvl4spells").value = stat[3].lvl4spells
        document.getElementById("lvl5spells").value = stat[3].lvl5spells
        document.getElementById("lvl6spells").value = stat[3].lvl6spells
        document.getElementById("lvl7spells").value = stat[3].lvl7spells
        document.getElementById("lvl8spells").value = stat[3].lvl8spells
        document.getElementById("lvl9spells").value = stat[3].lvl9spells
    }
    fileread.readAsText(loaded_data);
}
