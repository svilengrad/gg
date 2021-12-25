let car = [1, 2, 3];
let car1 = car[0]//1 2 3
car[0] = car[2]//3 2 3
car[2] = car1// 3 2 1
console.log(car)
