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

    // Event listener for the post button
    postButton.addEventListener('click', () => {
        const content = postContent.value.trim();
        if (content) {
            const newPost = createPost(content);
            postsContainer.prepend(newPost);
            postContent.value = '';
        }
    });
});
