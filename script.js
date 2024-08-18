document.addEventListener('DOMContentLoaded', () => {
    const postButton = document.getElementById('post-button');
    const postContent = document.getElementById('post-content');
    const postsContainer = document.getElementById('posts');

    // Function to create a new post element
    function createPost(content) {
        const post = document.createElement('div');
        post.className = 'post';

        const user = 'उपयोगकर्ता'; // Replace with dynamic user data
        const timestamp = new Date().toLocaleString();

        post.innerHTML = `
            <div class="user">${user}</div>
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

    // Load posts when the page is loaded
    loadPosts();
});
