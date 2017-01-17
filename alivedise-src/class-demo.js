/** Person类，Jack/Richard/Lisa等实例都是从这里继承
 * @class
 * @see Person#say
 * @param {String} p1 - 这是第一个参数
 * @param {String} p2 - 这是第二个参数
 * @param {Array} [args] - 可选参数
 * @example
 * var person = new Person();
 * person.say();
 * person.testFn(1);
 */
var Person = function(p1, p2, args) {
	/** 这是一个成员方法
	 * @returns {string}
	 */
	this.say = function() {
		return "I'm an instance.";
	};

	/** @private */
	function say(hello, world) {
		return "I'm inner.";
	}
};

/**
 * Add a single new row or multiple rows of data to the table. Please note
 * that this is suitable for client-side processing only - if you are using
 * server-side processing ({@link Person.say}), then to add data, you
 * must add it to the data source, i.e. the server-side, through an Ajax call.
 * @param {array|object} p1 - data The data to be added to the table. This can be:
 *    <ul>
 *      <li>1D array of data - add a single row with the data provided</li>
 *      <li>2D array of arrays - add multiple rows in a single call</li>
 *      <li>object - data object when using <i>mData</i></li>
 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
 *    </ul>
 *  @param {bool} p2 - redraw the table or not
 *  @returns {string} An array of integers
 *  @deprecated Since v1.10
 *  @example
 *    // Global var for counter
 *    var giCount = 2;
 *
 *    $(document).ready(function() {
 *      $('#example').dataTable();
 *    } );
 *
 *    function fnClickAddRow() {
 *      $('#example').dataTable().fnAddData( [
 *        giCount+".1",
 *        giCount+".2",
 *        giCount+".3",
 *        giCount+".4" ]
 *      );
 *
 *      giCount++;
 *    }
 */
Person.say = function(p1, p2) {
	return "I'm static.";
};

/**
 * Person的原型链
 * @type {{constructor: Function, testFn: Function}}
 */
Person.prototype = {
	// constructor
	constructor: Person,

	/**
	 * 测试Person类的原型方法是否可用
	 * @param {int} count - 只能是大于0的正整数
	 */
	testFn: function(count) {
		console.log("output:", count);
	}
};
