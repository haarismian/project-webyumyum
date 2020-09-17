import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Select, InputNumber } from 'antd';

const { Option, OptGroup } = Select;

const IngredientInputs = (props) => {
  return props.ingredients.map((val) => {
    return (
      <div>
        <Form.Item label="Quantity" name="quantity">
          <InputNumber
            step={0.1}
            // onChange={this.onChange}
            defaultValue={val.ingredientQuantity}
          />
        </Form.Item>
        <Form.Item label="Unit" name="unit">
          <Select showSearch defaultValue={val.ingredientUnit}>
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </Form.Item>
        <Form.Item label="Ingredient" name="ingredient">
          <Input placeholder="Ingredient" defaultValue={val.ingredientName} />
        </Form.Item>
      </div>
    );
  });
};

export default IngredientInputs;
