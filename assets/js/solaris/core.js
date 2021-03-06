define(["require",
    "./views/background",
    "./views/grid",
    "./views/legend",
    "./views/system",
    "./views/natal",
    "./views/hypotrochoid"
], function (require) {
    "use strict";

    var _ = require("underscore");

    var Solaris = function () {

    };

    Solaris.prototype = {
        _context: null,
        _views: {},
        setContext: function (context) {
            this._context = context;

            // TODO fix me
            this._context.drawImageData = function (data) {
                var img = new Image();
                img.src = data;
                this.drawImage(img, 0, 0);
            };
        },
        draw: function () {
            _.invoke(this._views, "draw", this._context);
        },
        loadViews: function (views) {
            _.map(views, function (view) {
                return this.loadView(view);
            }.bind(this));
        },
        loadView: function (view) {
            this._views[view] = require("./views/" + view);
            return this._views[view];
        },
        getView: function (view) {
            return this._views[view];
        },
        deleteView: function (view) {
            return this._views[view] = null;
        },
        clearViews: function () {
            return this._views = {};
        }
    };

    return new Solaris();
});
