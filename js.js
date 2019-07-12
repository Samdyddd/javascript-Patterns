document.images
documents.links
documents.forms

for (var i = 0, max = myArr.length; i < max; i++) {
    // 将数组长度保存起来，不必每次访问数组长度数据，只提取长度值一次
}

// 
for (var i = 0, max = myArr.length; i < max; i += 1) {

}

var i, newArr = [];
for (i = newArr.length; i--;) {

}

// while
var newArr = [],
    i = newArr.length;
while (i--) {
    // 
}

// for-in（枚举）
// 不推荐for-in循环数组

// hasOwnProperty():过滤该原型属性
var man = {
    hands: 2,
    legs: 2
}
if (typeof Object.prototype.clone === "undefined") {
    Object.prototype.clone = function() {};
}
var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man) {
    if (hasOwn.call(man, i)) {
        console.log(i, ":", man[i])
    }
}

var i,
    hasOwn = Object.prototype.hasOwnProperty;
for (i in man)
    if (hasOwn.call(man, i)) {
        console.log(i, ":", man[i])
    }

    // JSDoc Toolkit

    /**
     * 翻转一个字符串
     * @param {String} 输入需要翻转的字符串
     * @return {String} 翻转后的字符串
     */
var reverse = function(input) {
    //...
    return output;
}


// YUIDoc
/**
 * 我的js 应用程序
 * 
 * @module myapp
 */
var MYAPP = {};

/**
 * 一个数字工具
 * @namespace MYAPP
 * @class math_stuff
 */
MYAPP.math_stuff = {
    /**
     * Sums two numbers
     * 
     * @method sum 
     * @param {Number} 是第一个数
     * @param {Number} 第二个数
     * @return {Number} 两个输入之和
     */
    sum: function(a, b) {
        return a + b
    },
    /**
     * Multiplies two numbers
     * 
     * @method multi 
     * @param {Number}
     * @param {Number}
     * @return {Number} 两个输入相乘后结果
     */
    multi: function(a, b) {
        return a * b;
    }
}

// @namespace: 用于命名包含以上对象的全局引用的名称
// @class: 这里有些命名不当，实际意思是指对象或构造函数
// @method: 定义对象中方法和方法名
// @param: 参数，类型使用大括号，在其后注释参数名及描述
// @return: 描述返回值




// 字面量（literal notation）和构造函数

var dog = {
    name: 'hahah',
    getName: function() {
        return this.name;
    }
}

// new操作符调用构造函数
// 创建一个空对象并且this变量引用了该对象，同时继承该函数原型；
// 属性和方法被加入到this引用对象中
// 新创建对象有this所引用，并隐式返回this
var person = function(name) {
    this.name = name;
    this.say = function() {
        return "I am" + this.name
    }
}
var adm = new person('HAH')
adm.say();

// 暗中运行

var person = function(name) {
    // var this = {};
    // 其实this从person原型中继承许多成员
    // var this = Object.create(Person.prototype)
    this.name = name;
    this.say = function() {
            return 'I am' + this.name;
        }
        //return this;
}


// 将say()方法添加到this中，会导致new person()在内存中创建一个新函数，效率低；
// 
// prototype,原型，可重用的方法都应该放置到对象的原型中。
person.prototype.say = function() {
    return "I am" + this.name;
}

// 构造函数的返回值
var obj = function() {
    this.name = 'haha';
    var that = {};
    that.name = 'diao';
    return that;
}
var o = new obj();
console.log(o.name); // diao


// 自调用构造函数

function waffle() {
    if (!(this instanceof waffle)) {
        return new waffle()
    }
    this.tastes = 'yummy';
}
waffle.prototype.wantAn = true;

// 
var first = new waffle(),
    second = waffle();
console.log(first.tastes) // 'yummy'
console.log(second.tastes) // 'yummy'

// 另一种检测实例对象通用方法：arguments.callee
if (!(this instanceof arguments.callee)) {
    return new argument.callee();
}
// 每个函数内部，当该函数被调用时，将会创建一个名为arguments的对象，
// 其中包含了传递给该函数的所有参数；
// 同时arguments对象有一个名为callee的属性，该属性会指向被调用的函数；
// 在es5严格模式不支持arguments.callee属性


