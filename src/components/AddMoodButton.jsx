import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import ButtonPopUp from "./EntryPopUp";

export default function AddMoodModal({ children, moodType }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>{children}</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ButtonPopUp moodType={moodType} />
      </Modal>
    </>
  );
}