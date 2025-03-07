import Header from "./Header"
import Content from "./Content"

import type { CourseType } from "../App"

export default function Course({ course }: { course: CourseType }) {
  return (
    <div className="course-wrapper">
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}
