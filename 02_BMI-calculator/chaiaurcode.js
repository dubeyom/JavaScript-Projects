const form = document.querySelector("form");
// form submits in two ways either post type or get type
// and when submitted the values goes to the server or the URL
// we have to stop that
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height == " " || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight == " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const bmi = weight / ((height * height) / 1000).toFixed(2);
    // show the result
    results.innerHTML = `<span> ${bmi}</span>`;
  }
});
