// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
const mark1 = { weight: 78, tall: 1.69 };
const john1 = { weight: 92, tall: 1.95 };
const mark2 = { weight: 95, tall: 1.88 };
const john2 = { weight: 85, tall: 1.76 };

const BMICal = (mass, height) => {
    return mass / (height * height);
};

const mark1BMI = BMICal(mark1.weight, mark1.tall);
const john1BMI = BMICal(john1.weight, john1.tall);
const mark2BMI = BMICal(mark2.weight, mark2.tall);
const john2BMI = BMICal(john2.weight, john2.tall);

console.log("data 1: ", mark1BMI, "\n", john1BMI, "\n");
console.log("data 2: ", mark2BMI, "\n", john2BMI, "\n");
