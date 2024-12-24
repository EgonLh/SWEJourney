function display(message) {
    console.log("Hello", message === null || message === void 0 ? void 0 : message.toLocaleLowerCase());
}
display();
display("-world");
