import { FC, useEffect, useState } from "react";
import { whenCreated, formatTitle } from "../utils/supportFunctions";
import { FaMapMarkerAlt, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

interface JobItemProps {
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
}

export const JobItem: FC<JobItemProps> = (props) => {
  const { id, title, pictures, location, address, createdAt } = props;

  //states
  const [locationInfo, setLocationInfo] = useState<any>({});
  const [isBookMark, setIsBookmark] = useState(false);

  //fetch geo api for location (maybe try to find the same solution in google maps api )
  useEffect(() => {
    let mounted = true;
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.long}&localityLanguage=en`;

    fetch(url)
      .then((responce) => responce.json())
      .then((data) => {
        if (mounted) {
          setLocationInfo(data);
        }
      })
      .catch((err) => console.error(err));

    return () => {
      mounted = false;
    };
  }, [location.lat, location.long]);

  // find out when job was posted
  const currentTime = new Date();
  const createdAtTime = new Date(createdAt);
  const whenPosted = whenCreated(createdAtTime, currentTime);

  //format title for smaller devices
  const jobTitle = formatTitle(title);

  return (
    <li className="bg-card_bg_sm pt-11 pb-7 px-4 mx-2 flex gap-5 relative rounded-lg shadow-md">
      <img
        src={pictures[0]}
        alt="job cover"
        className="min-w-[66px] h-[66px] object-cover block rounded-full"
      />
      <div className="max-w-[280px] sm:max-w-3xl">
        <Link
          to={`/allab-test-task/job-list/${id}`}
          className="text-lg leading-6 text-dark h-[50px] text-ellipsis mb-1
                     sm:text-xl sm:font-bold sm:mb-2
                     hover:text-dark_hover transition ease-in duration-75"
        >
          {jobTitle}
        </Link>
        <p className="text-base text-secondary">{address}</p>
        <div className="text-base text-secondary flex items-center gap-2 mb-2">
          <FaMapMarkerAlt />
          <p>{locationInfo.locality}</p>
        </div>
      </div>
      <button
        onClick={() => setIsBookmark((prev) => !prev)}
        className="hidden absolute top-6 right-4 text-[20px] text-secondary
                   sm:block"
      >
        {isBookMark ? <FaBookmark /> : <FaRegBookmark />}
      </button>
      <p
        className="absolute top-3 right-4 text-sm text-secondary
                   sm:bottom-6 sm:top-auto sm:text-base"
      >
        Posted {whenPosted}
      </p>
    </li>
  );
};