// es5 定义新方法： Array.isArray(),该函数在参数为数组时返回true;
// 
Array.isArray([]) // TRUE

if (typeof Array.isArray === "undefined") {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    }
}

// 正则表达式

new RegExp()


// 处理错误
try {
    throw {
        name: 'myErrorType',
        message: 'oops',
        extra: "this is my defined error",
        remedy: handleError // 指定应该处理该错误的函数
    }
} catch (e) {
    alert(e.message); // oops
    e.remedy(); // 执行定义的函数
}

// 回调示例
// 
var findNodes = function() {
    var i = 10000,
        nodes = [],
        found;
    while (i) {
        i -= 1;
        nodes.push(found)
    }
    return nodes
}

var hide = function(nodes) {
    var i = 0,
        max = nodes.length;
    for (; i < max; i += 1) {
        nodes[i].style.display = "none";
    }
}

hide(findNodes())

// 以上低效的处理方式

// 重构
var findNodes = function(callback) {
    var i = 1000000,
        nodes = [],
        found;
    if (typeof callback !== "function") {
        callback = false
    }

    while (i) {
        i -= 1;
        // others

        if (callback) {
            callback(found)
        }
        nodes.push(found)
    }
    return nodes;
}

var hide = function(node) {
    node.style.display = "none";
}

findNodes(hide)

// 或传递匿名函数
findNodes(function(node) {
    node.style.display = "block"
})

//！！！！ 在一些场景中回调不是一次性的匿名函数或全局函数，使用回调this来
// 引用它所属对象会导致错误
// 例子
var myapp = {};
myapp.color = "green";
myapp.painn = function(node) {
    node.style.color = this.color;
}

var findNodes = funcion(callback) {
        // ...
        if (typeof callback === "function") {
            callback(found)
        }
    }
    // 回调方法中的“this"是指向了findNodes

// 解决方法将该回调函数所属对象传入

var findNodes = function(callback, callback_obj) {
    // ....
    if (typeof callback === "function") {
        callback.call(callback_obj, found)
    }
}

findNodes(myapp.paint, myapp)

// 或将方法名当字符串传入
var findNodes = function(callback, callback_obj) {
    if (typeof callback === "String") {
        callback = callback_obj[callback]
    }

    // 
    if (typeof callback === "function") {
        callback.call(callback_obj, found)
    }
}

findNodes("paint", myapp)



// 返回函数
var setup = function() {
    alert(1);
    return function() {
        alert(2);
    }
}

var my = setup(); // alerts 1
my(); // alerts 2

// setup() 包装返回了函数，创建一个闭包；可以使用闭包存储一些私有数据；
// 
var setup = function() {
    var count = 0;
    return function() {
        return (count += 1)
    }
}
var next = setup()
next(); // 1
next(); // 2
next(); // 3

// 自定义函数
var scareMe = function() {

}

// IIFE

(function(global) {
    // IIFE

}(this))

// ret指向了返回值
var ret = function() {
    return 2 + 2;
}()

// 同样
var ret = (function() { return 2 + 2 })()


// 即时对象初始化
// 即时对象初始化模式使用带有init()方法的对象，在创建后会立即执行
// 
({
    // 定义设定值
    // 配置常数
    maxwidth: 33,
    maxheight: 333,
    getMax: function() {
        return this.maxheight + this.maxwidth
    },
    init: function() {
        console.log("init fun")
            // more
    }
}).init()

// the same
({}).init();
({}.init());

// 初始化时分支
var utils = {
    addListener: function(el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            el.addEventListener(type, fn, false)
        } else if (typeof document.attachEvent === 'function') {
            el.attachEvent('on' + type, fn)
        } else {
            el['on' + type] = fn;
        }
    }
}

// 以上代码效率低效，在每次调用utils.addListener()时都会重复执行相同的检查

