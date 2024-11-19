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
function copy() {
    let id = document.querySelector(".id").innerHTML.trim();

    if (!id) {
        alert("No ID available to copy!");
        return;
    }

    // Copy to clipboard
    navigator.clipboard.writeText(id)
        .then(() => {
            document.querySelector("#small-txt").innerHTML = "Copied ID";
            setTimeout(() => {
                document.querySelector("#small-txt").innerHTML = "";
            }, 2500);
            alert("Copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy ID:", err);
            alert("Failed to copy. Please try again.");
        });
}
generateRandomId();
