// 数据代理
let obj = {
    name:"张三",
    age:18,
}

let handler = {
    // 当用vue代理去读取属性时，返回值之前，会执行跟踪操作，记录读取该属性的位置
    // 指定读取数据时的行为
    get(target, prop, receiver){
        /**
         * target 被代理对象
         * prop 读取的属性名
         * receiver代理对象
         */
        return target[prop];
    },
    // 用vue代理取修改属性值时，更新所有用到该属性的位置
    // 指定修改数据时的行为
    set(target, prop, value, receiver){
        target[prop] = value;
    },
} // handler 用来指定代理的行为

// 代理不会对原对象产生影响
let proxy = new Proxy(obj, handler);

console.log('proxy :>> ', proxy);

proxy.age = 28;
console.log('proxy.age :>> ', proxy.age);