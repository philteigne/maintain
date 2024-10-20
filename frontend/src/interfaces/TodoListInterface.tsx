interface TodoListItemObject {
  task:string,
  id:number,
  status:'incomplete' | 'complete',
  assigneeID:number
}

export type {TodoListItemObject}