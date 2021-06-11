// 描述：用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数
// F(0) = 0， F(1) = 1， F(n) = F(n-1) + F(n-2)
var fibonacci = function (num) {
    if (num === 0)
        return 0;
    if (num === 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};
// 输入：fibonacci(1234)
// 期望：832040
var result = fibonacci(30);
