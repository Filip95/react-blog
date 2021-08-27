import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppPosts from './components/AppPosts';
import AddPost from './components/AddPost';
import DetailedPost from './components/DetailedPost';

function App() {
  return (
    <div className='App'>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/add'>Add new post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/add'>
            <AddPost />
          </Route>
          <Route exact path='/post/:id'>
            <DetailedPost />
          </Route>
          <Route exact path='/edit/:id'>
            <AddPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;