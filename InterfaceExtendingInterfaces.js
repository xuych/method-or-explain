var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//implementing extended interface
var RadioButton = /** @class */ (function () {
    function RadioButton(h, w, label) {
        this.h = h;
        this.w = w;
        this.label = label;
    }
    RadioButton.prototype.enableEvents = function (enable) {
        this.enable = enable;
    };
    return RadioButton;
}());
var radioButton = new RadioButton(100, 20, 'test');
radioButton.enableEvents(true);
console.log(radioButton);
var Person = /** @class */ (function () {
    function Person(name, age) {
        //需要指明参数类型
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayName = function () {
        console.log("I am " + this.name + ", age of " + this.age);
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age) {
        var _this = 
        //传入的参数需要指明类型
        _super.call(this, name, age) || this;
        _this.gender = 'man';
        return _this;
    }
    Man.prototype.sayName = function () {
        console.log("I am a " + this.gender + " , name is " + this.name + ",age of " + this.age); //可以使用ES6模板语法
    };
    return Man;
}(Person));
var bob = new Man('Bob', 2);
bob.sayName(); //I am a man, name is Bob, age of 2
