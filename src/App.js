import './App.css';
import Landing from './components/Landing/Landing'
import Blog from './components/Blog/Blog'
import Post from './components/Post/Post'
import NewPost from './components/NewPost/NewPost'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>

    <div className="App">

      <Switch>
      <Route exact path ="/">
        <Landing/>
      </Route>
      <Route exact path="/blog">
        <Blog/>
      </Route>
      <Route exact path="/blog/new">
        <NewPost/>
      </Route>
      <Route exact path="/blog/:id">
        <Post/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
