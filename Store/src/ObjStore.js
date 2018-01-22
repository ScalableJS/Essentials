var ObjStore = function (STORE_NAME) {
    Store.call(this, STORE_NAME, Object);

    this.each = function (callback) {
        var object = this.get();
		for (var name in object) if (object.hasOwnProperty(name)) {
			if (callback.call(object[name], name, object[name]) === false) break;
		}
    };

    this.reduce = function (callback) {
        var object = this.get();
        return Object.keys(object).reduce(callback.bind(object));
    }
};
