var john = {
    fullName: 'John Doe',
    height: 1.8,
    weight: 63,
    calcBMI: function() {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}

var mark = {
    fullName: 'Mark Wick',
    height: 1.9,
    weight: 53,
    calcBMI: function() {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    }
}




if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' BMI is higher than ' + mark.fullName);
} else if (john.BMI === mark.BMI) {
    console.log('Both of their BMIs are the same');
} else {
    console.log('Mark BMI is higher');
}