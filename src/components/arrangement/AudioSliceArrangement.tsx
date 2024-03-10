import { AudioSliceInterface } from "../slices/AudioSlice";
import ButtonIcon from "../UI/ButtonIcon";

const arrowLeftIconSrc =
  "https://cdn-icons-png.flaticon.com/512/2985/2985161.png";
const arrowRightIconSrc =
  "https://cdn-icons-png.flaticon.com/512/2985/2985179.png";
const removeIconSrc = "https://cdn-icons-png.flaticon.com/512/2723/2723639.png";

interface ArrangementSliceProps extends AudioSliceInterface {
  position: number;
  onChangePosition: (position: number, newPosition: number) => void;
  onRemove: (position: number) => void;
}

export default function AudioSliceArrangement({
  text,
  position,
  onChangePosition,
  onRemove,
}: ArrangementSliceProps) {
  return (
    <div className="basis-0 flex-1 flex flex-col border rounded-md gap-2">
      <p className="flex-1 p-2">{text}</p>
      <div className="flex flex-row justify-between border-t">
        <ButtonIcon
          src={arrowLeftIconSrc}
          alt="<"
          onClick={() => onChangePosition(position, position - 1)}
        />
        <ButtonIcon
          src={removeIconSrc}
          alt="x"
          onClick={() => onRemove(position)}
        />
        <ButtonIcon
          src={arrowRightIconSrc}
          alt=">"
          onClick={() => onChangePosition(position, position + 1)}
        />
      </div>
    </div>
  );
}
