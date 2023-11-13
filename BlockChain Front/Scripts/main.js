
// Import the Web3 library
const Web3 = require('web3');

// Use the Binance Smart Chain provider
const bscWeb3 = new Web3('https://bsc-dataseed.binance.org/');

// Variable to store the user's wallet address
let userWalletAddress;

// Function to set the user's wallet address from the input field
function setWalletAddress() {
  // Get and trim the user's wallet address from the input field
  userWalletAddress = document.getElementById('walletAddress').value.trim();
  console.log('Wallet Address set:', userWalletAddress);
  // Process a payment with a fixed amount of 100
  processPayment(100);
}

// Async function to process a payment with the given amount
async function processPayment(amount) {
  // Check if the user's wallet address is provided
  if (!userWalletAddress) {
    console.error('Please provide your wallet address for payment.');
    // Display an alert with an error message
    displayMessage('Please provide your wallet address for payment.');
    return;
  }

  try {
    // Get the balance of the user's wallet in BNB
    const balance = await bscWeb3.eth.getBalance(userWalletAddress);
    console.log('Balance:', bscWeb3.utils.fromWei(balance, 'ether'), 'BNB');
    // Display a success message
    displayMessage('The payment was successful, ZhAT!');
  } catch (error) {
    console.error('Payment failed. Please check your wallet address.', error);
    // Display an alert with an error message
    displayMessage('Payment failed. Please check your wallet address.');
  }
}

// The rest of the code remains unchanged

// Function to display a message using an alert
function displayMessage(message) {
  alert(message);
}
