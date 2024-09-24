# JS 기본

## ECMA스크립트(ES)

- ECMA(European Computer Manufacturers Association): 에크마는 유럽 컴퓨터 제조 협회 약어. 자바 스크립트를 표준화해주는 국제 표준화 기구를 의미.
- ECMA(에크마)스크립트: **자바스크립트의 표준화된 스크립트 프로그래밍 언어 명칭**
- ES6, ES2015 등이 있는데, 이 모든 것은 자바스크립트와 관련된 버전.

- 자바스크립트가 2015년도에 크게 바뀌었고(ES6 또는 ECMA2015로 불림), 이때부터 자바스크립트의 전성기 시작. 이 버전에서는 `let`과 `const` 키워드, 화살표 함수, 클래스, 모듈, 템플릿 리터럴, 비동기 프로그램을 위한 `promise`, `map`, `set` 등 많은 기능이 추가됨.

- 인터넷 익스플로러와 같은 구버전의 브라우저들은 자바스크립트 5버전 이하만을 지원하고, 신버전의 브라우저들은 모두 6버전 이후에 나온 버전들을 모두 지원함.

  - 자바스크립트 트랜스파일러인, \*Babel\*\*을 이용하여 ECMAScript 코드를 구형 브라우저나 환경에서도 호환되도록 변환해줄 수 있음.

## typeof

- typeof 뒤에 데이터 입력하면, 그 데이터의 종류를 출력함

```js
// code convention(관습): 코드는 한줄에 하나씩!!
// 이러한 관습 덕에 자바스크립트는 ;쓸 필요 없음.

console.log("hello world"); //hello world
console.log(typeof "hello world"); //string

console.log(123); //123
console.log(true); //true
console.log(null); //null
console.log(undefined); //undefined

console.log(typeof 123); //number
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof {}); //object
console.log(typeof []); //object
```

- _null이나 객체 데이터, 배열데이터의 type은 모두 object로 출력됨._ 그래서 **객체 데이터나 배열데이터처럼 자세한 데이터 타입을 알기위해 typeof를 사용할 수는 없음.**
- 이런 경우 getType()함수처럼 원하는 함수 만들 수 있음.

```js
// 데이터 타입을 자세히 알려주는 함수
function getType(data) {
  return Object.prototype.toString.call(data);
}

console.log(getType(123)); //[object Number]
console.log(getType(false)); //[object Boolean]
console.log(getType([])); //[object Array]
console.log(getType({})); //[object Object]

function getType2(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

console.log(getType2(123)); //Number
console.log(getType2(false)); //Boolean
console.log(getType2([])); //Array
console.log(getType2({})); //Object
```

- 그런데 특정한 js 파일에서 선언한 함수를 다른 js파일에서 사용할 수 없음. 이럴 때 함수 앞에 `export default`를 사용함으로서 다른 파일에서도 사용할 수 있도록 만들어주고, 다른 파일에서 `import`와 `from`을 이용해 그 해당 함수를 가져와 사용할 수 있음.

```js
export default function getType(data) {
  return Object.prototype.toString.call(data);
}


export default function getType2(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
```

```js
import getType from "./getType";
import getType2 from "./getType";
```

## JS 연산자

```js
// 산술 연산자 (arithmetic operator)

console.log(1 + 2); //3
console.log(1 - 2); //-1
console.log(3 * 2); //6
console.log(10 / 2); //5
console.log(7 % 5); //2

//할당 연산자 (assignment operator)

const b = 2; //재할당 불가능

let a = 2; //재할당 가능
a = a + 1;
a += 1; //(a = a + 1 과 같은 코드)
a -= 1;
a *= 1;
a /= 1;

//비교 연산자(comparison operator)

const c = 2;

console.log(b === c); //일치 연산자(===) 같으면 true
console.log(a === b); //아니면 false

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1)); //true
console.log(isEqual(1, "1")); //false(타입 다름)

console.log(b !== c); //불일치 연산자(!==) 같으면 false
console.log(a !== b); //다르면  true

console.log(a > b); //true
console.log(a < b); //false
console.log(a >= b); //true
console.log(a <= b); //false

//논리 연산자(logical operator)

const q = 1 === 1;
const w = "AB" === "AB";
const e = true;

console.log(q); //true
console.log(w); //true
console.log(e); //true

console.log("&&: ", q && w && e); //true
// && and 임으로 하나만 false 여도 false

console.log("||: ", q || w || e); //true
// || or 임으로 하나만 true 여도 true

console.log("!:", !q); //false
//! not 부정연산자

// 삼항 연산자(ternary operator)

const g = 1 < 2;
// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

console.log(g ? "참" : "거짓"); //위와 같은 코드
```

