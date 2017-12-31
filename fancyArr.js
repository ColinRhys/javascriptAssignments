function fancyArr(arr, symbol){

    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        newArr.push(symbol + " " + arr[i])
    }
    console.log(newArr)
}
fancyArr([ "James", "Jill", "Jane", "Jack" ], "->");