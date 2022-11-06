
// contact page

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function submit() {
  const input = document.getElementById("email-input");
  input.focus();
  const msgElem = document.getElementById("wrong-input-msg");
  if (input.value.includes("@vaniercollege.qc.ca")) {
    let email = input.value;
    email = email.replace("@vaniercollege.qc.ca", "");
    if (msgElem != null) {
      input.parentNode.removeChild(msgElem);
      alert("Valid Email Address")
    }
  } else {
    if (msgElem == null) {
      const elem = document.createElement("p");
      elem.setAttribute('id', "wrong-input-msg");
      elem.innerHTML = "Not a valid email";
      input.parentNode.appendChild(elem);
    }
  }
}

function send() {
  const input = document.getElementById("usermsg");
  const chat = document.getElementById("chatbox")
  const msgTo = document.getElementById("designer2");

  if (input.value.length <= 0) {
    return;
  }

  let displayMsg = input.value;
  const msg = document.createElement("div")
  msg.innerHTML = displayMsg;
  chat.appendChild(msg);

  input.value = "";
}