### 동등연산자(==, Loose equality)와 엄격한 동등연산자(===, Strict equality) 차이

1. == : 두 피연산자의 **타입이 다를 경우, 타입을 자동으로 변환**한 후에 값을 비교.

```js
console.log(5 == "5"); // true
console.log(0 == false); // true
console.log(null == undefined); // true
```

2. === : **타입변환 없이** 두 피연산자가 **타입과 값이 모두 같은지**를 비교

```js
console.log(5 === "5"); // false
console.log(0 === false); // false
console.log(null === undefined); // false
console.log(5 === 5); // true
```

## if, siwtch, for 구문

```js
import lala from "./getRandom";

//조건문 (if statement)

console.log(lala());

const a = lala();

if (a === 0) {
  console.log("a is 0");
} else if (a === 2) {
  console.log("a is 2");
} else {
  console.log("rest...");
}

//조건문 (Switch statement)

switch (a) {
  case 0:
    console.log("a is 0");
    break; //종료
  case 2:
    console.log("a is 2");
    break; //종료
  case 4:
    console.log("a is 4");
    break; //종료
  // if 구문의 else처럼 나머지인 경우를 표현하고자하면 default 사용해주면됨.
  default:
    console.log("rest...");
}

//반복문 (for statement)
//for (시작조건; 종료조건; 변화조건) {}

for (let i = 0; i < 3; i += 1) {
  console.log(i);
}

const ulEl = document.querySelector("ul");

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement("li");
  li.textContent = `list-${i + 1}`;
  if ((i + 1) % 2 === 0) {
    li.addEventListener("click", function () {
      console.log(li.textContent);
    });
  } //짝수 눌렀을 때 console 창에 내용 뜨도록 만들었음.
  ulEl.appendChild(li);
}
```

## 변수 유효범위 (Variable Scope)

```js
// var, let, const

function scope() {
  // console.log(a); 에러뜸: 변수의 유효범위가 아님.
  if (true) {
    // console.log(a); undefined가 출력됨
    const a = 123;
    console.log(a);
  }
  // console.log(a); 변수의 유효범위가 아니기 떄문에 에러 발생
}
scope();

// let과 const는 블록(변수가 선언되어있는 중괄호)레벨의 유효범위를 갖음.

// ------------------------------------------------------------------------
//var는 함수(함수 범위안 어디서든 가능)레벨의 유효범위를 갖음.
function scope2() {
  // console.log(a); undefined가 출력됨(변수의 유효범위는 맞으나 a가 아직 정의되지 않음)
  if (true) {
    // console.log(a); undefined가 출력됨
    var a = 123;
  }
  // console.log(a); 변수의 유효범위
}
scope2();
```

- **var**라는 키워드는 **let, const(블록레벨의 유효범위를 갖음)와 달리 함수레벨의 유효범위를 갖음**
  - 즉, **var는 유효범위가 훨씬 큼**. 이 때문에 _var는 우리가 의도하지 않은 범위에서 이 변수가 사용이 될수 있음._
  - 그리고 그만큼 *메모리를 차지*하고, 이는 *메모리 누수*로 발전할 수 있음.
  - 그래서 **일반적으로 var보다는 let, const 사용을 권장함**.

## 형 변환(Type Conversion)

