import { postComment } from './api.js'
import {
    addFormButtonEl,
    addFormNameEl,
    addFormTextEl,
    addingCommentEl,
    formEl,
} from './domElements.js'
import { getComments } from './api.js'

export function initAddComment({ comments, renderComments }) {
    addFormButtonEl.addEventListener('click', async () => {
        if (
            addFormNameEl.value.trim() === '' ||
            addFormTextEl.value.trim() === ''
        )
            return

        const name = addFormNameEl.value
            .trim()
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
        const text = addFormTextEl.value
            .trim()
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')

        formEl.classList.add('hidden')
        addingCommentEl.classList.remove('hidden')

        try {
            await postComment(name, text)

            const loadedComments = await getComments()
            comments.length = 0
            comments.push(...loadedComments)
            renderComments()
        } catch (error) {
            alert('Ошибка при добавлении комментария. Попробуйте снова.')
            console.error(error)
        } finally {
            formEl.classList.remove('hidden')
            addingCommentEl.classList.add('hidden')
            addFormNameEl.value = ''
            addFormTextEl.value = ''
            addFormNameEl.focus()
        }
    })
}
