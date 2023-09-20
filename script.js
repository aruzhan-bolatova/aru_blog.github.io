// checking of the javascript is linked to html and working
console.log("works")

// Comments Section

// Creating constant variables equalling the values and inputs from html by using .getElementById function
document.addEventListener('DOMContentLoaded', function() {
    const commentList = document.getElementById('comments');
    const commentInput = document.getElementById('enter_comment');
    const publishBtn = document.getElementById('publish'); 

    // Function to add a new comment to the list
    function addComment() {
        const commentText = commentInput.value.trim();

        if (commentText !== '') {
            const li = document.createElement('li');
            li.textContent = commentText;
            commentList.appendChild(li);
            commentInput.value = '';
            publishBtn.removeAttribute("disabled");
 			publishBtn.classList.add("abled")
        }
    }

    // Event listener for adding a comment
    publishBtn.addEventListener('click', addComment);

    // Event listener for submitting a comment when the Enter key is pressed
    commentInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            addComment();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const likeButton = document.getElementById('like-btn');
    const dislikeButton = document.getElementById('dislike-btn');
    const likeCount = document.getElementById('like-count');
    const dislikeCount = document.getElementById('dislike-count');

    let likes = 0;
    let dislikes = 0;

    // Function to update like count
    function updateLikeCount() {
        likeCount.textContent = likes + ' Likes';
    }

    // Function to update dislike count
    function updateDislikeCount() {
        dislikeCount.textContent = dislikes + ' Dislikes';
    }

    // Event listener for the like button
    likeButton.addEventListener('click', function() {
        likes++;
        updateLikeCount();
    });

    // Event listener for the dislike button
    dislikeButton.addEventListener('click', function() {
        dislikes++;
        updateDislikeCount();
    });
});

