const cardComplete = document.querySelector("#card-complete");
const cardRating = document.querySelector("#card-rating");
const btnSubmit = document.querySelector(".btn-submit");
const ratingInputs = document.querySelectorAll('input[name="rating"]');
const selectedRating = document.querySelector(".selected-rating");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  // Find the checked radio button
  const checkedRating = Array.from(ratingInputs).find((input) => input.checked);

  if (checkedRating) {
    // Display the selected rating in the thank-you state
    selectedRating.textContent = `You selected ${checkedRating.value} out of 5`;

    // Hide the rating state and show the thank-you state
    cardRating.style.display = "none";
    cardComplete.style.display = "flex";
  }
});