```js
// 형(데이터 타입) 변환(Type conversion)

const a = 1;
const b = "1";

console.log(a === b); //false
console.log(a == b); //true
//동등연산자를 사용하면 형변환됨.
//자동으로 형변환되어서 비교되어지기 때문에 비교연산 시 동등연산자보다는 엄격한 동등연산자 사용을 권장함.

// if 절에 조건으로 boolean 데이터 이용시 참일 때만 그 동작을 수행함.
/* true, false를 직접적으로 입력해서 if절을 만들지 않고, 다른 데이터 타입의 값들을 이용하더라도,
형변환을 통해 boolean 데이터처럼 사용되어질 수 있음*/

//Truthy (참 같은 값)
// true, {}, []. 1, 2, 'false', -12, '3.14'...

//Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN (Not a Number)

if (false) {
  console.log(1);
}
if ("false") {
  console.log(2);
} //2
if (null) {
  console.log(3);
}
if (3.14) {
  console.log(4);
} //4
if ({}) {
  console.log(5);
} //5
if (NaN) {
  console.log(3);
}
```

- **NaN**: Not a number, 숫자 타입이지만 숫자와 없는 값을 연산하는 경우 만들어짐.

### Truthy, falsy 정리

#### Truthy (참 같은 값)

- true, {}, []. 1, 2, 'false', -12, '3.14'...

### Falsy(거짓 같은 값)

- false, '', null, undefined, 0, -0, NaN (Not a Number)

## JS 함수

```js
//함수

// 함수 표현(익명함수) 방식
const sum2 = function (x, y) {
  return x + y;
};

//함수 선언(기명함수)
function sum(x, y) {
  console.log(x + y);
} // x, y 매개변수

sum(1, 3); //1, 3 인수

// 함수가 호출되는 수를 최대한 줄여야 컴퓨터 자원이 많이 소비되지 않음으로 효율적.

const b = sum2(1, 2);
const a = sum2(3, 4);

console.log(a + b);
console.log(a - b);

// 비효율적인 방법
// console.log(sum(1, 2) + sum(3, 4));
// console.log(sum(1, 2) - sum(3, 4));
```

### **arguments**: 함수 내에서 사용 가능한 특별한 객체, 함수를 호출할 때 전달된 모든 인수를 포함

- arguments 객체는 **배열처럼 인덱스를 사용해 각 인수에 접근할 수 있지만, 실제로는 배열이 아님**
- 배열 메서드(forEach, map 등)를 직접 사용할 수는 없지만, **length 속성을 가지며, 인덱스를 통해 접근 가능**
- **필요한 경우 `Array.from(arguments)` 또는 `[...arguments]`와 같은 방법으로 배열로 변환 가능**
- **함수가 정의된 매개변수보다 더 많은 인수가 전달되었을 때도, arguments 객체를 사용해 모든 인수에 접근 가능**
- **화살표 함수에서는 사용 불가**, 화살표 함수에서 인수에 접근하려면 `rest parameters` (`...`)를 사용

```js
function example(a, b) {
  console.log(arguments[0]); // 첫 번째 인수 a
  console.log(arguments[1]); // 두 번째 인수 b
  console.log(arguments[2]); // 세 번째 인수 (없을 경우 undefined)
}

example(1, 2, 3);
// 출력:
// 1
// 2
// 3
```

```js
// 함수에서 return이 실행되면 그 이후 코드는 실행되지 않음.

function arg() {
  console.log(arguments);
  //자바스크립트에 있는 arguments라는 객체는 함수 내에서 사용 가능한 특별한 객체.
  // 함수를 호출할 때 전달된 모든 인수를 포함.
}

arg(7, 3); //Arguments(2) [7, 3,]

function sum3() {
  return arguments[0] + arguments[1];
}
console.log(sum3(3, 7)); //10
```

## 화살표 함수

- Arrow function은 자바스크립트의 ES6에서 도입된 새로운 함수 표현식.
  - 간결한 문법 제공, 특히 `this` 바인딩 방식에서 중요한 차이점 가짐.

