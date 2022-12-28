import { useState } from "react";
import { Modal, TextInput, Button, Divider } from "@mantine/core";
import { useForm } from "@mantine/form";

interface EditModalProps {
  opened: boolean;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ opened, onClose }) => {
  return (
    <Modal opened={opened} onClose={onClose} title="Edit Tree" size="lg">
      <div>
        <TextInput label="Status" />
        <TextInput label="Location" />
        <Button className="bg-blue-500 text-white rounded-md py-2 active:scale-95 mt-5">
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default EditModal;
