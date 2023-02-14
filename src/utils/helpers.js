export function validateEmail(email) {
    const regEx = /^([\w_\-.])+@([\w-]+\.)+([\w-]{2,4})$/i;
    return regEx.text(String(email));
}