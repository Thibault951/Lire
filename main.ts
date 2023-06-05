basic.forever(function () {
    serial.writeLine("")
    serial.writeNumber(BitMaker.read_Ain(AnalogPort.P0))
    serial.writeLine("")
    serial.writeNumber(BitMaker.read_Ain(AnalogPort.P1))
})
