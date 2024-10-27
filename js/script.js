/**keep screen awake*/
function keepSceenAwake () {
    if('wakeLock' in navigator) {
        navigator.wakeLock.request("screen")
        console.log('Screen Wake Lock is acquired');
    } else {
        alert('Your browser is not capable of keeping the screen awake, please, tweak your machine settings manually to prevent it from turning off the screen');
    }
}


/**UI*/
/**show mobile navigation*/
$(".nav.toggle").on("click", function() {
    $(".nav.hide").toggle();
    $(".wrapper").toggleClass("mobile");
    $("nav").toggleClass("mobile");
    $("button.toggle").toggle();
})


/**localises UI*/
function setLocalisation () {
    fetch("/res/translations/lt.json")
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            for (let phrase in data) {
                let ely = document.getElementById(phrase);
                if (ely.placeholder){
                    ely.placeholder = data[phrase];
                }
                else {
                    if (ely.value){
                        ely.value = data[phrase];
                    } 
                }
                if (ely.innerHTML){
                    ely.textContent = data[phrase];
                }
            }
        })
}

setLocalisation();
keepSceenAwake();