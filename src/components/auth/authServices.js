// // authService.js

// const API_URL = 'http://localhost:8000/api'; // Replace with your API URL

// // Registration function
// export async function registerUser({ fullName, email, password }) {
//   try {
//     const response = await fetch(`${API_URL}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ fullName, email, password }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Registration failed');
//     }

//     return response.json();
//   } catch (error) {
//     throw error;
//   }
// }

// // Login function
// export async function loginUser({ email, password }) {
//   try {
//     const response = await fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Login failed');
//     }

//     return response.json();
//   } catch (error) {
//     throw error;
//   }
// }
