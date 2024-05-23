export const bmiCaluculator = (h: number, w: number): string => {
  let height: number = h / 100;
  height = height * 2;
  const res: number = w / height;
  let ans: string = "";

  if (res > 29.9) {
    ans = "not Normal (Overweight)";
  } else if (res < 18.5) {
    ans = "not Normal (Underweight)";
  } else if (res >= 18.5 || res <= 24.9) {
    ans = "Normal (healthy)";
  } else {
    ans = "Invalid input";
  }

  return ans;
};
const h = Number(process.argv[2]);
const w = Number(process.argv[3]);

console.log(bmiCaluculator(h, w));
