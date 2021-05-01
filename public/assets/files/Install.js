`use-tricks`;
let evpromptbut = null;
const buttonin = document.querySelector(`#installapps`), 
saveprompt = (evt) => {
    evpromptbut=evt;
        buttonin.removeAttribute(`hidden`);
},
instalar=(evt)=>{
    evpromptbut.prompt();
    evt.srcElement.setAttribute(`hidden`, true)
    evpromptbut=null;
},
logappinstalled=(evt)=>{
    console.log(` ${evt}, instalada`)
};
buttonin.addEventListener(`click`, instalar)
window.addEventListener(`beforeinstallprompt`, saveprompt)
window.addEventListener(`appintalled`, logappinstalled)