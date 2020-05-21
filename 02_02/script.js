let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");

// HEADINGONE.textContent = "First Header";
myHeading.innerHTML = "First Header";

console.log(myHeading.outerHTML);

const IMGSOURCE = document.querySelector("img");

function changeImage() {
    let imgAttr = IMGSOURCE.getAttribute("src");
    if (imgAttr == "imgs/one.jpeg") {
        IMGSOURCE.setAttribute("src", "imgs/two.jpeg");
    } else {
        IMGSOURCE.setAttribute("src", "imgs/one.jpeg");
    }
}

function setOwnerName() {
    let ownerName = prompt("please input your name: ");
    if (!ownerName || ownerName === null) {
        setOwnerName();
    } else {
        localStorage.setItem('name', ownerName);
        myHeading.textContent = "Mozilla Welcome You: " + ownerName;
    }

}

if (!localStorage.getItem('name')) {
    setOwnerName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "Mozilla Welcome You: " + storedName;
}

myButton.onclick = setOwnerName;
IMGSOURCE.onclick = changeImage;



