<script lang="ts" setup>
import { ref } from 'vue'
import type Job from '../types/Job'
import type OrderTerm from '../types/OrderTerm'
import JobList from '../components/JobList.vue'

const jobs = ref<Job[]>([
  {
    title: 'qwq',
    location: 'wew',
    salary: 3000,
    id: 'sdastdbda'
  },
  {
    title: 'sdsd',
    location: 'yuy',
    salary: 7000,
    id: 'sdashtuda'
  },
  {
    title: 'mnm',
    location: 'hjh',
    salary: 4000,
    id: 'sdasdadca'
  },
  {
    title: 'vbv',
    location: 'ret',
    salary: 1000,
    id: 'sdasde23a'
  },
  {
    title: 'rer',
    location: 'zxz',
    salary: 5000,
    id: 'sdassdsdda'
  }
])
const order = ref<OrderTerm>('title')
const handleClick = (trem: OrderTerm) => {
  order.value = trem
}
</script>

<template>
  <main class="p-4 ">
  <div class="mb-2">
    <button class="bg-lime-400 p-2 mr-2 rounded-md" @click="handleClick('location')">Order By Location</button>
    <button class="bg-lime-400 p-2 mr-2 rounded-md" @click="handleClick('title')">Order By Title</button>
    <button class="bg-lime-400 p-2 mr-2 rounded-md" @click="handleClick('salary')">Order By Salary</button>
  </div>
    <JobList
      :jobs="jobs"
      :order="order"
    />
  </main>
</template>
