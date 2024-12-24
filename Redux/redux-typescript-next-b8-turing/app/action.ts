const data = [{
    "id": 1,
    "postId": 1,
    "userId": 1,
    "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit ipsum ac velit sollicitudin, id fringilla sapien dapibus. Nulla condimentum ullamcorper tellus vel tristique. Donec nec sagittis ante. Proin semper, nunc et bibendum eleifend, odio justo facilisis nunc, vel ullamcorper tortor sapien at eros. Etiam euismod felis vel elit lobortis laoreet. Maecenas ac lobortis diam. Proin vitae neque sit amet ante pretium consectetur. Nulla facilisi."
},{
    "id": 2,
    "postId": 1,
    "userId": 1,
    "comment": "Nulla quis libero vel orci rutrum suscipit. Proin pretium ligula et dapibus interdum. Sed commodo, dui vel feugiat hendrerit, enim nibh commodo nisi, quis mollis nunc lectus ut nisi. Sed ut lectus ac nisi vulputate consequat nec ac nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vulputate magna vitae nibh tincidunt vestibulum. Duis suscipit nulla sit amet neque varius, ut efficitur lorem bibendum. Maecenas euismod euismod velit sit amet faucibus."
},{
    "id": 4,
    "postId": 3,
    "userId": 2,
    "comment": "Vivamus commodo metus eget velit convallis, sit amet tincidunt tellus elementum. Fusce maximus venenatis ipsum, vel venenatis leo faucibus ac. Maecenas scelerisque nisi et sapien elementum, sed faucibus odio tempor. Proin pulvinar blandit eros a luctus. Praesent laoreet elit in elit rutrum, eget commodo ante gravida. Fusce eget ligula digniss"
}]
export async function loadTodos() {
    console.log("Sever Action , loadtod")
    return data;
}