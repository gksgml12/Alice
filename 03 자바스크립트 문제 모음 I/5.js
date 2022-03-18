// 한식 가격
var korean = 7000;

// 중식 가격
var chinese = 6000;

// 양식 가격
var western = 8500;

// 할인된 한식의 가격
var discount_korean = 7000*0.9;

// 전체 예산을 계산하여 저장해 보세요.
var total_price = 55*discount_korean+43*chinese+52*western;

// 값을 확인해 보세요!
console.log("한식 : " + korean)
console.log("중식 : " + chinese)
console.log("양식 : " + western)
console.log("할인된 한식 : " + discount_korean)
console.log("전체 예산 : " + total_price)