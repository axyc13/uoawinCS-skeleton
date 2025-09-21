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
      {/* Button displays image */}
      <Button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center justify-center p-2"
      >
        <img
          src={moodImages[moodType]}
          alt={moodType}
          className="w-50 h-50 object-cover"
        />
        <span className="mt-1 text-sm">{moodType}</span>
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ButtonPopUp moodType={moodType} onAddMood={onClick} />
      </Modal>
    </>
  );
}
