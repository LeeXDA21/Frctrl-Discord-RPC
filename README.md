# Discord RPC Application

This is a simple Discord Rich Presence (RPC) application that allows you to showcase your current activity on Discord. By following the instructions below, you can set up your RPC quickly and easily.

## Prerequisites

Before you get started, make sure you have the following:

- [Node.js](https://nodejs.org/) installed on your computer.
- A Discord Application and its Client ID. If you don't have one, you can create it in the [Discord Developer Portal](https://discord.com/developers/applications).

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/frctrl/Frctrl-Discord-RPC/
   ```

  2. Navigate to the project directory:

     ```bash
     cd Frctrl-Discord-RPC
     ```
  3. Install the required dependencies:

     ```bash
     npm install

## Configuration

1. Open the index.js file in your favorite code editor.
2. Replace "Your-client-id" in the following line with your Discord Application ID:
```js
const clientId = "Your-client-id"; // Your Discord Application ID
```
3. Customize your RPC presence by modifying the following lines:
   ```js
   rpc.setActivity({
    details: "YOUR-TEXT-HERE",
    state: "Your-Text-Here",
    // ... other settings ...


## Usage

To start your Discord RPC application, run the following command in your project directory:
```bash
node index.js
```
Your RPC presence should now be active on Discord, displaying the information you configured.

## Troubleshooting

If you encounter any issues while setting up or running your Discord RPC application, please refer to the following troubleshooting steps:

1. Ensure that you have correctly configured your Discord Application in the Discord Developer Portal.

2. Double-check that you have replaced "Your-client-id" in the index.js file with your actual Discord Application ID.
3. Review the console output for any error messages. If you encounter any errors, they will be displayed there.
4. Ensure you use the provided image key from the Rich Presence or it will have errors. 

  ## Contributing
  Contributions are welcome! If you have any improvements or feature suggestions, feel free to open an issue or create a pull request.

  ## License
  This project is licensed under the MIT License.
 

## Credits 
[FRCTRL](https://github.com/frctrl/)
[2m4u](https://github.com/2M4U/) For the motivation please check out the amaing Projects He makes!
