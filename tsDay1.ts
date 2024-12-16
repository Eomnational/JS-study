// function greet(name:string){
//     return 'hello,${name}';
// }

// let user='123';
// console.log(user);


/* 基础类型 */
//1.数值number
// 十进制
var decLiteral = 6;
// 十六进制
var hexLiteral = 0xf00d;
// 二进制
var binaryLiteral = 10;
// 八进制
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
console.log(decLiteral);

//2.布尔值(boolean)
let flag: boolean = false;
console.log(flag);


//3.字符串(string)
let myName:string ='Echo';
console.log('Hello,'+myName);

//4.null and undefined


//5.symbol
const sym1: symbol = Symbol()
const sym2: symbol = Symbol('temp')
const sym3: symbol = Symbol('temp')
console.log(sym2===sym3);

//6.bigint大数


/* 对象类型 */
//1.数组(Array)
let num:number[]=[1,2,3,4];//推荐第一种
let num1:Array<number>=[1,2,3,4];
let arr: (number | string)[] = [1, 'a', 2, 'b']//联合类型写
let arr1: number | string[] = 123
let arr2: number | string[] = ['a', 'b', 'c']
//上面的代码，arr1 和 arr2 都表示即可以是number类型，又可以是string[]，加了小括号和不加小括号，含义不同。


//2.函数
// 函数声明写法
function sum(num1: number, num2: number): number {
    return num1 + num2
  }
  // 函数表达式写法
  const sum1 = (num1: number, num2: number): number => {
    return num1 + num2
  }
   
console.log(sum(10, 20)); 
console.log(sum1(10, 20));

// function greet(name: string): void {
//     console.log("Hello, ", name);
//   }
   
//   greet("Echo")
//可选参数:使用函数实现某个功能时，参数可以传也可以不传
function greet(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
   
  console.log(greet("Echo")) // "Hello, Echo!"
  console.log(greet("Echo", "Hi")) // "Hi, Echo!"
//可选参数只能出现在参数列表的最后面，也就是说，可选参数后面不能再出现必选参数。

//使用三个点（... ）前缀和参数名来定义剩余参数。
//剩余参数允许我们将不确定数量的参数表示为一个数组。
function sum2(x: number, ...rest: number[]): number {
    let result = x;
    for (let num of rest) {
      result += num;
    }
    return result;
  }
   
   
  console.log(sum2(1, 2, 3, 4, 5)) // 15
  console.log(sum2(1, 2, 3))       // 6

//对象
// let person: {
//     name: string
//     age: number
//     // sayHi(): void
//     sayHi: () => void
//       // greet(name: string): void
//     greet: (name: string) => void
//   } = {
//     name: 'John',
//     age: 25,
//     sayHi() {},
//     greet(name) {}
//   }

//对象可选属性

//我们在使用axios({...})时，如果发送GET请求，method属性就可以省略。
function myAxios(config: { url: string; method?: string}) {
    console.log(config)
  }
   
  myAxios({ url: 'http://localhost:3000' })

//对象只读：readonly
let person1: {
    name: string
    age: number
      readonly id: number
  } = {
    name: 'John',
    age: 25,
      id: 1
  }


//元组(Tuple)


//字面量类型


//枚举(Enum)


//接口(interface)
// 在 TypeScript 中，接口（Interface）是一种用来定义对象的结构和行为的类型。通过接口，我们可以定义对象应该有哪些属性、属性的类型以及方法。
// 接口提供了一种约束和规范，使得我们可以在代码中定义和使用特定的数据结构。

// 1. 定义接口
// 使用关键字 「interface」 来定义接口。
// 声明接口后，直接使用接口名称作为变量的类型。
// 方法的定义和函数的定义类似，包括参数和返回值类型。
// 接口一般首字母大写。「有的编程语言中建议接口的名称加上前缀」 「I」 「。」

// interface Person{
//     name:string,
//     age:number,
//     sayHi():void
// }

// type IPerson = {
//     name: string
//     age: number
//     sayHi(): void
// }  
// 接口（interface）和类型别名（type）的区别
// 相同点：都可以用于定义对象的结构和类型。

// 不同点：

// 接口更适合用于描述真实存在的对象，而类型别名更适合用于定义复杂的类型。

// 接口可以被其他对象实现，而类型别名只是给类型起了一个别名。
// let Bob:Person={
//     name:'Bob',
//     age:25,
//     sayHi(){ 
//         console.log('Hello,Bob');
//     }
// }

// 注意：「一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型。」

interface Person {
    name: string;
    age?: number; // 这里age真实的类型应该为：number | undefined
    [propName: string]: string | number | undefined;
  }
   
  let person: Person = {
    name: 'Echo',
    age: 25,
    gender: 'male'
  }


//   10. 可索引类型
// 接口可以描述具有索引签名的对象，这样我们就可以通过索引来访问对象的属性。

interface StringArray {
    [index: number]: string;
  }
   
  let myArray: StringArray;
  myArray = ["Bob", "Fred"];
   
  let myStr: string = myArray[0];


  //类型断言


  //交叉类型


  //