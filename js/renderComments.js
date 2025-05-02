import { commentsEl, addFormTextEl } from './domElements.js'
import { comments } from './comments.js';


export const renderComments = () => {
    commentsEl.innerHTML = "";
  
    for (const comment of comments) {
      const likeButtonClass = comment.isLiked ? "like-button -active-like" : "like-button";
  
      const commentHtml = `
        <li class="comment">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${comment.date}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button class="${likeButtonClass}"></button>
          </div>
        </div>
      </li>
      `
      commentsEl.innerHTML += commentHtml;
    }
  
    const commentElements = document.querySelectorAll('.comment');
  
    commentElements.forEach((commentElement) => {
      commentElement.addEventListener('click', () => {
        const nameEl = commentElement.querySelector('.comment-header div:first-child');
        const textEl = commentElement.querySelector('.comment-text');
  
        const quoteText = `> ${nameEl.textContent}\n> ${textEl.textContent}\n\n`;
  
        addFormTextEl.value = quoteText;
      });
    });
  
    const likeButtons = document.querySelectorAll('.like-button')
  
    likeButtons.forEach((button, index) => {
      button.addEventListener('click', function (event) {
        event.stopPropagation();
        comments[index].isLiked = !comments[index].isLiked;
  
        if (comments[index].isLiked) {
          comments[index].likes++;
        } else {
          comments[index].likes--;
        }
  
        renderComments();
      });
    });
  }