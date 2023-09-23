let number = null;
let StringNumber = Number(number);
let booleanNumber = String(number);
console.log(typeof booleanNumber);
console.log(booleanNumber);





/*

there are two type of conversions in Javascript...

1.Implicity type Conversion (Type Coersion)
2.Explicit type Conversion.

In Implicit type conversion generally JS will automaticaly convert datatype. generally we called this type of conversion 
is Type Coersion.

For Example:
var num = 5;             // Number
var str = "10";          // String
var result = num + str;  // The number is implicitly converted to a string
console.log(result);     // Output: "510"


In Explicit Type Conversion we do type conversion with the help of functions and operators.
For Example:
var num = 42;
var str = String(num);   // Convert number to string
console.log(str);        // Output: "42"




A number can be Converted into Strings and booleans Also.

33=>"33" output is the String of the 33;


So when you try to do conversion of 33 into boolean gives you true because except 0 every value is true..

when you try to convert "33abc" into number it gives you NaN that means NOT A NUMBER.

When you try to convert null into number it gives 0  value and in boolean it gives false and when you try to convert null 
into String it gives String type with output null.

In this We can Convert all type of data 
*/