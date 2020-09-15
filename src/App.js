import React from 'react';
import { Button } from 'antd';
import './App.css';

import Welcome from './Pages/RecipeGallery';

const App = () => (
  <div className="App">
    <Button type="primary">New Recipe</Button>
    <Welcome />
  </div>
);

export default App;
