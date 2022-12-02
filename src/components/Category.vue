<script setup>

const props = defineProps({
    category : Object,
})

</script>
<template>
    <div class="scroll-m-6 snap-start max-w-[95vw] w-72 flex-shrink-0 bg-blue-900 pt-7 p-5 flex flex-col gap-4 justify-between shadow-xl shadow-blue-900 text-sm rounded-3xl ml-6">
        <small class="text-white/50">{{category.task}} task{{(category.task > 1 ? 's' : '')}}</small>
        <h3 class="text-xl font-bold">{{category.name}}</h3>
        <div class="w-full bg-white/10 rounded-full h-1">
        <div :class="`bg-${category.color}-600 h-1 rounded-full`" :style="`width: ${category.task}%`"></div>
        </div>
    </div>
</template>