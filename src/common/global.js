// const jwtToken = '++++++++++++++';

// export default {
//     jwtToken,
// }


let global = {};

global.jwtToken = '';

global.formatDate = function (time) {
    let date = new Date(time);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = change(date.getDate()) + ' ';
    let h = change(date.getHours()) + ':';
    let m = change(date.getMinutes()) + ':';
    let s = change(date.getSeconds());
    return Y + M + D + h + m + s;
}

function change(t) {
    if (t < 10) {
        return "0" + t;
    } else {
        return t;
    }
}

export default global;