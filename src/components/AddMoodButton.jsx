import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import ButtonPopUp from "./EntryPopUp";

export default function AddMoodModal({ children, image }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {image && <img src={image} alt={title} className="w-full h-60 object-cover" />}
      <Button onClick={() => setOpen(true)}>{ children }</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ButtonPopUp />
      </Modal>
    </>
  );
}