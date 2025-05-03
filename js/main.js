import { comments } from './comments.js'
import { renderComments } from './renderComments.js'
import { getComments } from './api.js'

getComments().then((loadedComments) => {
    comments.length = 0
    comments.push(...loadedComments)
    renderComments()
})
