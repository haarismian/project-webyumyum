import React from 'react';

import { Card } from 'antd';

export default function RecipeCard(props) {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title={props.recipe.title} description={props.recipe.description} />
    </Card>
  );
}
