/**
 * @author MeDrioX <medriox@gmail.com>
 */

'use script'

module.exports = class ToolBox {

    constructor() {
        this.loggerr = new (require('./modules/logger/Logger'));
        this.random = new (require('./modules/random/Random'));
    }

}