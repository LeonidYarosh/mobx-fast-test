import {Counter} from "./components/counter";
import './App.css';
import {Todo} from "./components/todos";
import {Blocks} from "./components/blocks";

function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
      <Blocks />
    </div>
  );
}

export default App;
