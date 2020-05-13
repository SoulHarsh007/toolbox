/**
 * @author MeDrioX <medriox@gmail.com>
 */

"use strict";

module.exports = class ToolBox {

    constructor() {
        this.logger = new(require("./modules/logger/Logger"));
        this.random = new(require("./modules/random/Random"));
    }

};