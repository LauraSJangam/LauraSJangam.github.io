function bottles(){
    var bottles, newBottlesValue ;
    for (i=99;i>=0;i--){
        if (i!=0){
            if(i>2){
                bottles = "bottles";
                newBottlesValue = i-1 + " bottles";
            }
            else if(i == 2){
                bottles = "bottles";
                newBottlesValue = i-1 + " bottle";
            }
            else if(i==1){
                bottles = "bottle";
                newBottlesValue = "No more bottles";
            }
            document.getElementById("main").innerHTML= document.getElementById("main").innerHTML + "<br />" + (i +" " +bottles + " of beer on the wall!<br />" 
            +i +" " +bottles + " of beer!<br />Take one down and pass it around <br />" + newBottlesValue + " of beer on the wall! <br />");
        }
        else{
            document.getElementById("main").innerHTML= document.getElementById("main").innerHTML + "<br />" + 
            ("No more bottles of beer on the wall! <br /> No more bottles of beer! <br /> Go to the store and buy some more <br /> 99 bottles of beer on the wall!");

        }

    }
    
}      
           
