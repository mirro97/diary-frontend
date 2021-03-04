// 열거형 enum - 특정 상수들의 집합에 이름을 붙힐 때
enum StarbuksGrade {
    WELCOME = "WELCOME",  // 0
    GREEN = "GREEN",    // 1
    GOLD = "GOLD"      // 2
}

function getDiscount(v: StarbuksGrade): number {
    switch(v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN: 
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscount(StarbuksGrade.GREEN));
console.log("enum StarbucksGrade에 할당된 값: " +StarbuksGrade.GREEN);
console.log(StarbuksGrade.GREEN === "GREEN");
console.log(getDiscount(StarbuksGrade["GREEN"]));