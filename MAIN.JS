const messages = [
  'You are strong, capable, and destined for greatness.',
  'Believe in yourself, for you have the power to achieve anything you set your mind to.',
  'Embrace your uniqueness and let your light shine brightly.',
  'Never underestimate your worth, for you are deserving of all the wonderful things in life.',
  'You are a force to be reckoned with, and you have the ability to make a difference.',
  'Stay true to yourself and follow your dreams, for they will lead you to incredible places.',
  'Remember, you have the strength within you to overcome any challenge that comes your way.',
  'Be fearless in the pursuit of what sets your soul on fire.',
  'Your potential knows no bounds. Keep pushing forward and reaching for the stars.',
  'Celebrate your achievements and milestones, for they are a testament to your hard work and dedication.',
  'Your presence and voice matter. Never be afraid to make them heard.',
  'Chase your dreams with passion and determination, and watch them unfold before your eyes.',
  // Add more motivational messages here...
  'You are capable of achieving greatness beyond your wildest dreams.',
  'Embrace your inner strength and let it guide you towards success.',
  'In every challenge lies an opportunity for growth. Keep pushing forward.',
  'Trust in yourself and your abilities, for you are more powerful than you realize.',
  'Believe in the beauty of your dreams and never stop pursuing them.',
  // Add more motivational messages here...
  'You have the power to create the life you envision. Start taking small steps towards your goals.',
  "Don't be afraid to step out of your comfort zone and embrace new opportunities.",
  'Your determination and perseverance will lead you to triumph.',
  'Remember, you are never alone on your journey. Seek support and surround yourself with uplifting people.',
  'You have the ability to inspire others with your passion and authenticity.',
  // Add more motivational messages here...
];

let currentMessage = -1;

const messageElement = document.getElementById('message');

function updateMessage() {
  if (currentMessage === -1) {
    messageElement.style.display = 'none';
  } else {
    messageElement.style.display = 'block';
    messageElement.innerHTML = messages[currentMessage];
  }
}

updateMessage();

document.getElementById('changeMessage').addEventListener('click', () => {
  currentMessage = Math.floor(Math.random() * messages.length);
  updateMessage();
});
