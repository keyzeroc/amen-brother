import { AudioSliceInterface } from "../slices/AudioSlice";
import AudioSliceArrangement from "./AudioSliceArrangement";
import ButtonIcon from "../UI/ButtonIcon";
const playIconSrc = "https://cdn-icons-png.flaticon.com/512/748/748134.png";

type ArrangementProps = {
  list: Array<AudioSliceInterface>;
  onChangePosition: (position: number, newPosition: number) => void;
  onRemove: (position: number) => void;
};

export default function Arrangement({
  list,
  onChangePosition,
  onRemove,
}: ArrangementProps) {

  const onPlayHandler = () => {
    recursivePlay(0);
  };

  const recursivePlay = (currentPos: number) => {
    const sound = new Howl({
      src: [list[currentPos].src],
      onend: () => {
        currentPos++;
        if (currentPos < list.length) recursivePlay(currentPos);
      },
    });
    sound.play();
  };

  const renderedElement =
    list.length > 0 ? (
      <>
        <div className="flex flex-row">
          {list.map((slice, index) => (
            <div className="shrink-0" key={index + ":" + slice.text}>
              <AudioSliceArrangement
                src={slice.src}
                text={slice.text}
                position={index}
                onChangePosition={onChangePosition}
                onRemove={() => onRemove(index)}
              />
            </div>
          ))}
        </div>
        <ButtonIcon src={playIconSrc} alt="play" onClick={onPlayHandler} />
      </>
    ) : (
      <p className="text-center">Start adding stuff!</p>
    );
  return (
    <div className="w-full border rounded-md overflow-x-scroll">
      {renderedElement}
    </div>
  );
}
