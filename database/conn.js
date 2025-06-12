fetch("https://youssef-ciqudabase.rf.gd/api.php", {
    method: 'GET',
    credentials: 'include', // This is important for handling cookies
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
})
.then(data => {
    console.log('Response:', data);
})
.catch(error => {
    console.error('Error:', error);
});