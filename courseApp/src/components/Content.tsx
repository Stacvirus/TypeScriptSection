import { CoursePart } from "../App";

// interface CoursePart {
//   name: string;
//   exerciseCount: number;
// }

const Part = ({ course }: { course: CoursePart }) => {
  var element: JSX.Element = <div>fuck is good</div>;
  switch (course.kind) {
    case "group":
      element = (
        <div>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <i>project exercises {course.groupProjectCount}</i>
        </div>
      );
      break;
    case "basic":
      element = (
        <div>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <i>{course.description}</i>
        </div>
      );
      break;
    case "background":
      element = (
        <div>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <i>{course.description}</i>
          <p>{course.backgroundMaterial} </p>
        </div>
      );
      break;
    case "special":
      element = (
        <div>
          <h3>
            {course.name} {course.exerciseCount}
          </h3>
          <i>{course.description}</i>
          <p>{course.requirements.join(",")} </p>
        </div>
      );
      break;

    default:
      break;
  }
  return element;
};

const Content = ({ parts }: { parts: CoursePart[] }) => {
  return (
    <div>
      {parts.map((p, key) => (
        <Part key={key} course={p} />
      ))}
    </div>
  );
};

export default Content;
