import AudioSlice from "./AudioSlice";
import { AudioSliceInterface } from "./AudioSlice";

type AllAudioSlicesProps = {
  list: Array<AudioSliceInterface>;
  onAddToArrangement: (slice: AudioSliceInterface) => void;
};

export default function AllAudioSlices({
  list,
  onAddToArrangement,
}: AllAudioSlicesProps) {
  return (
    <div className="flex flex-row flex-nowrap">
      {list.map((slice) => (
        <AudioSlice
          key={"audioSlice:" + slice.text}
          src={slice.src}
          text={slice.text}
          onAddToArrangement={onAddToArrangement}
        />
      ))}
    </div>
  );
}