1. `function`이라는 키워드 대신 화살표(`=>`)이용해서 함수 작성 가능. 소괄호 이용해서 (매개변수) 입력, 중괄호로 묶어서 얼마든지 함수 코드 작성 가능.

```js
//화살표 함수
// () => {} vs function () {}

const double = function (x) {
  return x * 2;
};

console.log("double: ", double(7));

const doubleArrow = (x) => {
  console.log("hi");
  return x * 2;
};

console.log("doubleArrow", doubleArrow(7));
```

2. 만약에 함수의 본문이 단일 표현식(한줄 코드)이라면, 중괄호랑 `return` 키워드 생략 가능. 매개변수가 하나면 매개변수 둘러싼 소괄호도 생략 가능.

```js
const doubleArrow2 = (x) => x * 2;
const doubleArrow3 = (x, y) => x * y;
```

3. 매개변수 없을 때 빈괄호 사용.

```js
const greet = () => "Hello!";
console.log(greet()); // 출력: "Hello!"
```

4. 중괄호를 쓰는 객체데이터 출력하고 싶을 때 소괄호 이용!!

```js
//하지만, 화살표함수는 중괄호{}로 함수 내부 코드 작성함. 거러면 {} 객체 데이터 자체를 반환하고 싶을땐?
// 그때는 ({}) 소괄호로 중괄호를 감싸주면 됨.

const printbraces = (x) => ({ name: "jiwon" });

console.log(printbraces(2));
```

### 화살표 함수의 this 바인딩

- 일반 함수와 달리, 화살표 함수는 자신만의 this를 가지지 않고, 외부 컨텍스트(함수를 정의할 때의 this)를 사용

1. 일반함수의 `this`:

```js
function Person() {
  this.age = 0;

  setInterval(function () {
    this.age++; // 일반 함수의 `this`는 글로벌 객체(브라우저에서는 `window`)를 참조합니다.
    console.log(this.age);
  }, 1000);
}

const p = new Person(); // NaN (정확한 `this` 바인딩을 위해 `bind(this)` 필요)
```

2. 화살표 함수와 `this`:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 화살표 함수의 `this`는 외부 함수(Person)의 `this`를 참조합니다.
    console.log(this.age);
  }, 1000);
}

const p = new Person(); // 1, 2, 3, ... (정상적으로 `this`가 바인딩됨)
```

- 화살표 함수는 자신만의 this를 가지지 않기 때문에, 상위 스코프의 this를 그대로 사용. 이로 인해 콜백 함수에서의 this 문제를 쉽게 해결 가능.

### 화살표 함수의 사용 제한

1. arguments 객체: 화살표 함수는 arguments 객체를 지원하지 않음.

```js
const func = () => {
  console.log(arguments); // ReferenceError: arguments is not defined
};
```

2. `new` 키워드로 호출 불가: 화살표 함수는 생성자 함수로 사용할 수 없음. 즉, `new` 키워드를 사용해 인스턴스를 생성할 수 없음.

```js
const MyClass = () => {};
const instance = new MyClass(); // TypeError: MyClass is not a constructor
```

3. 메서드로 사용 불가: 객체의 메서드로 화살표 함수를 사용하는 것은 권장되지 않음. this가 의도치 않게 바인딩될 수 있기 때문.

```js
const obj = {
  value: 42,
  method: () => {
    console.log(this.value); // `this`는 obj가 아닌 외부 컨텍스트를 참조합니다.
  },
};

obj.method(); // 출력: undefined
```

## 즉시 실행 함수

- IIFE: Immediately-Invoked Function Expression
- **함수를 정의하자마자 바로 실행되는 자바스크립트 함수**

1. 함수선언을 괄호()로 감싸고, 끝에 괄호() 붙여넣기

```js
(function () {
  // 여기에 실행될 코드가 들어갑니다.
})();
```

2. 함수선언 끝에 괄호()붙이고, 전체를 괄호()로 감싸기

```js
(function () {
  // 여기에 실행될 코드가 들어갑니다.
})();
```

- 예시

```js
//즉시실행함수

