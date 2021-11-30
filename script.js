
let arr=["globus","venera",""];

let newArr=arr.filter(!Boolean)
console.log(newArr);

let object_key="username";

let obj={
   name:"venera",
   star:"five",
   [object_key]:"venerave",
   getInfo:function(){
    return `${this.name} ${this.star}`
   },

};
console.log(obj.name);
console.log(obj.star);
console.log(obj["name"]);
console.log(obj);
console.log(obj.getInfo());

