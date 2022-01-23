import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Form, Input, Button, Select } from 'antd';
import { createPost, getPostsFromApi } from '../../store/actions/actions.js';
import {createdPostsSelector} from '../../store/selectors/selectors'

const CrudPostsContainer = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const posts = useSelector((state) => createdPostsSelector(state));

  console.log('posts', posts);
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

  const onSubmit = async (values) => {
    const payload = {
      msg: values.note,
      name: values.author
    }
    
    await dispatch(createPost(payload));
    onReset();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div style={{padding: '20px'}}>
      <Form {...layout} form={form} onFinish={onSubmit}>
        <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input />
        </Form.Item>

         <Form.Item
          name="author"
          label="Author"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input />
        </Form.Item>
      
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>

      {posts.map(item => (
        <div key={item.msg}>{item.msg} By {item.name}</div>
      ))}
    </div>
  )
}

export default CrudPostsContainer;