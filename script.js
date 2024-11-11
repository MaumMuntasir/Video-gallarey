// Predefined users (you can add more here)
const users = [
    { username: 'Muntasir Hossain Maum', password: '2406161' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if the user exists and the password matches
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
        // Login successful, redirect to home.html
        window.location.href = 'home.html';
    } else {
        // Login failed, show an error message
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});

// Function to navigate to the videos page with the selected category
function navigateToCategory(category) {
    window.location.href = `videos.html?category=${category}`;
}

// Function to load videos based on the selected category
function loadVideos() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const videoContainer = document.getElementById('video-container');
    const categoryTitle = document.getElementById('category-title');

    // Set the category title
    categoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Videos`;

    // Define video paths based on the category
    const videos = {
        nature: ['nature/3571264-uhd_3840_2160_30fps.mp4','nature/Facebook - Google Chrome 2024-11-11 10-59-41.mp4'],
        technology: ['technology/3129671-uhd_3840_2160_30fps.mp4', 'technology/tech2.mp4'],
        sports: ['sports/3192198-uhd_3840_2160_25fps.mp4', 'sports/sports2.mp4'],
        travel: ['travel/3015510-hd_1920_1080_24fps.mp4', 'travel/travel2.mp4'],
        animals: ['animals/855081-hd_1920_1080_25fps.mp4', 'animals/855538-hd_1920_1080_25fps.mp4']
    };

    // Load videos for the selected category
    if (videos[category]) {
        videos[category].forEach(videoSrc => {
            const videoElement = document.createElement('video');
            videoElement.controls = true;
            videoElement.width = 600;

            const sourceElement = document.createElement('source');
            sourceElement.src = `videos/${videoSrc}`;
            sourceElement.type = 'video/mp4';

            videoElement.appendChild(sourceElement);
            videoContainer.appendChild(videoElement);
        });
    } else {
        videoContainer.innerHTML = '<p>No videos found for this category.</p>';
    }
}



// Function to navigate to the videos page with the selected category
function navigateToCategory(category) {
    // Redirect to videos.html with the selected category as a URL parameter
    window.location.href = `videos.html?category=${category}`;
}



