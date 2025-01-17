import React from "react";
import { Form, Input, message } from "antd";
import { CopyOutlined, PaperClipOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/es/form/Form";
import CommonInput from "../../common/CommonInput";
import CommonButton from "../../common/CommonButton";
import { BASE_URL } from "../../../constant";

const { TextArea } = Input;

interface NoteFormProps {
  form: FormInstance;
  isUpdate: boolean;
  showCopy: boolean;
  noteId?: string;
  onFinish: (values: any) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ showCopy = true, form, isUpdate, noteId, onFinish }) => {

  const handleCopy = () => {
    const link = `${BASE_URL}/note/${noteId}`;

    navigator.clipboard.writeText(link).then(
      () => {
        message.success("Link copied!");
      },
      (err) => {
        message.error("Failed to copy!");
        console.error("Error copying text: ", err);
      }
    );
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <div className="bg-white border flex gap-3 flex-col flex-1 border-stone-300 p-2 rounded-xl h-content">
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
            readonly
            name="copylink"
            size="large"
            suffix={
              showCopy && (
                <CommonButton className="!p-2 rounded-md" onClick={handleCopy}>
                  <CopyOutlined />
                </CommonButton>
              )
            }
            placeholder="Link will appear here"
            prefix={<PaperClipOutlined className="mr-1" />}
          />
          <CommonButton htmlType="submit" text={isUpdate ? "Update" : "Save"} />
        </div>
      </div>
    </Form>
  );
};

export default NoteForm;
