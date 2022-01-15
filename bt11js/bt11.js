const button1 = document.createElement("button");
hw1.appendChild(button1);
button1.innerHTML = "Change Colors";
button1.onclick = function(){
    const Color = Math.floor(Math.random()*14568394).toString(16);
    document.body.style.backgroundColor = "#" + Color;
    const Color2 = Math.floor(Math.random()*15512394).toString(16);
    document.div.style.color = " # " + Color2
}


const button2 = document.createElement("button");
hw2.appendChild(button2)
button2.innerHTML = 0;
button2.onclick = function() {
    let i = parseInt(button2.innerHTML);
    i = i + 1;
    button2.innerHTML=i;
}




/*
let text =" "
let speed=80;
if (document.all||document.getElementById){
    document.write('<span id="highlight">' + text + '</span>')
    let storetext=document.getElementById? document.getElementById("highlight") : document.all.highlight
    }
    else
    document.write(text)
    let hex=new Array("00","14","28","3C","50","64","78","8C","A0" ,"B4","C8","DC","F0")
    let r=1
    let g=1
    let b=1
    let seq=1
    function changetext(){
    rainbow="#"+hex[r]+hex[g]+hex[b]
    storetext.style.color=rainbow
    }
    function change(){
    if (seq==6){
    b--
    if (b==0)
    seq=1
    }
    if (seq==5){
    r++
    if (r==12)
    seq=6
    }
    if (seq==4){
    g--
    if (g==0)
    seq=5
    }
    if (seq==3){
    b++
    if (b==12)
    seq=4
    }
    if (seq==2){
    r--
    if (r==0)
    seq=3
    }
    if (seq==1){
    g++
    if (g==12)
    seq=2
    }
    changetext()
    }
    function starteffect(){
    if (document.all||document.getElementById)
    flash=setInterval("change()",speed)
    }
    starteffect() */
