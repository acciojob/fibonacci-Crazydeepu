function fibonacci(num) {
// your code here
	let a = 0 , b = 1;
	let nextTerm;
		console.log(a +" , "+b+" , ");

	for(let i=2; i<num; i++) {
		nextTerm = a + b;
		a = b;
		b = nextTerm;
		console.log(nextTerm+" , ");
	}
}

module.exports = fibonacci;
