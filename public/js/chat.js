document.querySelector("#start_chat").addEventListener("click", (event) => {
  const chat_help = document.getElementById("chat_help")
  chat_help.style.display = "none"

  const hat_in_support = document.getElementById("chat_in_support")
  hat_in_support.style.display = "block"

  const socket = io();


  const email = document.getElementById("email").value;
  const text = document.getElementById("txt_help").value;

  socket.on("connect",() => {
    const params ={
      email,
      text
    }
    socket.emit("client_first_access", params, (call, err) => {
      if(err){
        console.err(err)
      }  else {
        console.log(call)
      }
    })
  })
});
