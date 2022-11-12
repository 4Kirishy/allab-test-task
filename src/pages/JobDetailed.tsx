import { FC } from "react";
import { useParams } from "react-router-dom";
import { whenCreated } from "../utils/supportFunctions";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import {
  Container,
  Header,
  Button,
  JobTitle,
  JobSalary,
  JobDescription,
  AdditionalInfo,
  AttachedImgs,
  Contact,
} from "../components/UI/JobDetailedUI";

interface JobDetailedProps {
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

export const JobDetailed: FC<JobDetailedProps> = ({ jobList }) => {
  //finding the exact job page by path id
  const { jobId } = useParams();
  const thisJob = jobList.find((job) => job.id === jobId);

  const formatDescription = (desc: string) => {
    let descArr = desc.split(/(?:\r?\n)+/);
    descArr = descArr.filter((el) => el.trim());

    return descArr;
  };

  return (
    <>
      {thisJob ? (
        <>
          <Container>
            <div className="job-info-container | flex flex-col max-w-3xl overflow-hidden ">
              <Header />
              <Button text="apply now" hidden />
              <div className="job-title-container | md:flex justify-between items-start gap-6 relative">
                <JobTitle
                  title={thisJob.title}
                  createdAt={whenCreated(
                    new Date(thisJob.createdAt),
                    new Date()
                  )}
                />
                <JobSalary salary={thisJob.salary} />
              </div>
              <JobDescription
                description={formatDescription(thisJob.description)}
              />
              <Button text="apply now" hidden={false} />
              <div className="flex flex-col-reverse md:flex-col gap-16">
                <AdditionalInfo
                  employmentTypeList={thisJob.employment_type}
                  benefitsList={thisJob.benefits}
                />
                <AttachedImgs imgList={thisJob.pictures} />
              </div>
            </div>
            <Contact
              location={thisJob.location}
              address={thisJob.address}
              email={thisJob.email}
              phone={thisJob.phone}
            />
          </Container>
          <Link
            to="../allab-test-task/job-list/"
            className="hidden py-4 px-4 pr-7  bg-[#E4E5EA] rounded-lg  
                   text-xs text-dark_hover uppercase font-bold text-center tracking-wide 
                   absolute bottom-[-150px] left-[60px] z-10 mb
                   md:flex gap-2 items-center"
          >
            <MdArrowBackIosNew size={22} />
            Return to the board
          </Link>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </>
  );
};
