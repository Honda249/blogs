<template>
    <div>
        <button type="submit" class="text-gray bg-teal-100 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-3 text-center dark:bg-blue-600 dark:hover:bg-teal-700 dark:focus:ring-teal-600">
            {{ title }}
        </button>
    </div>
</template>

<script setup>
    const { title } = defineProps(['title'])

</script>

<style scoped>

</style>