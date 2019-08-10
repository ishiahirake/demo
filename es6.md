# ES6 简介

## 声明

### 块级作用域

```js
if (true) {
  var a = 'hello'
}

console.log(a)
// 输出
// hello
```

```js
if (true) {
  let a = 'hello'
}

console.log(a)
// 输出
// Error: ReferenceError: a is not defined
```

### 变量提升

```js
a = 'hello'
console.log(a)
var a
// 输出
// hello
```

```js
a = 'hello'
console.log(a)
let a
// 输出
// Error: ReferenceError: a is not defined
```

### 重新赋值

```js
var a = 'old'
a = 'new'

console.log(a)
// 输出
// new
```

```js
let a = 'old'
a = 'new'

console.log(a)
// 输出
// new
```

```js
const a = 'old'
a = 'new'

console.log(a)
// 输出
// Error: TypeError: Assignment to constant variable.
```

### 重复声明

```js
var a = 'old'
var a = 'new'

console.log(a)
// 输出
// new
```

```js
let a = 'old'
let a = 'new'

console.log(a)
// 输出
// Error: SyntaxError: Identifier 'a' has already been declared
```

## 箭头函数

### 表达式

```js
let odds = evens.map(v => v + 1);
let nums = evens.map((v, i) => v + i);
```

### 语句

```js
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
```

## 类

```js
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

## 解构

### 数组

```js
let [a, b, ...o] = [1, 2, 3, 4, 5]

console.log(a)
console.log(b)
console.log(o)

// 输出
// 1
// 2
// [ 3, 4, 5 ]
```

### 对象

```js
let {a, c, ...o} = {a: 'a', b: 'b', c: 'c', d: 'd'}

console.log(a)
console.log(b)
console.log(o)

// 输出
// a
// b
// { c: 'c', d: 'd' }
```

## 展开

### 数组

```js
let a = [1, 2, ...[3, 4, 5]]
console.log(a)

// 输出
// [ 1, 2, 3, 4, 5 ]
```

### 对象

```js

let o = {
  a: 'a',
  b: 'b',
  ...{
    c: 'c',
    d: 'd'
  }
}

console.log(o)

// 输出
// { a: 'a', b: 'b', c: 'c', d: 'd' }
```

### 用例

```js
function sum(a, b) {
  return a + b
}

let total = sum(...[1, 2])
console.log(total)

// 输出
// 3
```

## 模块

```js
// math.mjs
export function sum(x, y) {
  return x + y;
}

export const pi = 3.141593;

export default function(x) {
  return Math.exp(x);
}

// main.mjs
import exp, { sum } from './math.mjs'

console.log(sum(1, 2))
// 输出
// 3

console.log(exp(3))
// 输出
// 20.085536923187668
```

注意: `node` 在使用 ES6 的模块需要将文件拓展名命名为 `.mjs`, 同时在执行时需启用 `--experimental-modules` 选项.
