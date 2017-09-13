export const APIUtils = {
  getAllTodos: () => (
    $.ajax({
      url: 'api/todos',
      method: 'GET'
      })
  ),

  saveTodo: (todo) => {
    return (
      $.ajax({
        url: `api/todos`,
        method: 'POST',
        data: {todo}
      })
    );
  },

  updateTodo: (todo) => {
    return (
      $.ajax({
        url: `api/todos/${todo.id}`,
        method: 'PATCH',
        data: {todo}
      })
    );
  }
};
