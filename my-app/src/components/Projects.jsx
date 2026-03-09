import React from "react";
import AddProject from "./AddProject";

const Projects = () => {
  return (
    <div style={{ direction: "rtl" }}>
      {/* כאן אנחנו קוראים רק לקומפוננטה המעוצבת */}
      <AddProject />
    </div>
  );
};

export default Projects;
