const read = document.querySelector("#read");
const notifCount = document.querySelector("#notif");
const notifMessages = document.querySelectorAll(".messages-new");
const circles = document.querySelectorAll(".circlered");


function ReadNotif() {
    notifCount.innerHTML = "0";
    notifMessages.forEach(message => {
    message.style.backgroundColor = "white"; 
    })
    circles.forEach(circle => {
        circle.classList.remove("circlered")
    })
    
}

read.addEventListener("click", ReadNotif)