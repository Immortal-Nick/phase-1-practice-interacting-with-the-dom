document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const counter = document.getElementById('counter');
    const minusBtn = document.getElementById('minus');
    const plusBtn = document.getElementById('plus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
  
    let count = 0;
    let timer;
  
    // Function to increment counter
    function incrementCounter() {
      count++;
      counter.textContent = count;
    }
  
    // Function to decrement counter
    function decrementCounter() {
      count--;
      counter.textContent = count;
    }
  
    // Function to handle "Like" button click
    function handleLike() {
      const currentTime = counter.textContent;
      const existingLike = document.querySelector(`li[data-time="${currentTime}"]`);
  
      if (existingLike) {
        const likeCount = parseInt(existingLike.dataset.likes);
        existingLike.dataset.likes = likeCount + 1;
        existingLike.textContent = `${currentTime} has been liked ${likeCount + 1} times`;
      } else {
        const newLike = document.createElement('li');
        newLike.dataset.time = currentTime;
        newLike.dataset.likes = 1;
        newLike.textContent = `${currentTime} has been liked 1 time`;
        likesList.appendChild(newLike);
      }
    }
  
    // Function to handle Pause/Resume button click
    function handlePauseResume() {
      if (pauseBtn.textContent === 'pause') {
        clearInterval(timer);
        minusBtn.disabled = true;
        plusBtn.disabled = true;
        heartBtn.disabled = true;
        pauseBtn.textContent = 'resume';
      } else {
        timer = setInterval(incrementCounter, 1000);
        minusBtn.disabled = false;
        plusBtn.disabled = false;
        heartBtn.disabled = false;
        pauseBtn.textContent = 'pause';
      }
    }
  
    // Function to handle comment submission
    function handleCommentSubmit(event) {
      event.preventDefault();
      const commentText = commentInput.value;
      const commentElement = document.createElement('div');
      commentElement.textContent = commentText;
      commentList.appendChild(commentElement);
      commentInput.value = '';
    }
  
    // Event listeners
    minusBtn.addEventListener('click', decrementCounter);
    plusBtn.addEventListener('click', incrementCounter);
    heartBtn.addEventListener('click', handleLike);
    pauseBtn.addEventListener('click', handlePauseResume);
    commentForm.addEventListener('submit', handleCommentSubmit);
  
    // Start the timer
    timer = setInterval(incrementCounter, 1000);
  });