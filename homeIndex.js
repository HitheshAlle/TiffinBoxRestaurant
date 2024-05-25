//Slider
const slider = document.querySelector('.slider');
const sliding = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const slideWidth = sliding[0].clientWidth;

// Function to move to the next slide
function moveToSlide(slideIndex) {
    if (slideIndex >= sliding.length) {
        slideIndex = 0; 
    }
    
    slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    currentSlide = slideIndex;
    resetTimer();
    updateButtonVisibility();
}

// Function to move to the next slide automatically after 3 seconds
let timer = setTimeout(() => {
    moveToSlide(currentSlide + 1);
}, 3000);

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        moveToSlide(currentSlide + 1);
    }, 3000);
}

function updateButtonVisibility() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === sliding.length - 1;
}

nextBtn.addEventListener('click', () => {
    if (currentSlide < sliding.length - 1) {
        moveToSlide(currentSlide + 1);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        moveToSlide(currentSlide - 1);
    }
});

// Location Dropdown Toggle
const locationsLink = document.querySelector('.Locations');
const locationsDropdown = document.querySelector('.locations-dropdown');

locationsLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    locationsDropdown.classList.toggle('active'); 
});


function reloadHomepage(){
const logoImage = document.querySelector('.Top-Title-Image');

// Add event listener to handle click
logoImage.addEventListener('click', function() {
    window.location.href = './index.html';
});
}


function changeFontSize() {
    document.getElementById('navbarItems').style.fontSize = '1rem';
}

function revertFontSize() {
    document.getElementById('navbarItems').style.fontSize = '3rem';
}

function navigateToPage() {
    var select = document.getElementById('navbarItems');
    var selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
