import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import ButtonPopUp from "./ButtonPopup";

export default function AddMoodModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Mood</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ButtonPopUp />
      </Modal>
    </>
  );
}