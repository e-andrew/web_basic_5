const form = document.getElementById("form-id");
const fullname = document.getElementById("fullname-id");
const variant = document.getElementById("variant-id");
const phonenumber = document.getElementById("phonenumber-id");
const faculty = document.getElementById("faculty-id");
const address = document.getElementById("address-id");
const cell = document.getElementById("cell-id");
const colorpicker = document.getElementById("colorpicker-id");
const column = document.getElementsByName("cell-name");

const fullnameRegex = /^[А-ЯҐЄІЇ][а-яґєії]* [А-ЯҐЄІЇ][.][А-ЯҐЄІЇ][.]$/;
const variantRegex = /^[0-9]{2}$/;
const phonenumberRegex = /^[(][0-9]{3}[)]-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const facultyRegex = /^[А-ЯҐЄІЇ]{4}$/;
const addressRegex = /^м. [0-9]{6}$/;

const fullnameMessage = "You need 'Ттттттт Т.Т.' format.";
const variantMessage = "You need 'чч' format.";
const phonenumberMessage = "You need '(ччч)-ччч-чч-чч' format.";
const facultyMessage = "You need 'ТТТТ' format.";
const addressMessage = "You need 'м. чччччч' format.";


function validate(element, regex, message) {
    var isValid = regex.test(element.value);

    if (isValid) {
        element.setCustomValidity("");
    } else {
        element.setCustomValidity(message);
        element.reportValidity();
    }

    return isValid;
}


function onFullnameInput(e) {
    validate(e.target, fullnameRegex, fullnameMessage);
}

function onVariantInput(e) {
    validate(e.target, variantRegex, variantMessage);
}

function onPhonenumberInput(e) {
    validate(e.target, phonenumberRegex, phonenumberMessage);
}

function onFacultyInput(e) {
    validate(e.target, facultyRegex, facultyMessage);
}

function onAddressInput(e) {
    validate(e.target, addressRegex, addressMessage);
}

function onFormSubmit(e) {
    var isFullnameValid = validate(fullname, fullnameRegex, fullnameMessage);
    var isVariantValid = validate(variant, variantRegex, variantMessage);
    var isPhonenumberValid = validate(phonenumber, phonenumberRegex, phonenumberMessage);
    var isFacultyValid = validate(faculty, facultyRegex, facultyMessage);
    var isAddressValid = validate(address, addressRegex, addressMessage);

    if (!(isFullnameValid && isVariantValid && isPhonenumberValid && isFacultyValid && isAddressValid)) {
        e.preventDefault();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
    return `rgb(${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`;
}

function onMouseOver(e) {
    e.target.style.backgroundColor = randomColor();
}

function onClick(e) {
    e.target.style.backgroundColor = colorpicker.value;
}

function onDoubleClick(e) {
    column.forEach((cell) => { cell.style.backgroundColor = colorpicker.value; });
}

form.addEventListener("submit", onFormSubmit);
fullname.addEventListener("input", onFullnameInput);
variant.addEventListener("input", onVariantInput);
phonenumber.addEventListener("input", onPhonenumberInput);
faculty.addEventListener("input", onFacultyInput);
address.addEventListener("input", onAddressInput);
cell.addEventListener("mouseover", onMouseOver);
cell.addEventListener("click", onClick);
cell.addEventListener("dblclick", onDoubleClick);