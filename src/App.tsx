import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoLists from "./components/TodoLists";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <CreateTodo />
      <TodoLists />
      <Footer />
    </div>
  );
};

export default App;
