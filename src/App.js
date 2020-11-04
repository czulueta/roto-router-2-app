import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/gallery">Gallery</Link>
      <Switch>
          <Route path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/gallery"><Gallery /></Route>
      </Switch>
    </div>
  );
}

export default App;
