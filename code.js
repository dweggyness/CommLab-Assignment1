const showtimeButton = document.querySelector('#showtimeButton')
const showtimeContainer = document.querySelector('.showtimesContainer')
var showTimeVisible = false;

// set up event listeners
function init(){ 
  showtimeButton.addEventListener("click", function() { 
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