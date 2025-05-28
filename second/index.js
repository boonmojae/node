async function f1() {
  return 1;
}

async function f2() {
  return Promise.resolve(1);
}

console.log("1 >> ", f1());
f1().then(function (result) {
  console.log("2 >> ", result);
});

console.log("3 >>", f2());
f2().then(function (result) {
  console.log("4 >>", result);
});

const f3 = async () => {
  return 3;
};