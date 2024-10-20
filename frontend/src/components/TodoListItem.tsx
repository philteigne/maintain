import '../App.css';
import { TodoListItemObject } from '../interfaces/TodoListInterface';

function TodoListItem({todoListItem}: {todoListItem: TodoListItemObject}) {
  return (
    <>
      <li>
        <input type='checkbox'></input>
        {todoListItem.task}
      </li>
    </>
  );
}

export default TodoListItem;
