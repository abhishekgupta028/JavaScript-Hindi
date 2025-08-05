// Immediately Invoked Function Expressions

(function chai(){
    // named IIFE (chai)
    console.log(`DB Connected`)
})();                               // ; has to be written at the end of a IIFE function if we want to write &
                                   // execute another IIFE here after previous IIFE.

( (name) => {
    console.log(`DB Connected again ${name}`);
} )("Abhishek")

// We can also write IIFE as Arrow function as above.