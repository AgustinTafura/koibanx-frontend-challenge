const formatDate = (date)=>{
    let formatted_date = `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`;
    return formatted_date;
}

const orderArrOfObjects = (arrOfObjects, property, sequence = 'asc') =>{
    const order = sequence === 'asc' ? 1 : -1
    return arrOfObjects.sort(function (a, b) {
        console.log(a[property], b[property], order, order*-1)
        if (a[property] > b[property]) {
            return order
        }
        if (a[property] < b[property]) {
            return order*-1;
        }
        return 0;
    })
}

module.exports = {
    formatDate,
    orderArrOfObjects
}