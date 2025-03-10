import UserProfile from './userProfile.js';

// Create an instance of UserProfile
const user = new UserProfile('john_doe', 'john@example.com', 30, '1234567890');

// Print the user's profile information
user.printProfile('Initial Profile');

try {
  // Update the user's email
  user.updateEmail('john.doe@newdomain.com');
  console.log('Email updated successfully.');
} catch (error) {
  console.error(error.message);
}

// Print the updated profile information
user.printProfile('Updated Profile');

try {
  // Update the user's phone number
  user.updatePhoneNumber('0987654321');
  console.log('Phone number updated successfully.');
} catch (error) {
  console.error(error.message);
}

// Print the updated profile information
user.printProfile('Final Profile');
