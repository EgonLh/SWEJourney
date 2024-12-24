function display(message?:string){
    console.log("Hello", message?.toLocaleLowerCase());
}

display();
display("-world");
