// var fs = require('fs');
// fs.readFile(__filename,'utf8',function(error,data){
//     // if(error){
//     //     return console.error(error.message);
//     // }
//     // else{
//     //     console.log(data)
//     // }
//     if(error)
//         throw error;
//         console.log(data.toString())
// })

var fs = require('fs');
var data;
try {
    data = fs.readFileSync(__filename)
    console.log(data)
}catch(e){
    console.error(e.message)
}

