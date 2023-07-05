const lengthDOM = document.querySelector('.length')
const upperCaseDOM = document.querySelector('.upperCase')
const lowerCaseDOM = document.querySelector('.lowerCase')
const numsDOM = document.querySelector('.nums')
const symbolDOM = document.querySelector('.symbol')

const createDOM = document.querySelector('.create')
const copyDOM = document.querySelector('.copy')
const inputDOM = document.querySelector('.input')

function PasswordGenerator() {

    const length = lengthDOM.value;
    const useUpperCase = upperCaseDOM.checked;
    const useLowerCase = lowerCaseDOM.checked;
    const useNums = numsDOM.checked;
    const useSymbol = symbolDOM.checked;

    let result = '';
    if (useUpperCase) result += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowerCase) result += 'abcdefghijklmnopqrstuvwxyz';
    if (useNums) result += '0123456789';
    if (useSymbol) result += '!@#$%^&*().-';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * result.length);
        password += result[randomIndex];
    }

    inputDOM.value = password;
}

createDOM.addEventListener('click', PasswordGenerator);

copyDOM.addEventListener('click', () => {
    inputDOM.select()
    document.execCommand('copy')
});

const deleteDOM = document.querySelector('.delete');

deleteDOM.addEventListener('click', () => {
    inputDOM.value = '';
})