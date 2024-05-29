document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (title && content) {
        const blogContainer = document.getElementById('blogContainer');
        
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        
        const blogTitle = document.createElement('h2');
        blogTitle.innerText = title;
        
        const blogContent = document.createElement('p');
        blogContent.innerText = content;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', function() {
            blogContainer.removeChild(blogPost);
        });
        
        blogPost.appendChild(blogTitle);
        blogPost.appendChild(blogContent);
        blogPost.appendChild(deleteButton);
        
        blogContainer.appendChild(blogPost);
        
        document.getElementById('blogForm').reset();
    }
});
