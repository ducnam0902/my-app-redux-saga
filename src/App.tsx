import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';

function App() {

  return (
    <div >
      <Switch>
        <Route path="/login"></Route>
        <Route path="/admin"></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
