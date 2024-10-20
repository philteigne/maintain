import '../App.css';

import TodoListItem from './TodoListItem';
import { TodoListItemObject } from '../interfaces/TodoListInterface';

function TodoList() {

  const todoListItems: TodoListItemObject[] = [
    {
      task: 'Take out Garbage',
      id: 1,
      status: 'incomplete',
      assigneeID: 1
    },
    {
      task: 'Shovel driveway',
      id: 2,
      status: 'incomplete',
      assigneeID: 1
    },
  ]
  
  return (
    <>
      <ul>
        {todoListItems.map((task) => {
          return <TodoListItem key={task.id} todoListItem={task} />
        })}
      </ul>
    </>
  );
}

export default TodoList;
