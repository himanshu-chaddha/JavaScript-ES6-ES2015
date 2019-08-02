# Getting Started With ES6 / ES2015

> This course is for those who have a decent understanding of javascript.

#### Recommended to use:

- Vs code a text editor, [download it from here](https://code.visualstudio.com/download)
- An extension of vs code i.e `Quokka.js`.[Read about it](https://quokkajs.com/)
- Node.js should be pre-installed on your machine.[Download it from here](https://nodejs.org/en/)
- you can also go to [es6-features.org](http://es6-features.org/#Constants) to learn more about ES6.
- you can also check the browser compatibality [from here](https://kangax.github.io/compat-table/es6/)

> The benefit of using quokka.js is that is interprets your js file line-by-line and show the results on the terminal and in line of file also \
> start it by typing `CTRL+SHIFT+P` on your keyboard and choose `Quokka: Start on current file`.

## What is ECMAScript?

- ECMAScript is a scripting language standard and specification. And languages like:
  > JavaScript \
  > JScript \
  > ActionScript \
  > `There all are based on the ECMAScript standard.`

## Let's Get In!

## 1. Const & Let

- When taking about it's features the first one come up on is `const` keyword:

#### Const keyword

> In JS we all know that to decalre a variable there is only one keyword i.e `var`. \
> eg. var x = 1; \
> `but this value can be changed at any point.` \
> eg. x = 'hello' or something else.

- And there is no feature to make a varibale whose value can not be over written.

> So, by ES6 we have a keyword i.e `const` whose value can not be over written in future. \
> eg. const x = 1; \
> and if we try to do that it will throws a runtime error. \
> eg. `const x = 1;` and `x = 'hello';` \
> Also, we have to declare the value of a const variable before using it, otherwise it throws an error again. \
> eg. const x;

- But if we declare the const variable with an empty object, then it don't give any error and also we can add the values to it.**eg.**

```
const x ={};
x['key'] ='value';
```

`This is happening because the reference of this object is already set to 'x' and we are not changing any reference of the variable.`

- Not only with objects but also with arrays we can add values and delete from it whenever needed.Because the object 'x' is refering to a mutable data type.

#### Let keyword

- Now, let's move on to the next feature i.e `let` keyword.
- It is introduced to replace var keyword. Because by using `let` keyword we can not declare the same variable two times.
  > eg. let x=1; and let x=2;
- But we can do that with var. In this case we can lost the pre declared value.
- Also, we can declare it by not assigning any value befor hand. eg. `let x;`.And in this case we can assign as many times the value of x.

```
let x;
x=1
x=10;
```

- A basic example to find the maximum no from an array is [eg. max.js](https://github.com/himanshu-chaddha/JavaScript-ES6-ES2015/blob/master/max.js)

## 2. Block Scope

- Basically anything inside { } is considered to be a block.
- let and const both have a block level i.e you can not access the value of these varibale outside { }.
- In nested block you can use same variable name because of it's scope. eg.

```
{
    let x = 1;
    {
        let x = 2;
        console.log(x);
    }
    console.log(x);
}
```

`This also happens same with const keyword. Including keywords we can also use same function names in nested block.`

## 3. Arrow Function

- It is an essential addition with ES6.
- In arrow function we use `=>` this instead of using `function` keyword. **eg.**

#### Statement bodies

```
const arr = [1,2,3,4,5];
const byTwo = arr.map((number)=>{
    return number *2;
});
console.log(byTwo);
```

- when your function just have a single argument then tere is no need to pass it in the parenthesis.**eg.**

```
const arr = [1,2,3,4,5];
const byTwo = arr.map(number => {
    return number *2;
});
console.log(byTwo);
```

#### Expression bodies

- And, when there is only one line in the body of function, there is no need to put { } and return.

```
const arr = [1,2,3,4,5];
const byTwo = arr.map(number => number *2);
console.log(byTwo);
```

`It will be just a single line.`

- And when you want to return an object by that function then, enclose the { }, with parenthesis.

```
const arr = [1,2,3,4,5];
const byTwo = arr.map((number)=>({
    number: number *2
}
));
console.log(byTwo);
```

- If there is no argument in the function then,

```
const arr = [1,2,3,4,5];
const byTwo = arr.map(()=>{
    return 2;
}
);
console.log(byTwo);
```

#### Lexical this

```
var obj = {
    value: 0,
    increment: function(){
        var that = this;
        setTimout(function(){
            that.value++;
            console.log(that.value);
        },1000);
    }

}
obj.increment();
```

`This is happening before ES6. But after that we have an arrow method which will automatically bind this to the parent element.`

```
var obj = {
    value: 0,
    increment: function(){
        var that = this;
        setTimout(()=>{
            that.value++;
            console.log(that.value);
        },1000);
    }

}
obj.increment();
```

## 4. Extended Parameter Handling

#### Default parameter values

- These are those parameter which are written as a default value of a variable inside a function argument.
- If a function contains n no. of arguments and at the function call parameters are not passed, then the default values are used by the compiler.
- If you are passing a value to a default parameter then the default value is overwritten by new value.

```
function buy(item = 'eggs', quantity = 1){
    return;
}
buy();
```

`This will set the values to default`

```
function buy(item = 'eggs', quantity = 1){
    return;
}
buy('milk', 2);
```

`This will overwrite the both values and set to new ones.`

#### Rest operator

- This is used when we don't know the size of parameters before hand.
- It is used with three dots trailing with variable name. `eg. (...arr)=> return;`

```
function print(...arr){
    console.log(arr);
}
print(1,2,3,[4,5,6],{},'hello');
```

- And when we only knew few of the parameters and rest are unknown then also we can do it as.

```
function print(age, sibling, ...arr){
    console.log(arr);
}
print(1,2,3,[4,5,6],{},'hello');
```

`What happen this time, now age is set to 1 and sibling to 2 and rest of the parameters are again bind with arr array.`

- Also you are restricted to write any of the parameter after a rest operator.
