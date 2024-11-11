function updateHeroAndRotate(clickedCard, imageUrl, placeName, placeDetails) {
    // Update hero section background and details
    const heroSection = document.getElementById('hero-section');
    const nameElement = document.getElementById('place-name');
    const detailsElement = document.getElementById('place-details');
    
    

    heroSection.style.backgroundImage = `url(${imageUrl})`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';

    nameElement.textContent = placeName;
    detailsElement.textContent = placeDetails;

    const heroVideo = document.querySelector('.hero-video');
    heroVideo.style.display = 'none'; // Hide the video

    // Add fade-out effect to the clicked card
    clickedCard.classList.add('fade-out');

    // Wait for the fade-out animation to complete
    setTimeout(() => {
        // Remove fade-out class and move card to the end
        clickedCard.classList.remove('fade-out');
        
        const carousel = document.getElementById('carousel');
        carousel.appendChild(clickedCard); // Move the clicked card to the end

        // Reset carousel transform to keep a continuous loop
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
    }, 500); // Duration should match the fade-out transition (0.5s)
}

let currentIndex = 0;
const itemsToShow = 4; // Number of images to show
const carousel = document.getElementById('small-carousel');
const totalItems = carousel.children.length;
const intervalTime = 3000; // Auto-slide interval time in milliseconds

function moveCarousel(direction) {
    currentIndex += direction;

    // Adjust currentIndex for looping
    if (currentIndex < 0) {
        currentIndex = totalItems - itemsToShow; // Go to last set of images
    } else if (currentIndex > totalItems - itemsToShow) {
        currentIndex = 0; // Reset to the start
    }

    // Move the carousel
    const offset = currentIndex * (200); // Only consider image width
    carousel.style.transform = `translateX(-${offset}px)`;
}

// Auto-slide functionality
function startAutoSlide() {
    setInterval(() => {
        moveCarousel(1); // Move to the next image
    }, intervalTime); // Set interval time
}

// Start the auto-slide when the document is ready
document.addEventListener("DOMContentLoaded", startAutoSlide);

//historical landmark section
function showOverlay(element) {
    element.querySelector('.overlay').style.opacity = 1;
  }
  
  function hideOverlay(element) {
    element.querySelector('.overlay').style.opacity = 0;
  }
  
  function changeContent(imageNumber) {
    const contentText = document.getElementById("content-text");
    const contentImage = document.getElementById("content-image");
    const contentCaption = document.getElementById("content-caption");
  
    switch (imageNumber) {
      case 1:
        contentImage.src = "historical_sanjuanico.jpg";
        contentText.textContent = "This iconic bridge, the longest in the Philippines, connects Leyte and Samar islands. It demonstrates engineering prowess while also serving as a symbol of unity between the two provinces.";
        contentCaption.textContent = "San Juanico Bridge";
        
        break;
      case 2:
        contentImage.src = "historical_mcarthur.jpg";
        contentText.textContent = "This memorial commemorates General Douglas MacArthur and his troops' historic landing on Leyte during World War II, which marked a watershed moment in the Pacific War.";
        contentCaption.textContent = "MacArthur Landing Memorial, Palo, Leyte";
        break;
      case 3:
        contentImage.src = "historical_homonhon.jpg";
        contentText.textContent = "In 1521, Portuguese navigator Ferdinand Magellan landed on this island, kicking off Spanish colonisation in the Philippines.";
        contentCaption.textContent = "Homonhon Island, Samar";
        break;
      case 4:
        contentImage.src = "historical_limasawa.jpg";
        contentText.textContent = "Another significant site in Philippine history, Limasawa Island is thought to have hosted the first Catholic Mass in the Philippines, which was celebrated by Magellan's expedition in 1521.";
        contentCaption.textContent = "Limasawa Island, Leyte";
        break;
      case 5:
        contentImage.src = "historical_biliran.jpg";
        contentText.textContent = "Constructed between 1765 and 1774, this watchtower in Biliran province served as a defensive structure against pirates and invaders. It reflects the region's rich history and strategic importance.";
        contentCaption.textContent = "Biliran Watchtower";
        break;
      default:
        contentImage.src = "historical_landmarks.jpg";
        contentText.textContent = "Eastern Visayas is steeped in history, with numerous landmarks that tell the story of the region's past.";
        contentCaption.textContent= "Historical Landmarks";
    }
  }
  const overlay = document.querySelector('.overlayc');
function toggleOverlay() {
    overlay.classList.toggle('active');
}

const sliderTrack = document.getElementById('sliderTrack');
const slidesToShow = 3;
const totalSlides = document.querySelectorAll('.slide').length;
let currentSlide = 0;

function updateSliderPosition() {
    const slideWidth = sliderTrack.children[0].offsetWidth;
    sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Update opacity for gradient effect
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index === currentSlide + 1) {
            slide.style.opacity = '1'; // Center slide fully visible
        } else if (index === currentSlide) {
            slide.style.opacity = '0.5'; // Left slide half opaque
        } else if (index === currentSlide + 2) {
            slide.style.opacity = '0.5'; // Right slide half opaque
        } else if (index === currentSlide + 3) {
            slide.style.opacity = '0.3'; // Next to right slide less opaque
        } else if (index === currentSlide - 1) {
            slide.style.opacity = '0.3'; // Next to left slide less opaque
        } else {
            slide.style.opacity = '0'; // Other slides hidden
        }
    });
}

function moveSlider(direction) {
    currentSlide += direction;

    // Loop the slider for infinite effect
    if (currentSlide < 0) {
        currentSlide = totalSlides - slidesToShow;
    } else if (currentSlide > totalSlides - slidesToShow) {
        currentSlide = 0;
    }

    updateSliderPosition();
}

window.addEventListener('resize', updateSliderPosition);
updateSliderPosition(); // Initialize the slider position

 // Smooth scroll function
 function smoothScroll(targetId) {
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".navbar-links a");

    links.forEach(link => {
        // Remove 'active' class from all links
        link.classList.remove("active");

        // Add 'active' class to the matching link
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});