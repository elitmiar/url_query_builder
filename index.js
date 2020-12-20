"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuildHTTPQuery = /** @class */ (function () {
    function BuildHTTPQuery() {
        this._url = '';
        this.params = [];
    }
    Object.defineProperty(BuildHTTPQuery.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    BuildHTTPQuery.prototype.addQueryParam = function (key, value) {
        this.params.push({ key: key, value: value });
    };
    BuildHTTPQuery.prototype.removeQueryParam = function (key) {
        this.params = this.params.filter(function (obj) { return obj.key !== key; });
    };
    BuildHTTPQuery.prototype.getQueryString = function () {
        var qs = this.url + '?';
        for (var _i = 0, _a = this.params; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.key.length > 0) {
                qs += p.key + "=" + p.value + "&";
            }
        }
        return encodeURI(qs.slice(0, -1));
    };
    return BuildHTTPQuery;
}());
exports.default = BuildHTTPQuery;
