// function randomChance(quarters){


// for(var i = quarters; i >= 0; i--){


// if(chance === random){
//     var chance = Math.floor(Math.random() * 100) + 1;
//     var winnings = Math.floor(Math.random() * 50) + 50
//     var random = Math.floor(Math.random() * 100) + 1;n
//     console.log(winnings += quarters);
//     break;
// }
// else {
//     console.log("not a winner")
// }
// }
// }
// randomChance(14)

function randomChance(quarters){

    while(quarters > 0){
            var chance = Math.floor((Math.random() * 100) + 1);
    var winnings = Math.floor((Math.random() * 50) + 50);
    var random = Math.floor((Math.random() * 100) + 1);
    if(chance === random){
    console.log(winnings += quarters);
    break;
}
else {
    console.log("not a winner")
}
}
}
randomChance(14)