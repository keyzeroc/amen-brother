import { Howl } from "howler";
const playIconSrc = "https://cdn-icons-png.flaticon.com/512/748/748134.png";
const addIconSrc = "https://cdn-icons-png.flaticon.com/512/2040/2040520.png";
import ButtonIcon from "../UI/ButtonIcon";

export interface AudioSliceInterface {
  text: string;
  src: string;
}

interface AudioSliceProps extends AudioSliceInterface {
  onAddToArrangement?: (slice: AudioSliceInterface) => void;
}

export default function AudioSlice({
  src,
  text,
  onAddToArrangement
}: AudioSliceProps) {

  const sound = new Howl({
    src: [src],
    autoplay: false,
  });

  const onPreview = () => {
    sound.play();
  };

  return (
    <div className="basis-0 flex-1 flex flex-col border rounded-md gap-2">
      <p className="flex-1 p-2">{text}</p>
      <div className="flex flex-row justify-between border-t">
        <ButtonIcon src={playIconSrc} alt="play" onClick={onPreview} />
        {onAddToArrangement && (
          <ButtonIcon
            src={addIconSrc}
            alt="add"
            onClick={() => onAddToArrangement({ src, text })}
          />
        )}
      </div>
    </div>
  );
}
