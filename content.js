// Function to send connection requests with a random delay
async function sendConnectionRequests() {
    // Select all buttons with either "Connect" or "Message" text
    const buttons = document.querySelectorAll("button");
  
    for (let button of buttons) {
      // Skip buttons that are not "Connect"
      if (button.innerText !== "Connect") {
        console.log("Skipping profile with 'Message' button.");
        continue;
      }
  
      // Simulate a random wait time between 5-10 seconds before clicking
      const waitTime = Math.floor(Math.random() * 5000) + 5000;
      console.log(`Waiting ${waitTime / 1000} seconds before clicking 'Connect'.`);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
  
      // Click the "Connect" button
      button.click();
      console.log("'Connect' button clicked.");
  
      // Close any popup that appears after clicking Connect
      const sendButton = document.querySelector("button[aria-label='Send without a note']");
      if (sendButton) {
        sendButton.click();
        console.log("Confirmation 'Send now' button clicked.");
      }
    }
  }
  
  // Start the process when the content script is loaded
  sendConnectionRequests();  