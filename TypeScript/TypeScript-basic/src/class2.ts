interface Person {
    name: string;
    say(message: string): void;
}

interface Programmer{
    writeCode(requirment: string): string;
}

abstract class Korean implements Person {
    public abstract personalNum: number;

    constructor(public name: string) {
    }

    say(message: string) {
        console.log(message);
    }

    abstract loveBTS(): void;
}


class KoreanProgrammer extends Korean implements Programmer {
    constructor(public name: string, public personalNum: number){
        super(name);
    }

    say(message: string): void {
        console.log(message);
    }

    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + "... ...";
    }

    loveBTS() {
        console.log("love you BTS!");
    }
}

const sujeong = new KoreanProgrammer('sujeong', 2222);