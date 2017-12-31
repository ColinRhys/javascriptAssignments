// function printRange(start, end, skip){
//   for(var i = start; i < end; i+=skip){
//     console.log(i)
//   }
// }

// printRange(0, 10, 2);

function printRangeSkip(start, end, skip){
  if(skip === undefined){
    skip = 1;
  }
  for(var i = start; i < end; i+=skip){
    console.log(i)
  }
}

printRangeSkip(4, 8);

// Work in progress

// function printRangeEnd(start, end, skip){
//   var temp = start;
//   if(skip === undefined){
//     skip = 1;
//   }
//   if(end === undefined){
//     (end === temp && start === 0) 
//   }
//   for(var i = start; i < end; i+=skip){
//     console.log(i)
//   }
// }

// printRangeEnd(4);
