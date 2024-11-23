import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";


const { Title, Paragraph, Text } = Typography;

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();

  const handleLogin = (values) => {
    console.log(values);
    console.log(isRemember);
  }
  return (
    <div style={{ width: "60%" }}>
      <Card >
        <div className="text-center">
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">Start your 30-day free frial.</Paragraph>
        </div>

        <Form layout="vertical" form={form} onFinish={handleLogin} disabled={isLoading} size="large">
          <Form.Item name={"name"} label="Name" rules={[{
            required: true,
            message: "Please enter your name"
          }]}>
            <Input placeholder="Enter your name" allowClear maxLength={100} type="email" />
          </Form.Item>

          <Form.Item name={"email"} label="Email" rules={[{
            required: true,
            message: "Please enter your email"
          }]}>
            <Input placeholder="Enter your email" allowClear maxLength={100} type="email" />
          </Form.Item>

          <Form.Item name={"password"} label="Password" rules={[{
            required: true,
            message: "Please enter your password"
          }]}>
            <Input.Password placeholder="Enter your password" allowClear maxLength={100} />
          </Form.Item>
        </Form>

        <div className="row">
          <Text type="secondary">Must be at least 8 characters.</Text>
        </div>

        <div className="mt-4 mb-3">
          <Button onClick={() => form.submit()} type="primary" style={{ width: "100%" }} size="large">Get started</Button>
        </div>
        <SocialLogin />

        <div className="mt-4 text-center">
          <Space>
            <Text type="secondary">Already have an account?</Text>
            <Link to={"/"}>Log in</Link>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Register;
