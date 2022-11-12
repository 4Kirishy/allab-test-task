import { FC } from "react";
import { JobItem } from "../components/JobItem";

interface JobListProps {
  jobList: {
    id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    address: string;
    benefits: string[];
    location: {
      lat: number;
      long: number;
    };
    pictures: string[];
    createdAt: string;
    updatedAt: string;
    description: string;
    employment_type: string[];
  }[];
}

export const JobList: FC<JobListProps> = ({ jobList }) => {
  return (
    <ul className="max-w-[1400px] my-0 mx-auto mb-7 flex flex-col gap-2">
      {jobList.length > 0 &&
        jobList.map((job) => <JobItem key={job.id} {...job} />)}
    </ul>
  );
};
