//cau 1
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

// cau 2
// Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
const cau2_print = (mark, join) => {
    if (mark > join) {
        console.log(`Mark's BMI (${mark}) is higher than John's (${join})!`);
    } else {
        console.log(`John's BMI (${join}) is higher than Mark's (${mark})!`);
    }
};

console.log("cau 2: ");
console.log("data 1: ");
cau2_print(mark1BMI, john1BMI);
console.log("data 2: ");

cau2_print(mark2BMI, john2BMI);
