//数组的方法


//1.数组创建和初始化

//Array():创建一个新数组
let arr1 = new Array(1, 2, 3);
console.log(arr1);
//输出：[ 1, 2, 3 ]

//Array.of():创建一个新数组
let arr2 = Array.of(1,2,3);
console.log(arr2);
//输出：[ 1, 2, 3 ]

//Array.from()
let arr3 =Array.from({length:5},(v,k)=>k+1);
console.log(arr3);

//2.增加和删除

//push():尾部添加
arr1.push(3);
console.log(arr1);

//unshift():头部添加
arr1.unshift(2);
console.log(arr1);

//pop():删除最后一个元素并返回删除的这个元素
arr1.pop();
console.log(arr1);


//shift():移除数组第一个元素
arr1.shift();
console.log(arr1);

//splice():移除数组某个位置的元素，可以移除多个
//参数1：开始删除的索引，参数2：要删除几个元素，参数3往后：要替补的元素,可以是多个
arr1.splice(1,1,666);
console.log("splice后：",arr1);

//slice():切割数组，返回新数组，不会对原始数组造成影响
//参数1：切割起始位置（包含）  参数2：切割结束位置（不包含）
//只传一个参数表示从这个位置截到最后一个元素
let res=arr1.slice(0,2);
console.log('arr1.slice(0,2)结果：',res);
console.log(arr1);

//concat():实现数组的拼接返回新数组，不影响原数组
res=arr1.concat([5,6,7]);
console.log('res:',res);
console.log(arr1);

//join():把数组字符串拼接,返回拼接后的字符串
res= arr1.join('+');
console.log('res join:',res);
console.log(arr1);

//toString():把数组转成字符串，
res = arr1.toString();
console.log('res toString',res);
console.log(arr1);




//3.查找

//indexOf():查询某个元素的索引位置,返回第一个元素位置
//如果元素不存在返回-1，可以通过此方法判断元素是否存在，数组中写字符串也可以查
//多个相同元素，查找返回第一个元素索引
res=arr1.indexOf(3);
console.log('res indexOf:',res);

//lastIndexOf():查询某个元素索引位置，返回最后一个元素的索引
arr1.push(3);
res =arr1.lastIndexOf(3);
console.log('res lastIndexOf:',res);

//indcludes():判断某个元素是否存在,返回布尔值
res = arr1.includes(3);
console.log('res includes:',res);



//4.排序

//reverse():数组反转,返回新数组会影响原数组
res=arr1.reverse();
console.log('res reverse:',res);
console.log(arr1);

//sort():数组排序,返回新数组会影响原数组
res=arr1.sort();
console.log('res sort:',res);
console.log(arr1);


