<script setup>
import { ChevronLeftIcon, HomeIcon, TagIcon, ChartPieIcon, Bars2Icon, MagnifyingGlassIcon, BellIcon } from '@heroicons/vue/24/outline'
import { HomeIcon as Home, CheckIcon } from '@heroicons/vue/20/solid';
import Category from './components/Category.vue';
import Todo from './components/Todo.vue';
import { ref } from 'vue';

let categories = [
  {
    id: 1,
    name: 'Business',
    task: 40,
    color: 'blue'
  },
  {
    id: 2,
    name: 'Personal',
    task: 30,
    color: 'pink'
  },
  {
    id: 3,
    name: 'School',
    task: 50,
    color: 'green'
  },
]
let todos = ref([
  {
    id: 1,
    title : 'Daily meeting with team',
    done: false,
    category: 1,
  },
  {
    id: 2,
    title : 'Pay for rent',
    done: true,
    category: 2,
  },
  {
    id: 3,
    title : 'Daily meeting with team',
    done: false,
    category: 3,
  },
  {
    id: 4,
    title : 'Check emails',
    done: true,
    category: 3,
  },
  {
    id: 5,
    title : 'Lunch with Emma',
    done: false,
    category: 1,
  },
  {
    id: 6,
    title : 'Meditation',
    done: false,
    category: 1,
  },
  {
    id: 7,
    title : 'Learn new dev VueJs',
    done: true,
    category: 3,
  },
  {
    id: 8,
    title : 'Eat before going to school',
    done: true,
    category: 2,
  },
])

function getCategoryWithId(id) { return categories.find(n => n.id == id)}

// console.log(todos.map(n => getCategoryWithId(n.id)))

let is_expanded = ref(true)
</script>

<template>
  <div class="w-screen h-screen px-14 py-12 lg:px-6 lg:py-6 text-white flex relative truncate">
    <div class="w-2/3 flex flex-col sm:w-1/2 md:w-1/4 lg:w-60 transition-all">
      <div class="w-full text-right lg:sr-only">
        <button @click="is_expanded = true" class="h-14 w-14 inline-flex justify-center items-center border-2 border-white/30 rounded-full hover:bg-gray-50 hover:text-blue-900 active:bg-gray-50 active:text-blue-900 transition-all">
          <ChevronLeftIcon class="h-6 w-6 font-bold text-xl transition-all" />
        </button>
      </div>
      <div>
        <img class="h-24 w-24 object-cover rounded-full p-1 ring-4 ring-pink-500" src="https://unsplash.com/photos/mEZ3PoFGs_k/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY1MzQ3NjM0&force=true&w=640" alt="avatar">
      </div>
      <div class="mt-10">
        <h1 class="text-4xl font-bold">Olivia <br> Mitchell </h1>
      </div>
      <div class="mt-10">
        <ul class="flex gap-6 flex-col">
          <li class="">
            <a href="#" class="flex items-center flex-nowrap">
              <Home class="h-6 w-6 font-bold text-xl text-white/75" />
              <h3 class="ml-4 font-bold">Home</h3>
            </a>
          </li>
          <li class="">
            <a href="#" class="flex items-center flex-nowrap group">
              <TagIcon class="h-6 w-6 font-bold text-xl text-white/30 group-hover:text-white/60" />
              <h3 class="ml-4 font-medium text-white/75 group-hover:text-white group-hover:font-semibold">Catgories</h3>
            </a>
          </li>
          <li class="">
            <a href="#" class="flex items-center flex-nowrap group">
              <ChartPieIcon class="h-6 w-6 font-bold text-xl text-white/30 group-hover:text-white/60" />
              <h3 class="ml-4 font-medium text-white/75 group-hover:text-white group-hover:font-semibold">Analytics</h3>
            </a>
          </li>
        </ul>
      </div>
      <div class="mt-auto">
        <div>
          <small class="text-sm text-white/30">Good</small>
          <p class="font-semibold text-2xl">Consistancy</p>
        </div>
      </div>
    </div>
    <main class="bg-blue-600 absolute top-0 left-0 w-screen h-screen transition-all overflow-hidden flex flex-col" :class="!is_expanded ? ' translate-x-3/4 scale-90 rounded-3xl' : ''">
      <!-- <div class="min-w-full min-h-full absolute -z-10 bg-slate-50/50 top-0 left-0" :class="!is_expanded && 'z-10'"></div> -->
      <div class="flex pt-6 pb-3 px-8">
        <button @click="(is_expanded = !is_expanded)">
          <Bars2Icon class="h-8 w-8 text-white/60" />
        </button>
        <button class="ml-auto">
          <MagnifyingGlassIcon class="h-8 w-8 text-white/60" />
        </button>
        <button class="ml-6">
          <BellIcon class="h-8 w-8 text-white/60" />
        </button>
      </div>
      <div class="flex-shrink overflow-y-auto">
        <div class="mt-10 mx-8">
          <h1 class="text-3xl font-bold max-w-full w-full border-green-400">What's up, Olivia!</h1>
        </div>
        <div class="mt-10 mx-8">
          <h3 class="text-sm text-white/60 tracking-widest font-bold">CATEGORIES</h3>
        </div>
        <div class="snap-x mt-7 w-full px-10 flex overflow-x-auto h-44 items-start ">
          <Category v-for="category in categories" :category="category" :key="category.id"  />
        </div>
        <div class="mt-5 mx-8">
          <h3 class="text-sm text-white/60 tracking-widest font-bold">TODAY'S TASKS</h3>
        </div>
        <div class="mx-8 pt-6 flex-grow overflow-y-auto flex-shrink">
          <Todo v-for="todo in todos" :key="todo.id" :todo="todo" :category="getCategoryWithId(todo.category)" />
        </div>
      </div>
    </main>
  </div>
</template>