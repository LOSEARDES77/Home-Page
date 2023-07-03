function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let time = hh + ":" + mm + ":" + ss;
    
    document.getElementById("clock").innerText = time; 
    setTimeout(function(){ currentTime() }, 1000); 
  
}

function Date2(){
    let date = new Date();
    let daym = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let date1 = daym + "/" + month + "/" + year;

    document.getElementById("date").innerText = date1;
}

var online = navigator.onLine;
console.log(online);
if(online){
    document.getElementById("online").innerText = "Online";
    document.getElementById("online").style.color = "green";
}else{
    document.getElementById("online").innerText = "Offline";
    document.getElementById("online").style.color = "red";
}
  
Date2();
currentTime();

