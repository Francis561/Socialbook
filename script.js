var settingmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingmenu.classList.toggle("settings-menu-height")
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
}