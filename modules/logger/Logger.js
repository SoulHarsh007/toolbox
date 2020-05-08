/**
 * @author MeDrioX <medriox@gmail.com>
 */

let dateFormat = require('dateformat');
let colors = require('colors');
let util = require('util');


'use script'

module.exports = class Logger {

    constructor(options) {
        this.options = options ? null : [];
    }

    info(content){
        let date = dateFormat(new Date(), 'dd/mm/yyyy à HH:MM:s');
        let format = "%date% - %type%: %content%";
        let type = `INFO`.blue;
        let output = format.replace("%date%", date).replace("%type%", type).replace('%content%', content);
        return console.log(output);
    }
    warn(content){
        let date = dateFormat(new Date(), 'dd/mm/yyyy à HH:MM:s');
        let format = "%date% - %type%: %content%";
        let type = `WARN`.yellow;
        let output = format.replace("%date%", date).replace("%type%", type).replace('%content%', content);
        return console.log(output);
    }
    debug(content){
        let date = dateFormat(new Date(), 'dd/mm/yyyy à HH:MM:s');
        let format = "%date% - %type%: %content%";
        let type = `DEBUG`.green;
        let output = format.replace("%date%", date).replace("%type%", type).replace('%content%', content);
        return console.log(output);
    }
    error(content){
        let date = dateFormat(new Date(), 'dd/mm/yyyy à HH:MM:s');
        let format = "%date% - %type%: %content%";
        let type = `ERROR`.red;
        let output = format.replace("%date%", date).replace("%type%", type).replace('%content%', content);
        return console.log(output);
    }

}