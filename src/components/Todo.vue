<script setup>

defineProps(['todo', 'category'])


</script>
<template>
    <label :for="`check-${todo.id}`" class="bg-blue-900 pt-6 p-5 rounded-3xl flex items-center w-full mb-2 overflow-hidden">
        <input :id="`check-${todo.id}`" class="sr-only peer" v-model="todo.done" type="checkbox" >
        <span class="sr-only  peer-checked:bg-blue-400/60 border-blue-400/50 bg-blue-400/60 bg-blue-600"></span>
        <span class="sr-only peer-checked:bg-green-400/60 border-green-400/50 bg-green-400/60 bg-green-600"></span>
        <span class="sr-only  peer-checked:bg-pink-400/60 border-pink-400/50 bg-pink-400/60 bg-pink-600"></span>
        <span :class="`inline-flex flex-shrink-0 justify-center peer items-center border-2 border-${category?.color}-400/50 h-7 w-7 rounded-full peer-checked:bg-${category?.color}-400/60 transition-all after:content-[''] after:w-1.5 after:h-3 after:border-white after:border-b-2 after:border-r-2 after:rotate-45 after:opacity-0 after:-translate-y-0.5 peer-checked:after:opacity-80 after:transition-all`">
        </span>
        <p class="ml-4 text-gray-50 peer-checked:text-gray-400 relative before:inline-block before:content-[''] before:h-[1.5px] before:w-0 before:bg-gray-400 before:absolute before:top-1/2 before:left-[-5px] peer-checked:before:w-[calc(100%+10px)] peer:checked:text-red transition-all before:transition-all">{{todo.title}}</p>
    </label>
</template>