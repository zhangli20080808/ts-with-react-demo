import React, { useRef } from "react";
import { ComponentMeta } from "@storybook/react";
import Form, { Field } from "./index";

const meta: ComponentMeta<typeof Form> = {
  title: "rc-field-Form 组件",
  id: "Form",
  component: Form,
  subcomponents: { Field: Field },
  decorators: [
    (Story) => (
      <div style={{ width: "550px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: "code",
      },
    },
  },
};
export default meta;

export const ABasicForm = (args) => {
  return (
    <Form
      // initialValue={{ username: "12", password: "34" }}
      // onFinish={(values) => {
      //   console.log("Finish:", values);
      // }}
      // onFinishFail={(errorInfo) => {
      //   console.log(errorInfo, "失败");
      // }}
    >
      {/* <Field
        name="username"
        // rules={[
        //   { min: 3 },
        //   { required: true },
        //   {
        //     validate: uniqueName,
        //   },
        // ]}
      >
        <input placeholder="username" />
      </Field>
      <Field name="password">
        <input placeholder="password" />
      </Field> */}
      <button>Submit</button>
    </Form>
  );
};
ABasicForm.storyName = "基本的登陆表单";
