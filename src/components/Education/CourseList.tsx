import React, { useState } from "react";
import { COURSES } from "../../utilities/Courses";
import CourseCard from "./CourseCard";
import classes from "./CourseList.module.css";

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState(COURSES);
  const [searchQuery, setSearchQuery] = useState("");

  const queryHandler = (queryString: string) => {
    setSearchQuery(queryString);
    const filteredList = COURSES.filter(
      (course) =>
        course.name.trim().toLowerCase().match(queryString.toLowerCase()) ||
        course.author.trim().toLowerCase().match(queryString.toLowerCase())
    );
    setCourses(filteredList);
  };

  const selectHandler = (option: string) => {
    const sortedArray = [...courses];
    switch (option) {
      case "name":
        setCourses(sortedArray.sort((a, b) => a.name.localeCompare(b.name)));
        break;
      case "author":
        setCourses(sortedArray.sort((a, b) => a.author.localeCompare(b.author)));
        break;
      default:
        setCourses(
          sortedArray.sort((a, b) => a.author.localeCompare(b.author))
        );
        break;
    }
  };

  return (
    <section className={classes["course-list"]}>
      <h1>Courses</h1>

      <div className={classes["search-bar"]}>
        <input
          type="text"
          placeholder="Search.."
          value={searchQuery}
          onChange={(e) => queryHandler(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currenColor">
          <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
        </svg>
      </div>
      <div className={classes.filter}>
        <select onChange={(e) => selectHandler(e.target.value)}>
          <option value="author">Author</option>
          <option value="name">Name</option>
        </select>
      </div>

      {courses.length > 0 ? (
        courses.map((course, id) => (
          <CourseCard
            key={id}
            name={course.name}
            link={course.link}
            repository={course.repository}
            author={course.author}
            hours={course.hours}
          />
        ))
      ) : (
        <p className={classes["not-found"]}>No course found!</p>
      )}
    </section>
  );
};
export default CourseList;
