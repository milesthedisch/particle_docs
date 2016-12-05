/* eslint no-var: 0 */
var fetchExample = function fetchExample(id) {
  return fetch("/examples/" + id)
  .then(function(response) {
    return response.text().then(function(txt) {
      return txt;
    });
  })
  .catch(function(err) {
    console.error(new Error(err));
  });
};

document.addEventListener("DOMContentLoaded", function() {

  // If the use lands on the examples page which is the example 
  // list make sure to grab the first template. 
  // You can use sessions to check if the user was on other pages or not.
  // Makes sure to attach a handler to the ul so that we can delgate events
  // to load in the correct template. 
  fetchExample("@1").then((res) => console.log(res));
});
