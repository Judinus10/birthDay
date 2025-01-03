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

// Images to display
const images = [
    'assets/images/image18.jpg',
    'assets/images/image17.jpg',
    'assets/images/image16.jpg',
    'assets/images/image15.jpg',
    'assets/images/image14.jpg',
    'assets/images/image13.jpg',
    'assets/images/image12.jpg',
    'assets/images/image19.jpg',
    'assets/images/image20.jpg',
    'assets/images/image11.jpg',
    'assets/images/image10.jpg',
    'assets/images/image9.jpg',
    'assets/images/image8.jpg',
    'assets/images/image7.jpg',
    'assets/images/image6.jpg',
    'assets/images/image1.jpg',  // Replace with actual image paths
    'assets/images/image2.jpg',
    'assets/images/image3.jpg',
    'assets/images/image4.jpg',
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

// Handle button click to hide the container and show random images one by one
specialButton.onclick = function() {
  // Hide the container and button
  container.style.display = 'none';
  
  // Function to display each image one by one
  let imageIndex = 0;

  function showImage() {
    if (imageIndex < images.length) {
      // Create an image element
      const img = document.createElement('img');
      img.src = images[imageIndex];
      img.style.position = 'absolute';
      img.style.top = `${Math.random() * 100}%`; // Random vertical position
      img.style.left = `${Math.random() * 100}%`; // Random horizontal position
      img.style.transform = 'translate(-50%, -50%)'; // Center images
      img.style.width = '250px'; // Set image size
      img.style.height = 'auto';
      img.style.transition = 'all 0.1s ease-in-out';

      // Append the image to the body
      document.body.appendChild(img);

      // Increment the index to show the next image
      imageIndex++;

      // Show the next image after 3 seconds
      setTimeout(showImage, 1000); // Delay before showing the next image
    }
  }

  // Start displaying images after button click
  showImage();
};
