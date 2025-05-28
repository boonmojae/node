let product;
let price;

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민된다..");
}

function prickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 2000;
      resolve();//reject()를 하면 금액부족으로 
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}원`);
}

function noPay() {
  console.log("금액 부족");
}

async function exec() {
  goMart();

  try {
    await prickDrink();
    pay();
  } catch (err) {
    noPay();
  }
}

exec();