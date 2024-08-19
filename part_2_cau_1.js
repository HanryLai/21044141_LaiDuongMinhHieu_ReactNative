const Dolphins = [44, 23, 71];
const Koalas = [65, 54, 49];

const average = (arr) => {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};
