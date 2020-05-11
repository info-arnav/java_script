//currying

const add = (a, b) => {
  return a + b;
};

const curry = (f) => (a) => (b) => {
  return f(a, b);
};

const uncurry = (f) => (a, b) => {
  return f(a)(b);
};

result1 = add(1, 5);

value = curry(add)(1);

result2 = value(5);

result3 = uncurry(curry(add))(1, 5);

console.log(result1, result2, result3);

//filter

arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter = (array, func) => {
  return array.filter(func);
};

curriedFilter = curry(filter);

value = curriedFilter(arra);

random = (a) => {
  array = [];
  array.push(a);
  return array;
};

result4 = value(random);

console.log(result4);

//modulo

modulo = (a) => {
  a % 2 === 0 ? empty.push(a) : null;
};

empty = [];

nArra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

nArra.filter(modulo);

console.log(empty);

//replace

sentence = "i am a normal sentence";

sentenceToArray = (mkey) => {
  return mkey.split("");
};

converted = sentenceToArray(sentence);

console.log(converted);

//
