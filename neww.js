let b=document.getElementById("click");
let a=document.getElementById("input");
let c=document.getElementById("temp");

b.onclick=()=>{

    let time=a.value;
    console.log(time,typeof time)
    time=Number.parseInt(time);
    console.log(time ,typeof time)

    let date=new Date();
    let alarm=date.getMinutes()+time;
    console.log(alarm,typeof alarm);
    console.log(date.getMinutes(),typeof date.getMinutes())

    let inter=setInterval(()=>{
         date=new Date();
        c.innerHTML=date.getMinutes();
        if(alarm==date.getMinutes()){
            let aud=new Audio("Alarm.mp3");
            aud.play();
            if(true){
                clearInterval(inter);
            }
        }
    },1000)
}