const a = 7;
function double() {
  console.log(a * 2);
}

double();

(function () {
  console.log(a * 2);
})();

(function () {
  console.log(a * 2);
})();
```

## 호이스팅(Hoisting)

- 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상.
- 함수 표현식을 써서 함수 정의를 하면 함수를 표현하기 전에 호출을할 때 에러가 뜸.
- 하지만, 함수를 선언하면, 함수 호출을 함수 선언 전에해도 동작함.

* 함수 호출 시 위에 함수 선언을 하게되면 앞에 보여지는 로직과 내용이 너무 길어서 보통 **호이스팅을 이용해, 함수 호출을 위에서하고(함수 이름만 보고 대출 어떤 역할을 할지 추측할 수 있음) 전체코드의 최하단 부분에 관련 함수를 작성하는 경우가 많음.**

```js
//호이스팅
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상.
const a = 7;

double();

function double() {
  console.log(a * 2);
}

// const double = function () {
//   console.log(a * 2);
// };
```

## 타이머 함수

- **setTimeout(함수, 시간): 일정 시간 후 함수 실행**
- **setInterval(함수, 시간): 시간 간격마다 함수 실행**
- **clearTimeout(): 설정된 Timeout 함수를 종료**
- **clearInterval(): 설정된 Interval 함수를 종료**

```js
setTimeout(function () {
  console.log("hello");
}, 3000); //3000 ms = 3s, 3초뒤 hello 뜸.

setTimeout(() => console.log("arrow"), 4000);

const timer = setTimeout(() => {
  console.log("now");
}, 2000);

const h1El = document.querySelector("h1");
h1El.addEventListener("click", () => {
  clearTimeout(timer);
}); //2초전에 h1 태그 누르면 타이머 걸어놓은 것이 멈춰버림. 그래서 now 출력 안됨.

const timer2 = setInterval(() => {
  console.log("hey");
}, 1000); //원래는 계속해서 hey가 1초마다 출력됨.

// 클릭했을때 멈추고 싶음.
h1El.addEventListener("click", () => {
  clearInterval(timer2);
});
```

## 콜백 (call back) 함수

- **다른 함수에 인수로 전달되어 나중에 호출되는 함수**
- 비동기 작업 처리, 함수의 실행 순서 제어할 때 자주 사용됨.
- 콜백함수는 **함수의 매개변수로 전달되어, 특정 작업이 완료되거나 특정 조건이 충족되면 호출됨**.

1. 기본 예시

```js
function greeting(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  var name = "John";
  callback(name);
}

processUserInput(greeting); // 출력: Hello, John
```

2. 비동기 작업(asynchronous operation, 작업을 즉시 완료하지 않고, 나중에 완료될 수 있는 작업)에서의 콜백 함수

```js
console.log("Start");

setTimeout(function () {
  console.log("This is the callback function");
}, 2000);

console.log("End");

// 출력:
// Start
// End
// This is the callback function (2초 후에 실행)
```

- `setTimeout`함수는 비동기적으로 2초 후에 콜백함수를 수행.

```js
//콜백 (Callback)
//함수의 인수로 사용되는 함수

//setTimeout(함수, 시간)

(function timeout1() {
  setTimeout(() => {
    console.log("test");
  }, 2000);
})();

console.log("test2");
// 위 코드를 실행시키면 test2가 먼저나오고, 1초뒤 test가 출력됨.
// 만약 내가 test2가 test이후에 출력될 수 있도록 보장하고 싶다면?
// 그떄 callback 함수가 유용!!

// 아래 코드는 timeout2에 매개변수 설정해서 hiii바로 다음에 done!이 출력될 수 있도록 만들었음.
// timeout2를 실행 시 인수로 함수를 받음.
function timeout2(cb) {
  setTimeout(() => {
    console.log("hiii");
    cb();
  }, 3000);
}

