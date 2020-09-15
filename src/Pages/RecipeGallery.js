import React from 'react';

import RecipeCard from '../Components/RecipeCard';

export default class RecipeGallery extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      recipes: [
        { title: 'recipe1', description: 'description1' },
        { title: 'recipe1', description: 'description1' },
        { title: 'recipe1', description: 'description1' },
      ],
    };
  }
  render() {
    return this.state.recipes.map((recipe) => {
      return <RecipeCard recipe={recipe} />;
    });
  }
}
