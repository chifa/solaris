define([
    "require",
    "./planet"
], function (require, AbstractPlanet) {
    "use strict";

    var _ = require("underscore");

    var Uranus = function () {

    };

    Uranus.prototype = new AbstractPlanet();

    _.extend(Uranus.prototype, {
        _options: {
            body: {
                fillStyle: "#ffffff"
            }
        },
        _params: {
            name: "Uranus",
            index: 7,
            mass: 86.8, //*10^24
            diameter: 51118, // km
            days: 30589,
            orbit: {
                aphelion: 3003.6,
                perihelion: 2741.3
            }
        }
    });

    return new Uranus();
});
