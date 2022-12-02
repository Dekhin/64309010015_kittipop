let myJSON ='{"fiestName":"Jonh","lastName":"Smith","age": 25}'
let myObj ={
    fiestName : "Jonh",
    lastName : "Smith",
    age : 25
}
//console.log(typeof(myJSON));
//console.log(myObj.fiestName);
//function parse
let obj2 = JSON.parse(myJSON);
console.log(obj2);

//function stringify
let JSON2 = JSON.stringify(myObj);
console.log(JSON2,typeof(JSON2));