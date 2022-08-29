import { updateText } from "../actions";

const updateTodo = (id, text) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    console.log(todo);

    dispatch(updateText(todo.id, todo.text));
  };
};

export default updateTodo;
