document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts');
    const loginSection = document.getElementById('login-section');
    const newPostSection = document.getElementById('new-post');
    const usernameInput = document.getElementById('username');
    const loginMessage = document.getElementById('login-message');

    // Check if user is logged in
    function checkLogin() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            loginSection.style.display = 'none';
            newPostSection.style.display = 'block';
            postsContainer.style.display = 'block';
            loadPosts();
        } else {
            loginSection.style.display = 'block';
            newPostSection.style.display = 'none';
            postsContainer.style.display = 'none';
        }
    }

    // Handle login button click
    loginButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        
        if (username) {
            localStorage.setItem('loggedInUser', username);
            loginMessage.textContent = '';
            checkLogin();
        } else {
            loginMessage.textContent = 'Please enter a username.';
        }
    });

    // Function to create a new post element
    function createPost(content) {
        const post = document.createElement('div');
        post.className = 'post';

        // Display post anonymously
        const timestamp = new Date().toLocaleString();

        post.innerHTML = `
            <div class="timestamp">${timestamp}</div>
            <div class="content">${content}</div>
        `;
        return post;
    }

    // Function to load posts from local storage
    function loadPosts() {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.forEach(postContent => {
            const post = createPost(postContent);
            postsContainer.appendChild(post);
        });
    }

    // Function to save posts to local storage
    function savePost(content) {
        const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        savedPosts.push(content);
        localStorage.setItem('posts', JSON.stringify(savedPosts));
    }

    // Event listener for the post button
    postButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content) {
            const newPost = createPost(content);
            postsContainer.prepend(newPost);
            savePost(content);
            postContent.value = '';
        }
    });

    // Check login status on page load
    checkLogin();
});
