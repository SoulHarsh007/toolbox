/**
 * @author MeDrioX <medriox@gmail.com>
 */

"use strict";

module.exports = class Random {

    constructor(options) {
        this.options = options ? null : [];
    }

    getNumber(min, max){
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

};