let age = 77;
let isStudent = false;
let ticket=800;
if (age <= 10) {
    console.log('free');
}
else if (isStudent === true) {
    var discount= ticket*50/100;
    var price = ticket - discount;
    console.log('Students get a 50% discount',price);
}
else if (age >= 60) {
    var discount= ticket*15/100;
    var price = ticket - discount;
    console.log('Senior citizens  gets a 15% Discount',price);
}
else{
    console.log('Regular ticket fare 800 tk');
}