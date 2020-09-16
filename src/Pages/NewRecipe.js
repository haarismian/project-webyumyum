import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Menu, Dropdown } from 'antd';

import { DownOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const NewRecipe = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const menu = (
    <Menu>
      <Menu.ItemGroup title="Group title">
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
      </Menu.ItemGroup>
      <SubMenu title="sub menu">
        <Menu.Item>3rd menu item</Menu.Item>
        <Menu.Item>4th menu item</Menu.Item>
      </SubMenu>
      <SubMenu title="disabled sub menu" disabled>
        <Menu.Item>5d menu item</Menu.Item>
        <Menu.Item>6th menu item</Menu.Item>
      </SubMenu>
    </Menu>
  );

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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Cascading menu <DownOutlined />
          </a>
        </Dropdown>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
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
