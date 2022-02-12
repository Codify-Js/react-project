import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/actions';

export default function LoginForm() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 8,
    },
  };

  const onSubmit = (values) => {
    dispatch(loginUser(values))
  };

  const handleSignup = () => {
    navigate('/register')
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto;', height: 'calc(100vh)' }}>
    <Form {...layout} form={form} onFinish={onSubmit}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            type: 'email'
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button type="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </div>
  );

}
