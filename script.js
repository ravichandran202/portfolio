const form = document.getElementById('form');
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(form);
    const data = {
        "name": formData.get('name'),
        "email": formData.get('email'),
        "message": formData.get('comment')
    };

    console.log(data)

    try {
        // Send the form data to the server
        const response = await fetch('https://node-server-portfolio.vercel.app/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Handle the server response
        if (response.ok) {
            alert('Form data has been sent successfully!');
            form.reset();  // Optionally reset the form
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending data.');
    }
});
