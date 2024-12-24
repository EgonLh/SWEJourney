let surname = undefined;
let book = {
    author: {
        surname: "first",
        lastname : "second",
    }
}

if (book) {
    if (book.author) {
        console.log(book.author);
        surname = book.author.surname;
    }
}
console.log(surname);

surname1 = book && book.author && book.author.surname;
console.log(surname1);


let deliver = {
    person: {
        address:undefined,
        contact: {
            ph : "true",
            email: "true",
            confirm : "Yes"
        }
    }
}

let package = deliver?.person?.contact.confirm;
console.log(package);

let obj = {
    "0" : 100,
    "1": 200,
    "2": 300,
}

console.log(obj[1]);
console.log(" Can Delete :",delete obj[1]);
console.log(obj);

console.log(" Can't Delete delete prototype :", delete Object.prototype);