function signIn() {
  const pws = [133127726, 71319];
  let pwsbool = prompt("Enter the AGG password(s)", "Type Password Here");
  if (pwsbool == pws[0] || pwsbool == pws[1]) {
    alert("Sign in successful!);
  } else {
    alert("wrong password!");
  }
}
signIn();
