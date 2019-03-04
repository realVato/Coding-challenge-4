var Mark = {
    
    fullName: 'Mark Bark',
    height: 1.92,
    weight: 92,
    BMI: function() {
        this.BMI = this.weight / (this.height * this.height);
    }
}


var John = {
    
    fullName: 'John Wick',
    height: 1.92,
    weight: 92,
    BMI: function() {
        this.BMI = this.weight / (this.height * this.height);
    }
}



if (Mark.BMI > John.BMI) {

    console.log(Mark.fullName + ' ' + 'has higher BMI than ' + John.fullName + '.');

} else if (Mark.BMI < John.BMI) {

    console.log(John.fullName + ' ' + 'has higher BMI than ' + Mark.fullName + '.');

} else {

    console.log('Both ' + Mark.fullName + ' ' + 'and ' + John.fullName + ' ' + 'has the same BMI.');

}


Mark.BMI(), John.BMI();
console.log(Mark, John);





// Seperate from the challenge, just for practice.
var array1 = ['haha', 'ahaha', 'yes', 845, 'no'];

for (i = array1.length -1; i >= 0; i--) {
    if (typeof array1[i] !== 'string') continue;
    console.log(array1[i]);
}




