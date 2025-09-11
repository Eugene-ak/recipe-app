import { WiTime9 } from "react-icons/wi";
import { BsFire } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

export default function Stats() {
  return (
    <ul className="flex gap-6">
      <li className="flex items-center gap-1">
        <WiTime9 className="text-amber-500 text-sm" />
        <span>20</span>
      </li>
      <li className="flex items-center gap-1">
        <BsFire className="text-amber-500 text-sm" />
        <span>300</span>
      </li>
      <li className="flex items-center gap-1">
        <IoIosStar className="text-amber-500 text-sm" />
        <span>4.6 (98)</span>
      </li>
    </ul>
  );
}
