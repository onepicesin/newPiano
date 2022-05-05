

 /**
 * 钢琴音乐模块
 * 
 * */
//% color="#eb0ed9" weight=25 icon="\uf001"
namespace fruitpiano {
    export enum enButton {
        //% blockId="Press" block="按下"
        Press = 0,
        //% blockId="Release" block="松开"
        Release = 1
    }
    export enum DigitalPin2 {
        P0 = 100,  // MICROBIT_ID_IO_P0
        P1 = 101,  // MICROBIT_ID_IO_P1
        P2 = 102,  // MICROBIT_ID_IO_P2
        P5 = 105,  // MICROBIT_ID_IO_P5
        P8 = 108,  // MICROBIT_ID_IO_P8
        P9 = 109,  // MICROBIT_ID_IO_P9
        P10 = 110,  // MICROBIT_ID_IO_P10
        P11 = 111,  // MICROBIT_ID_IO_P11
        P12 = 112,  // MICROBIT_ID_IO_P12
        P13 = 113,  // MICROBIT_ID_IO_P13
        P14 = 114,  // MICROBIT_ID_IO_P14
        P15 = 115,  // MICROBIT_ID_IO_P15
        P16 = 116,  // MICROBIT_ID_IO_P16
        }
    /**
     * 控制按钮按下松开
     * 
     * */
    //% blockId=Piano_Button block="按键 引脚:|%pin|返回: %value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
    export function Button(pin: DigitalPin2, value: enButton): boolean {
        pins.setPull(<DigitalPin><number>pin, PinPullMode.PullUp);
        return pins.digitalReadPin(<DigitalPin><number>pin) == value;
    }
    
    
    
    //引脚
    export enum touch_pin {
        //% blockId="None1" block="无"
        None = 0,
        //% blockId="C1" block="按键C->2"
        P2 = 2,
        //% blockId="D1" block="按键D->5"
        P5 = 5,
        //% blockId="E1" block="按键E->8"
        P8 = 8,
        //% blockId="F1" block="按键F->11"
        P11 = 11,
        //% blockId="G1" block="按键G->12"
        P12 = 12,
        //% blockId="A1" block="按键A->13"
        P13 = 13,
        //% blockId="B1" block="按键B->14"
        P14 = 14,
        //% blockId="CH1" block="按键CH->15"
        P15 = 15
    }

