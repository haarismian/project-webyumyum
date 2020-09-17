import React from 'react';
import 'antd/dist/antd.css';
import { Form, Button, Input, Select, InputNumber } from 'antd';

const { Option, OptGroup } = Select;
const { TextArea } = Input;

export default class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onFinish = (values) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  onChange(value) {
    console.log('changed', value);
  }

  onChange2 = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
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
          <InputNumber min={0} max={10} step={0.1} onChange={this.onChange} />
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
            onChange={this.handleChange}
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
          <TextArea
            value={value}
            onChange={this.onChange2}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