var utils = {
    addListener: null,
    removeListener: null
}
if (typeof window.addEventListener === 'function') {
    utils.addListener = function(el, type, fn) {
        el.addEventListener(type, fn, false)
    }
} else if (typeof document.attachEvent === 'function') { // IE
    utils.addListener = function(el, type, fn) {
        el.attachEvent('on' + type, fn)
    }
} else { // 更早的浏览器
    utils.addListener = function(el, type, fn) {
        el['on' + type] = fn
    }
}


// 函数属性---备忘模式
// 每一个函数自动都获取一个length属性，包含了该函数期望的参数数量

function fun(a, b, c) {}
console.log(fun.length) // 3

// 可以在任何时候将自定义属性添加到函数中，自定义属性其中一个用例是缓存函数结果，在下一次
// 调用该函数不用重做潜在的繁重计算；
// 缓存函数结果也被称为备忘

// 创建函数的属性cache,
var myFun = function(param) {
    if (!myFun.cache[param]) {
        var ret = {}
            // 开销大操作...
        myFun.cache[param] = ret;
    }
    return myFun.cache[param];
}

myFun.cache = {}

// 
var myFunc = function() {
    var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
        ret;
    if (!myFunc.cache[cachekey]) {
        ret = {};
        // ...开销很大操作...
        myFunc.cache[cachekey] = ret;
    }
    return myFunc.cache[cachekey]
}
myFunc.cache = {};


// 配置对象模式
// 

// 函数应用

var alien = {
    sayHi: function(who) {
        return 'hello' + who;
    }
}
alient.sayHi('world'); // hello world
sayHi.apply(alient, ["humans"]); // hello humans

// apply()，带两个参数，第一个为将要绑定到该函数内部this的一个对象，第一个参数为空null,this将指向全局对象
// 第二个参数是一个数组或多个参数变量，可用于该函数内部类似数组arguments对象

// 除apply()以外，Function.prototype对象还有一个call()方法，这是个建立在apply()之上的语法糖
// 当只有一个参数时，语法糖比较好
sayHi.apply(alien, ["humans"]);
sayHi.call(alien, "humans");


// 部分应用

var add = function(x, y) {
    return x + y;
}
add.apply(null, [5, 4]); // 9

// 部分应用

function add(x, y) {
    var oldx = x,
        oldy = y;
    if (typeof oldy === undefined) {
        return function(newy) {
            return oldx + newy;
        }
    }
    return x + y;
}
typeof add(5) // function
add(3)(4); // 7
// 创建并存储一个新函数
var add200 = add(200)
add200(10) // 210


// the same
Array.prototype.slice.call(arguments)
    // [].slice.call(arguments)

// curry化函数
function schonfinkelize(fn) {
    var slice = Array.prototype.slice,
        stored_args = slice.call(arguments, 1);
    return function() {
        var new_args = slice.call(arguments)
        args = stored_args.concat(new_args);
        return fn.apply(null, args)
    }
}
var newadd = schonfinkelize(add, 5);
newadd(4); // 输出9

schonfinkelize(add, 6)(7) // 输出13

// 
function add(a, b, c, d, e) {
    return a + b + c + d + e;
}

schonfinkelize(add, 1, 2, 3)(5, 5); // 16

// 两步carry化
var addOne = schonfinkelize(add, 1);
addOne(10, 10, 10, 10); // 41
var addSix = schonfinkelize(addOne, 2, 3);
addSix(5, 5); // 16

// 小结
/**
 * 命名函数表达式
 * 函数表达式(匿名函数)
 * 函数声明
 * 模式： api模式；回调模式；配置对象模式；返回函数模式；curry化
 * 
 * 性能模式包括：备忘模式；自定义模式；
 * 
 */


// 对象创建模式
var MYAPP = MYAPP || {}

MYAPP.namespace = function(ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;
    if (parts[0] === "MYAPP") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {}
        }
        parent = parent[parts[i]]
    }
    return parent;
}