timeout2(() => {
  console.log("done!");
});
```

### 콜백 함수의 단점과 해결 방법

- 콜백 헬(Callback Hell): 콜백 함수가 중첩되면 코드가 복잡해지고 가독성이 떨어지며, 유지보수가 어려워짐. 이를 콜백 헬이라고함.
  - 해결방법: `Promise`와 `async/await`

```js
// Promise 예시
doSomething()
  .then((result1) => doSomethingElse(result1))
  .then((result2) => doAnotherThing(result2))
  .then((result3) => doSomethingMore(result3))
  .catch((error) => console.error(error));

// async/await 예시
async function asyncTask() {
  try {
    const result1 = await doSomething();
    const result2 = await doSomethingElse(result1);
    const result3 = await doAnotherThing(result2);
    const result4 = await doSomethingMore(result3);
  } catch (error) {
    console.error(error);
  }
}
```

## JS 클래스

```js
const jiwon = {
  firstName: "jiwon", //속성(property)
  lastName: "Lee",
  getFullName: function () {
    //메소드(method)
    return `${this.firstName} ${this.lastName}`;
    // grave accent, backtick (`) : 문자데이터 사이에 다른 데이터가 보관되어서 들어감.
  },
  // 속성과 메소드를 통틀어서 맴버라고 부름.
}; //객체 데이터

console.log(jiwon);
console.log(jiwon.getFullName());
```

- 위의 코드처럼 객체데이터로 속성과 메소드를 만들어 사용이 가능했다. 만약에, jiwon뿐만 아니라 다른 사용자의 이름들도 똑같은 구조로 객체화 시키고 싶다면, 그들의 객체를 jiwon처럼 하나씩 다 만들어야할까?

  - 그들의 객체를 하나씩 다 저장한다면 메모리를 너무 많이 차지할 것이다.
  - 하나하나 객체를 만드는 것이 귀찮고, 복잡해질 수 있다.

- 위와 같은 문제를 해결하기 위해 사용되는 것이 **클래스**임.

```js
function user(first, last) {
  this.firstName = first;
  this.lastName = last;
}
// 여기서 보이는 this는 각각 jiwon, amy, nai로 인스턴스를 지칭함.

const jiwon = new user("Jiwon", "Lee"); //생성자 함수 (객체데이터가 생성됨.)
console.log(jiwon);

const amy = new user("Amy", "Pe"); //생성자 함수 (객체데이터가 생성됨.)
console.log(amy);

const nai = new user("Nai", "Choi"); //생성자 함수 (객체데이터가 생성됨.)
console.log(nai);

const hi = {}; //리터럴 방식: 근데 객체데이터 만들 때 그냥 중괄호를 이용해서 손쉽게 만들수 있음.
// 리터럴 방식이란, 특정한 기호만 가지고 데이터를 만들어 내는 것.
//(ex) "A" : 따옴표이용해서 문자데이터 만들기,  [] : 배열데이터 만들기

user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
//prototype 많이 이용 (자바스크립트를 prototype 기반 언어라고 부름)
// prototype과 함께 new라는 키워드와 함께 인스턴스를 만들어내는 개념을 class라고 부름
// 다른 프로그래밍 언어의 class와는 조금 다른 개념.

