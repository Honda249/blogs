<template>

<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl " v-if="article">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      
                      <div>
                          
                      </div>
                  </div>
              </address>
              <h1 class=" text-3xl font-extrabold leading-tight text-gray-900  lg:text-4xl dark:text-white">{{ locale == 'en-US' ? article.title : article.title_ar}}</h1>
              <a href="#" rel="author" class="text-xl font-bold text-gray-500 dark:text-white"> {{ locale == 'en-US' ?article.author:article.author_ar }}</a>
          </header>
          <p class="lead"> {{ locale == 'en-US' ? article.descriptions:article.descriptions_ar}}</p>
   
      
      </article>
  </div>
</main>


</template>

<script setup>
    const {locale} = useI18n()
    const route = useRoute();
    import { useStore } from 'vuex'
    const article = computed(() => useStore().getters.findArticles(route.params.id))
   
</script>
<style scoped>

</style>