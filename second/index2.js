function fetchFruits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fruits = ["사과", "망고", "포도"];
      resolve(fruits);
      reject(new Error('알 수 없는 에러 발생! 아이템을 가져올 수 없음'));
    }, 1000);
  });
}


//async await 방식
const temp = [];

//async await 방식
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log(fruits);
    return fruits;
  } catch (error) {
    console.log(error);
  }
}

printItems();

//fetch
// const temp = [];
// fetchFruits()
//   .then((f) => {
//     f.forEach(fruits => {
//       temp.push(fruits);
//     });
//     console.log(temp);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
