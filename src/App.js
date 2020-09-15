import React from 'react';
import { Button } from 'antd';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import RecipeGallery from './Pages/RecipeGallery';
import NewRecipe from './Pages/NewRecipe';

const App = () => (
  <div className="App">
    <Router>
      <Button type="primary">
        <Link to="/new_recipe">New Recipe</Link>
      </Button>
      <Button type="primary">
        <Link to="/recipe_gallery">gallery</Link>
      </Button>
      <Switch>
        <Route path="/recipe_gallery">
          <RecipeGallery />
        </Route>
        <Route path="/new_recipe">
          <NewRecipe />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
