# Getting Started With ES6 / ES2015

> This course is for those who have a decent understanding of javascript.

#### Recommended to use:

- Vs code a text editor, [download it from here](https://code.visualstudio.com/download)
- An extension of vs code i.e `Quokka.js`.[Read about it](https://quokkajs.com/)
- Node.js should be pre-installed on your machine.[Download it from here](https://nodejs.org/en/)
- you can also go to [es6-features.org](http://es6-features.org/#Constants) to learn more about ES6.
- you can also check the browser compatibality [from here](https://kangax.github.io/compat-table/es6/)

> `The benefit of using quokka.js is that is interprets your js file line-by-line and show the results on the terminal and in line of file also` \
> start it by typing `CTRL+SHIFT+P` on your keyboard and choose `Quokka: Start on current file`.

## What is ECMAScript?

- ECMAScript is a scripting language standard and specification. And languages like:
  > JavaScript \
  > JScript \
  > ActionScript
  > `There all are based on the ECMAScript standard.`

## Let's Get In!

> When taking about it's features the first one come up on is `const` keyword:

#### const keyword

> In JS we all know that to decalre a variable there is only one keyword i.e `var`. \
> eg. var x = 1; \
> `but this value can be changed at any point.` \
> eg. x = 'hello' or something else.

- And there is no feature to make a varibale whose value can not be over written.

  > So, by ES6 we have a keyword i.e `const` whose value van not be over written in future. \
  > eg. const x = 1; \
  > and if we try to do that it will through a runtime error. \
  > eg. `const x = 1; and x = 'hello';` \
  > Also, we have to declare the value of a const variable otherwise it throws an error again. \
  > eg. const x;

- But if we declare the const variable with an empty object, then it don't give any error and also we can add the values to it.**eg.**

```
const x ={};
x['key'] ='value';
x;
```

`This is happening because the reference of this object is already set to 'x' and we are not changing any reference of the variable.`

- Not only with objects but also with arrays we can add values and delete from that whenever needed.Because the object x is refering is a mutable data type.

#### let keyword

> Now, let's move on to the next feature i.e `let` keyword. \
> It is introduced to replace var keyword. Because by using let keyword we can not declare the same variable two times. \
> eg. let x=1; and let x=2; \
> but we can do that with var. In this case we can lost the pre declared value. \
> Here, we can declare it by not assigning any value. eg. `let x;`.And in this case we can assign as many times the value of x.

```
let x;
x=1
x=10;
```
