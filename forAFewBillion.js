function billion(days) {
    var result = 1;
        for(var count = 0;count <= days; count++){
            result *= 2
        }
            console.log(result / 200)
        }

billion(2);

// function amountSearch(amount) {
//     var result = 1;
//         for(var count = 0;count < 1000; count++){
//             result *= 2
//             if((result / 200) >= amount){
//               return count + 1
//             }
//         }
// }

// amountSearch(Infinity);

// For the total amount of prize money to be equal to or greater than 10,000 it would take 21 days

// for 1 billion it would take 48 days

// For infinity undemined?!?