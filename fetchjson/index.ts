import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//interfaces define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(url)
  .then((res) => {
    //as soon as I define the response as a Todo, syntax highlighting can take over
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  })
  .catch((err) => console.log(err));

const logTodo = (id, title, completed) => {
  console.log(`
      The Todo with id: ${id}
      Has a title of: ${title}
      Is it completed? ${completed}
    `);
};
