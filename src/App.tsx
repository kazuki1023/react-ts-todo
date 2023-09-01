import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  // からの配列に何が入るかを指定。今回はTodo型の配列
  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <div>
        <h2>todo リスト with TypeScript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" 
          onChange={(e) => handleChange(e)} className='inputText'/>
          <input type="submit" value="作成" className='submitButton'/>
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li>
              <input type="text" 
          onChange={(e) => handleEdit(todo.id, e.target.value)} className='inputText' value={todo.inputValue} disabled={todo.checked}/>
              <input type="checkbox"
          onChange={(e) => handleChecked(todo.id, todo.checked)} className='inputText'  />
          <button onClick={}></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
