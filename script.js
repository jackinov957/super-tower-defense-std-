// Image sources
const images = ['curbe.jpg', 'thegoat.jpeg', 'grimace.png'];

function createFallingImage() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = 'falling-image';
    
    // Randomize the starting horizontal position
    img.style.left = Math.random() * window.innerWidth + 'px';
    
    // Append to the start screen
    document.getElementById('start-screen').appendChild(img);

    // Remove the image after the animation is complete
    setTimeout(() => {
        img.remove();
    }, 5000); // 5 seconds matches the duration of the animation
}

function startFallingImages() {
    // Create 3 images at a time
    createFallingImage();
    createFallingImage();
    createFallingImage();
}

// Start the falling images every 3 seconds
setInterval(startFallingImages, 3000);

document.getElementById('start-button').addEventListener('click', function() {
    alert('Start button clicked!'); // Placeholder function
    // You can add the functionality for starting the game here.
});
