const form = window.document.getElementById("form");
const category = window.document.getElementById('category');
const books = window.document.getElementById('book');
const email = window.document.getElementById('email');
const authorname = window.document.getElementById('name');
const published = window.document.getElementById('published');
const price = window.document.getElementById('price');
const output = document.getElementById('show-books');

let hasErrors = false;

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    hasErrors = true;

}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = "";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}



form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = validateInputs();
    if(!hasErrors && formData) {
        localStorage.setItem('book1',JSON.stringify(formData));
        if (localStorage.getItem('book1')) {
            window.location.href = 'showBook.html';
        }
    }
});






const isValid = (value) => {
    const re = /^[a-zA-Z]+$/
    return re.test(String(value));
};


const checkLength = (value) => {
    return String(value).length > 50;
};

const checkSpecialCharcter = (value) => {
    const re = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/
    return re.test(String(value));
};


const checkValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(String(email));
};

const checkPastValue = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    if(selectedDate <= currentDate) {
        return true;
    } else {
        return false;
    }
};

const checkInteger = (intValue) => {
    const re = /^\d+/
    return re.test(String(intValue));
};


const validateInputs = () => {
    const formData = {};
    const categoryValue = category.value.trim();
    const bookValue = books.value.trim();
    const emailValue = email.value.trim();
    const nameValue = authorname.value.trim();
    const publishedValue = published.value.trim();
    const priceValue = price.value.trim();
    if(bookValue === "") {
        setError(books,"Please enter the Book Name.")
    } else if(!isValid(bookValue)) {
        setError(books,"Numeric values not allowed")
    } else if(checkLength(bookValue)) {
        setError(books,"Book name length should not exceed 50")
    } else {
        setSuccess(books);
        formData.book = bookValue;
    }

    if(categoryValue === "") {
        setError(category,"Please enter category.")
    } else {
        setSuccess(category);
        formData.category = categoryValue;
    }
    
    if(emailValue === "") {
        setError(email,"Please enter email.")
    } else if(!checkValidEmail(emailValue)) {
        setError(email,"Please enter valid Email Address");
    } else {
        setSuccess(email);
        formData.email = emailValue;
    }







    if(nameValue === "") {
        setError(authorname,"Please enter author name.")
    } else if(!isValid(nameValue)) {
        setError(authorname,"Numeric values not allowed.")
    } else if(checkLength(nameValue)) {
        setError(authorname,"Book name length should not exceed 50");
    } else if(checkSpecialCharcter(nameValue)) {
        setError(authorname,"Special Character not allowed");
    } else {
        setSuccess(authorname);
        formData.name = nameValue;
    }





    if(publishedValue === "") {
        setError(published,"please enter the published date")
    } else if(!checkPastValue(publishedValue)) {
        setError(published,"Please enter valid Published year")
    } else {
        setSuccess(published);
        formData.published = publishedValue;
    }



    if(priceValue === "") {
        setError(price,"please enter the priceValue");
    } else if(!checkInteger(priceValue)) {
        setError(price,"Alphabets values not allowed")
    } else {
        setSuccess(price);
        formData.price = priceValue;
    }

    if(!hasErrors) {
        return formData;
    }
    return null;
}

// export default displayString;