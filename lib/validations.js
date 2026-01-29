/**
 * Validation Utilities for Contact Form
 * Provides server-side and client-side validation functions
 */

/**
 * Validates email address using RFC 5322 compliant regex
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid, false otherwise
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  
  // RFC 5322 compliant email regex (simplified but comprehensive)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Validates phone number if provided (optional field)
 * Accepts international formats, must have 7-15 digits
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid or empty, false otherwise
 */
export function isValidPhone(phone) {
  if (!phone || phone.trim() === '') return true; // Phone is optional
  
  if (typeof phone !== 'string') return false;
  
  // Remove common formatting characters
  const digitsOnly = phone.replace(/[\s\-\(\)\+\.]/g, '');
  
  // Check if it contains only digits and is between 7-15 characters
  const phoneRegex = /^\d{7,15}$/;
  
  return phoneRegex.test(digitsOnly);
}

/**
 * Sanitizes string input by trimming and limiting length
 * Prevents abuse through extremely long strings
 * @param {string} str - String to sanitize
 * @param {number} maxLength - Maximum allowed length (default: 5000)
 * @returns {string} Sanitized string
 */
export function sanitizeString(str, maxLength = 5000) {
  if (!str || typeof str !== 'string') return '';
  
  return str.trim().slice(0, maxLength);
}

/**
 * Validates complete contact form data
 * @param {Object} data - Form data object
 * @param {string} data.firstName - First name
 * @param {string} data.lastName - Last name
 * @param {string} data.email - Email address
 * @param {string} data.phone - Phone number (optional)
 * @param {string} data.service - Service selected
 * @param {string} data.message - Message content
 * @returns {Object} { isValid: boolean, errors: Object }
 */
export function validateContactForm(data) {
  const errors = {};
  
  // Validate firstName
  if (!data.firstName || typeof data.firstName !== 'string' || data.firstName.trim().length === 0) {
    errors.firstName = 'First name is required';
  } else if (data.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  } else if (data.firstName.trim().length > 50) {
    errors.firstName = 'First name must be less than 50 characters';
  }
  
  // Validate lastName
  if (!data.lastName || typeof data.lastName !== 'string' || data.lastName.trim().length === 0) {
    errors.lastName = 'Last name is required';
  } else if (data.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  } else if (data.lastName.trim().length > 50) {
    errors.lastName = 'Last name must be less than 50 characters';
  }
  
  // Validate email
  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate phone (optional)
  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number (7-15 digits)';
  }
  
  // Validate service
  const validServices = ['ml', 'viz', 'mlops', 'db'];
  if (!data.service || typeof data.service !== 'string' || !validServices.includes(data.service)) {
    errors.service = 'Please select a service';
  }
  
  // Validate message
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (data.message.trim().length > 5000) {
    errors.message = 'Message must be less than 5000 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
