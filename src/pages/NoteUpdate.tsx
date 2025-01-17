import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import api from "../api";
import NoteForm from "../components/pages/note/NoteForm";
import { BASE_URL } from "../constant";

const NoteUpdate: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = useForm();

  useEffect(() => {
    if (id) {
      // Fetch existing note data
      api.get(`notes/${id}`).then((response) => {
        const { content } = response.data;
        form.setFieldsValue({
          content,
          copylink: `${BASE_URL}/note/${id}`,
        });
      }).catch((error) => {
        console.error("Error fetching note:", error);
      });
    }
  }, [id, form]);

  const handleFinish = (values: any) => {
    const payload = {
      content: values.content,
      link: id,
    };

    api
      .put(`notes/${id}`, payload)
      .then((response) => {
        console.log("Data updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <section>
      <div className="container">
        <NoteForm showCopy={true} noteId={id} form={form} isUpdate={true} onFinish={handleFinish} />
      </div>
    </section>
  );
};

export default NoteUpdate;
