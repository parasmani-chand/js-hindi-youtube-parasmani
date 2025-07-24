// Immediately Invoked Function Expressions (IIFE)
// IIFE does not have more "priority" in execution order; it simply runs immediately when defined.
// It is used to avoid polluting the global scope by creating a local scope for variables.
// global scope ko pollution le problem hunxa deherai choti (globlal 
// scope ko variable yo jun sukai pollution ) tei problem lai hatauna

(function chai(){
    // chai is named iife
    console.log(`DB CONNECTED`);
})();


( (name) => {  // without parameter pani hunxa just statement no parameter and call hune bela ni mathi ko jastai ()
    console.log(`DB CONNECTED TWO ${name}`);     //this is simpled iife  (unnamed iife) with parameter 
})("Parasmani")   //same tei called vako ho yo


// mathi ko chai duita iife lekhne vaye eutai file ma ; chaahi hunu parxa