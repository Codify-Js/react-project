import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Form, Input, Button, Select } from 'antd';
import { createPost, getPostsFromApi, deletePost, updatePost } from '../../store/actions/actions.js';
import {createdPostsSelector} from '../../store/selectors/selectors'
import './index.scss';

const CrudPostsContainer = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();

  const posts = useSelector((state) => createdPostsSelector(state));

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

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  }

  const handleEdit = (item, index) => {
    setEditItem(item);
  }

  const onUpdate = async (values) => {
    if (!editItem) return;
    const payload = {
      ...values,
      id: editItem.id
    }
    dispatch(updatePost(payload));

    setEditItem(null);
    form2.resetFields();
  }

  console.log('editItem', editItem);
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

      {posts.map((item, i) => (
          item.id === editItem?.id ? (
            <Form {...layout} initialValues={editItem} form={form2} onFinish={onUpdate}>
              <Form.Item
                name="msg"
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
                name="name"
                label="Author"
                rules={[
                  {
                    required: true
                  },
                ]}
              >
                <Input />
              </Form.Item>
            
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <div className="post-item" key={item.id}>
              <div className="post-item__content">{item.msg} By {item.name}</div>
              <div className="post-item__actions">
                <Button type="primary" ghost onClick={() => handleEdit(item, i)}>
                  Edit
                </Button>
                <Button type="primary" danger onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </div>
            </div>
          )
      ))}
    </div>
  )
}

export default CrudPostsContainer;