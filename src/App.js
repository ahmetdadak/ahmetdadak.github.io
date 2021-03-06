import './App.css';
import Landing from './components/Landing/Landing'
import Blog from './components/Blog/Blog'
import Post from './components/Post/Post'
import NewPost from './components/NewPost/NewPost'
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>

    <div className="App">

      <Switch>
      <Route exact path ="/">
        <Landing/>
      </Route>
      {/*
      <Route exact path="/blog">
        <Blog/>
      </Route>
      <Route exact path="/blog/new">
        <NewPost/>
      </Route>
      <Route exact path="/blog/:id">
        <Post/>
      </Route>
      */}
      <Route path="*">
        <NotFoundPage/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
