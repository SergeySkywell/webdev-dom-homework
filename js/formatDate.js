export function formatDate() {
    const dateNow = new Date()

    const year = dateNow.getFullYear()
    const month = String(dateNow.getMonth() + 1).padStart(2, '0')

    const day = String(dateNow.getDate()).padStart(2, '0')
    const shortYear = String(year).slice(-2)

    const hours = String(dateNow.getHours()).padStart(2, '0')
    const minutes = String(dateNow.getMinutes()).padStart(2, '0')

    return `${day}.${month}.${shortYear} ${hours}:${minutes}`
}
