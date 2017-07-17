var sum = 0;
process.argv.forEach(function(element) {
    if (!isNaN(element)) {
        sum += parseInt(element);
    }
}, this);
console.log(sum);