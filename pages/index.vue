<template>
    

    <div class="flex items-center justify-center">
        <div class=" p-8 text-center   max-w-lg">
            <h1 class="text-4xl font-bold mb-4">{{ $t('welcome_title') }}</h1>
            <p class="text-gray-700"> {{ $t('descriptions_title') }}</p>
        </div>
    </div>
    <div class="bg-indigo-50 min-h-screen md:px-20 item-center ">
        
        <div class="rounded-md px-2 py-10 max-w-1xl item-center mx-auto">
        <div class="flex items-center justify-between  px-16">
            <h1 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {{ $t('articles') }}</h1>

            <NuxtLink :to="localePath('/articles/create')">
                <Btn :title="$t('add_btn')" />
            </NuxtLink>
        </div>


        <div v-for="article in articles" :key="index">
                <Card :article="article" />
        </div>
        </div>
    </div>





    <!-- <div class="py-20 px-20 mx-auto max-w-screen-xl lg:py-24 lg:px-16 ">

        <div class="flex items-center justify-between pb-10 py-16 px-16">
            <h1 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {{ $t('articles') }}</h1>

            <NuxtLink :to="localePath('/articles/create')"
                class="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                <span
                    class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Button Text</span>

            </NuxtLink>
        </div>

        <div>
            
        </div>
    </div> -->
</template>

<script setup>
import { useStore } from 'vuex'
const articles = computed(() => useStore().getters.getArticles)    
</script>

<style scoped></style>