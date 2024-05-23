interface result {
  peroidLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (arr: number[], index: number): result => {
  let count: number = 0;
  let sum: number = 0;
  arr.forEach((num) => {
    num > 0 && count++;
    sum += num;
  });
  // console.log(arr);
  const average: number = sum / arr.length;

  return {
    peroidLength: arr.length,
    trainingDays: count,
    success: average < index ? false : true,
    rating: Math.round(average / index + 1),
    ratingDescription:
      average < index ? "not too bad but could be better" : "great well done",
    target: index,
    average,
  };
};

const nums: number[] = [];
let target: number = 0;

for (let i = 2; i < process.argv.length; i++) {
  i === 2
    ? (target = Number(process.argv[i]))
    : nums.push(Number(process.argv[i]));
}
// console.log(nums, target);
console.log(calculateExercises(nums, target));
