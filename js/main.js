import { comments } from './comments.js'
import { renderComments } from './renderComments.js'
import { getComments } from './api.js'
import { initAddComment } from './addComment.js'
import { formatDate } from './formatDate.js'
import { commentsEl, formEl, loadingTextEl } from './domElements.js'

loadingTextEl.classList.remove('hidden')

getComments().then((loadedComments) => {
    loadingTextEl.classList.add('hidden')
    formEl.classList.remove('hidden')
    commentsEl.classList.remove('hidden')
    comments.length = 0
    comments.push(...loadedComments)
    renderComments()
})

initAddComment({
    comments,
    renderComments,
    formatDate,
})
