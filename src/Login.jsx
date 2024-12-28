import React from 'react'

export function Login() {
    document.getElementById('loginForm').addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const loginData = {
            email: email,
            password: password
        };

        try {
            // Make the API request
            const response = await fetch('https://your-api-url.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData), // Send login data as JSON
            });

            // Parse the response
            const result = await response.json();

            if (response.ok) {
                // Login successful
                document.getElementById('responseMessage').textContent = `Login successful: ${result.message}`;
                console.log('Token:', result.token); // Save the token for future requests
            } else {
                // Login failed
                document.getElementById('responseMessage').textContent = `Login failed: ${result.error || result.message}`;
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('responseMessage').textContent = 'An error occurred. Please try again.';
        }
    });

    return (
        <>
            <form id="loginForm">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
            </form>

            <p id="responseMessage"></p>
        </>
    )
}

export default Login