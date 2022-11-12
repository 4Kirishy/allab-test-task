import { FC } from "react";

interface BtnListProps {
  list: string[];
  type: string;
}

export const BtnList: FC<BtnListProps> = ({ list, type }) => {
  return (
    <ul className="flex gap-2">
      {list.map((item) => (
        <li className={`py-4 px-5 `}>{item}</li>
      ))}
    </ul>
  );
};
