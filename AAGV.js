let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);




const addSignature = (person) => {
  

  

  // Create a new paragraph element
  let newParagraph = document.createElement("p");

  // Construct the signature text
  let signatureText = `🖊️ ${person.name} supports this.`;

  // Set the text content of the new paragraph to the signature text
  newParagraph.textContent = signatureText;

  // Find the signatures section on the page
  let signatures = document.getElementById("signatures");

  // Append the new paragraph element to the signatures section
  signatures.appendChild(newParagraph);

};



const validateForm = (event) => {
 event.preventDefault();

  // This line prevents the form submission
    let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs["name"].value,
    hometown: petitionInputs["hometown"].value,
    email: petitionInputs["email"].value
    // accesses and saves value of first input
  }


  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.name.length < 2 || person.hometown.length < 2 || person.email.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true; // Set containsErrors to true if any field is invalid
    } else {
  petitionInputs[i].classList.remove('error');
    }
  }

  // If containsErrors is true, prevent form submission
  if (!containsErrors) {
   addSignature(person);
    toggleModal(person.name);
    
  }
}

let signNowButton = document.getElementById("sign-now-button")
signNowButton.addEventListener("click", validateForm);


function toggleModal(person) {
  // Select the modal and modal content
  var modal = document.getElementById("thanks-modal");
  var modalContent = document.getElementById("modal-text-container");

  // Set the textContent of the modal to a nice message including the user's name
  modalContent.textContent = "Hello " + person + ", thank you for signing the petition!";

  // Set the display style property of the entire modal to flex
  modal.style.display = "flex";
 
  var intervalId = setInterval(scaleImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId); // Stop the animation
  }, 4000);
}


// Create a variable to store the scale factor
var scaleFactor = 1;

// Select the modal image element
var modalImage = document.querySelector("#modal-image-container img");
// Define the scaleImage function
function scaleImage() {
    // Increase the scale factor by a small amount (for example, 0.1)
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;

    // Apply the scale transform to the modal image
    modalImage.style.transform = "scale(" + scaleFactor + ")";

    // Reset the scale factor to 1 after it exceeds a certain value (optional)
    if (scaleFactor > 2) {
        scaleFactor = 1;
    }
}
let animation = {
  revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '4s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
}
// Step 2.1: Select all elements with the class 'revealable'
let revealableContainers = document.querySelectorAll('.revealable');

// Step 2.2: Define the reveal function
function reveal() {
    // Step 2.3: Loop through each revealable container
    for (let i = 0; i < revealableContainers.length; i++) {
        // Step 2.4: Get the height of the window
        let windowHeight = window.innerHeight;

        // Step 2.5: Get the top position of the revealable container
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

        // Step 2.6: Check if the container should be revealed
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            // Step 2.7: Add the 'active' class to the container
            revealableContainers[i].classList.add('active');
        } else {
            // Step 2.8: Remove the 'active' class from the container
            revealableContainers[i].classList.remove('active');
        }
    }
}

// Step 2.9: Call the reveal function when the page is scrolled
window.addEventListener('scroll', reveal);

// Step 2.10: Call the reveal function initially to reveal elements on page load
reveal();
