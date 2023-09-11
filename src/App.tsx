import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import PostList from './components/PostList';
import ThreadDetailView from './pages/ThreadDetailView';

const App = () => {
 return(
    <Router>
        <Routes>
          <Route path="/post" element={<Post />} />
          <Route index element={<PostList />} />
          <Route path="/post/:id" index element={<ThreadDetailView/>} />

        </Routes>
      </Router>
 );   
};

export default App;
