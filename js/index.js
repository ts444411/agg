function signIn() {
        alert("enter password");
  const pws = [133127726, 71319];
  let pwsbool = prompt("Enter the AGG password(s)", "Type Password Here");
  if (pwsbool == pws[0] || pwsbool == pws[1]) {
    alert("Sign in successful! Redirecting to the AGG wbesite");
    window.location.href = "play/home.html";
  } else {
    alert("wrong password!");
  }
}
function fakeAlert() {
  let fakenum;
  let fakexd;
  let fakecvv;
  alert("You must pay for this option!");
  fakenum = prompt("Tell me your credit card number so you can pay!", "example, 1234 5678 9012 3456");
  fakexd = prompt("Tell me your credit card number experation date so you can pay!", "example, 10/26");
  fakecvv = prompt("Tell me your credit card cvv so you can pay!", "example, 1234");
  alert("Thanks! It is now stored in our servers!")
}
