# ToolBox

This is the first version. This is therefore not complete.

## Install

To install the module execute the following command

```shell
npm install @medriox/toolbox
```

## Modules

```shell
logger
random
```

## How to use it

```js
const TB = require('@medriox/toolbox');
const toolbox = new TB();

toolbox.logger.info(toolbox.random.getNumber(min, max));
toolbox.logger.info(string);
toolbox.logger.warn(string);
toolbox.logger.error(string);
toolbox.logger.debug(string);
```
