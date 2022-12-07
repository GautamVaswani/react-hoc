import "./App.css";
import SearchTodos from "./components/TodoList";
import SearchUsers from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <h2>Higher Order Components</h2>
      <div className="lists">
        <section className="users_section">{<SearchUsers />}</section>
        <section className="todos_section">{<SearchTodos />}</section>
      </div>
    </div>
  );
}

export default App;
