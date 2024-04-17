import { computed, reactive } from 'vue'
import  { TodoStatus, type TodoStore } from '../types/Todo'


const defaultVal = {
  [TodoStatus.Pending] : [],
  [TodoStatus.InProgress] : [],
  [TodoStatus.Completed] : []
}
const todoStore = reactive<TodoStore>(defaultVal)

export default () => {
  const getTodosByStatus = (todoStatus: TodoStatus) => {
    return computed(() => todoStore[todoStatus])
  }

  return {
    getTodosByStatus
  }
}