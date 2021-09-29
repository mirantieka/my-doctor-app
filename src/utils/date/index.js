export const getChatTime = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const minutes = minute < 10 ? '0'+minute : minute;

    return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`
}

export const setChatDate = (oldDate) => {
    const year = oldDate.getFullYear();
    const month = oldDate.getMonth() + 1;
    const date = oldDate.getDate();

    return `${year}-${month}-${date}`;
}