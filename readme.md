# NXP MPL3115A2
Node.js library for the pressure and temperature sensor. Manufacturer website for the [datasheet](http://www.nxp.com/assets/documents/data/en/data-sheets/MPL3115A2.pdf).

### Use
For example, to use it on your project instantiate the library, and call the data function. As it accesses hardware features, you need sudo to run it. Include it in your `package.json` dependency tree with
```javascript
"dependencies": {
  "mpl3115a2": "sawaiz/mpl3115a2"
}
```
After `npm install` 
```javascript
var MPL3115A2 = require("mpl3115a2");
var mpl3115a2 = new MPL311A2();
console.log(mpl3115a2.data());
```
You can also call it directly from the command line 
```bash
sudo node -e 'console.log(new (require("mpl3115a2"))().data())'
```
### Response
The expected response is a JSON object with the temperature and relative humidity.
```javascript
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