<template>



<div class=" mx-auto p-10">
                <div class="bg-white shadow-md border border-gray-200 ">
                    <div class="p-5">
                        <NuxtLink :to="localePath(`/articles/${article.id}`)">
                            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{{ locale == 'en-US' ? article.title : article.title_ar}}</h5>
                        </NuxtLink>
                        <div class="text-gray-500 dark:text-sky-400 hover:text-teal-600 hover:cursor-pointer">
                        {{ locale == 'en-US' ?article.author:article.author_ar }}
                        </div>
                        <p class="font-normal text-gray-700 mb-3">{{ locale == 'en-US' ? article.descriptions.split(' ').slice(0, 40).join(' '):article.descriptions_ar.split(' ').slice(0, 40).join(' ') }}</p>
                        <NuxtLink :to="localePath(`/articles/${article.id}`)">
                          <Btn :title="$t('read_btn')" />

                          </NuxtLink>
                    </div>
                </div>
                
            </div>

    </template>


<script setup>
const {locale} = useI18n()
const { article } = defineProps(['article'])

</script>

<style scoped>

</style>