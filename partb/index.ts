import express from "express";
import { bmiCaluculator } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

interface MultiplyValues {
  height: number;
  weight: number;
}

const app = express();
app.use(express.json());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parseArguments = (h: any, w: any): MultiplyValues => {
  if (!isNaN(Number(h)) && !isNaN(Number(w))) {
    return {
      height: Number(h),
      weight: Number(w),
    };
  } else {
    throw new Error("malformatted parameters");
  }
};

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  try {
    const { height, weight } = parseArguments(
      req.query.height,
      req.query.weight
    );

    const bmi = bmiCaluculator(height, weight);
    res.send({
      weight,
      height,
      bmi,
    });
  } catch (error) {
    res.json({ error: "malformatted parameters" });
  }
});

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target || isNaN(Number(target)))
    res.status(400).json({ error: "malformed parameters" });

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.send(calculateExercises(daily_exercises, target));
  } catch (error) {
    res.status(400).json({ error: "parameters missing" });
  }
});

app.listen(3001, () => console.log("server running on port:", 3001));
