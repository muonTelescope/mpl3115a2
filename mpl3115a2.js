//This is a I2C library for the NXP MPL3115A2 Pressure and Temprature sensor.

var I2C = require('raspi-i2c').I2C;

module.exports = class MPL3115A2 {
    constructor(ADDR) {
        //The mpl311a2 has two possible slave adresses. Default SA0=0:(0x1C) Alt SA0=1:(0x1D).
        this.SLAVE_ADDR = ADDR | 0x60;
    }

    data() {
        var data = {};

        var i2c = new I2C();
        // Clear CTRL_REG_1
        i2c.writeByteSync(this.SLAVE_ADDR, 0x26, 0x00);
        // Set oversmapling to 128x
        i2c.writeByteSync(this.SLAVE_ADDR, 0x26, 0x38);
        //Enable data flags
        i2c.writeByteSync(this.SLAVE_ADDR, 0x13, 0x07);
        // Begin acuiring, single shot
        i2c.writeByteSync(this.SLAVE_ADDR, 0x26, 0x3A);
        var dataReady = false;
        while(!dataReady){
            if(i2c.readByteSync(this.SLAVE_ADDR, 0x00) !=0 ){
                  var response = i2c.readSync(this.SLAVE_ADDR, 0x01 , 6);
                  data.pressure_H = response.readUInt8(1);
                  data.pressure_C = response.readUInt8(2);
                  data.pressure_L = response.readUInt8(3);
                  data.temp_H     = response.readUInt8(4);
                  data.temp_L     = response.readUInt8(5);                  
                  dataReady=true;
            }
        }

        // Combine 3 bits of pressure data
        data.pressure = data.pressure_H <<12 | data.pressure_C <<4 | data.pressure_L>>>4;
        data.pascals = data.pressure/4;

        // Combine 2 bits of temp data
        data.temp = data.temp_H <<4 | data.temp_L>>>4;
        data.temp_C = data.temp/16;

        return data;
    }
}
