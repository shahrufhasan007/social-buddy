import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import AllPosts from './components/Home/AllPosts';
import PostDetail from './components/PostDetail/PostDetail';

function App() {

  return (
    <div>
      <NavBar></NavBar>

      <Router>
        <Switch>
          <Route exact path="/">
          <AllPosts/>
          </Route>
          <Route path="/posts/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route path="/home">
          <AllPosts/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
