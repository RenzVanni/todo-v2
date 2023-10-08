import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoLists from "./components/TodoLists";
import Footer from "./components/Footer";
import { useAppSelector } from "./Selector";
const App = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const bgImage = theme.status === false ? "bg-image-dark" : "";

  return (
    <div className={`todo-container ${bgImage}`}>
      <Header />
      <CreateTodo />
      <TodoLists />
      <Footer />
    </div>
  );
};

export default App;
