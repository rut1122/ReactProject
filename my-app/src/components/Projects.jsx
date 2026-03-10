import React from "react";
import AddProject from "./AddProject";
//הצגת הפרויקטים
const Projects = () => {
  return (
    <div style={{ direction: "rtl" }}>
      {/* כאן אנחנו קוראים רק לקומפוננטה המעוצבת */}
      <AddProject />
    </div>
  );
};

export default Projects;
