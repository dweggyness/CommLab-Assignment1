const showtimeButton = document.querySelector('#showtimeButton')
const showtimeContainer = document.querySelector('.showtimesContainer')
var showTimeVisible = false;

// set up event listeners
function init(){ 
  console.log('hi')
  console.log(showtimeButton);
  console.log(showtimeContainer);
  showtimeButton.addEventListener("click", function() { 
    console.log('hello');
    showTimeVisible = !showTimeVisible; // toggle the boolean
    updateShowTimeContainer();
	})
}

function updateShowTimeContainer() {
  if (showTimeVisible) {
    showtimeContainer.style.display = 'block';
  } else {
    showtimeContainer.style.display = 'none';
  }
}

init();