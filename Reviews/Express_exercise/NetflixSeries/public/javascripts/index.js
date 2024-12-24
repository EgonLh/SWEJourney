
function GoToRoute(){
    let domain = window.location.href;
    console.log("tst");
    let url = domain;
    const regex = /^(https?:\/\/[^\/:]+:\d+)/;
    const match = url.match(regex);
    window.location.href = match[0]+"/api/series";
}
function refresh() {
    window.location.href = "localhost:3000";
}
