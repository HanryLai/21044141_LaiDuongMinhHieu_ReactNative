// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
const Dolphins = [96, 108, 89];
const Koalas = [88, 91, 110];

const average = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

const diemTB = (d, g) => {
    return [average(d), average(g)];
};
const [dtb, ktb] = diemTB(Dolphins, Koalas);

const compare = (dtb, ktb) => {
    dtb == ktb
        ? console.log("Hòa")
        : dtb > ktb
        ? console.log("Dolphins win")
        : console.log("Koalas win");
};

const bonus1 = (dtb, ktb) => {
    if (dtb > ktb && dtb >= 100) {
        console.log("Dolphins win");
    } else if (ktb > dtb && ktb >= 100) {
        console.log("Koalas win");
    } else if (dtb == ktb && dtb >= 100 && ktb >= 100) {
        console.log("Hòa");
    } else {
        console.log("Không ai thắng");
    }
};

compare();
bonus1();
