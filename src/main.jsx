import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/core/styles/global.css";
import "./index.css";
import "@mantine/dates/styles.css";
import Navbar from "./components/Navbar.jsx";
import JobFilter from "./components/JobFilter.jsx";
// import JobCard from "./components/JobCard.jsx";
import JobList from "./pages/JobList.jsx";
import CreateJobForm from "./components/CreateJob.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        /** customize here */
        colorScheme: "light",
        fontFamily: "Satoshi Variable, sans-serif",
        primaryColor: "blue",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Navbar />
      <JobFilter />
      {/* <JobCard /> */}
      {/* <JobList /> */}
      <CreateJobForm />

      {/* <App /> */}
    </MantineProvider>
  </React.StrictMode>
);
