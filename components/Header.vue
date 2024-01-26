<template>
    <!-- component 

<nav class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NuxtLink to="/" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</NuxtLink>

        <NuxtLink to="/about"  class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</NuxtLink>

        <NuxtLink to="/contact"  class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</NuxtLink>

        <NuxtLink to="/articles"  class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</NuxtLink>

    </div>
</nav>
-->
        <!-- navbar 
    <div>
        <nav class="bg-black p-4">
        <div class="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div class="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-teal-600 hover:cursor-pointer">Simple Blog </div>

            {/* Hamburger menu for small screens */}
            <div class="lg:hidden">
                <button onClick={toggleMenu} class="text-white focus:outline-none">
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Navigation links */}
            <div class="lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl">
                <a href="/" class="text-white  px-4 py-2 hover:text-teal-600 ">Home</a>
                <a href="#Projects" class="text-white  px-4 py-2  hover:text-teal-600">Projects</a>
                <a href="/" class="text-white  px-4 py-2  hover:text-teal-600">About</a>
                <a href="/" class="text-white  px-4 py-2  hover:text-teal-600">Contact Me</a>
            </div>
        </div>
        
    </nav>
    </div>
    -->
    <!-- <div>
        <header class="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
    <div class="flex-1 flex justify-between items-center">
        <a href="#" class="text-xl">Simple Blog</a>
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                <li><NuxtLink to="/"           class="md:p-4 py-3 px-0 block" >Home</NuxtLink></li>
                <li><NuxtLink to="/about"      class="md:p-4 py-3 px-0 block">About us</NuxtLink></li>
                <li><NuxtLink to="/contact"    class="md:p-4 py-3 px-0 block">Contact us</NuxtLink></li>
                <li><NuxtLink to="/articles/"  class="md:p-4 py-3 px-0 block md:mb-0 mb-2">Add Post</NuxtLink></li>
            </ul>
        </nav>
    </div>
</header>
    </div>
        -->
        <div>
            <!-- component -->
<nav class="bg-black shadow black:bg-black-800">
    <div class="container flex items-center justify-center p-6 mx-auto  capitalize ">
        <NuxtLink :to="localePath('/')" class="text-white border-b-2 border-transparent hover:text-white-800 dark:hover:text-gray-200 hover:border-teal-500 mx-1.5 sm:mx-6">{{ $t('home_btn') }}</NuxtLink>

        <NuxtLink :to="localePath('/about')" class="text-white border-b-2 border-transparent hover:text-white-800 dark:hover:text-gray-200 hover:border-teal-500 mx-1.5 sm:mx-6">{{ $t('about_btn') }}</NuxtLink>

        <NuxtLink to="" @click="changeLang()" class="text-white border-b-2 border-transparent hover:text-white-800 dark:hover:text-gray-200 hover:border-teal-500 mx-1.5 sm:mx-6">{{ $t('lang_btn') }}</NuxtLink>
       
    </div>
</nav>
        </div>
</template>

<script setup>
const {locale, setLocale} = useI18n()

const changeLang = () =>{
    if (locale.value == "en-US") {
        setLocale("ar-AE")
    }else {
        setLocale("en-US")
    }
}
</script>

<style scoped>

</style>