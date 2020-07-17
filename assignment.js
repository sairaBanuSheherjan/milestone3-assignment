// Problem 1: Convert Feet to Mile

function feetToMile(feet) {
	if (feet<0) {
		return "Input value cannot be less than zero"; 
    } 
		 var mile = feet * 0.00018939;
         return mile;
}
 var feet = 6; 
 var result =feetToMile(feet);

 if(feet<0)
 {
     console.log(result);  //Display this message, when input is invalid.
 }
 else
 {
 console.log("The resultant mile value is: " + result); //when input is positive,this will be showed.
 }


 //Problem 2: Calculate total amount of Wood

function woodCalculator(chair, table, bed) {
    if (chair <= 0 || table <= 0 || bed <= 0) {
        return "The value of chair,bed,table can't be less than zero or zero." //if input is negative or zero
    }
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalQuantityWood = chairCount + tableCount + bedCount; //amount of wood counting
    return totalQuantityWood;

}
let [chair, table, bed] = [2, 4, 6];
var totalResult = woodCalculator(chair, table, bed);
if (chair <= 0 || table <= 0 || bed <= 0) {
    console.log(totalResult);
}
else {
    console.log("Number of chair=", chair, "\tNumber of Table=", table, "\tNumber of Bed=", bed, "\nTotal Amount of Wood:", totalResult); //display output of total amount, when values are positive.
}


// Problem 3: Calculate total bricks

function brickCalculator(floorNum){
    var floorHeight;
    if(floorNum<0){
        return'please enter a valid number' //when the input number is negative.
    }
    for(var i=0;i<=floorNum;i++) 
    {
    if(i<= 10){
       bricksAmount = floorNum *15000; //calculating,when floor number is below or equal to 10.
    }
    else if(i>10&&i<=20){
        bricksAmount = 10 * 15000+(floorNum-10)*12000; //calculating,when floor number is above 10 or below or equal to 20.
    }
    else {
        bricksAmount = 10 * 15000 + 10 * 12000 + (floorNum - 20) * 10000; //calculation,when floor number is more than 20.
    }  
}
return bricksAmount; 
}
let floorNum = 30;
var totalAmount = brickCalculator(floorNum);
if(floorNum<0)
{
    console.log(totalAmount);
}
else{
console.log("Total number of bricks:",totalAmount);
}

// Prob 4: finding shortest friends name

function tinyFriend(names){
    var fixLength = Infinity;
    if(names == null || names.length == 0)
    {
        return "Please assign the appropriate array." //Display this message if input is empty
    }
    for (var j = 0; j < names.length; j++)
    {
        if (names[j].length < fixLength)   // check the length of names.
        { 
            var shortestName = names[j];     
             fixLength = names[j].length;   //assign tinyName length
         }
    }
    return shortestName;
}
let names=['Shefali','Sheherjan','MuntasirulIslam']; //declare the names.
let tinyFriendName = tinyFriend(names); 

if(names == null || names.length == 0)
{
    console.log(tinyFriendName); 
}
else
console.log("Tiny Friend Name : ", tinyFriendName, "\nlength Of Tiny Friend Name: ",tinyFriendName.length);


