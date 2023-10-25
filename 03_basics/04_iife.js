// Immediately Invoked Function Expressions (IIFE)
// we use this so that the global space do not pollute 
(function chai(){
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`DB Connected name: ${name}`)
})('pankaj');

