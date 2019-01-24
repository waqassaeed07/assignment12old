var Pillow=[];
var Rolex=[];
var Bristol=[];
var Nike=[];
var Amanda=[];
var Wallet=[];
var Another=[];
var AbercrombleAllen=[];
var AbercrombleLake=[];

// create product page start

function fidb(){
     a=document.getElementById("fid").value;
     b=a*25 +"$" 
    if(a<0){
        alert("please purchase")}
        else {alert(b)
        }  
        if(a>0){
            Pillow.push(b)
        }
}
function sidb(){
     c=document.getElementById("sid").value;
     d=c*250 +"$";
    if(c<0){
        alert("please purchase")}
        else {alert(d)}
        if(c>0){
            Rolex.push(d)
        }
}
function tidb(){
    e=document.getElementById("tid").value;
    f=e*99 +"$";
   if(e<0){
    alert("please purchase")}
    else {alert(f)}
    if(e>0){
        Bristo.push(f)
    }
}
function foidb(){
    g=document.getElementById("foid").value;
     h=g*129 +"$";
    if(g<0){
        alert("please purchase")}
        else {alert(h)}
        if(g>0){
            Nike.push(h)
        }
}
function fiidb(){
     i=document.getElementById("fiid").value;
    j=i*33 +"$";
   if(i<0){
    alert("please purchase")}
    else {alert(j)}
    if(i>0){
        Amanda.push(j)
    }
}
function siidb(){
     k=document.getElementById("siid").value;
     l=k*79 +"$";
    if(k<0){
        alert("please purchase")}
        else {alert(l)}
        if(k>0){
            Wallet.push(l)
        }
}
function seidb(){
    m=document.getElementById("seid").value;
     n=m*55 +"$";
    if(m<0){
        alert("please purchase")}
        else {alert(n)}
        if(m>0){
            Another.push(n)
        }
}
function eiidb(){
    o=document.getElementById("eiid").value;
    p=o*70 +"$";
   if(o<0){
    alert("please purchase")}
    else {alert(p)}
    if(o>0){
        AbercrombleAllen.push(p)
    }
}
function niidb(){
    q=document.getElementById("niid").value;
    r=q*60 +"$";
   if(q<0){
    alert("please purchase")}
    else {alert(r)}
    if(q>0){
        AbercrombleLake.push(r)
    }
}

// create product page end
// read product page start
function readpillow(){
     s="product"+ " Pillow " + "total price= "+Pillow;
    document.getElementById("fp").innerHTML=s
}
function edpillow(){
    t=+prompt("write new ammount of Pillows")
    Pillow.splice(0,5,t*25+"$")
    
}
function delpillow(){
    Pillow.shift()
    Pillow.unshift("0$")
    u="product"+ " Pillow " + "total price= "+Pillow;
    document.getElementById("fp").innerHTML=u
    
}
function readrolex(){
    v="product"+ " Rolex Watch " + "total price= "+Rolex;
    document.getElementById("fp").innerHTML=v
   
}
function edrolex(){
    w=+prompt("write new ammount of Rolex")
    Rolex.splice(0,5,w*250+"$")
    
}
function delrolex(){
    Rolex.shift()
    Rolex.unshift("0$")
    x="product"+ " Rolex Watch " + "total price= "+Rolex;
    document.getElementById("fp").innerHTML=x
}
function readbristol(){
    y="product"+ " Bristol " + "total price= "+Bristol;
    document.getElementById("fp").innerHTML=y
}
function edbristol(){
    z=+prompt("write new ammount of Bristol")
    Bristol.splice(0,5,z*99+"$")
}
function delbristol(){
    Bristol.shift()
    Bristol.unshift("0$")
    ab="product"+ " Bristol " + "total price= "+Bristol;
    document.getElementById("fp").innerHTML=ab
}

function readnike(){
    ac="product"+ " Nike " + "total price= "+Nike;
    document.getElementById("fp").innerHTML=ac
}
function ednike(){
    ad=+prompt("write new ammount of Nike")
    Nike.splice(0,5,ad*129+"$")
}
function delnike(){
    Nike.shift()
    Nike.unshift("0$")
    ae="product"+ " Nike " + "total price= "+Nike;
    document.getElementById("fp").innerHTML=ae
}

function readamanda(){
    af="product"+ " Amanda " + "total price= "+Amanda;
    document.getElementById("fp").innerHTML=af
}
function edamanda(){
    ag=+prompt("write new ammount of Amanda")
    Amanda.splice(0,5,ag*33+"$")
}
function delamanda(){
    Amanda.shift()
    Amanda.unshift("0$")
    ah="product"+ " Amanda " + "total price= "+Amanda;
    document.getElementById("fp").innerHTML=ah
}

function readwallet(){
    ai="product"+ " Wallet " + "total price= "+Wallet;
    document.getElementById("fp").innerHTML=ai
}
function edwallet(){
    aj=+prompt("write new ammount of Wallet")
    Wallet.splice(0,5,aj*79+"$")
}
function delwallet(){
    Wallet.shift()
    Wallet.unshift("0$")
    ak="product"+ " Wallet " + "total price= "+Wallet;
    document.getElementById("fp").innerHTML=ak
}

function readanother(){
    al="product"+ " Another " + "total price= "+Another;
    document.getElementById("fp").innerHTML=al
}
function edanother(){
    am=+prompt("write new ammount of Another")
    Another.splice(0,5,am*55+"$")
}
function delanother(){
    Another.shift()
    Another.unshift("0$")
    an="product"+ " Another " + "total price= "+Another;
    document.getElementById("fp").innerHTML=an
}

function readaberall(){
    ao="product"+ " AbercrombleAllen " + "total price= "+AbercrombleAllen;
    document.getElementById("fp").innerHTML=ao
}
function edaberall(){
    ap=+prompt("write new ammount of AbercrombleAllen")
    AbercrombleAllen.splice(0,5,ap*70+"$")
}
function delaberall(){
    AbercrombleAllen.shift()
    AbercrombleAllen.unshift("0$")
    aq="product"+ " AbercrombleAllen " + "total price= "+AbercrombleAllen;
    document.getElementById("fp").innerHTML=aq
}

function readaberlake(){
    ar="product"+ " AbercrombleLake " + "total price= "+AbercrombleLake;
    document.getElementById("fp").innerHTML=ar
}
function edaberlake(){
    as=+prompt("write new ammount of AbercrombleLake")
    AbercrombleLake.splice(0,5,as*60+"$")
}
function delaberlake(){
    AbercrombleLake.shift()
    AbercrombleLake.unshift("0$")
    at="product"+ " AbercrombleLake " + "total price= "+AbercrombleLake;
    document.getElementById("fp").innerHTML=at
}


// alert(Pillow)

