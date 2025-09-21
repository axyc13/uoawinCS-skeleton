import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import ButtonPopUp from "./EntryPopUp";

import Bad from "../assets/bFlower.png";
import Good from "../assets/gFlower.png";
import Neutral from "../assets/nFlower.png";
import VeryBad from "../assets/vbFlower.png";
import VeryGood from "../assets/vgFlower.png";

const moodImages = {
  "Very Bad": VeryBad,
  "Bad": Bad,
  "Neutral": Neutral,
  "Good": Good,
  "Very Good": VeryGood,
};

export default function AddMoodButton({ moodType, onClick }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center justify-center p-2"
      >
        <img
          src={moodImages[moodType]}
          alt={moodType}
          className="w-60 h-60 object-cover" // use valid Tailwind
        />
        <span className="mt-1 text-sm">{moodType}</span>
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        {/* pass both onAddMood and onClose so pop-up can update and close */}
        <ButtonPopUp
          moodType={moodType}
          onAddMood={onClick}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}
