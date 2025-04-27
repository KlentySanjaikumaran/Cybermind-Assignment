import {
  Container,
  TextInput,
  Textarea,
  Select,
  Button,
  Group,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import {
  IconCalendarEventFilled,
  IconChevronsRight,
  IconChevronsDown,
  IconArrowsSort,
} from "@tabler/icons-react";

function CreateJobForm() {
  const [jobType, setJobType] = useState("FullTime");

  return (
    <Container
      size="md"
      style={{
        width: 848,
        height: "fitContent",
        top: 117,
        left: 296,
        backgroundColor: "white",
          padding: 30,
        border:"1px solid #000000",
        borderRadius: 16,
        boxShadow: "0px 4px 12px #A9A9A940",
      }}
    >
      <Title order={2} align="center" mb="xl">
        Create Job Opening
      </Title>

      <Group grow mb="md">
        <TextInput
          maw={376}
          mah="auto"
          label="Job Title"
          placeholder="Full Stack Developer"
        />
        <TextInput
          label="Company Name"
          placeholder="Amazon, Microsoft, Swiggy"
        />
      </Group>

      <Group grow mb="md">
        <TextInput label="Location" placeholder="Choose Preferred Location" />
        <Select
          label="Job Type"
          data={[
            { value: "FullTime", label: "FullTime" },
            { value: "PartTime", label: "PartTime" },
            { value: "Contract", label: "Contract" },
            { value: "Internship", label: "Internship" },
          ]}
          placeholder="Select Job Type"
          value={jobType}
          onChange={setJobType}
        />
      </Group>

      {/* Salary Range and Deadline */}
      <Group grow mb="md">
        <Group grow>
          <TextInput
            label="Salary Range (Min)"
            leftSection={<IconArrowsSort />}
            placeholder="₹ 0"
          />
          <TextInput
            label="Salary Range (Max)"
            leftSection={<IconArrowsSort />}
            placeholder="₹ 12,00,000"
          />
        </Group>
        <DateInput
          label="Application Deadline"
          placeholder="Pick date"
          rightSection={<IconCalendarEventFilled />}
        />
      </Group>

      {/* Job Description */}
      <Textarea
        label="Job Description"
        placeholder="Please share a description to let the candidate know more about the job role"
        minRows={4}
        mb="md"
      />

      <Group justify="space-between" mt="xl">
        <Button
          rightSection={<IconChevronsDown />}
          variant="outline"
          radius="md"
          size="md"
          style={{
            border: " 1px solid #222222",
            color: "#222222",
            width: 160,
          }}
        >
          Save Draft
        </Button>
        <Button
          rightSection={<IconChevronsRight />}
          radius="md"
          size="md"
          style={{
            width: 160,
            backgroundColor: "#00AAFF",
          }}
        >
          Publish
        </Button>
      </Group>
    </Container>
  );
}

export default CreateJobForm;
