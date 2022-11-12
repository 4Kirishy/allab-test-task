import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { JobDetailed } from "./pages/JobDetailed";
import { JobList } from "./pages/JobList";

const App = () => {
  // states
  const [jobList, setJobList] = useState([]);

  //fecth api
  useEffect(() => {
    let mounted = true;
    fetch(`${process.env.REACT_APP_JOB_API}`)
      .then((responce) => responce.json())
      .then((data) => {
        if (mounted) {
          setJobList(data);
        }
      })
      .catch((err) => console.error(err));

    //cleanup
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative h-full mt-14">
      <Routes>
        <Route
          path="/allab-test-task"
          element={<Navigate to="/allab-test-task/job-list" />}
        />
        <Route
          path="/allab-test-task/job-list"
          element={<JobList jobList={jobList} />}
        />
        <Route
          path="/allab-test-task/job-list/:jobId"
          element={<JobDetailed jobList={jobList} />}
        />
      </Routes>
    </div>
  );
};

export default App;
