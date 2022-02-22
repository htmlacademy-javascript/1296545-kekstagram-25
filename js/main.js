function getRandomInt(min, max) {
if(min < 0) {
 return 0;
}
if(min === max) {
return 0;
}
if (min > max) {
return 0;
}
return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(2, 5));


