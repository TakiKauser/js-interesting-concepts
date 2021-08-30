function triple(x, y, z) {

}
// console.log(typeof triple);
// console.log(triple.length);
// console.log(typeof null); //(object!)
let p = 'JavaScript';
let q = p;
p = 'React';
// console.log(q);
const isTrue = 'false';
if (!isTrue) { // false == 'false'
    console.log('hello');
}
else {
    console.log('world');
}
function work(x, y = 4) {
    return x + y;
}
console.log(work(32);