import { addFormButtonEl, addFormNameEl, addFormTextEl } from './domElements.js'

export function initAddComment({ comments, renderComments, formatDate }) {
    addFormButtonEl.addEventListener('click', () => {
      if (addFormNameEl.value.trim() === '' || addFormTextEl.value.trim() === '') return;
  
      const fullDate = formatDate();
  
      const newComment = {
        name: addFormNameEl.value.trim().replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        date: fullDate,
        text: addFormTextEl.value.trim().replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        likes: 0,
        isLiked: false,
      };
  
      comments.push(newComment);
      renderComments();
      addFormNameEl.value = '';
      addFormTextEl.value = '';
      addFormNameEl.focus();
    });
  }
  