export const CheckEmail = (email) => {
    const reg = /[@]/
    if ( !reg.test(email) ){
        alert("Write proper email")
        return false;
    }
    return true;
}
export const CheckUser = (user) => {
    if( user.length < 5){
        alert("Username must be of atleast 4 Characters")
        return false;
    }
    return true;
}
export const CheckPass = (pass) => {
    const NumberReg = /\d/
    const AlphabetReg = /[abcdefghijklmnopqrstuvwxyz]/
    const SymbolReg = /[~!@#$%^&*()_+-{}<>/]/
    if ( !NumberReg.test(pass) || !AlphabetReg.test(pass) || !SymbolReg.test(pass) ){
        alert("Must be atleast one Number, Alphabet and Symbol")
        return false;
    } 
    return true;
}