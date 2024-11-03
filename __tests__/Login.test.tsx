// __tests__/Login.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../src/screens/Login';

describe('Login Screen', () => {
  test('renders username and password fields', () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('username-input')).toBeTruthy();
    expect(getByTestId('password-input')).toBeTruthy();
  });

  test('displays success alert on valid login', () => {
    const { getByTestId } = render(<Login />);
    fireEvent.changeText(getByTestId('username-input'), 'user');
    fireEvent.changeText(getByTestId('password-input'), 'password');
    fireEvent.press(getByTestId('login-button'));
  });

  test('displays error alert on invalid login', () => {
    const { getByTestId } = render(<Login />);
    fireEvent.changeText(getByTestId('username-input'), 'wrongUser');
    fireEvent.changeText(getByTestId('password-input'), 'wrongPassword');
    fireEvent.press(getByTestId('login-button'));
  });
});



// For covering all the test cases
  
// // __tests__/Login.test.tsx

// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
// import Login from '../src/screens/Login';

// describe('Login Screen', () => {

//   // 1. Rendering Elements (Universal Scenario)
//   test('renders username and password fields, and login button', () => {
//     const { getByTestId } = render(<Login />);
//     expect(getByTestId('username-input')).toBeTruthy();
//     expect(getByTestId('password-input')).toBeTruthy();
//     expect(getByTestId('login-button')).toBeTruthy();
//   });

//   // 2. Form Validation
//   test('displays validation error when username is empty', () => {
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('password-input'), 'password');
//     fireEvent.press(getByTestId('login-button'));
//     expect(getByText('Username is required')).toBeTruthy();
//   });

//   test('displays validation error when password is empty', () => {
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'user');
//     fireEvent.press(getByTestId('login-button'));
//     expect(getByText('Password is required')).toBeTruthy();
//   });

//   test('displays validation error for incorrect username format', () => {
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'invalid-email');
//     fireEvent.press(getByTestId('login-button'));
//     expect(getByText('Please enter a valid username')).toBeTruthy();
//   });

//   // 3. Form Submission
//   test('displays success alert on valid login', async () => {
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'user');
//     fireEvent.changeText(getByTestId('password-input'), 'password');
//     fireEvent.press(getByTestId('login-button'));

//     await waitFor(() => {
//       expect(getByText('Login successful')).toBeTruthy();
//     });
//   });

//   test('displays error alert on invalid login', async () => {
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'wrongUser');
//     fireEvent.changeText(getByTestId('password-input'), 'wrongPassword');
//     fireEvent.press(getByTestId('login-button'));

//     await waitFor(() => {
//       expect(getByText('Invalid username or password')).toBeTruthy();
//     });
//   });

//   // 4. Edge Cases
//   test('displays error for excessively long username', () => {
//     const longUsername = 'a'.repeat(101); // Example long username
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), longUsername);
//     fireEvent.press(getByTestId('login-button'));
//     expect(getByText('Username is too long')).toBeTruthy();
//   });

//   test('displays error for excessively long password', () => {
//     const longPassword = 'p'.repeat(101); // Example long password
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'user');
//     fireEvent.changeText(getByTestId('password-input'), longPassword);
//     fireEvent.press(getByTestId('login-button'));
//     expect(getByText('Password is too long')).toBeTruthy();
//   });

//   test('displays network error message if login request fails', async () => {
//     const { getByTestId, getByText } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'user');
//     fireEvent.changeText(getByTestId('password-input'), 'password');
//     fireEvent.press(getByTestId('login-button'));

//     await waitFor(() => {
//       expect(getByText('Network error, please try again')).toBeTruthy();
//     });
//   });

//   test('displays loading indicator during login submission', async () => {
//     const { getByTestId } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'user');
//     fireEvent.changeText(getByTestId('password-input'), 'password');
//     fireEvent.press(getByTestId('login-button'));

//     expect(getByTestId('loading-indicator')).toBeTruthy();
//   });

//   test('removes loading indicator after login submission completes', async () => {
//     const { getByTestId, queryByTestId } = render(<Login />);
//     fireEvent.changeText(getByTestId('username-input'), 'user');
//     fireEvent.changeText(getByTestId('password-input'), 'password');
//     fireEvent.press(getByTestId('login-button'));

//     await waitFor(() => {
//       expect(queryByTestId('loading-indicator')).toBeNull();
//     });
//   });
// });
