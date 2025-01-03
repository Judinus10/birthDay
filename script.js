// Birthday messages to be typed out (with multiple lines)
const birthdayMessages = [
    "Wishing you the happiest 21st birthday Sis! \nMay this year be filled with joy, laughter, and endless memories. 🎉",
    "You are a wonderful person, and I'm so grateful to have you in my life. 💖",
    "May this special day bring you happiness that lasts throughout the year! 🎂",
    "Enjoy every moment and make beautiful memories! Here's to an amazing year ahead! 🥳"
];

// Get the elements to display the messages and button
const typingText = document.getElementById('typingText');
const specialButton = document.getElementById('specialButton');
const birthdaySong = document.getElementById('birthdaySong');
const container = document.querySelector('.container'); // The container to hide

// Images to display randomly
const images = [
    'assets/images/image1.jpg',  // Replace with actual image paths
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
    'assets/images/image6.jpg',
    'assets/images/image7.jpg',
    'assets/images/image8.jpg',
    'assets/images/image5.jpg'
];

// Function to show the messages with a typing effect
let messageIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing in milliseconds

function typeMessage() {
  if (messageIndex < birthdayMessages.length) {
    // Get the current message
    const currentMessage = birthdayMessages[messageIndex];
    
    // Type one character at a time
    if (charIndex < currentMessage.length) {
      typingText.textContent += currentMessage.charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, typingSpeed);
    } else {
      // Move to the next message after finishing the current one
      messageIndex++;
      charIndex = 0;
      
      // Add a small delay between messages before typing the next one
      setTimeout(typeMessage, 1000); // Delay before starting next message
    }
  } else {
    // Show the button after all messages are typed
    specialButton.style.display = 'block';
    
    // Hide the button after 3 seconds
    // setTimeout(() => {
    //   specialButton.style.display = 'none';
    // }, 3000); // Adjust the delay as needed
  }
}

// Start the typing effect when the page loads
window.onload = function() {
  // Prompt the user to click to start the audio
  const audioPrompt = document.createElement("div");
  audioPrompt.innerText = "Click here to start the birthday song!";
  audioPrompt.style.position = 'absolute';
  audioPrompt.style.top = '20px';
  audioPrompt.style.left = '50%';
  audioPrompt.style.transform = 'translateX(-50%)';
  audioPrompt.style.padding = '10px';
  audioPrompt.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  audioPrompt.style.color = '#fff';
  audioPrompt.style.cursor = 'pointer';
  document.body.appendChild(audioPrompt);

  // Start audio on user click
  audioPrompt.onclick = function() {
    birthdaySong.play().catch(err => console.error("Error playing audio:", err));
    audioPrompt.style.display = 'none'; // Hide the prompt after clicking

    // Start the typing effect after clicking
    typeMessage();
  };
};

// Handle button click to hide the container and show random images
specialButton.onclick = function() {
  // Hide the container and button
  container.style.display = 'none';
  
  // Generate and display random images
  for (let i = 0; i < 8; i++) { // Number of random images to show
    const randomImage = document.createElement('img');
    randomImage.src = images[Math.floor(Math.random() * images.length)];
    randomImage.style.position = 'absolute';
    randomImage.style.top = `${Math.random() * 100}%`; // Random position
    randomImage.style.left = `${Math.random() * 100}%`; // Random position
    randomImage.style.transform = 'translate(-50%, -50%)'; // Center images
    randomImage.style.width = '150px'; // Set image size
    randomImage.style.height = 'auto';
    randomImage.style.transition = 'all 0.3s ease-in-out';

    document.body.appendChild(randomImage);
  }
};
