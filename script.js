document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
});
// Get modal element
const modal = document.getElementById("modal");

// Get all project images
const projectImages = document.querySelectorAll(".project-image");

// Modal close button
const closeBtn = document.querySelector(".close");

// Add event listener to each project image
projectImages.forEach(image => {
    image.addEventListener("click", function() {
        const title = this.getAttribute("data-title");
        const description = this.getAttribute("data-description");

        // Set modal title and description
        document.getElementById("modal-title").textContent = title;
        document.getElementById("modal-description").textContent = description;

        // Display the modal
        modal.style.display = "block";
    });
});

// Close the modal when clicking on the close button
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal if clicked outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
