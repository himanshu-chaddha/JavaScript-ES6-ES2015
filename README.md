# Getting Started With ES6 / ES2015

> This course is for those who have a decent understanding of javascript.

## Recommended to use :-

- Vs code a text editor, [download it from here](https://code.visualstudio.com/download)
- An extension of vs code i.e `Quokka.js`.[Read about it](https://quokkajs.com/)
- Node.js should be pre-installed on your machine.[Download it from here](https://nodejs.org/en/)
- you can also go to [es6-features.org](http://es6-features.org/#Constants) to learn more about ES6.
- you can also check the browser compatibality [from here](https://kangax.github.io/compat-table/es6/)

> The benefit of using quokka.js is that is interprets your js file line-by-line and show the results on the terminal and in line of file also \
> start it by typing `CTRL+SHIFT+P` on your keyboard and choose `Quokka: Start on current file`.

## What is ECMAScript

- ECMAScript is a scripting language standard and specification. And languages like:

  > JavaScript \
  > JScript \
  > ActionScript

`There all are based on the ECMAScript standard.`

## Let's Get In -

### 1. Const & Let

- When taking about it's features the first one come up on is `const` keyword:

#### Const keyword

> In JS we all know that to declare a variable there is only one keyword i.e `var`. \
> eg. var x = 1; `but this value can be changed at any point.` \
> eg. x = 'hello' or something else.

- And there is no feature to make a varibale whose value can not be over written.

> So, by ES6 we have a keyword i.e `const` whose value can not be over written in future. \
> eg. const x = 1; \
> and if we try to do that it will throws a runtime error. \
> eg. `const x = 1;` and `x = 'hello';` \
> Also, we have to declare the value of a const variable before using it, otherwise it throws an error again. \
> eg. const x;

- But if we declare the const variable with an empty object, then it don't give any error and also we can add the values to it.**eg.**

```javascript
const x ={};
x['key'] ='value';
```

`This is happening because the reference of this object is already set to 'x' and we are not changing any reference of the variable.`

- Not only with objects but also with arrays we can add values and delete from it whenever needed. Because the object 'x' is refering to a mutable data type.

#### Let keyword

- Now, let's move on to the next feature i.e `let` keyword.
- It is introduced to replace var keyword. Because by using `let` keyword we can not declare the same variable two times. eg. `let x=1; and let x=2;`
- But we can do that with var. In this case we can lost the pre declared value.
- Also, we can declare it by not assigning any value before hand. eg. `let x;`, And in this case we can assign as many times the value of x.

```javascript
let x;
x=1
x=10;
```

- A basic example to find the maximum number from an array is [eg. max.js](https://github.com/himanshu-chaddha/JavaScript-ES6-ES2015/blob/master/max.js)

### 2. Block Scope

- Basically anything inside { } is considered to be a block.
- let and const both have a block level i.e you can not access the value of these varibale outside { }.
- In nested block you can use same variable name because of it's scope. eg.

```javascript
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

### 3. Arrow Function

- It is an essential addition with ES6.
- In arrow function we use `=>` this instead of using `function` keyword. **eg.**

#### Statement bodies

```javascript
const arr = [1,2,3,4,5];
const byTwo = arr.map((number)=>{
    return number *2;
});
console.log(byTwo);
```

- when your function just have a single argument then tere is no need to pass it in the parenthesis.**eg.**

```javascript
const arr = [1,2,3,4,5];
const byTwo = arr.map(number => {
    return number *2;
});
console.log(byTwo);
```

#### Expression bodies

- And, when there is only one line in the body of function, there is no need to put { } and return statement.

```javascript
const arr = [1,2,3,4,5];
const byTwo = arr.map(number => number *2);
console.log(byTwo);
```

`It will be just a single line.`

- And when you want to return an object by that function then, enclose the { }, with parenthesis.

```javascript
const arr = [1,2,3,4,5];
const byTwo = arr.map((number)=>({
    number: number *2
}
));
console.log(byTwo);
```

- If there is no argument in the function then,

```javascript
const arr = [1,2,3,4,5];
const byTwo = arr.map(()=>{
    return 2;
}
);
console.log(byTwo);
```

#### Lexical this

```javascript
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

```javascript
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

### 4. Extended Parameter Handling

#### Default parameter values

- These are those parameter which are written as a default value of a variable inside a function argument.
- If a function contains n no. of arguments and at the function call parameters are not passed, then the default values are used by the compiler.
- If you are passing a value to a default parameter then the default value is overwritten by new value.

```javascript
function buy(item = 'eggs', quantity = 1){
    return;
}
buy();
```

`This will set the values to default`

```javascript
function buy(item = 'eggs', quantity = 1){
    return;
}
buy('milk', 2);
```

`This will overwrite the both values and set to new ones.`

#### Rest operator

- This is used when we don't know the size of parameters before hand.
- It is used with three dots trailing with variable name. `eg. (...arr)=> return;`

```javascript
function print(...arr){
    console.log(arr);
}
print(1,2,3,[4,5,6],{},'hello');
```

- And when we only knew few of the parameters and rest are unknown then also we can do it as.

```javascript
function print(age, sibling, ...arr){
    console.log(arr);
}
print(1,2,3,[4,5,6],{},'hello');
```

`What happen this time, now age is set to 1 and sibling to 2 and rest of the parameters are again bind with arr array.`

- Also you are restricted to write any of the parameter after a rest operator.

#### Spread operator

- This is used when we want to print all those arguments nested inside a html element.
- It is same as rest operator as ...varibale_name.

```javascript
function print(...args){
    args = ['<br>', ...args, '</br>'];
    console.log(args.join(' '));
}
print('hello', 'world');
```

- Not only arrays but we can use spread operator on any iterable collection eg. strings.

```javascript
const msg = 'hello world';
const chars = [...msg];
console.log(chars);
```

- Also, we can use spread operator while calling function having so many arguments. It will automatically assign those values to the parameters.

```javascript
function add(a,b){
    return a + b;
}
const arr =[2,10];
console.log(add(.arr));
```

- Also you can use it to copy the array and they both have different refrences.

```javascript
const arr = [1,2,3,4];
const arr2 = [...arr];
```

### 5. Template Literals

#### String Interpolation

- Before ES6 we have to concatenate the strings using + symbol.
- But now, we can manipulate the strings using \${variable_name} by enclosing the whole expression in backticks ``.

```javascript
const name = 'Bob';
const age = 25;
const msg = `My name is ${name}. And I am ${age}.`
console.log(msg);
```

#### Multi line template literals

- In JS ES5 we did multi line literals as:

```javascript
const msg = "Hello, My name is\n" +
"Bob and my age is\n" +
"10."
console.log(msg);
```

- But by ES6 we have multi line template literals which is an essential concept.
  `To have multi line literals use backticks to enclose the lines and hit enter from where you want new line.`

```javascript
const msg = `Hello, My name is
Bob and my age is
10.`
console.log(msg);
```

#### Tagged template literals

- It is more powerful as template as needed.

```javascript
function tag(strings, ...values) {
  console.log(strings);
  console.log(values);
}
const name = "Bob";
const age = 10;
tag`My name is ${name}. and my age is ${age}`;
```

- Also,

```javascript
function tag(strings, ...values) {
  let msg = "";
  strings.forEach((string, index) => {
    msg += string;
    if (index < values.length) {
      msg += `<b>${values[index]}</b>`;
    }
  });
  console.log(strings);
  console.log(values);
  return msg;
}
const name = "Bob";
const age = 10;
const msg = tag`My name is ${name}. and my age is ${age}`;
console.log(msg);
```

#### Raw attribute

- when our template contains escape characters like \n then it is removed when we print it.
- To getting back the string same as written in the template we use raw attribute.

```javascript
function tag(strings, ...arr){
    console.log(strings.raw[0]);
}
const msg = tag`hello my name is\n Bob, and my age is\n 10`;
```

### 6. Enhanced object properties

#### Property Shorthand

- Before ES6 we declare object by the key value pairs. Irrespective of the declarations of those keys above that object. eg.

```javascript
var firstName = 'Bob';
var lastName = 'harvey';
var age = 20;

var person{
    firstName: firstName,
    lastName: lastName,
    age: age
}
console.log(person);
```

- But by ES6 if we have declared the variables above the object creations then we can only use those a key value pairs. eg.

```javascript
var firstName = 'Bob';
var lastName = 'harvey';
var age = 20;

var person{
    firstName,
    lastName,
    age
}
console.log(person);
```

#### Computed property names

- Before ES6 if we want to add some new property to the object then we do like this.

```javascript
var key = 'lastName';
var person = {
    firstname: 'Bob'
}
person['key'] = 'harvey';
console.log(person);
```

- But this was a ugly to doing that, now we can do the same as:

```javascript
var key = 'lastName';
var person = {
    firstname: 'Bob',
    [key]: 'harvey',
    ['age']: 20
}
console.log(person);
```

#### Method properties

- When we want the value of a property extracted by a function then we use method properties.

```javascript
var person={
    firstname: 'Bob',
    age: 20,
    haveABirthday: function(){
        this.age++;
    }
}
person.haveABirthday();
console.log(person);
```

- But from ES6 this also become very concise as remove the colon of that property and function keyword:

```javascript
var person={
    firstname: 'Bob',
    age: 20,
    haveABirthday (){
        this.age++;
    }
}
person.haveABirthday();
console.log(person);
```

## 7. Modules

- In this section we will learn how to use import and export keywords which is a new feature of ES6.
- We have to install another package to support this with node.js.
- Use command on your terminal `node -r @std/esm main.mjs`.
  `But this method is depricated from now because we also have ES8. So, we have to use following commands,`
- New projects

  > Run `npm init esm` or `yarn create esm`.

- `Use the -y flag to answer “yes” to all prompts.`

- Existing projects
  > Run `npm i esm` or `yarn add esm.`
