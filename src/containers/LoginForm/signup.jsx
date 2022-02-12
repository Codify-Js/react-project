import React, {useState} from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/actions/actions';
import { useDispatch } from 'react-redux';

export default function SignUpForm() {
  const [form] = Form.useForm();
  const [passError, setPassError] = useState('')
  const dispatch = useDispatch();
  let navigate = useNavigate();

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

  const validatePassword = (pass1, pass2) => {
    return pass1 === pass2;
  }

  const onSubmit = async (values) => {
    const isValid = validatePassword(values.password, values.passwordConfirmation)
    if (isValid) {
      const payload = {
        email: values.email,
        password: values.password
      }

      await dispatch(registerUser(payload));
      navigate('/login');
    } else {
      setPassError('Password must be equal.')
    }
  };

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto;', height: 'calc(100vh)' }}>
    {passError && <div style={{color: 'red'}}>{passError}</div>}

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
      <Form.Item
        name="passwordConfirmation"
        label="Password Confirmation"
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
          Register
        </Button>

        <Button type="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
  );

}
