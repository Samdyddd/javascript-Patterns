// @flow
// 以下语法不符合ECMA，需要使用flow-remove-types和babale插件去掉标注内容；
function getStr(str: string): number{
  return str.length;
}
getStr('hello');


// 在文件检查声明，加上以下一行注释即可；
// @flow
/* @flow */
// 基本类型标记
const a: string = 'zhihu';
const b: number = 3;
const c: boolean = false;
const d: void = undefined;
const e: null = null;

const a: string = 'a';
const b: string = String('b');
const c: String = new String('c');

// 字面量
// @flow
let month: 12 = 12;
month = 13; // 报错


// 函数类型标注
// @flow
function getLength(str: string): number{
  return str.length;
}

const greeting = function(welcome: string): void {
  console.log(welcome)
}

const addNumber = (a: Number, b: number): number => (a+b);


// 数组标注
// @flow
const names: Array<string> = ['a','b','c'];
const ages: number[] = [1,2,3,4];


// 元组tuple标
const record: [Number, String, boolean] = [1,'first', true];


// 对象类型标注
// @flow
const borderConfg: {
  width: number,
  color:string,
  hassHadow: boolean
} = {
  width: 10,
  color: 'red',
  hasShadow: true
}
// 优化写法
// type 用来定义自定义类型，可以在后面类型标注中使用
// @flow
type BorderConfig = {
  width: Number,
  color: String,
  hasShadow: boolean
}

const borderConfig: BorderConfig = {
  width: 10,
  color: 'red',
  hasShadow: true
}

// @flow
type StringType = String;
const name: StringType = 'zhihu';
type TupleType = [Number, string]
const record: TupleType = [1, 'sss']


// 类的标注

// @flow
class WrongClass1{
  method() {
    this.props = 1; // flow报错，没有对props进行类型标注
  }
}

class WrongClass2{
  method() {
    this.props: number = 1; // flow报错，对属性的类型标注必须与方法同一个层级
  }
}

// 正确
class RightClass {
  props: number;
  method() {
    this.props = 1
  }
}

// @flow
class MyClass{}
const mc: MyClass = new MyClass();

// 联结类型union type 的使用
// @flwo
type C = A | B;


// @flow
type UserIdType = string | number;
let user_id : UserIdType = 234234;
user_id = 'sdfsdfsda';

// @flow
type MsgType = string | number;
function show(msg: MsgType) {
  if(typeof msg === 'string') {
    // do
  } else {
    // do...
  }
}

// 交叉类型(Intersection Type)的使用

// @flow
type C = A & B;
// @flwo
type x1 = 1 | 2 |3 |4
type x2 =   3 | 4 | 5
type x3 = x1&x2;

// @flow
type y1 = {
  name: string,
  male: boolean
}
type y2 = {
  name: String,
  age: number
}
type y3 = y1 & y2;

// @flow
const wrong: y3 = {   // flow报错，缺失male和age属性
  name: 'zhihu'
}

const right: y3 = {
  name: 'zhihu',
  male: true,
  age: 33
}

// 对象可选属性与变量的可选类型
// @flow
type test = {
  key1: ?string,
  key2?:  number
}

// @flow
function myFn(t: test) {
  if(t.key1 !== null && t.key2 !== undefined) {
    console.log(t.key1.slice(0, t.key1.length))
  }
}

// any 类型
// @flow
let a: any = 1;
a = 'a';
a = {};























































































