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

        if (name.length < 3 || text.length < 3) {
            alert('Имя и комментарий должны быть не короче 3 символов')
            return
        }

        formEl.classList.add('hidden')
        addingCommentEl.classList.remove('hidden')

        try {
            await postComment(name, text)

            const loadedComments = await getComments()
            comments.length = 0
            comments.push(...loadedComments)
            renderComments()
        } catch (error) {
            if (error.code === 400) {
                alert('Имя и комментарий должны быть не короче 3 символов')
            } else if (error.code === 500) {
                alert('Сервер сломался, попробуй позже')
            } else if (error.code === 'network') {
                alert('Кажется, у вас сломался интернет, попробуйте позже')
            } else {
                alert('Неизвестная ошибка')
            }

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
