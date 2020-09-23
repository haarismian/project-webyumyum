import React from 'react';
import 'antd/dist/antd.css';
import { Form, Button, Input, Space } from 'antd';

import IngredientInputs from '../Components/IngredientInputs';

import { ingredientsData } from '../DataFiles/Ingredients';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeDirections: '',
      ingredients: ingredientsData,
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
    this.setState({ recipeDirections: value });
  };

  addIngredient = () => {
    this.setState((prevState) => ({
      ingredients: [
        ...prevState.ingredients,
        {
          ingredientQuantity: 1.0,
          ingredientUnit: 'lb',
          ingredientName: 'apple',
        },
      ],
    }));
  };

  createRecipe = () => {
    console.log(this.state);
  };

  render() {
    return (
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        onChange={this.handleChange}
      >
        <Form.Item>
          <IngredientInputs ingredients={this.state.ingredients} />

          <Button type="primary" htmlType="submit" onClick={this.addIngredient}>
            Add Ingredient
          </Button>
        </Form.Item>
        <Form.Item>
          <TextArea
            value={this.state.recipeDirections}
            onChange={this.onChange2}
            placeholder="Controlled autosize"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={this.createRecipe}>
            Submit
          </Button>
        </Form.Item>
        <Form.List name="users">
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field) => (
                  <Space
                    key={field.key}
                    style={{ display: 'flex', marginBottom: 8 }}
                    align="start"
                  >
                    <Form.Item
                      {...field}
                      name={[field.name, 'quantity']}
                      fieldKey={[field.fieldKey, 'quantity']}
                      rules={[
                        { required: true, message: 'Missing ingredient count' },
                      ]}
                    >
                      <Input placeholder="Ingredient quantity" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, 'unit']}
                      fieldKey={[field.fieldKey, 'unit']}
                      rules={[
                        { required: true, message: 'Missing ingredient unit' },
                      ]}
                    >
                      <Input placeholder="Ingredient unit" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, 'ingredient']}
                      fieldKey={[field.fieldKey, 'ingredient']}
                      rules={[
                        { required: true, message: 'Missing ingredient name' },
                      ]}
                    >
                      <Input placeholder="Ingredient Name" />
                    </Form.Item>
                    <MinusCircleOutlined
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                    }}
                    block
                  >
                    <PlusOutlined /> Add field
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
      </Form>
    );
  }
}
