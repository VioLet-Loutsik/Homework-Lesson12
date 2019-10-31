var arr=[];
my_arr=["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
alert(my_arr);
my_arr.push(0);
alert(my_arr);
my_arr.unshift(1000);
alert(my_arr);
my_arr.push("Last array element");
alert(my_arr);
my_arr.splice(3,1);
alert(my_arr);
var arr2=my_arr.filter(function(v){
if (typeof v === "number") {
    return true;
}
});
alert(arr2);
var arr = [1000, 11, 2, 23, 12, 0].map(item => item * item);
alert(arr);
var arr = [1000000, 121, 4, 529, 144, 0];
var min = Math.min.apply(null, arr);
alert(min);
var max = Math.max.apply(null, arr);
alert(max);