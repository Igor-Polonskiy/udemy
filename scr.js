function sequence(a = 0, b = 1) {
    let count = a - b
    return function () {
        count = count + b
        return count

    }
}


function take(func, num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(func())
    }

    return arr
}

var gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
//var generator = sequence(10, 3);
//var generator2 = sequence(7, 1);
function map(f, arr) {
    let res = []
    arr.forEach(e => {
        res.push(f(e))
    });
    return res
}

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(1.5*3)

const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 
console.log(sum)

let arr = [1,[1,2],3]
console.log(...arr)


console.log(init(14).add(5).minus(2).result()); // 17
 
function init(a){
     return {
         res: a,
         add: function(x){
             this.res = this.res+x
             return this
         },
         minus: function(x){
            this.res = this.res-x
                return this
         },
         result: function(){
             return this.res
         }
     }
}

console.log(init(14).add(5).add(10).result())