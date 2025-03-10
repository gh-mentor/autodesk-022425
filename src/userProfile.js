/**
 * Class representing a user profile.
 */
class UserProfile {

  constructor(username, email, age, phoneNumber) {
    this.username = username;
    this.email = email;
    this.age = age;
    this.phoneNumber = phoneNumber;
  }


  /**
   * Print the user's profile information.
   * @param {string} title - The title to be displayed above the profile information.
   */
  printProfile(title) {
    console.log(`--- ${title} ---`);
    console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
    console.log(`Age: ${this.age}`);
    console.log(`Phone Number: ${this.phoneNumber}`);
  }

  /**
   * Update the user's email.
   * @param {string} newEmail - The new email to be updated.
   * @throws Will throw an error if the email is invalid.
   */
  updateEmail(newEmail) {
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email address.');
    }
    this.email = newEmail;
  }

  /**
   * Update the user's phone number.
   * @param {string} newPhoneNumber - The new phone number to be updated.
   * @throws Will throw an error if the phone number is invalid.
   */
  updatePhoneNumber(newPhoneNumber) {
    if (!/^\d{10}$/.test(newPhoneNumber)) {
      throw new Error('Invalid phone number. It should be a 10-digit number.');
    }
    this.phoneNumber = newPhoneNumber;
  }
}

export default UserProfile;