console.log(jiwon.getFullName());
```

- 위처럼 클래스를 만들면, 함수와 구분이 안됨. 그래서 **파스칼 케이스(PascalCase, 단어의 첫 문자는 대문자이고 단어 사이의 공백이나 구분자대신 대문자로 사용하는 것)**로, user이 아닌 User 이렇게 이름을 만들어줌.

```js
function User(first, last) {
  this.firstName = first;
  this.LastName = last;
}
```

### 리터럴 방식(literal)

- 객체를 생성하는 가장 간단하고 직관적인 방법. 중괄호 {}를 사용해 객체를 바로 정의

### Prototype 방식

- 자바스크립트는 프로토타입 기반(prototype-based) 언어
- 모든 객체는 다른 객체로부터 상속받으며, 이 상속의 메커니즘이 프로토타입
- 객체는 **프로토타입이라는 속성을 통해 다른 객체의 속성이나 메서드를 공유**할 수 있음.

## this

1. **일반(Normal) 함수**는 **호출위치**에 따라 this 정의
2. **화살표(Arrow) 함수**는 **자신이 선언된 함수 범위**에서 this 정의

- **화살표 함수는 예외적으로 this 바인딩이 존재하지 않음**. 내부의 this를 참조하면서 스코프체인을 통해 상위 스코프의 this를 그대로 참조함. 
- 화살표 함수의 this는 정의된 위치에 따라 결정됨.
- 중첩 함수의 경우, 스코프 체인 상에서 가장 가까운 상위 함수 중 화살표 함수가 아닌 함수의 this 참조. 만약 상위 함수가 없다면 최상위 스코프인 window 전역 개체 가리킴.

- 일반 함수는 동적으로, 화살표 함수는 정적으로 this 객체 결정됨. 정적인 화살표 함수는 바인딩으로도 this 값 변경 불가.

```js
//this

