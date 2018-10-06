// A Function Expression is created when the execution reaches it and is usable from then on — it is not hoisted.
const sum1 = function(a, b) {
    return a + b;
};

// A Function Declaration can be called both before and after it was defined — it is hoisted.
function sum2(a, b) {
    return a + b;
}
