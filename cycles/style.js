function filterRange(arr, a, b) {
    let resultArr = [];
    return arr.map((item) => { if (item < b && item >= a) resultArr.push(item) });
}
let arr = [5, 3, 8, 1];
 
let filtered = filterRange(arr, 1, 4);
 
console.log(filtered); // 3,1 (совпадающие значения)
 
console.log(arr); // 5,3,8,1 (без изменений)
  }