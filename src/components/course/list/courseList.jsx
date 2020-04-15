import React from "react";

function CourseList({ courses }) {
  return (
    <ul>
      {courses.map((course) => {
        <li key={course.title}>{course.title}</li>;
      })}
    </ul>
  );
}

export default CourseList;
