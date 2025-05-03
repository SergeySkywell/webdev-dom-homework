import { comments } from './comments.js'
import { renderComments } from './renderComments.js'
import { getComments } from './api.js'
import { initAddComment } from './addComment.js'
import { formatDate } from './formatDate.js'

getComments().then((loadedComments) => {
    comments.length = 0
    comments.push(...loadedComments)
    renderComments()
})

initAddComment({
    comments,
    renderComments,
    formatDate,
})
