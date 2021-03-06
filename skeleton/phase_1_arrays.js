// Uniq

Array.prototype.uniq = function () {
    let charExists  = {};
    let result = [];
    this.forEach(function (ele) {
        if (!charExists[ele]) {
            charExists[ele] = true; 
            result.push(ele);
        }
    })
    return result; 
}
// if (!result.includes(ele)) {
//     result.push(ele);
// }

//console.log([1,1,2,2,3,3,4,4,5,5].uniq())


// Two Sum

Array.prototype.twoSum = function() {
    let result = [];
    let that = this;

    //debugger;
   this.forEach(function (ele1, index1) {
        that.forEach(function (ele2, index2) {
            if (index2 > index1 && ele1 + ele2 === 0) {
                result.push([ele1, ele2]);
            }
        })
   })

    // self.forEach(function (ele1, index1) {
    //     self.forEach(function (ele2, index2) {
    //         if (index2 > index1 && ele1 + ele2 === 0) {
    //             result.push([ele1, ele2]);
    //         }
    //     })
    // })
    return result;
}

// Transpose 

Array.prototype.transpose = function() {
    let result = [];
    let length = this.length;

    for (let i = 0; i < length; i++) {
        result.push([]);
        for (let j = 0; j < length; j++) {
            result[i].push(this[j][i]);
        }
    }
    return result;
}


// myEach(callback)

Array.prototype.myEach = function(call) {
    for (let i = 0; i < this.length; i++) {
        call(this[i]);
    }
}

function test(ele) { 
                     return ele * 2;}

//console.log([1, 2, 3].myEach(test));

// myMap(callback)

Array.prototype.myMap = function(callback) {
    let result = [];
    this.myEach(ele => result.push(callback(ele))); //function(ele) same as ele => 
    return result;
}
console.log([1, 2, 3].myMap(test));
