/**
 * @author MeDrioX <medriox@gmail.com>
 */

const dateFormat = require("dateformat");

"use strict";

module.exports = class Logger {

    constructor(options) {
        this.options = options ? null : [];
    }

    info(content){
        const date = dateFormat(new Date(), "dd/mm/yyyy à HH:MM:s");
        const format = "%date% - %type%: %content%";
        const type = "INFO".blue;
        const output = format.replace("%date%", date).replace("%type%", type).replace("%content%", content);
        return console.log(output);
    }
    warn(content){
        const date = dateFormat(new Date(), "dd/mm/yyyy à HH:MM:s");
        const format = "%date% - %type%: %content%";
        const type = "WARN".yellow;
        const output = format.replace("%date%", date).replace("%type%", type).replace("%content%", content);
        return console.log(output);
    }
    debug(content){
        const date = dateFormat(new Date(), "dd/mm/yyyy à HH:MM:s");
        const format = "%date% - %type%: %content%";
        const type = "DEBUG".green;
        const output = format.replace("%date%", date).replace("%type%", type).replace("%content%", content);
        return console.log(output);
    }
    error(content){
        const date = dateFormat(new Date(), "dd/mm/yyyy à HH:MM:s");
        const format = "%date% - %type%: %content%";
        const type = "ERROR".red;
        const output = format.replace("%date%", date).replace("%type%", type).replace("%content%", content);
        return console.log(output);
    }

};