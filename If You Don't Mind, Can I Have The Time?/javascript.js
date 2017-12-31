function thisIsDumb(hour, min, period){
  var finalString = "";
    if(min < 30){
        finalString += "Just after " + hour;
    }
        else {
      finalString += "Its almost " + (hour + 1);
    }
    if(period = "AM" ){
      finalString += " in the morning"
    }
    else {
      finalString += " in the evening"
    }
    console.log(finalString)
    // return finalString;
}
thisIsDumb(9, 20, "pm");