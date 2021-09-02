const myHeading = document.querySelector('h1');
myHeading.textContent = 'Mozilla is cool! Roshan...!';
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', Naveen);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  } 