function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return 'прямо сейчас'
    } else if (diff < 60000 ) {
        let sec = Math.floor(diff / 1000)
        return sec + ' сек. назад'
    } else if (diff < 360000) {
        let min = Math.floor(diff / 60000)
        return `${min} мин. назад`
    } else {
        let d = date;
        d = [
            '0' + d.getDate(),
            '0' + (d.getMonth() + 1),
            '' + d.getFullYear(),
            '0' + d.getHours(),
            '0' + d.getMinutes()
        ].map(component => component.slice(-2));
        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}