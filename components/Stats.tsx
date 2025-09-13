import { WiTime9 } from "react-icons/wi";
import { BsFire } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

export default function Stats({
  prepTimeMinutes,
  cookTimeMinutes,
  calories,
  rating,
  reviewCount,
}: {
  cookTimeMinutes: number;
  prepTimeMinutes: number;
  calories: number;
  rating: number;
  reviewCount: number;
}) {
  return (
    <ul className="flex gap-6">
      <li className="flex items-center gap-1">
        <WiTime9 className="text-amber-500 text-sm" />
        <span>{prepTimeMinutes}/{cookTimeMinutes}</span>
      </li>
      <li className="flex items-center gap-1">
        <BsFire className="text-amber-500 text-sm" />
        <span>{calories}</span>
      </li>
      <li className="flex items-center gap-1">
        <IoIosStar className="text-amber-500 text-sm" />
        <span>{rating} ({reviewCount})</span>
      </li>
    </ul>
  );
}
