// Birthday messages to be typed out (with multiple lines)
const birthdayMessages = [
    "Wishing you the happiest 21st birthday! \nMay this year be filled with joy, laughter, and endless memories. 🎉",
    "You are a wonderful person, and I'm so grateful to have you in my life. 💖",
    "May this special day bring you happiness that lasts throughout the year! 🎂",
    "Enjoy every moment and make beautiful memories! Here's to an amazing year ahead! 🥳"
  ];
  
  // Get the element to display the messages
  const typingText = document.getElementById('typingText');
  
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
    }
  }
  
  // Start typing the message when the page loads
  window.onload = typeMessage;
  