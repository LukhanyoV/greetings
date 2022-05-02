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
    const setUserName = name => userName = validUserName(name) ? `${name.trim()[0].toUpperCase()+name.trim().toLowerCase().slice(1)}`:"Invalid name given!";
    const setGreetLanguage = language => greetLanguage = greets[language.toLowerCase()];

    // get me
    const getUserName = () => userName;
    const getGreetLanguage = () => greetLanguage;
    const getGreetedUsers = () => greeted.filter(x=>x!=="");

    // use me
    const makeGreet = () => {
        if(getGreetLanguage() === undefined || getGreetLanguage() === ""){
            return "Invalid language specified!"
        } else if(getUserName() === "" || getUserName() === "Invalid name given!"){
            return "Invalid name given!";
        } else {
            userGreeted(getUserName());
            return `${getGreetLanguage()}, ${getUserName()}`
        }
    };
    const userGreeted = name => !greeted.includes(name) && greeted.push(name);
    const validUserName = name => /^[a-z]{3,}$/i.test(name.trim());
    const resetName = () => userName = "";
    const getLength = () => getGreetedUsers().length;

    // make useable 
    return {
        setUserName,
        setGreetLanguage,
        
        getUserName,
        getLength,
        getGreetedUsers,

        makeGreet,
        userGreeted,
        resetName
    }
}