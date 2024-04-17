<template>
  <div>
    <!-- <h3>Pending</h3> -->
    <ul>
      {{ groupLabel }}
      <li 
        v-for="todo in todoList" 
        :key="todo.id"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import useTodo from '../stores/useTodos'

import  { TodoStatus,type Props } from '../types/Todo'

const props = defineProps<Props>()
const { getTodosByStatus } = useTodo()
const todoList = getTodosByStatus(props.status)

const groupLabel = computed(() => {
  switch (props.status) {
    case TodoStatus.Pending:
      return 'Pending'
    case TodoStatus.InProgress:
      return 'InProgress'
    case TodoStatus.Completed:
      return 'Completed'
    default:
      return "Todo Group"
  }
  
})
</script>
