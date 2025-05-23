import { formatDateFromISO } from './utils/formatDateFromISO.js'

export function getComments() {
    return fetch('https://wedev-api.sky.pro/api/v1/laletin-sergey/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data.comments.map((comment) => ({
                name: comment.author.name,
                text: comment.text,
                date: formatDateFromISO(comment.date),
                likes: comment.likes,
                isLiked: comment.isLiked,
            }))
        })
}

export function postComment(name, text) {
    return fetch('https://wedev-api.sky.pro/api/v1/laletin-sergey/comments', {
        method: 'POST',
        body: JSON.stringify({ name, text }),
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then((data) => {
                    const error = new Error(data.error || 'Unknown error')
                    error.code = response.status
                    throw error
                })
            }
        })
        .catch((error) => {
            if (error.code) throw error
            const networkError = new Error('Network error')
            networkError.code = 'network'
            throw networkError
        })
}