// 沙箱模式
function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback)
    }
    this.a = 1;
    this.b = 2;
    // 通配符*，
    if (!modules || modules === '*') {
        modules = [];
        for (i in Sandbox.modules) {
            // 是否是其中的key
            if (Sandbox.modules.hasOwnProperty(i)) {
                modules.push(i)
            }
        }
    }
    for (i = 0; i < modules.length; i += 1) {
        Sandbox.modules[modules[i]](this)
    }
    callback(this)
}

Sandbox.prototype = {
    name: 'application',
    version: '2',
    getName: function() {
        return this.name;
    }
}


// 公有静态成员

var Gadget = function() {};

// 静态方法
Gadget.isShiny = function(){
    return "you bet";
};
// 普通函数
Gedget.prototype.setPrice = function(price) {
    this.price = price;
}

// 静态方法可以直接调用，普通函数需要一个实例
Gadget.isShiny(); // you bet

var iphone = new Gadget();
iphone.setPrice(500);

// 以两个相反的, 以静态方式无法调用实例行数，实例对象也无法调用静态方法
typeof Gadget.setPrice; // undefined
typeof iphone.isShiny; // undefined

// 若想以上起作用，将静态函数添加到原型链上
Gadgetprototype.isShiny = Gadget.isShiny;
iphone.isShiny(); // you bet

// 以下是两种场景下依赖调用模式不同，输出结果不同；

var Gadget = function(price) {
    this.price = price;
}
// 静态方法
Gadget.isShiny = function() {
    var msg = "you bet";
    if(this instanceof Gadget) {
        msg += ", it costs $" + this.price;
    }
    return msg
}
// 普通函数
Gadget.prototype.isShiny = function(){
    return Gadget.isShiny.call(this)
}

// 测试静态函数调用
Gadget.isShiny(); // you bet

// 实例调用
var a = new Gadget('3333');
a.isShiny(); // you bet, it costs $3333


// 私有静态成员

var Gadget = (function() {
    // 静态变量/属性
    var counter = 0;
    return function() {
      console.log(counter +=1);
    }
}());
// 多个实例之间共享counter
var g1 = new Gadget(); // 1
var g2 = new Gadget(); // 2
var g3 = new Gadget(); // 3

// 添加特权方法
var Gadget = (function(){
    var counter = 0,
        NewGadget;
    
    // 新的构造函数的实现
    NewGadget = function() {
        counter += 1;
    };

    // 特权方法
    NewGadget.prototype.getLastId = function() {
        return counter;
    }
    return NewGadget;
}());

// 
var iphone = new Gadget();
iphone.getLastId(); // 1
var ipod = new Gadget();
ipod.getLastId(); //2
var ipad = new Gadget();
ipad.getLastId(); //3

// 对象常量

Math.PI

// 对于你自己的常量，可以采用相同的命名约定，将他们以静态的方式添加到构造函数中；
var Widget = function(){
    // 实现
};
Widget.MAX_HEIGHT = 320;
Widget.MAX_WIDTH = 480;


var constant = (function(){
    var constants = {},
        ownProp = Object.prototype.hasOwnProperty,
        allowed = {
            string: 1,
            number: 1,
            boolean: 1
        }
        prefix = (Math.random()+"_").slice(2);
        return {
            set: function(name, value) {
                if(this.isDefined(name)){
                    return false;
                }
                if(!ownProp.call(allowed, typeof value)) {
                    return false;
                }
                constants[prefix+name] = value;
                return true;
            },
            isDefined: function(name) {
                return ownProp.call(constants, prefix+name);
            },
            get: function(name){
                if(this.isDefined(name)){
                    return constants[prefix+name];
                }
                return null;
            }
        }
});


// 链模式： 可以一个接一个的调用对象的方法
myobj.method1('hello').method2().method3('world').method4();

var obj = {
    value: 1,
    increment: function() {
        this.value +=1;
        return this;
    },
    add: function(v) {
        this.value +=v;
        return this;
    },
    shout: function() {
        alert(this.value);
    }
};

obj.increment().add(3).shout();// 5
// 与逐个调用相反
obj.increment();
obj.add(3);
obj.shout();//5


// 不推荐该方法
var Person = function(name) {
    this.name = name;
}.method('getName', function(){
    return this.name;
}).method('setName', function(name) {
    this.name= name;
    return this;
})

