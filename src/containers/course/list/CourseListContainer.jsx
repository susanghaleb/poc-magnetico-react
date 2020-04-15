import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CourseList from "../../../components/course/list/courseList";

function CourseListContainer() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer);
  return <CourseList courses={courses} />;
}

export default CourseListContainer;
