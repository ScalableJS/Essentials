var Store = function (STORE_NAME, TYPE) {
    var isBaseType = function (obj) {
        var toString = Object.prototype.toString;
        return toString.call(TYPE()) === toString.call(obj);
    };

    this.get = function () {
        var out,
            str = localStorage.getItem(STORE_NAME);
        if (str) {
            try {
                out = JSON.parse(str);
            } catch (err) {

            }
        }

        if (!isBaseType(out)) {
            out = TYPE();
        }

        return out;
    };

    this.set = function (callback) {
        var obj = this.get();
        callback.call(obj);
        try {
            callback(obj);
            var str = JSON.stringify(obj);
            localStorage.setItem(STORE_NAME, str);
        } catch (err) {

        }
    };
};