var a = new Person('admin');
a.getName(); // admin
a.setName('eva').getName(); // eva


// method方法是如何实现的
if(typeof Function.prototype.method !== "function") {
    Function.prototype.method = function(name, implementation) {
        this.prototype[name] = implementation;
        return this;
    }
}

// 类式继承
// 父构造
function Parent(name) {
    this.name = name || 'admin';
}
// 原型
Parent.prototype.say = function() {
    return this.name;
}
// 子构造函数
function Child(name) {}
// 继承
inherit(Child, Parent);

// 实现继承函数inherit
// 默认模式
// 原型属性应该指向一个对象，而不是一个函数
// 当使用new Child()语句创建一个对象时，它会通过原型从Parent()实例中获取它的功能；
function inherit(C, P){
    C.prototype = new P();
}
var kid = new Child();
kid.say();

var kid = new Child();
kid.name = "pat";
kid.say(); // pat

// 
var s = new Child('kid');
s.say(); // admin

// 借用构造函数
function Child(a, c, b, d) {
    Parent.apply(this, arguments);
}


// 父构造函数
function Article(){
    this.tags = ['js', 'css'];
}
var article = new Article();
function BlogPost(){}
BlogPost.prototype = article;
var blog = new BlogPost();

function StaticPage() {
    Article.call(this);
}

var page = new StaticPage();

console.log(article.hasOwnProperty('tags')); // true
console.log(blog.hasOwnProperty('tags')); // false
console.log(page.hasOwnProperty('tags')); // true

//
blog.tags.push('html');
page.tags.push('php');
console.log(aricle.tags.join(',')); // js,css,html

// 原型链
// new Child 对象和Parentduix 
function Parent(name) {
    this.name = name || 'admin'
}
Parent.prototype.say = function() {
    return this.name;
}
function Child(name) {
    Parent.apply(this. arguments)
}
var kid = new Child('h');
kid.name; // h
typeof kid.say; // undefined;


// 通过借用构造函数实现多重继承
// 
function cat() {
    this.legs = 4;
    this.say = function(){
        return "meaowww"
    }
}
function Bird() {
    this.wings = 2;
    this.fly = true;
}
function catWings() {
    cat.apply(this);
    Bird.apply(this);
}

var jane = new catWings();
console.dir(jane)

// 借用和设置原型

function Child(a,c,b,d) {
    Parent.apply(this, arguments);
}

Child.prototype = new Parent();



// 
var papa = {name: 'papa'}
var bb = object(papa);

function object(o) {
    if(typeof o !== "function") {
        return
    }
    function F(){}
    F.prototype = o;
    return new F();
}
console.log(bb.name); // papa


function person() {
    this.name = 'admin';
}
person.prototype.getName = function() {
    return this.name;
}
var kid = object(person.prototype)
typeof kid.getName; // function
typeof kid.name; // undefined，只有原型被继承

// 原型继承模式在es5中成为该语言一部分；通过Object.create()实现；

var child = Object.create(parent);

var child = Object.create(parent, {
    age: {value: 2}
});
child.hasOwnProperty("age"); // true

// 通过浅复制属性实现继承
function extend(parent, child) {
    var i;
    child = child || {};
    for(i in parent) {
        if(parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}

// 深度复制
function extendDeep(parent, child) {
    var i ,
        toStr = Object.prototype.toString,
        astr = "[object Array]";
    child = child || {};
    for(i in parent) {
        if(parent.hasOwnProperty(i)){
            if(typeof parent[i] === "object") {
                child[i] = (toStr.call(parent[i] === astr)? []: {});
                extendDeep(parent[i],child[i]);
            }else {
            child[i] = parent[i];
        }
    }
}
    return child;
}

// 混入

function mix() {
    var arg, prop, child = {};
    for(arg = 0;arg< arguments.length;arg +=1) {
        for(prop in arguments[arg]) {
            if(argument[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }
    return child;
}

var cake = mix(
    {eggs: 2, large: true},
    {butter: 2, salt: false}
)


















