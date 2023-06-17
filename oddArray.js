function odd(arr){
for(var i=0;i<arr.length;i++){
    if(arr[i]%2===1){
        console.log(arr[i]);
    }
}

}

var myArr = [12,234,1,45,67,89,12,37,89];
odd(myArr);

function oddRet(nums){
 var getNum=[];
 for(var i=0;i<nums.length;i++){
    if(nums[i]%2!==0){
        getNum.push(nums[i]);
    }
 }
 return getNum;
}
var arr = [12,35,67,89,5,2,43];
var res = oddRet(arr);
console.log(res);