const jiwon = {
  name: "jiwon",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
// 일반함수는 출력 잘 됨. 화살표함수는 출력하지 못함.

jiwon.normal(); //jiwon
// 일반함수는 호출 위치에 따라 this 정의: 즉, 여기서 호출되었을 때 인스턴스는 jiwon임. 즉, 여기서 this는 jiwon임.

jiwon.arrow(); //undefined
//화살표함수 내부에서의 this는 자신이 선언된 함수 내부에서 this를 찾으려고 하지만, 정의되어있지 않음.

const amy = {
  name: "Amy",
  normal: jiwon.normal,
  // 여기서는 함수가 호출된 것이 아닌 함수가 할당된 것임!
  // jiwon.normal() 이런식으로 ()가 붙어야 호출임.
  arrow: jiwon.arrow,
};

amy.normal(); //Amy
// 호출될 때 연결되어져 있는 this는 Amy임으로, Amy 출력됨.
amy.arrow(); //undefined
```

```js
function User(name) {
  this.name = name;
}

User.prototype.normal = function () {
  console.log(this.name);
};

User.prototype.arrow = () => {
  console.log(this.name);
};

const jiwon = new User("jiwon");

jiwon.normal(); //jiwon
jiwon.arrow(); //undefined
```

## 화살표 함수의 this
- **화살표 함수의 `this`는 언제나 상위 스코프의 `this`를 의미.
```js
const timer = {
  name: "jiwon",
  timeout: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

timer.timeout(); //undefined
// 왜 일반함수로 입력했는데 undefined 된 것일까?
// 일반 함수는 호출 위치에 따라 this를 정의함.
// 여기서는 setTimeout이라는 함수의 내부 로직으로 콜백이 들어가서 어디선가 실행됨.
// 그래서 출력안됨.

const timer2 = {
  name: "this time",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

timer2.timeout(); // this time
```
### 바인딩?
- **바인딩**이란 식별자와 값을 연결하는 과정
- **this**는 자신이 속한 객체 또나느 자신이 생성할 인스턴스를 가리키는 식별자.

```js
console.log(this); // 여기서의 this는 전역 객체인 window를 가리킴. 
// Window

const a = {
  name: "jiwon",
  getName() {
    console.log(this);
  }
}

a.getName(); // 여기서 this는 a를 가리킴.

const b = a.getName; //b에다가 console.log(this)라는 내용의 함수인, getName() 자체를 할당.
b(); // 그래서 맨 위의 console.log(this)와 같은 역할 수행
// 즉, 전역객체인 Window 출력
```
 - 정리하자면, 콜백 함수가 객체 안에 쓰여진 건 맞지만, 콜백함수는 그 객체 안에서 항상 실행되는 것이 아님. 여기서도 setTimeout 의 콜백함수는 지정된 시간 뒤 어디선가 콜백함수가 실행됨. 이처럼 콜백 함수는 그 실행 맥락에 따라 `this`가 결정되기 떄문에, 객체 안에 있다고 항상 그 객체의 `this`를 가리키지 않음. 결과적으로 여기서 setTimeout 의 콜백함수가 일반함수로 쓰여졌으므로, 객체 안에서 실행되는 것이아니고, 객체 밖 어디선가 쓰여짐. 그러므로 여기서 `this`는 전역객체(window)를 가리키고 전역객체는 name이 없어서, `undefined` 결과값이 나옴.
 - 반대로 화살표 함수의 `this`는 화살표 함수의 상위 객체의 `this`를 가리키는데, 여기서 화살표 함수의 상위 객체는 `timeout`이고, 이 `timeout`의 `this`는 이 메소드를 갖는 객체인 `timer2`이다. 즉, 그래서 `timer2.timeout()`을 실행하면 `timer2`의 이름이 출력됨.


### 콜백함수?
- 인수로 전달되는 함수. 특정 작업이 완료된 후 호출되는 함수. 보통 비동기 작업(이벤트 처리, 네트워크 요청 등)에서 작업이 끝나면 호출되어 후속 처리 수행.
  - (ex) setTimeout(함수, 시간) 여기서의 함수.
- 화살표 함수는 콜백 함수 내부와 외부의 this 문제를 해걀하기 위해 의도적으로 설계됨 함수.


## 화살표 함수 vs 일반 함수

1. this
 - **일반함수**
    - 자바스크립트에서 *모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가*된다. 
    - 일반함수에서 this가 바인딩 될때 여러가지 경우의 수를 보자면,
      1) 함수 실행시에는 전역(window) 객체를 가리킴.
      2) 만약 메소드를 실행한다면, 전역 객체가 아닌, 그 메소드를 소유하고 있는 객체를 가리킴.
      3) 생성자 실행시에는 새롭게 만들어진 객체를 가리킴.
      
    - 이처럼 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아님. 상황에 따라 함수를 호출할 때 어떻게 호출되었는지에 기반하여 this에 바인딩할 객체가 동적으로 결정됨.

  - **화살표 함수**
    - 화살표 함수는 *함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정*된다.
    - 화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다.(Lexical this)
    - call, apply, bind 메소드를 사용하여 this를 변경할 수 없다.

    - 예시:

    ```js
      function fun() {
        this.name = "hey";
        return {
          name: "day",
          speak: function () {
            console.log(this.name);
          },
        };
      }

      function arrFun() {
        this.name = "hey";
        return {
          name: "day",
          speak: () => {
            console.log(this.name);
          },
        };
      }

      const fun1 = new fun();
      fun1.speak(); // hey

      const fun2 = new arrFun();
      fun2.speak(); // day

    ```
    - 일반함수의 경우, 여기서는 메소드가 실행되었음으로 메소드를 가지고 있는 객체인 fun()을 this로 생각함. 그래서 fun()의 name인 'hey'가 출력됨.
    - 반면, 화살표함수의 경우, 상위 스코프의 this를 가리키는데, 상위스코프는 return 스코프임으로, return 스코프 내에 있는 name인 'day'가 출력됨.    


2. 생성자 함수로 사용 가능 여부
  - 일반 함수는 생성자 함수로 사용할 수 있다.
  - 화살표 함수는 생성자 함수로 사용할 수 없다. prototype 프로퍼티를 가지고 있지 않기 때문이다.

    ```js
      function fun() {
        this.num = 1234;
      }
      const arrFun = () => {
        this.num = 1234;
      };

      const funA = new fun();
      console.log(funA.num); // 1234

      const funB = new arrFun(); // Error

    ```
3. arguments 사용 가능 여부
  - 일반 함수 에서는 함수가 실행 될때 암묵적으로 arguments 변수가 전달되어 사용할 수 있다.
  - 화살표 함수에서는 arguments 변수가 전달되지 않는다.
    ```js
    function fun() {
      console.log(arguments); // Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    }

    fun(1, 2, 3);
    일반함수는 arguments변수가 전달되어 [1,2,3]이 찍히지만

    const arrFun = () => {
      console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    };

    fun(1, 2, 3);
    ```

