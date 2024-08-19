const BMICal = (mass, height) => {
    return mass / (height * height);
};

console.log("Your BMI is: " + BMICal(78, 1.69));
console.log("Your BMI is: " + BMICal(95, 1.88));
