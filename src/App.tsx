import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoLists from "./components/TodoLists";
const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <CreateTodo />
      <TodoLists />
    </div>
  );
};

export default App;
