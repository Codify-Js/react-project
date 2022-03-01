import React from 'react';
import {Form, Input, Button} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createTest } from '../../store/actions/actions';

export default function CreateTestForm() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const tests = useSelector((store) => store.tests)

  const onSubmit = (values) => {
    dispatch(createTest(values));
  }

  const formComp = (
      <Form form={form} onFinish={onSubmit}>
        <Form.Item
          name="name"
          label="Test Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>

        </Form.Item>
      </Form>
  )

  const testList = (
    tests.map(test => <div key={test.name}>{test.name}</div>)
  )

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto;', height: 'calc(100vh)' }}>
      <div className="test-form">{formComp}</div>
      <div className="test-list">
        {testList}
      </div>
    </div>
  )
}