// get the references to the dom element
const myform = document.querySelector("#myform");
const user_input = document.querySelector("#user-input");
const submit_greet = document.querySelector("#submit-greet");
const reset_greet = document.querySelector("#reset-greet");
const output_greet = document.querySelector("#output-greet");
const counter = document.querySelector("#counter");

// make instance of our factory factory functions
const greetMe = Greetings();

// some beautiful functions
const formReset = () => myform.reset(); // reset the form after submit
// persist the users array
const persistUsers = users => localStorage.setItem("greetedUsers", JSON.stringify(users));
const getPersistedUsers = () => JSON.parse(localStorage.getItem("greetedUsers"));

// create the unorded list
let ul = document.createElement("div");
ul.classList.add("greetedUsers");
document.querySelector(".container").append(ul);

// add me
const addMe = me => {
    let li = document.createElement("span");
    li.classList.add("span-list");
    li.textContent = `${me}`;
    document.querySelector(".greetedUsers").appendChild(li);
}

// populate the greeted users using localstorage
getPersistedUsers() !== null && getPersistedUsers().forEach(element => {
    greetMe.userGreeted(element);
    addMe(element);
});

// reset output on load
// output_greet.textContent = "";
counter.textContent = greetMe.getLength();

// handle submit button click event
submit_greet.addEventListener("click", (e) => {
    // prevent the page from refreshing
    e.preventDefault();

    // set the user name from form field
    greetMe.setUserName(user_input.value);

    // set the language from checked radio button
    const lang = document.querySelector("input[type=radio]:checked") || "";
    greetMe.setGreetLanguage(lang.value);

    // output results to screen and reset the form
    output_greet.textContent = greetMe.makeGreet();
    // const users = getPersistedUsers() === null ? greetMe.getGreetedUsers() : getPersistedUsers(); // factory dies after reload
    persistUsers(greetMe.getGreetedUsers());
    counter.textContent = greetMe.getLength(); // return the length of the greeted users array
    if(!["Invalid language specified!", "Invalid name given!", ""].includes(greetMe.getUserName())) addMe(greetMe.getUserName());
    greetMe.resetName();


    // add me

    // reset for fields
    formReset();
    clearMessage();
});

// when the reset button is clicked the page will reload 
// which will reset the counter from thhe factory function
// add logic to reset without the help of the page refreshing
reset_greet.addEventListener("click", () => {
    alert("Reset successful");
    localStorage.clear("greetedUsers");
});

const clearMessage = () => setTimeout(() => output_greet.innerHTML = "&copy;LukhanyoV",3000);

