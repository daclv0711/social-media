const Day = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
const Month = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

export const FormatDate = (date) => {
    let d = Date.now() - (new Date(date))
    let h = Math.floor(d / 1000)
    console.log(h)
    if (h < 60) {
        return `Vừa xong`
    } else if (h < 3600) {
        return `${Math.floor(h / 60)} phút trước`
    } else if (h < 86400) {
        return `${Math.floor(h / 3600)} giờ trước`
    } else {
        return `${Math.floor(h / 86400)} ngày trước`
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
    return `${day}, ${date} ${month} ${year} lúc ${hour}:${minute}`
}