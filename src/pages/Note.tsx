import React, { useEffect } from "react";
import { Form, Input } from "antd";
import CommonInput from "../components/common/CommonInput";
import { CopyOutlined, PaperClipOutlined } from "@ant-design/icons";
import CommonButton from "../components/common/CommonButton";
import { useForm } from "antd/es/form/Form";
import api from "../api";
import useRandomId from "../hooks/useRandomId";
import { BASE_URL } from "../constant";
import { useParams } from "react-router-dom";

const { TextArea } = Input;

const Note: React.FC = () => {
  const { id } = useParams();
  const [form] = useForm();
  const randomId = useRandomId();

  const handleFinish = (values: any) => {
    const link = id ? `${BASE_URL}/note/${id}` : `${BASE_URL}/note/${randomId}`;
    form?.setFieldValue("copylink", link);

    const payload = {
      content: values.content,
      link: id ? id : randomId,
    };

    if (id) {
      api
        .put(`notes/${id}`, payload)
        .then((response) => {
          console.log("Data updated:", response.data);
          form?.resetFields();
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    } else {
      api
        .post("notes", payload)
        .then((response) => {
          console.log("Data created:", response.data);
          form?.resetFields();
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  };

  return (
    <section>
      <div className="container">
        <Form form={form} onFinish={handleFinish}>
          <div className="bg-white border flex gap-3 flex-col border-stone-300 p-2 rounded-xl h-content">
            <Form.Item
              rules={[{ required: true, message: "Please input content!" }]}
              name="content"
              className="textarea flex flex-col flex-1 mb-0"
            >
              <TextArea
                placeholder="Type here"
                className="rounded-lg text-base h-full flex-1 !resize-none"
              />
            </Form.Item>
            <div className="flex items-center gap-3">
              <CommonInput
                name="copylink"
                size="large"
                suffix={
                  <CommonButton className="!p-2 rounded-md">
                    <CopyOutlined />
                  </CommonButton>
                }
                placeholder="Link will appear here"
                prefix={<PaperClipOutlined className="mr-1" />}
              />
              <CommonButton htmlType="submit" text="Save" />
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Note;
