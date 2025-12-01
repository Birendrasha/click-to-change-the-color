const colerbox=document.querySelector(".box2")
const hexcode=document.querySelector("#color")
const refresh=document.querySelector("#refresh")

refresh.addEventListener('click',()=>{
    const hexcodelogic = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

    let hexcodestring ='#';
    let i=0;
    while(i<6){
        const number = Math.floor(Math.random()*16);
        hexcodestring= hexcodestring + hexcodelogic[number];
        i++;
    }
    colerbox.style.backgroundColor =hexcodestring
    hexcode.innerHTML = hexcodestring
})