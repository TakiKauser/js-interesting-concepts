/* 
<== scopes ==>

1. local scope
2. global scope 
3. block scope // let, const
4. hoisting 
5. globaleaking
*/
const add = (first, second) => {
    if (first === second) {
        const equal = first; // block scope
    }
    const result = first + second; // local scope
    return result;
}
const sum = add(11, 17);
console.log(sum);