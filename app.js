function button1(){
    var div=document.getElementById('div');
    var div1=document.createElement('div');
    var h3=document.createElement('h3')
    var inp1=document.getElementById('inp1');
    var btn1=document.createElement('button')

    div1.style.width="80%";
    div1.style.height="40px";
    div1.style.backgroundColor="blanchedalmond";
    div1.style.marginLeft="80px";
    div1.style.marginTop="10px";
    div1.style.borderRadius="10px";

    h3.style.marginLeft="25px";
    h3.style.marginTop="8px";
    h3.style.color="white";
    h3.style.position="absolute";

    btn1.style.width="100px"
    btn1.style.height="40px";
    btn1.style.color="green";
    btn1.style.border="none";
    btn1.style.background="none";
    btn1.style.fontSize="15px";
    btn1.style.fontWeight="bold";
    btn1.style.marginLeft="380px";


    btn1.innerText="EDIT";
    h3.innerText=inp1.value;


    
    div1.appendChild(h3);
    div1.appendChild(btn1);
    div.appendChild(div1);
    

}

