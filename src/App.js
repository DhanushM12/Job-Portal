import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import Page from "./Page";
import Search from "./Search";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Welcome to the Job Portal</h1>
      <Search params={params} onParamChange={handleParamChange} />
      <Page page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading Jobs...</h1>}
      {error && <h1>Error, Please Try Refreshing...</h1>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
      <Page page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
