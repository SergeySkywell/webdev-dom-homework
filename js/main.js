import { comments } from './comments.js'
import { renderComments } from './renderComments.js'
import { initAddComment } from './addComment.js'
import { formatDate } from './formatDate.js'

initAddComment({ comments, renderComments, formatDate })
renderComments()
