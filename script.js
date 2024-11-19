function generateRandomId() {
    let id = '';
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
                id += (Math.random().toString(36).substr(2, 1));
                document.querySelector(".id").innerHTML = id;
        }, 100 * i);
    }
}
function show() {
    document.querySelector(".id").classList.toggle("shown");
}
generateRandomId();