/*
 * 跟电脑当前运行的环境，以及你电脑的配置等因素有关系 
 */
/* console.time('AAA');
for (let i = 0; i < 999999; i++) {

}
console.timeEnd('AAA'); */


// function swap(a, b) {
// 	/* let c = a;
// 	a = b;
// 	b = c; */

// 	/* [a, b] = [b, a]; */

// 	/* a = a + b;
// 	b = a - b;
// 	a = a - b; */
// }

// 实现数组中两项(索引i/j)的交换
/* function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
}

Array.prototype.bubble = function bubble() {
	// this -> ary
	let _this = this,
		flag = false;
	// 控制循环多少轮
	for (let i = 0; i < _this.length - 1; i++) {
		// 控制每一轮循环多少次
		for (let j = 0; j < _this.length - 1 - i; j++) {
			// 交换位置
			if (_this[j] > _this[j + 1]) {
				swap(_this, j, j + 1);
				flag = true;
			}
		}
		if (!flag) break;
		flag = false;
	}
	return _this;
};

let ary = [12, 8, 24, 16, 1];
ary.bubble();
console.log(ary); */

/* 
Array.prototype.insert = function insert() {
	// 先取出一张牌放到手里
	let _this = this,
		hanlde = [];
	hanlde.push(_this[0]);

	// 开始抓牌
	for (let i = 1; i < _this.length; i++) {
		// A每一次新抓的牌
		let A = _this[i];
		// 和手里的牌进行比较（倒着比较）
		for (let j = hanlde.length - 1; j >= 0; j--) {
			// 要比较的手里这张牌
			let B = hanlde[j];
			// 新抓的牌A比B要大，则放在B的后面
			if (A > B) {
				hanlde.splice(j + 1, 0, A);
				break; //=>没必要和手里的牌继续比较了
			}
			// 都比到最开始，A都没有比任何的牌大，则A是最小的，插入到开始
			if (j === 0) {
				hanlde.unshift(A);
			}
		}
	}
	
	return hanlde;
};


let arr = [12, 8, 24, 16, 1];
arr = arr.insert();
console.log(arr); */


Array.prototype.quick = function quick() {
	let _this = this;

	// 如果处理的数组只有一项或者空的，则无需处理了
	if (_this.length <= 1) {
		return _this;
	}

	// 获取中间项，并且把中间项在数组中删除
	let middleIndex = Math.floor(_this.length / 2),
		middleValue = _this.splice(middleIndex, 1)[0];

	let arrLeft = [],
		arrRight = [];
	for (let i = 0; i < _this.length; i++) {
		let item = _this[i];
		item < middleValue ? arrLeft.push(item) : arrRight.push(item);
	}

	return quick.call(arrLeft).concat(middleValue, quick.call(arrRight));
};



let arr = [12, 23, 24, 13, 24, 2, 3, 45, 23, 14];
arr = arr.quick();
console.log(arr);


/* const obj = {
	a: 1,
	b: function () {
		function f() {
			console.log('obj.a=' + this.a + 'a=' + a)
		}
		f();
	}
} */