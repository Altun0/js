function Reverse(arry){
    let newarr = []
    for (let i = arry.length - 1; i >= 0; i--) {
        newarr+=arry[i];
    }
    return newarr ;
}
console.log(Reverse("hello mello hi"));