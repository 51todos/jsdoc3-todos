/**
 * A module representing a jacket.
 * @module g2.maps.Map
 */
define([], function() {
	/**
	 * @class
	 * @alias g2.maps.IMap
	 */
	var map = function() {
		this.layers = [];
		this.tool = null;
		this.cursor = null;
		this.events = createEvents();
	};

	/**
	 * 定义添加图层方法
	 * @param {Layer} layer 添加的图层
	 */
	map.prototype.addLayer = function (layer) {
		this.layers.push(layer);
	};

	/**
	 * 获取图层数量
	 * @returns {Number} 返回图层数量
	 */
	map.prototype.getLayerCount = function () {
		return this.layers.length;
	};

	function createEvents() {
		var events = {};
		events.click = [];
		events.mousemove = [];
		events.mouseout = [];
		events.mousedown = [];
		events.mouseup = [];
		events.dblclick = [];
		events.extentchanged = [];
		events.resize = [];
		return events;
	}

	return map;
});