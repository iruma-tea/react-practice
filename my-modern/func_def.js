function getTrapezoidArea(upeer = 1, lower = 1, height = 1) {
    return (upeer + lower) * height / 2;
}

console.log(getTrapezoidArea(10, 5, 3));
console.log(getTrapezoidArea(10, 5));
console.log(getTrapezoidArea(10));