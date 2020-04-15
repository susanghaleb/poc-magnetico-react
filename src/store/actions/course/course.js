import { getCourses } from "../../../api/course";

export const addCourseAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await getCourses();

      dispatch(addCourseType(data));
    } catch (error) {
      console.log(error);
    }
  };
};
