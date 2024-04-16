<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import type Job from '../types/Job'
import type OrderTerm from '../types/OrderTerm'

// defineProps<{
//   jobs: Job[]
// }>()


const props = defineProps({
  jobs: {
    type: Array as PropType<Job[]>,
      required: true
  },
  order: {
    type : String as PropType<OrderTerm>,
    required: true
  }
})

const ordersJobs = computed(() => {
  return [...props.jobs].sort((a: Job, b: Job) => {
    return a[props.order] > b[props.order] ? 1 : -1
  })
})
</script>

<template>
  <div class="job-list">
    {{  order }}
    <transition-group name="list" tag="ul">
      <li
        v-for="job in ordersJobs"
        :key="job.id"
        class="mb-4 bg-purple-200 rounded-lg p-4"
      >
        <h2 class="text-xl font-semibold">
          {{ job.title }} in {{ job.location }}
        </h2>
        <div class="salary my-2 text-orange-400 font-semibold ">
          {{ job.salary }} Dollars
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero animi error mollitia praesentium maiores deleniti perferendis ea illo obcaecati tempore iure voluptatibus quaerat quidem at culpa, itaque repellat omnis.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<style lang="sass" scoped>
.list-move
  transition: all 1s
</style>
