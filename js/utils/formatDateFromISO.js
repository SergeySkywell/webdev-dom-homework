export function formatDateFromISO(isoString) {
    const date = new Date(isoString)

    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const shortYear = String(date.getFullYear()).slice(-2)

    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${day}.${month}.${shortYear} ${hours}:${minutes}`
}
