// AND - OR
// Rule 1
// If LHS is falsy -> return LHS
console.log("Rule 1");
console.log(!!(false && 0));
console.log(false && 'Something');
console.log(null && 'Something');
console.log(0 && '1');
let c = ({} && null);
console.log(c);
console.log('' && 'Something');


// Rule 2
// If LHS is truthy -> return RHS?
console.log("Rule 2");
console.log((true && false));
console.log((true && true));
console.log(('sth' && false));
console.log((1 && 1));
console.log((1 && 'undefined'));
let a = (true && {})
console.log(typeof a);


// Short circuit example
function getFalse() {
    console.log("Get False ");
    return false;
}
function getTrue() {
    console.log("Get True");
    return true;
}
console.log('Short Circuit\n');

console.log('getFalse() && getFalse()', getFalse() && getFalse());

console.log('\nShort Circuit\n');

console.log('getTrue() && getFalse()', getTrue() && getFalse());

// usecase
let rain = true;
rain && console.log("It's raining");
