(function() {
    'use strict';
  
    // YOUR CODE HERE
  })();
  
  
  // Part 1
  // Add DOM event listeners and handlers to toggle the on/off state of three bulbs.
  
  const stopButton = document.querySelector (".stopButton");
  const slowButton = document.querySelector (".slowButton");
  const goButton= document.querySelector (".goButton");
  
  function.clickHandler(){
    document.querySelector(element).class.List.toggle('red');
  }
  
  // When a user clicks on the "Stop" button, toggle the stop bulb's color.
  
  stopButton.addEventListener("click", e=> {
    console.log("stopButton 1")
  })
  
  
  // When a user clicks on the "Slow" button, toggle the slow bulb's color.
  
  
  stopButton.addEventListener("click", e=> {
    console.log("slowButton 1")
  })
  
  // When a user clicks on the "Go" button, toggle the go bulb's color.
  
  
  stopButton.addEventListener("click", e=> {
    console.log("goButton 1")
  })
  
  document.addEventListener("click", e => {
    console.log("Document 1")
  })
  
  
  // TIP: All three bulbs can be on/off independently of one another.
  
  
  // Resources
  // MDN - Document.querySelector()
  // MDN - EventTarget.addEventListener()
  // MDN - click
  // MDN - Element.classList
  
  
  // Part 2
  // Add new DOM event listeners and handlers to log the mouse state of each button.
  
  // When a user's mouse enters a button, log "Entered <textContent> button" to the console.
  // When a user's mouse leaves a button, log "Left <textContent> button" to the console.
  // TIP: Each event type will need a separate event listener.
  
  // Resources
  // MDN - mouseenter
  // MDN - mouseleave
  // MDN - Event.target
  // Bonus
  // Add one DOM event listener and one handler to log the state of each bulb.
  
  // When a user clicks a button that just turned on, log"<textContent> bulb on" to the console.
  // When a user clicks a button that just turned off, log"<textContent> bulb off" to the console.
  // TIP: A click on only a button should cause a message to be logged to the console.
  
  // Resources
  // How JavaScript Event Delegation Works