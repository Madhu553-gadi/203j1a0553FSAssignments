//1.Basic Types:
//Number,String,Boolean,Array of numbers,Tuple with elements of type string and number,Enum for days of the week
let myNumber:number=11;
let myString:string="Madhu";
let isTrue:boolean=true;
let numberArray:number[]=[1,2,3,4,5];
let myTuple:[string,number]=["Hello",28];
enum DaysofWeek{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
let today1:DaysofWeek=DaysofWeek.Monday;
console.log("Number:",myNumber);
console.log("String:",myString);
console.log("Boolean:",isTrue);
console.log("Array:",numberArray);
console.log("Tuple:",myTuple);
console.log("DOW:",DaysofWeek[today1]);

//2.Functions:
//Adding two numbers
function add(n1,n2):number{
    return n1+n2;
}
console.log(add(1,8));

//Capitalize a string
function capitalize(str:string):string{
    return str.charAt(0).toUpperCase()+str.slice(1);
}
console.log(capitalize("hello world"));

//3.Interfaces:
//define the person interface and declare the variable user
interface Person{
    name:string,
    age:number,
    email:string
}
const user:Person={
    name:"madhu",
    age:53,
    email:"gadimadhu5@gmail.com"
}
console.log("User1:",user);

//4.Classes:
//define  the car class
class Car{
    make:string;
    model:string;
    year:number;
constructor(make:string,model:string,year:number){
    this.make=make;
    this.model=model;
    this.year=year;
}
displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
}
// Implement a method displayInfo which logs the information about the car.
let myCar=new Car("Camry","BMW",2020);
myCar.displayInfo();

//5.Generics:
//Write a generic function called reverseArray that takes an array of any type
and returns a reversed version of that array in typescript */

function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

// Example usage:
let originalArray: number[] = [6,7,8,9,10,11];
let reversedArray: number[] = reverseArray(originalArray);
console.log("ReverseArray:",reversedArray);
