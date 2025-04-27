// pages/JobList.jsx

import JobCard from "../components/JobCard";
import { SimpleGrid, Container } from "@mantine/core";

const jobData = [
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  {
    title: "Full Stack Developer",
    experience: "1-3 yr Exp",
    mode: "Onsite",
    salary: "12LPA",
    posted: "24h Ago",
    description:
      "A user-friendly interface lets you browse stunning photos and videos...",
  },
  // Add more jobs as needed
];

function JobList() {
  return (
    <Container my="md" maw={1312} mah={360}>
      <SimpleGrid cols={4} spacing="lg">
        {jobData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default JobList;
