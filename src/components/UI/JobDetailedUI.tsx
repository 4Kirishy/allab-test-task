import { FC, useEffect, useState } from "react";
import { FaRegStar, FaMapMarkerAlt } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { Map } from "../Map";

interface Props {
  children: JSX.Element[];
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <div
      className="flex flex-col items-center gap-14 max-w-3xl xl:max-w-[1260px] my-0 mx-auto px-4 
                 xl:flex-row xl:justify-between xl:items-start xl:gap-20 relative z-0 mb-[300px]"
    >
      {children}
    </div>
  );
};

export const Header: FC = () => {
  return (
    <header
      className="header| flex flex-col gap-6
                 md:flex-row md:justify-between md:items-center
                 md:border-b md:border-dark md:border-opacity-10 
                 md:pb-2 md:mb-10"
    >
      <h3
        className="text-[28px] leading-[34px] text-dark_hover font-bold 
                   border-b border-dark border-opacity-10 pb-2
                   md:border-none md:pb-0"
      >
        Job Details
      </h3>

      <div
        className="buttons | flex items-center gap-9 
                   mb-8 md:mb-0"
      >
        <button
          className="text-base text-dark opacity-80 hover:text-dark_hover
                     flex items-center gap-3"
        >
          <FaRegStar size={20} /> Save to my list
        </button>
        <button
          className="text-base text-dark opacity-80 hover:text-dark_hover
                     flex items-center gap-3"
        >
          <HiShare size={20} /> Share
        </button>
      </div>
    </header>
  );
};

export const Button: FC<{ text: string; hidden: boolean }> = ({
  text,
  hidden,
}) => {
  return (
    <>
      {hidden ? (
        <button
          className="text-xs text-white uppercase font-semibold bg-dark_hover hover:bg-dark
                     mb-8 py-[18px] px-[30px] max-w-[130px] rounded-lg hidden
                     md:block"
        >
          {text}
        </button>
      ) : (
        <button
          className="text-xs text-white uppercase font-semibold bg-dark_hover hover:bg-dark
                     mb-8 py-[18px] px-[30px] max-w-[130px] rounded-lg self-center md:self-start"
        >
          {text}
        </button>
      )}
    </>
  );
};

interface JobTitleProps {
  title: string;
  createdAt: string;
}
export const JobTitle: FC<JobTitleProps> = ({ title, createdAt }) => {
  return (
    <div className="max-w-[500px]">
      <h2 className="text-2xl text-dark_hover font-bold mb-5">{title}</h2>
      <p className="text-sm text-dark opacity-60">Posted {createdAt}</p>
    </div>
  );
};

export const JobSalary: FC<{ salary: string }> = ({ salary }) => {
  return (
    <p
      className="text-lg text-dark_hover opacity-80 last:opacity-100 
                 flex flex-col gap-1 items-end
                 absolute -bottom-6 right-0
                 md:flex-col-reverse md:static"
    >
      Brutto, per year
      <span className="text-xl md:text-2xl opacity-100 font-bold">
        {salary}
      </span>
    </p>
  );
};

export const JobDescription: FC<{ description: string[] }> = ({
  description,
}) => {
  const jobDesc = description[0];
  const responsopilities = description[1];
  const responsopilitiesDesc = description[2];
  const benefits = description[3];
  const benefitsDesc = description[4];

  return (
    <div className="mt-12 ">
      <p className="text-lg leading-6 text-dark_hover opacity-80 mb-10">
        {jobDesc}
      </p>
      <h5 className="text-xl leading-6 text-dark_hover font-bold mb-2">
        {responsopilities}
      </h5>
      <p className="text-lg leading-6 text-dark_hover opacity-80 mb-10">
        {responsopilitiesDesc}
      </p>
      <h5 className="text-xl leading-6 text-dark_hover font-bold mb-2">
        {benefits}
      </h5>
      <p className="text-lg leading-6 text-dark_hover opacity-80 mb-8">
        {benefitsDesc}
      </p>
    </div>
  );
};

const Info: FC<{ title: string; list: string[] }> = ({ title, list }) => {
  const styles =
    title === "Employment type"
      ? "text-base leading-4 text-[#55699E] font-bold py-4 px-5 bg-[#E1E6F4] border border-[#A7AFC5] rounded-lg"
      : "text-base leading-4 text-[#988B49] font-bold py-4 px-5 bg-[#FFF8D9] border border-[#FFCF00] rounded-lg";

  return (
    <div className="mb-5">
      <h5 className="text-lg text-dark_hover leading-6 opacity-80 mb-[10px]">
        {title}
      </h5>

      <ul className="flex gap-2">
        {list.map((item) => (
          <li key={item} className={styles}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AdditionalInfo: FC<{
  employmentTypeList: string[];
  benefitsList: string[];
}> = ({ employmentTypeList, benefitsList }) => {
  return (
    <div>
      <h4
        className="text-[28px] text-dark_hover font-bold 
                   mb-4 pb-2 border-b border-dark border-opacity-10"
      >
        Additional Info
      </h4>
      <div className="additional-info-container | flex flex-col">
        <Info title="Employment type" list={employmentTypeList} />
        <Info title="Benefits" list={benefitsList} />
      </div>
    </div>
  );
};

export const AttachedImgs: FC<{ imgList: string[] }> = ({ imgList }) => {
  return (
    <div className="max-w-3xl">
      <h4
        className="text-[28px] text-dark_hover font-bold 
                   mb-4 pb-2 border-b border-dark border-opacity-10"
      >
        Attached Images
      </h4>

      <div className="flex gap-2 overflow-x-auto">
        {imgList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="pict"
            className="block w-[30%] max-h-[110px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

interface ContactProps {
  location: {
    lat: number;
    long: number;
  };
  address: string;
  email: string;
  phone: string;
}
export const Contact: FC<ContactProps> = ({
  location,
  address,
  phone,
  email,
}) => {
  const [locationInfo, setLocationInfo] = useState<any>({});

  useEffect(() => {
    let mounted = true;
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.long}&localityLanguage=en`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (mounted) {
          setLocationInfo(data);
        }
      })
      .catch((err) => console.error(err));
  }, [location.lat, location.long]);

  return (
    <div className="self-start">
      <h4
        className="text-[28px] text-dark_hover font-bold 
                   mb-4 pb-2 border-b border-dark border-opacity-10
                   xl:hidden"
      >
        Contact
      </h4>
      <div
        className="w-[300px] h-[150px] bg-[#2A3047] p-[30px] rounded-t-lg   
                   text-xs text-white flex flex-col justify-center
                   min-[420px]:w-[400px] min-[420px]:h-[220px] min-[420px]:text-base"
      >
        <p className="leading-[20px] font-bold tracking-wide mb-4 ">
          {address}
        </p>
        <p className="flex items-center gap-2 mb-2 tracking-wider">
          <FaMapMarkerAlt className="opacity-70 -translate-y-[4px]" size={20} />
          {locationInfo.locality}
        </p>
        <p className="opacity-70 font-light tracking-wider">{phone}</p>
        <p className="opacity-70 font-light tracking-wider">{email}</p>
      </div>
      <Map location={location} />
    </div>
  );
};
