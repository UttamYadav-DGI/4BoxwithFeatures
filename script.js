let s1=document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
   let r=Math.floor(Math.random()*100);
   s1.innerHTML= `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave",function(){
    s1.innerHTML="<h1> 1 </h1>"
})

let s2=document.getElementById("sq2");
    let clr="green"
s2.addEventListener("mouseenter",function(){
    if(clr=="green")
    {s2.style.backgroundColor="green";
    clr="red";
     }
    else{
        s2.style.backgroundColor="red";
        clr="green";
    }

})
 s2=document.getElementById("sq2");
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
})

s3=document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    s3.style.backgroundColor=`rgb(${a},${b},${c})`;
})
s3=document.getElementById("sq3");
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
})

s4=document.getElementById("sq4");
s4.addEventListener("click",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);

    s1.style.backgroundColor=`rgb(${a},${b},${c})`;
    s2.style.backgroundColor=`rgb(${c},${b},${a})`;
    s3.style.backgroundColor=`rgb(${b},${c},${a})`;

})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
    s4.style.backgroundColor="white";
})

let main=document.getElementById("main");
let crsr=document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

