function calculateLove(){
   let n1 = document.getElementById("yname").value.trim();
   let n2 = document.getElementById("pname").value.trim();
   let result = document.getElementById("display");
   if(n1==="" || n2===""){
    alert("Please enter both names!!!");
         result.innerHTML= "";
   }
   else{
    const lovePercentage = Math.floor(Math.random() * 101);
    result.innerHTML= `${n1} and ${n2} 's Love Percentage : ${lovePercentage}%`;
    if(lovePercentage <30){
        result.innerHTML +="<br>Not a Great Match , Keep Looking !!";
    }
    else if(lovePercentage >=30 && lovePercentage< 60){
        result.innerHTML +="<br>Not sure about it but..You can give it a try !!";
      
    } else if(lovePercentage >=60 && lovePercentage < 80){
        result.innerHTML +="<br>Good Match ..Keep Going and try it !!";
    }else{
        result.innerHTML +="<br>Great Match ..You rock together !!";
    }
   }
}

