 
function checkUserData(name, password) {

    const nameLength = name.length;
    if (nameLength < 6 || nameLength > 10){
        return "Error: The Length of your name must be 6 to 10 Characters";
    }
    const passwordLength = password.length;
    if (passwordLength > 5 && passwordLength < 11){
        return "Error: Make your Paswrod length between 6 and 10 Characters";
    }
}
console.log(checkUserData("gideon", " man$1"));
