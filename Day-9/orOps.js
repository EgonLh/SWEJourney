console.log('\n OR \n');
function getFalse() {
    console.log(" Get False");
    return false;
}
function getTrue() {
    console.log(" Get true");
    return 'true';
}
// LHS is falsy return RHS
console.log('\nRule1\n');
console.log('false OR True :', false || true);
console.log('false OR "1" :', typeof (false || "1"));
console.log('0 OR {} :', 0 || {});
// Shortcurcuit
console.log('\n');
console.log(getFalse() || getFalse());

// LHS  is truthy return LHS
let obj = {
    valueOf() {
        return 'A'
    }
}
console.log('\nRule2\n');
console.log('obj || false', obj || false);
console.log('arr || false', [1,2] || null);
console.log('obj || false', true || false);
// Shortcurcuit
console.log('\n');
console.log(getTrue() || getFalse());

//Bit
console.log("\nBitwise Manipulation\n");
console.log(!!(getTrue() | getFalse()));

;