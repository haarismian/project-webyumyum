import React from 'react';
import 'antd/dist/antd.css';
import { Form, Button, Input } from 'antd';

import IngredientInputs from '../Components/IngredientInputs';

const { TextArea } = Input;

export default class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      ingredients: [
        {
          ingredientQuantity: 1.0,
          ingredientUnit: 'lb',
          ingredientName: 'apple',
        },
        // {
        //   ingredientQuantity: 1,
        //   ingredientUnit: 'lb',
        //   ingredientName: 'apple',
        // },
      ],
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

  addIngredient = () => {
    this.setState((prevState) => ({
      Ingredients: [
        ...prevState.ingredients,
        {
          ingredientQuantity: 1.0,
          ingredientUnit: 'lb',
          ingredientName: 'apple',
        },
      ],
    }));
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
        <Form.Item>
          <IngredientInputs ingredients={this.state.ingredients} />
          <Button type="primary" htmlType="submit" onClick={this.addIngredient}>
            Add Ingredient
          </Button>
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
