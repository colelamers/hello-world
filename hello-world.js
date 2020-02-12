// Hello World JavaScript
// don't forget to validate at https://jslint.com

/*jslint devel: true, browser: true */

/*ALL THE CODE ABOVE THIS NEEDS TO BE HERE FOREVER AND EVER...AAAMMMEEEENNNN!!*/

// self-executing "global" anonymous function
// it's here to keep variable and function scope
// contained within our script
(function () {

    // use strict enforces more rules
    // rules make us better programmers

    "use strict"; /* This type of comment can be used for commenting out code
    on multiple lines */

    // === === === === === === === === === === === === ===
    // === === === ===   global variables  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    // initializes a string variable, this means literally "just text"
    var new_column1 = "<p>In terms of aesthetics, this is equivalent to a";
    new_column1 += " bachelor pad!</p>";
    var new_column2 = "<p>I like to demonstrate that I know where this";
    new_column2 += " goes.</p>";
    var old_column1 = ""; /*we're initializing an empty variable with an
    empty string we want to initialize them before we use them below, as shown
    with the console.console.log actions being taken */
    var old_column2 = "";

    // this is how we output to the console log
    // useful for debugging your programs!
    console.log("-- hello_world.js starting --");
    console.log("new_column1: " + new_column1);
    console.log("old_column1: " + old_column1);
    console.log("new_column2: " + new_column2);
    console.log("old_column2: " + old_column2);
    console.log("-----------------------------\n\n\n");

    // === === === === === === === === === === === === ===
    // === === === ===   global functions  === === === ===
    // === === === ===      begin here     === === === ===
    // === === === === === === === === === === === === ===

    // "click" event listeneer with anonymous function (WHAT!?!?)

    function pageToggle() {

        // grab the current column1 column and save it!
        old_column1 = document.getElementById("hello-world-column1").innerHTML;

        // replace the screen contents of column1 column with new_text
        document.getElementById("hello-world-column1").innerHTML = new_column1;

        // grab the current column1 column and save it!
        old_column2 = document.getElementById("hello-world-column2").innerHTML;

        // replace the screen contents of column1 column with new_text
        document.getElementById("hello-world-column2").innerHTML = new_column2;

        console.log("-- updated by click --");
        console.log("new_column1: " + new_column1);
        console.log("old_column1: " + old_column1);
        console.log("new_column2: " + new_column2);
        console.log("old_column2: " + old_column2);
        console.log("----------------------\n\n\n");

        // this allows the "toggle" - we swap the old for the new!
        new_column1 = old_column1;
        new_column2 = old_column2;

        console.log("-- updated by \"toggle\" --");
        console.log("new_column1: " + new_column1);
        console.log("old_column1: " + old_column1);
        console.log("*** NOTE: new_column1 == old_column1 now! ***");
        console.log("new_column2: " + new_column2);
        console.log("old_column2: " + old_column2);
        console.log("*** NOTE: new_column2 == old_column2 now! ***");
        console.log("-------------------------\n\n\n");
    }
    document.body.addEventListener("click", pageToggle);

}());
