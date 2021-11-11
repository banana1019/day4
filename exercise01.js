// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

// 함수 호출
doSomething(add);

// 함수 선언
function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
const result = add(1, 2);
// console.log(result);

const addFun = add;
console.log(add);