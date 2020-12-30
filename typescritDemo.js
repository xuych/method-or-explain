{
    var f1 = function (_a) {
        var o = _a.o, b = _a.b;
        return o + b;
    };
    var arr = ['1', 1];
    var kk = [{ name: '1', age: 2 }];
    var a = f1({ o: 1, b: 2 });
    var jj = ['1', 1];
    var test = /** @class */ (function () {
        function test() {
        }
        return test;
    }());
    var reg = /\d/;
    var str = 'str';
    var hello = { o: 1, b: 1 };
    var test2 = { age: 1, name: '1', k: 1, h: 1 };
    console.log(a, hello, test2);
    var reduceArr = [1, 2, 4, 5, 6, 7];
    var sumReduceArr = reduceArr.reduce(function (pre, cur) { return pre + cur; });
    console.log(sumReduceArr);
}
