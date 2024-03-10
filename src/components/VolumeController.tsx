import { useEffect, useState } from "react";
import { Howler } from "howler";

type Props = {};

export default function VolumeController({}: Props) {
  const [volume, setVolume] = useState(10);

  useEffect(() => {
    Howler.volume(volume / 100);
  }, [volume]);

  const onVolumeChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const targetValue = event.target.value;
    setVolume(parseInt(targetValue));
  };

  return (
    <div className="fixed bottom-4 w-4/5">
      <input
        id="volumeRange"
        onChange={onVolumeChangeHandler}
        type="range"
        step={1}
        min="1"
        max="100"
        value={volume}
      />
    </div>
  );
}
