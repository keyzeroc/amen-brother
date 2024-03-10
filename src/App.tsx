import "./App.css";
import { AudioSliceInterface } from "./components/slices/AudioSlice";
import AllAudioSlices from "./components/slices/AllAudioSlices";
import Arrangement from "./components/arrangement/Arrangement";
import { useState } from "react";
import { amenSlices } from "./data/audioslices";
import VolumeController from "./components/VolumeController";

function App() {
  const [arrangementList, setArrangementList] = useState(
    Array<AudioSliceInterface>
  );

  const onAddToArrangementHandler = (audioSlice: AudioSliceInterface) => {
    setArrangementList((prevList) => [...prevList, audioSlice]);
  };

  const onRemoveHandler = (position: number) => {
    setArrangementList((preList) =>
      preList.filter((item, index) => index !== position)
    );
  };

  const onChangePositionHandler = (position: number, newPosition: number) => {
    if (newPosition > arrangementList.length - 1 || newPosition < 0) return;
    // solution is inefficient AF but this is a small project and it should be OK here for now
    setArrangementList((prevList) => {
      const newArr = [...prevList];
      const backup = newArr[newPosition];
      newArr[newPosition] = newArr[position];
      newArr[position] = backup;
      return newArr;
    });
  };
  
  return (
    <div id="bgGradient" className="min-w-full h-svh bg-sky-800 text-white flex flex-col items-center gap-16">
      <div className="w-4/5 mt-8">
        <AllAudioSlices
          onAddToArrangement={onAddToArrangementHandler}
          list={amenSlices}
        />
      </div>
      <div className="w-4/5">
        <Arrangement
          list={arrangementList}
          onRemove={onRemoveHandler}
          onChangePosition={onChangePositionHandler}
        />
      </div>
      <VolumeController />
    </div>
  );
}

export default App;
