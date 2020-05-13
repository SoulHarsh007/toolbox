const Test = require("./index");
const toolbox = new Test();
toolbox.logger.info("hellow");
console.log(toolbox.random.getNumber(1, 4));