let isConnecting = false;
let countdownInterval;
let addNote = false;
let noteMessage = "";

// Initialize options from the popup
document.getElementById("addNoteCheckbox").addEventListener("change", (event) => {
  addNote = event.target.checked;
  document.getElementById("noteMessage").style.display = addNote ? "block" : "none";
});

document.getElementById("noteMessage").addEventListener("input", (event) => {
  noteMessage = event.target.value;
});

// Function to start the connection process
function startConnecting() {
  isConnecting = true;
  document.getElementById("startStopBtn").innerText = "Stop Connecting";
  handleCountdown();
}

// Function to stop the connection process
function stopConnecting() {
  isConnecting = false;
  document.getElementById("startStopBtn").innerText = "Start Connecting";
  document.getElementById("timer").innerText = "";
  clearInterval(countdownInterval);
}

// Function to handle the countdown timer and connect logic
function handleCountdown() {
  let countdown = Math.floor(Math.random() * 6) + 5;
  document.getElementById("timer").innerText = `Next connection in ${countdown} seconds`;

  countdownInterval = setInterval(() => {
    countdown -= 1;
    document.getElementById("timer").innerText = `Next connection in ${countdown} seconds`;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      if (isConnecting) {
        processConnection();
        handleCountdown(); // Restart countdown after connection
      }
    }
  }, 1000);
}

// Function to process a connection or move to the next page if no "Connect" buttons are left
function processConnection() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: connectOrNavigate,
      args: [addNote, noteMessage]
    });
  });
}

// Function to be executed in the LinkedIn tab context
function connectOrNavigate(addNote, noteMessage) {
    const connectButtons = Array.from(document.querySelectorAll("button"))
      .filter(button => button.innerText === "Connect");
  
    if (connectButtons.length > 0) {
      connectButtons[0].click();
      console.log("'Connect' button clicked.");
  
      setTimeout(() => {
        // Check if the note option is enabled and handle accordingly
        const addNoteButton = document.querySelector("button[aria-label='Add a note']");
        if (addNote && addNoteButton) {
          addNoteButton.click();
  
          // Add the note text
          setTimeout(() => {
            const noteInput = document.querySelector("textarea[name='message']");
            if (noteInput) {
              noteInput.value = noteMessage;
              const sendButton = document.querySelector("button[aria-label='Send now']");
              if (sendButton) {
                sendButton.click();
                console.log("Note added and connection request sent.");
              } else {
                console.log("Could not find 'Send now' button after adding note.");
              }
            }
          }, 500);
  
        } else {
          // Send without note
          setTimeout(() => {
            const sendWithoutNoteButton = document.querySelector("button[aria-label='Send without a note']");
            if (sendWithoutNoteButton) {
              sendWithoutNoteButton.click();
              console.log("Connection request sent without note.");
            } else {
              console.log("Could not find 'Send without note' button.");
            }
          }, 500);
        }
      }, 500);
    } else {
      const nextButton = document.querySelector("button[aria-label='Next']");
      if (nextButton) {
        nextButton.click();
        console.log("Navigating to the next page.");
      } else {
        console.log("No 'Next' button found. Stopping the connection process.");
      }
    }
  }  

// Event listener for start/stop button
document.getElementById("startStopBtn").addEventListener("click", () => {
  if (isConnecting) {
    stopConnecting();
  } else {
    startConnecting();
  }
});