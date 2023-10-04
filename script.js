const button = document.getElementById("SettingsButton");
const icon = document.getElementsByClassName("fa-solid fa-gears");
const SettingsPopup = document.getElementById("SettingsPopup");
const NightMode = document.getElementById("NightMode");
const textElements = document.getElementsByClassName("text");
const BuyNow = document.getElementById("BuyNow");
const container = document.getElementById("main");
const settings = document.getElementById("settings");
button.addEventListener("mouseover", function(){
    settings.classList = "fa-solid fa-gear fa-spin";
    settings.style.color = "hsl(0, 0%, 85%)";
});

button.addEventListener('mouseout', function() {
    settings.classList = "fa-solid fa-gear";
    settings.style.color = "hsl(0, 0%, 100%)";
});

button.onclick = function(){
    if(SettingsPopup.style.visibility == "visible"){

    settings.classList = "fa-solid fa-gear";
    settings.style.color = "hsl(0, 0%, 100%)";
    SettingsPopup.style.visibility = "hidden"
    }

    else{
        settings.classList = "fa-solid fa-gear";
        settings.style.color = "hsl(0, 0%, 100%)";
        SettingsPopup.style.visibility = "visible"
    }


}

NightMode.addEventListener('click', (event) => {
    if (NightMode.checked) {
        for(let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "black";
        }

        console.log("Changing background color...");
        SettingsPopup.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
        BuyNow.style.boxShadow = "0 0 10px hsla(0, 0%, 0%, 0.8)"
        main.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        settings.style.color = "black"
    }

    else{
        for(let i = 0; i < textElements.length; i++) {
            textElements[i].style.color = "white";
            SettingsPopup.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            BuyNow.style.boxShadow = "0 0 10px hsla(300, 100%, 100%, 0.8)";
            main.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            settings.style.color = "white"
        }
    }
});