function numbersOnly(arr){
  var newerArr = [];
  for(var i = 0; i < arr.length; i++){
    if(typeof arr[i] === "number"){
      newerArr.push(arr[i])
    }
  }
  return newerArr;
}
numbersOnly([1, "apple", -3, "orange", 0.5])


//Work in progress

// function numbersOnlyBonus(arr){
//   var newerArr = []
//   for(var i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== "number"){
//       arr.pop(arr[i])
//     }
//   }
//   return arr;
// }
// numbersOnlyBonus([1, "apple", -3, "orange", 0.5])
