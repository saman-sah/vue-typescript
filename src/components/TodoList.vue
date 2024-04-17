<template>
  <div>
    <TodoGroup :status="TodoStatus.Pending" />
    <TodoGroup :status="TodoStatus.InProgress" />
    <TodoGroup :status="TodoStatus.Completed" />
    <TodoGroup :status="TodoStatus.InProgress" />
  </div>
</template>

<script setup lang="ts">
import  { TodoStatus } from '../types/Todo'
import TodoGroup from './TodoGroup.vue'
</script>
