import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Main from 'components/Main'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <Main description="This is the About Page" />
        </Route>
      </Switch>
    </Router>
  )
}
