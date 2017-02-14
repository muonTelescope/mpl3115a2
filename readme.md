# NXP MPL3115A2
Node.js library for the pressure and temprature sensor. Manufacturer website for the [datasheet](http://www.nxp.com/assets/documents/data/en/data-sheets/MPL3115A2.pdf).

### Use
For example to use it on your project instatiate the libray, and call the data function. As it acsesses hardware features, you need sudo inorder to run it.
```js
var MPL3115A2 = require("./mpl3115a2.js");
var mpl3115a2 = new MPL311A2();
console.log(mpl3115a2.data());
```

You can can also call it directly from the command line 

```bash
sudo node -e 'console.log(new (require("./mpl3115a2.js"))().data())'
```

### Response

The expected response is a JSON object with the temprature and relitive humiditiy.
```json
{ pressure_H: 95,
  pressure_C: 194,
  pressure_L: 240,
  temp_H: 31,
  temp_L: 144,
  pressure: 392239,
  pascals: 98059.75,
  temp: 505,
  temp_C: 31.5625 }
```