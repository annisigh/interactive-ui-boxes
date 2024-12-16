document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const input = box.querySelector("input");
    const options = box.querySelector(".options");

    box.addEventListener("click", () => {
      boxes.forEach((b) => {
        if (b !== box) {
          const otherOptions = b.querySelector(".options");
          if (otherOptions) otherOptions.classList.add("hidden");
        }
      });

      if (options) {
        options.classList.toggle("hidden");
      }
    });
  });
});



// Wait until the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", () => {
//     // Select all the boxes
//     const boxes = document.querySelectorAll(".box");
  
//     // Loop through each box and add click event listeners
//     boxes.forEach((box) => {
//       // Get the radio input and options inside the current box
//       const input = box.querySelector("input");
//       const options = box.querySelector(".options");
  
//       // Add a click event listener to the box
//       box.addEventListener("click", () => {
//         // Collapse all other boxes and their options
//         boxes.forEach((b) => {
//           if (b !== box) { // Skip the current box
//             const otherOptions = b.querySelector(".options");
//             // if (otherOptions) otherOptions.classList.add("hidden"); // Hide other options
//           }
//         });
  
//         // Toggle the visibility of options in the current box
//         if (options) {
//           options.classList.toggle("hidden");
//         }
//       });
//     });
//   });
  
  /* 
  Functionality Summary:
  1. Each box expands upon clicking to display additional options (like size and color for Box 2).
  2. Clicking another box automatically collapses any previously opened box.
  3. JavaScript dynamically toggles the `hidden` class for showing/hiding options.
  4. Clean and efficient vanilla JavaScript handles the interactivity.
  */
  


  