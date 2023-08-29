import { useState, useEffect } from "react";

const getLocalData = () => {
  const list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState(getLocalData());
  const [editItemId, setEditItemId] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoItems));
  }, [todoItems]);

  const addTodoItems = () => {
    if (inputValue) {
      const newTodo = {
        id: new Date().getTime().toString(),
        value: inputValue,
      };
      setTodoItems([...todoItems, newTodo]);
      setInputValue("");
    }
    if (inputValue && editItemId) {
      setTodoItems(
        todoItems.map((todoItem) => {
          if (todoItem.id === editItemId) {
            return { ...todoItems, value: inputValue };
          } else {
            return todoItem;
          }
        })
      );
      setInputValue("");
      setEditItemId("");
      setToggleBtn(false);
    }
  };
  //console.log(editItemId);

  //EDIT TODO ITEMS
  const editBtn = (id) => {
    const todoItemEdited = todoItems.find((todoItem) => {
      return todoItem.id === id;
    });
    setInputValue(todoItemEdited.value);
    setEditItemId(id);
    setToggleBtn(true);
  };
  //DELETE TODO ITEMS
  const deleteBtn = (id) => {
    const updatedTodos = todoItems.filter((todoItem) => todoItem.id !== id);
    setTodoItems(updatedTodos);
  };
  return (
    <>
      <main className="min-h-screen w-full flex items-center justify-center flex-column">
        <div className="w-400 p-5 bg-slate-100 rounded-md">
          <h1 className="text-xl mb-4 text-center font-mediam">TODO LIST</h1>
          <div className="flex mb-7 items-center border border-black p-2 gap-2 rounded-sm">
            <input
              className="text-md"
              type="text"
              placeholder="Add A task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {toggleBtn ? (
              <i
                onClick={addTodoItems}
                className="uil uil-edit text-2xl cursor-pointer"
              ></i>
            ) : (
              <i
                onClick={addTodoItems}
                className="uil uil-plus text-2xl cursor-pointer"
              ></i>
            )}
          </div>
          <ul>
            {todoItems.map(({ id, value }) => {
              return (
                <li
                  key={id}
                  className="w-2/2 mb-2 flex items-center justify-between border rounded-sm p-2 bg-slate-200"
                >
                  <span className="text-md">{value}</span>
                  <span className="flex items-center gap-3">
                    <i
                      onClick={() => editBtn(id)}
                      className="uil uil-edit text-xl cursor-pointer"
                    ></i>
                    <i
                      onClick={() => deleteBtn(id)}
                      className="uil uil-trash text-xl cursor-pointer"
                    ></i>
                  </span>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => setTodoItems([])}
            className="p-3 bg-black text-slate-100 mt-2 rounded-sm"
          >
            Delete All
          </button>
        </div>
      </main>
    </>
  );
};
export default Todo;
