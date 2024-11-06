# LinkedIn Connector Chrome Extension

A Chrome extension designed to automate LinkedIn connection requests. This extension allows users to connect with people based on LinkedIn search results, handling scenarios with custom notes and skipping profiles with the "Message" button.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- Automates connection requests to LinkedIn profiles based on search criteria.
- Adds a delay between each request to mimic natural human behavior.
- Skips profiles with a "Message" button.
- Option to include a custom note with each connection request.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/govind-tiwari/linkdin-connector.git
   cd linkdin-connector
## Load the Extension in Chrome
1. Open **Chrome** and navigate to `chrome://extensions/`.
2. Enable **Developer mode** in the top-right corner.
3. Click on **Load unpacked** and select the project directory.

## Usage

### Set Your Preferences
- Open the extension popup to set whether to add a note to each connection and, if so, specify your message.

### Run the Extension
1. Perform a LinkedIn search (e.g., "CEOs in Bangalore").
2. Click **Start** in the extension popup to begin sending connection requests.
3. The extension will handle connection requests on the current page and attempt to navigate to the next page when done.

## Configuration

- **Note Message**: You can configure a personalized message that will be added with each connection request if the option is enabled.
- **Connection Delay**: A random delay (5-10 seconds) is added between requests to reduce the risk of detection.

## Contributing

1. **Fork the Repository**
2. **Create a Branch** (`git checkout -b feature/NewFeature`)
3. **Commit Your Changes** (`git commit -m 'Add new feature'`)
4. **Push to the Branch** (`git push origin feature/NewFeature`)
5. **Open a Pull Request**
