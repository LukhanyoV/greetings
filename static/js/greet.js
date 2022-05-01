// factory function
const Greetings = () => {
    // initialize me
    let userName = "";

    // set me
    const setUserName = name => userName = name;

    // get me
    const getUserName = () => userName;

    // use me
    const makeGreet = () => getUserName().trim() !== "" ? `Hello, ${getUserName()}` : "Invalid name given!";

    const resetName = () => userName = "";

    // make useable 
    return {
        setUserName,
        getUserName,
        makeGreet,
        resetName
    }
}

// get the references to the dom element
const myform = document.querySelector("#myform");
const user_input = document.querySelector("#user-input");
const submit_greet = document.querySelector("#submit-greet");
const output_greet = document.querySelector("#output-greet");

// reset output on load
output_greet.textContent = "";

// make instance of our factory factory functions
const greetMe = Greetings();

// handle submit button click event
submit_greet.addEventListener("click", (e) => {
    e.preventDefault();
    greetMe.setUserName(user_input.value);
    output_greet.textContent = greetMe.makeGreet();
    greetMe.resetName();

    // reset for fields
    formReset();
});

const formReset = () => myform.reset();