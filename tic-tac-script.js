
window.addEventListener("load", myFunction);

const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  
function myFunction() {
    document.getElementById('checkmark').classList.add("checkmarker");
}