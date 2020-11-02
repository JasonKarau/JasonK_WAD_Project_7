const closeAlert = document.getElementsByClassName('alert-message');
const send = document.getElementById('send');
const user = document.getElementById('userField');
const message = document.getElementById('messageField');

for (let i=0; i < closeAlert.length; i++) {
    closeAlert[i].onclick = function () {
        let div = this.parentElement;
        div.style.display= "none";
    };
}

send.addEventListener("click", (e) =>{
    e.preventDefault();
    let messages = [];
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message field before sending");
    } else if(user.value === ""){
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});
