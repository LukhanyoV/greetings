// factory function
const Greetings = () => {
    // initialize me
    let userName = "";
    let greetLanguage = "";
    const greets = {
        isixhosa: "Molo",
        english: "Hello",
        afrikaans: "Hallo"
    };
    const greeted = [];

    // set me
    const setUserName = name => userName = `${name.trim()[0].toUpperCase()+name.trim().toLowerCase().slice(1)}`;
    const setGreetLanguage = language => greetLanguage = language;

    // get me
    const getUserName = () => userName;
    const getGreetLanguage = () => greetLanguage;
    const getGreetedUsers = () => greeted;

    // use me
    const makeGreet = () => {
        userGreeted();
        if(!Object.keys(greets).includes(getGreetLanguage())) return "Invalid language specified!"
        return getUserName() !== "" ? `${greets[getGreetLanguage()]}, ${getUserName()}` : "Invalid name given!";
    };
    const userGreeted = () => !greeted.includes(getUserName()) && greeted.push(getUserName());

    const resetName = () => userName = "";

    // make useable 
    return {
        setUserName,
        setGreetLanguage,
        
        getUserName,
        getGreetedUsers,

        makeGreet,
        resetName
    }
}

// get the references to the dom element
const myform = document.querySelector("#myform");
const user_input = document.querySelector("#user-input");
const submit_greet = document.querySelector("#submit-greet");
const output_greet = document.querySelector("#output-greet");
const counter = document.querySelector("#counter");

// reset output on load
output_greet.textContent = "";

// make instance of our factory factory functions
const greetMe = Greetings();

// handle submit button click event
submit_greet.addEventListener("click", (e) => {
    // prevent the page from refreshing
    e.preventDefault();

    // set the user name from form field
    greetMe.setUserName(user_input.value);

    // set the language from checked radio button
    const lang = document.querySelector("input[type=radio]:checked").value || "";
    greetMe.setGreetLanguage(lang);

    // output results to screen and reset the form
    output_greet.textContent = greetMe.makeGreet();
    counter.textContent = greetMe.getGreetedUsers().length; // return the length of the greeted users array
    greetMe.resetName();

    // reset for fields
    formReset();
});

const formReset = () => myform.reset();