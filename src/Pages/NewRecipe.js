import React from 'react';
import 'antd/dist/antd.css';
import { Form, Button, Input, Select, InputNumber } from 'antd';

const { Option, OptGroup } = Select;

const NewRecipe = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <InputNumber min={0} max={10} step={0.1} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label="Unit"
        name="unit"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Select
          showSearch
          defaultValue="lucy"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </OptGroup>
          <OptGroup label="Engineer">
            <Option value="Yiminghe">yiminghe</Option>
          </OptGroup>
        </Select>
        ,
      </Form.Item>
      <Form.Item
        label="Ingredient"
        name="ingredient"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input placeholder="Basic usage" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewRecipe;
