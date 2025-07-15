const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const getDate = (date) => {
    const dateParts = date.split('-');
    const day = dateParts[2]; // This will give the day part
    return day;
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(getDate(date));

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
}