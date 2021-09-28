

function myColor(){
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var color = 'rgb('+ red +','+ green +','+ blue +')';
    
    // document.body.style.backgroundColor = color;
    document.getElementById('top').style.backgroundColor = color;
    document.getElementById('box').value = color;
}
document.getElementById('red').addEventListener('input', myColor);
document.getElementById('green').addEventListener('input', myColor);
document.getElementById('blue').addEventListener('input', myColor);


var holdlum = 95;
function sample(event){
    // console.log(event);
    // console.log(`event.dataset.hue ${event.target.dataset.hue}`);
    let clr = event.target.dataset.hue;
    let sat = event.target.dataset.sat;
    // console.log(`clr: $[clr]`);
    let colorList = document.querySelectorAll('.colorSample');
    // console.log(colorList);
    colorList.forEach(elem => { 
        elem.style = `background-color: hsl(${clr}, ${sat}%, ${holdlum}%);`;
        elem.innerHTML = `hsl(${sat}, ${sat}%, ${holdlum}%)`
        holdlum -= 6;
        if(holdlum < 1) {holdlum = 95;}
    });
    holdlum = 95;
}

function addEvent(){
    let colorBtns = document.querySelectorAll('[class|="clr"]');
    // console.log(colorBtns);
    colorBtns.forEach(btn =>{
        let hue = btn.dataset.hue;
        let sat = btn.dataset.sat;
        let lum = btn.dataset.lum;
        btn.style = `background-color: hsl(${hue}, ${sat}%, ${lum}%);`;
        btn.addEventListener('click', sample);
    });
}
window.addEventListener('load', () =>{
    addEvent();
});