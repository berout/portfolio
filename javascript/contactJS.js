function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "berutmagda@gmail.com",
        Password : "password",
        To : 'berutmagda@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New message",
        Body : document.getElementById("message").value,
    }).then(
      message => alert("Message sent successully")
    );
};