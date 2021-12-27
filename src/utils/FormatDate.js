const Day = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const Month = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

export const FormatDate = (date) => {
    let d = Date.now() - (new Date(date))
    let s = Math.floor(d / 1000)
    if (s < 60) {
        return `Vừa xong`
    } else if (s < 3600) {
        return `${Math.floor(s / 60)} phút trước`
    } else if (s < 86400) {
        return `${Math.floor(s / 3600)} giờ trước`
    } else if (s < 2592000) {
        return `${Math.floor(s / 86400)} ngày trước`
    } else if (s < 31536000) {
        return `${Math.floor(s / 2592000)} tháng trước`
    } else {
        return `${Math.floor(s / 31536000)} năm trước`
    }
}

export const FormatFullDate = (data) => {
    let d = new Date(data);
    const year = d.getFullYear();
    const month = Month[d.getMonth()];
    const date = d.getDate();
    const day = Day[d.getDay()];
    const hour = d.getHours();
    const minute = d.getMinutes();
    if (minute < 10) {
        return `${day}, ${date} ${month} ${year} ${hour}:0${minute}`
    }
    return `${day}, ${date} ${month} ${year} ${hour}:${minute}`
}