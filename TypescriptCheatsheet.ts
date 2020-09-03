//Refer https://www.typescriptlang.org/docs/handbook/intro.html

//KEYWORDS TO DECLARE VARIBLES
//let V/s var
//let has scope(eg. Looping Variable)
//var create global variable

//VARIOUS SYNTAX TO DECLARE VARIABLE
// var [identifier]: [type-annotation] = value;
// var [identifier]: [type-annotation];
// var [identifier] = value;
// var [identifier];

//DATATYPES
//boolean
let b: boolean = false;
console.log(b);

//Decimal number
let n:number = 10;
console.log(n);
//Binary number
let bn:number = 0b10;
console.log(bn);
//Octal number
let on:number = 0o10;
console.log(on);
//Hexadecimal number
let hn:number = 0x10;
console.log(hn);

//String
let s:string = "Hello TypeScript";
console.log(s);

//Constant
const pi = 3.142;
console.log(pi);

//Array
let ar: string[] = ["ABC","DEF"];
let arr: Array<string> =  ["ABC","DEF"];
console.log(ar);
console.log(arr);

//Tuple
let tp: [number,string] = [1,"Apple"];
console.log(tp);
let tpar: [number,string][] =[[1,"Apple"],[2,"Banana"]];
console.log(tpar);

//Enum
enum fruit
{
    Apple = 1,
    Banana,
    Mango,
    Orange
}
console.log(fruit)

enum fruits
{
    Apple,
    Banana,
    Mango,
    Orange
}
console.log(fruits)

//Any
let a: any;
a = 10;
console.log(a);
a = "Ten"
console.log(a);

//Object
let o: Object = [[10,20],"Hello"];
console.log(o);



//FUNCTIONS

//Functions
function repeatFunc(x:number, y:string)
{
    let retmsg = "";
    for(let i=0;i<x;i++)
    {
        retmsg += y;
    }
    return retmsg;
}
console.log(repeatFunc(2,"Hello"));

//Implicitly any datatype is assigned if no datatype is assigned to the parameter variable
function product(x, y:any)
{
    return x*y;
}
console.log(product(10,30));

//Anonymous Functions
//No name is specified, can be called using variable name followed by paranthesis
let f = function(a, b){
    return a*b;
}
console.log(f(10,25));

//Arrow Functions
//Single line functions
let arrowFunc = () => console.log("I am Arrow");
arrowFunc();



//CLASSES AND INTERFACES

//Classes, Constructor and this keyword in typescript
class MyClass
{
    no: number;
    constructor(no:number)
    {
        this.no = no;
    }
    getNo()
    {
        return this.no;
    }
}

let MyObj = new MyClass(10);
console.log(MyObj.getNo());

//Inheritance and super keyword
//Typescript does not support multiple inheritance
class MyParent
{
    private no1: number;
    protected no2: number;
    public no3: number;
    constructor(n1:number)
    {
        this.no1 = n1;
    }
    printNos()
    {
        console.log(this.no1+" from Parent");
        console.log(this.no2+" from Parent");
        console.log(this.no3+" from Parent");
    }
}

class MyChild extends MyParent
{
    no4:number;
    constructor(n1:number, n2:number, n3:number = 50, n4 = 40)
    {
        super(n1);
        this.no2 = n2;
        this.no3 = n3;
        this.no4 = n4;
    }
    printNo()
    {
        super.printNos();
        console.log(this.no2+" from Child");
        console.log(this.no3+" from Child");
        console.log(this.no4+" from Child");
    }
}

let MyParentObj = new MyChild(20,30);
MyParentObj.printNo();

//Interface
interface MyInterface
{
    str1: string;
    num1: number;
    myFunc1();
}

class MyInterfaceImplClass implements MyInterface
{
    //Declaring all variables from interface is compulsory
    str1: string;
    num1: number;
    constructor(str: string, num: number)
    {
        this.str1 = str;
    }
    //Defining all methods from interface is compulsory
    myFunc1()
    {
        console.log("Implementing Interface with values "+this.str1+" and "+this.num1);
        
    }
}

let MyInterfaceImplObj = new MyInterfaceImplClass("Test",1);
MyInterfaceImplObj.myFunc1();
