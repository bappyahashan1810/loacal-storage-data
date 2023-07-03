const fieldSection = (idName) => {
    const field = document.getElementById(idName);
    const fieldValue = field.value;
    return fieldValue;

}

const setLocalStorage = (value) => {
    localStorage.setItem('name', value);
}
const setLocalStorageAge = (age) => {
    localStorage.setItem('age', age)
}

const addName = () => {
    const name = fieldSection('name-field');
    setLocalStorage(name);

}

const addAge = () => {
    const age = fieldSection('age-field');
    setLocalStorageAge(age);
}

const removeName = () => {
    localStorage.removeItem('name');
}

const removeAge = () => {
    localStorage.removeItem('age');
}