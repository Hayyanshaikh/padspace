import React, { useState } from "react";
import { useForm } from "antd/es/form/Form";
import api from "../api";
import NoteForm from "../components/pages/note/NoteForm";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd"; // Import Modal and Button from Ant Design
import CommonButton from "../components/common/CommonButton";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const Note: React.FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message

  // Function to handle note creation
  const handleFinish = (values: any) => {
    const payload = {
      content: values.content,
    };

    // Create a new note
    api
      .post("notes", payload)
      .then((response) => {
        const noteId = response?.data?.id;
        console.log("Data created:", response.data);

        // Reset form after creating the note
        form?.resetFields();

        // Navigate to the newly created note
        navigate(`${noteId}`);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        setErrorMessage(error?.response?.data || "There was an error creating the note.");
        setIsModalVisible(true); // Show the modal if error occurs
      });
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <section>
      <div className="container">
        {/* Note Form */}
        <NoteForm showCopy={false} form={form} isUpdate={false} onFinish={handleFinish} />
      </div>

      {/* Error Modal */}
      <Modal
        centered
        title={
          <div className="flex items-center gap-2">
            <ExclamationCircleOutlined className="h-5 w-5 text-red-500 *:h-full *:w-full" />
            <h3 className="text-xl font-semibold">Error</h3>
          </div>
        }
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <CommonButton text="Close" onClick={handleCloseModal} />
        ]}
      >
        <p className="text-base text-gray-400">{errorMessage}</p>
      </Modal>
    </section>
  );
};

export default Note;
