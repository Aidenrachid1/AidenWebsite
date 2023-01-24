// script.js
function Sendmail() {
    var params= {
    fullname : document .getElementbyid("fullName").value,
    email_id : document.getElementbyid("Email").value,
    submit : document.getElementbyid("message").value,
}
    emailjs.send("service_uy588ve", "template_ccja01c", params).then(function (res) {
            alert("success! " + res.status);
    })

}