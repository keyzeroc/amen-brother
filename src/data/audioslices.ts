import { AudioSliceInterface } from "../components/slices/AudioSlice";

import amen_pt1_break from "../assets/sounds/amen pt-1.wav";
import amen_pt1_snare1 from "../assets/sounds/amen pt-1snare.wav";
import amen_pt1_snare2 from "../assets/sounds/amen pt-1snare2.wav";
import amen_pt2_roll from "../assets/sounds/amen pt-2a.wav";
import amen_pt2_snare1 from "../assets/sounds/amen pt-2 snare.wav";
import amen_pt3_break from "../assets/sounds/amen pt-3.wav";
import amen_pt3_snare1 from "../assets/sounds/amen pt-3 snare.wav";

export const amenSlices: Array<AudioSliceInterface> = [
  {
    text: "Amen Part 1 Break",
    src: amen_pt1_break,
  },
  {
    text: "Amen Part 1 - Snare 1",
    src: amen_pt1_snare1,
  },
  {
    text: "Amen Part 1 - Snare 2",
    src: amen_pt1_snare2,
  },
  {
    text: "Amen Part 2 - Snare 1",
    src: amen_pt2_snare1,
  },
  {
    text: "Amen Part 2 - Roll",
    src: amen_pt2_roll,
  },
  {
    text: "Amen Part 3 - Break",
    src: amen_pt3_break,
  },
  {
    text: "Amen Part 3 - Snare",
    src: amen_pt3_snare1,
  },
];