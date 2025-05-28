const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car); // format: JSON

//역직렬화: JSON:parse() -> 통신하여 받은 데이터를 객체로 변환
//json to js obj
//JSON 형식의 문자열을 JavaScript 객체로 변환
const obj = JSON.parse(car);
console.log(obj); //js obj

console.log("-------------------------");

console.log(obj.model);
console.log(obj.price);
console.log(obj.hello);//존재하지 않는값으로 undefined

console.log("-------------------------");

const json = JSON.stringify(obj);
console.log(json, typeof(json));

console.log("-------------------------");

//json 변수는 JSON 형태의 "문자열(string)"이므로
// .(dot)/[] 연산자를 이용해서 키 값에 접근이 불가능
console.log(json.model);//undefined
console.log(json.price);//undefined
console.log(json.hello);//undefined
