let hi= ()=> {
	console.log("HI")
}
function log(text){
	console.log(`moduleA log: ${text}`);
}
module.exports = {hi,log};
