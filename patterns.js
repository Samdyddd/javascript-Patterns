// *** 设计模式  ***

// 1.单体模式：保证一个特定类仅有一个实例。当你第二次使用同一个类创建对象时，应该得到与第一次所创建对象完全相同的对象。

var obj = {
  myprop: 'myvalue'
}
// 在js中，对象之间永远不会完全相等，除非它们是同一个对象，因此即使创建一个具有完全相同成员的同类
// 对象，它也不会与第一个对象完全相同。

var obj2 = {
  app: 'value'
};
obj === obj2; // false
obj == obj2; // false

// 每次在使用对象字面量创建对象时，实际是创建一个单体；

// new 操作符创建的多个对象时，仅仅获取指向完全相同对象的指针
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true



// 例子,Universe构造函数的静态属性中缓存单个实例
function Universe() {
  if(typeof Universe.instance === 'object') {
    return Universe.instance;
  }
  // 正常进行
  this.start_time = 0;
  this.bang = "Big";
  // 缓存
  Universe.instance = this;
  // 隐式返回
  return this;
}
var uni = new Universe();
var uni2 = new Universe();
uni === uni2; // true


// 闭包中的实例
// 第一次调用原始构造函数时，返回this,在第二次，三次调用时，执行重写构造函数。

function Universe() {
  var instance = this;
  // 正常运行
  this.start_time = 0;
  this.bang = "big";
  Universe = function() {
    return instance;
  }
}
// 任何添加到Universe()原型中的对象都不会存在指向有原始实现所创建实例的活动链接
Universe.prototype.nothing = true;
var uni = new Universe();
Universe.prototype.everything = true;
var uni2 = new Universe();

// 
uni.nothing;// true
uni2.nothing; // true

uni.everything; // undefined
uni2.everything; // undefined

uni.constructor.name; // Universe

uni.constructor === Universe; // false， uni.constructor仍然指向了原始的构造函数。

// 重构
function Universe() {
  var instance;

  // 重写构造函数
  Universe = function Universe(){
    return instance;
  }
  // 保留原型属性
  Universe.prototype = this;
  // 实例
  instance = new Universe();

  // 重置构造函数指针
  instance.constructor = Universe;

  // 所有功能
  instance.start_time = 0;
  instance.bang = "big";

  return instance;
}

var Universe;
(function(){
  var instance;
  Univer = function Universe() {
    if(instance){
      return instance;
    }
    instance = this;

    this.start_time = 0;
    this.bang = "big";
  }
}())


// 工厂模式
function CarMaker() {

  CarMaker.prototype.drive = function() {
    return "i have" + this.doors;
  }

  CarMaker.factory = function(type) {
    var constr = type,
        newcar;
    
    if(typeof CarMaker[constr] !== "function") {
      throw{
        name: 'Error',
        message: constr+ "not exist"
      };
    }

    if(typeof CarMaker[constr].prototype.drive !== "function") {
      CarMaker[constr].prototype = new CarMaker();
    }
    // 创建一个新实例
    newcar = new CarMaker[constr]();

    return newcar;
  }



}

































































