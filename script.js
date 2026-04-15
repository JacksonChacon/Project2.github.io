$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.shrink-button').click(clickedShrinkButton);
    $('.ignore-button').click(clickedIgnoreButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Pukei Pukei", weight:250, happiness:7, size:12};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness = ++pet_info.happiness;
      // Increase pet weight
      pet_info.weight = ++pet_info.weight;
      window.prompt("I love treats!", "Let's keep it easy though.");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness = ++pet_info.happiness;
      // Decrease pet weight
      pet_info.weight = --pet_info.weight;
      window.prompt("That was so much fun!", "I'll be sure we do it again then.");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness = --pet_info.happiness;
      // Decrease pet weight
      pet_info.weight = --pet_info.weight;
      window.prompt("Let's never do that again.", "Tough it up buddy.");
      checkAndUpdatePetInfoInHtml();
    }

    function clickedShrinkButton() {
      // Half pet size
      pet_info.size = pet_info.size / 2;
      // Half pet weight
      pet_info.weight = pet_info.weight / 2;
      window.prompt("Woah I'm tiny now!", "I don't even know how I did that!");
      checkAndUpdatePetInfoInHtml();
    }

    function clickedIgnoreButton() {
      document.querySelector('.treat-button').blur();
      document.querySelector('.play-button').blur();
      document.querySelector('.ignore-button').blur();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
        if (pet_info.weight < 1){
          document.querySelector('.treat-button').focus({ focusVisible : true});
          pet_info.weight = 1;
          window.prompt("I am starving!");
        }
        else{
          document.querySelector('.treat-button').blur();
        }
        if (pet_info.happiness < 1){
          document.querySelector('.play-button').focus({ focusVisible : true});
          pet_info.happiness = 1;
          window.prompt("I hate you!");
        }
        else{
          document.querySelector('.play-button').blur();
        }
        if (pet_info.size < 1){
          window.prompt("I am getting way too small!");
        }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.size').text(pet_info['size']);
    }
  