class Korean {
    constructor(name) {
        this.name = name;
    }
    say(message) {
        console.log(message);
    }
}
class KoreanProgrammer extends Korean {
    constructor(name, personalNum) {
        super(name);
        this.name = name;
        this.personalNum = personalNum;
    }
    say(message) {
        console.log(message);
    }
    writeCode(requirment) {
        console.log(requirment);
        return requirment + "... ...";
    }
    loveBTS() {
        console.log("love you BTS!");
    }
}
const sujeong = new KoreanProgrammer('sujeong', 2222);
