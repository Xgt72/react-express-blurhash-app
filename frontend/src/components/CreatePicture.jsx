import { useState } from "react";
import axios from "@services/axios";
import Modal from "./Modal";
import Spinner from "./Spinner";

export default function CreatePicture() {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !file) {
      return alert("You must provide all necessary data");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("imageData", JSON.stringify({ description }));

    try {
      setShowModal(true);
      await axios.post("api/pictures", formData);
      closeModal();
      return alert("Image created with success!!");
    } catch (err) {
      console.error(err);
      return alert("Something bad happend");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">
        Description:
        <input
          type="text"
          placeholder="Put here a description for your image..."
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label htmlFor="file">
        Choose an image:
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </label>
      <button type="submit">Create Picture</button>
      <Modal title="Please wait, picture is Uploading" isShowing={showModal}>
        <Spinner
          strokeColor="hsl(155, 100%, 50%)"
          radius={30}
          strokeWidth={5}
        />
      </Modal>
    </form>
  );
}