    //引脚地址
    export enum touch {
        //% blockId="None" block="无"
        None = 0x0000,
        //% blockId="C" block="按键C->2"
        C = 0x0001,
        //% blockId="D" block="按键D->5"
        D = 0x0002,
        //% blockId="E" block="按键E->8"
        E = 0x0004,
        //% blockId="F" block="按键F->11"
        F = 0x0008,
        //% blockId="G" block="按键G->12"
        G = 0x0010,
        //% blockId="A" block="按键A->13"
        A = 0x0020,
        //% blockId="B" block="按键B->14"
        B = 0x0040,
        //% blockId="CH" block="按键CH->15"
        CH = 0x0080,
    }
    export enum enMusic {
	//% blockId="dada" block="静音"
        dadadum = 0,
        entertainer,
        prelude,
        ode,
        nyan,
        ringtone,
        funk,
        blues,
        birthday,
        wedding,
        funereal,
        punchline,
        baddy,
        chase,
        ba_ding,
        wawawawaa,
        jump_up,
        jump_down,
        power_up,
        power_down
    }
    /**
     * 播放音乐
     * 
     * */
    //% blockId=Piano_Music_Play1 block="播放哪个音乐:|%index"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Music_Play(index: enMusic): void {
        switch (index) {
            case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
            case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
            case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
            case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
            case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
            case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
            case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
            case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
            case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
            case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
            case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
            case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
            case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
            case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
            case enMusic.ba_ding: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
            case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
            case enMusic.jump_up: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
            case enMusic.jump_down: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
            case enMusic.power_up: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
            case enMusic.power_down: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
        }
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }
    // /**
    //  * 按键触摸返回
    //  * 
    //  * */
    // //% blockId=ABT_Touch block="按键触摸返回"
    // //% weight=5
    // //% blockGap=8
    // //% color="#eb0ed9"
    // //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    // export function Touch(): number {
    //     let a = 0;
    //     let b = 0;
    //     let c = 0;
    //     //使用指定的数字格式在I2C地址向设备写入数字。 要写入一个字节无符号数大端
    //     pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
    //     //使用指定的数字格式从I2C地址读取一个数字。要读取一个字节无符号数大端
    //     a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false); //true->false
    //     b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
    //     c = (b << 8) | a;
    //     return c;
    // }
    /**
     * 控制音量
     * 
     * */
    //% blockId=ABT_Volume block="音量控制： %volume"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% volume.min=0 volume.max=255 volume.defl=125
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function ABT_Volume(volume:number):void{
        music.setVolume(volume);
    }
    /**
     * 音乐按钮地址
     * 
     * */
    //% blockId=ABT_TouchButton block="按键地址：|%value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function TouchButton(value: touch): number {
        let c = value;
        return c;
    }
    /**
     * 通过控制音调调整不同引脚地址的触发音色 低中高
     * 
     * */
    //% blockId=ABT_PlayPiano block="水果钢琴音调：| %value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% value.min=1 value.max=3 value.defl=2
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
    export function PlayPiano(value: number): void {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false); //true->false
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;

        if (value == 1) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(131);
            } else if (c & touch.D) {
                music.ringTone(147);
            } else if (c & touch.E) {
                music.ringTone(165);
            } else if (c & touch.F) {
                music.ringTone(175);
            } else if (c & touch.G) {
                music.ringTone(196);
            } else if (c & touch.A) {
                music.ringTone(220);
            } else if (c & touch.B) {
                music.ringTone(247);
            } else if (c & touch.CH) {
                music.ringTone(262);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else if (value == 2) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(262);
            } else if (c & touch.D) {
                music.ringTone(294);
            } else if (c & touch.E) {
                music.ringTone(330);
            } else if (c & touch.F) {
                music.ringTone(349);
            } else if (c & touch.G) {
                music.ringTone(392);
            } else if (c & touch.A) {
                music.ringTone(440);
            } else if (c & touch.B) {
                music.ringTone(494);
            } else if (c & touch.CH) {
                music.ringTone(523);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
        else if (value == 3) {
            if ((c & temp) != 0) {
                c = c & temp;
            } else if (c & touch.C) {
                music.ringTone(523);
            } else if (c & touch.D) {
                music.ringTone(587);
            } else if (c & touch.E) {
                music.ringTone(659);
            } else if (c & touch.F) {
                music.ringTone(698);
            } else if (c & touch.G) {
                music.ringTone(784);
            } else if (c & touch.A) {
                music.ringTone(880);
            } else if (c & touch.B) {
                music.ringTone(988);
            } else if (c & touch.CH) {
                music.ringTone(1046);
            } else if (c == touch.None) {
                music.ringTone(0);
                //pins.digitalWritePin(DigitalPin.P0, 0);
            }
        }
    }
     /**
     * 由引脚处地址是否与返回设置地址一致 来触发条件
     * 
     * */
    //% blockId=Piano_KeyBoard_Touch block="触摸钢琴键： %value"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function KeyBoard_Touch(value: touch_pin): boolean {
        let a = 0;
        let b = 0;
        let c = 0;
        let temp = 0;
        pins.i2cWriteNumber(0x50, 8, NumberFormat.UInt8BE, false);
        a = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false); //true->false
        b = pins.i2cReadNumber(0x50, NumberFormat.UInt8BE, false);
        c = (b << 8) | a;
        if ((c & temp) != 0) {
            c = c & temp;
        } else {
            switch (value) {
                case touch_pin.None:
                    return (c & touch.None) == 0;
                    break;
                case touch_pin.P2:
                    return (c & touch.C) == 0x0001;
                    break;
                case touch_pin.P5:
                    return (c & touch.D) == 0x0002;
                    break;
                case touch_pin.P8:
                    return (c & touch.E) == 0x0004;
                    break;
                case touch_pin.P11:
                    return (c & touch.F) == 0x0008;
                    break;
                case touch_pin.P12:
                    return (c & touch.G) == 0x0010;
                    break;
                case touch_pin.P13:
                    return (c & touch.A) == 0x0020;
                    break;
                case touch_pin.P14:
                    return (c & touch.B) == 0x0040;
                    break;
                case touch_pin.P15:
                    return (c & touch.CH) == 0x0080;
                    break;
                default:
                    break;
            }
        }
        return false;
    }
    export enum AnalogPin3 {
        P1 = 101,  // MICROBIT_ID_IO_P1
        P2 = 102,  // MICROBIT_ID_IO_P2
        P15 = 115,  // MICROBIT_ID_IO_P15
        P16 = 116,  // MICROBIT_ID_IO_P16
    }
    /**
      * 舵机
      */
    //% blockId=ABT_Servo9 block="舵机引脚 %pin|角度 %value|延迟(毫秒) %value2"
    //% weight=5
    //% blockGap=8
    //% color="#eb0ed9"
    //% value.min=0 value.max=180
    //% value.defl=90
    //% value2.min=0 value2.max=5000
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
    export function Servo(pin2: AnalogPin3, value: number, value2: number,value3=3): void {
        pins.servoWritePin(<AnalogPin><number>pin2, value);
        basic.pause(value2);
    }
    
}