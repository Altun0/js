function Main(arr){
    let evenarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            evenarr.push(arr[i]);
        }
    }
    return evenarr
}
console.log(Main([1,2,3,4,5,6,7,8,9]));





function calculator(num1,num2,math){
    switch (math) {
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
             break;
        case '*':
            return num1*num2;
            break;
        case '/':
            return num1/num2;
            break; 
        default:
            console.log("error");
            break;
    }
}
console.log(calculator(40,2,'+'));



function bool(num){
     let newarr=[2,23,4,5,6,67,9]

    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i]==num) {
            return true
        }
    }
    return false
}
console.log(bool(230));