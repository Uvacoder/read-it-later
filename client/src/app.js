import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from '~/pages/homepage'
import CategoryPage from '~/pages/category-page'
import ReReadsPage from '~/pages/re-reads-page'
import ArchivePage from '~/pages/archive-page'
import Nav from '~/components/nav'

const App = () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/category/:id" component={CategoryPage} />
      <Route path="/archives" component={ArchivePage} />
      <Route path="/re-reads" component={ReReadsPage} />
    </Switch>
  </Router>
)

export default App
