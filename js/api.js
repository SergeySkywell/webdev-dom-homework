import { formatDateFromISO } from './utils/formatDateFromISO.js'

export async function getComments() {
    const response = await fetch(
        'https://wedev-api.sky.pro/api/v1/:laletin-sergey/comments',
    )
    const data = await response.json()
    return data.comments.map((comment) => ({
        name: comment.author.name,
        text: comment.text,
        date: formatDateFromISO(comment.date),
        likes: comment.likes,
        isLikedL: comment.isLiked,
    }))
}
