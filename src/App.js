import logo from './logo.svg';
import './App.css';
import CounterView from './features/Counter/CounterView';
import PostsView from './features/Posts/PostsView';

function App() {
  return (
    <div className="App">
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
