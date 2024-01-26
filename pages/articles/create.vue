<template>
    <div>
        <!-- component -->
        <form @submit.prevent="submit">

            <div class="bg-indigo-50 min-h-screen md:px-20 pt-12">
                <div class=" bg-white rounded-md px-2 py-10 max-w-1xl mx-auto">
                    <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">{{ $t('add_post_title') }}</h1>
                    <div class="grid grid-cols-2 gap-10 h-30">
                        <div class="p-2 ">
                            <div class="space-y-2">
                                <form class="max-w-md mx-auto" required>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input v-model="data.title" type="text" name="title" id=""
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                                            placeholder=" " required />
                                        <label for="title"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{
                                                $t('title') }}</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="text" v-model="data.author" name="floating_password"
                                            id="floating_password"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                                            placeholder=" " required />
                                        <label for="floating_password"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{
                                                $t('author') }}</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <textarea type="textarea" v-model="data.descriptions" name="repeat_password"
                                            id="floating_repeat_password"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                                            placeholder=" " required></textarea>
                                        <label for="floating_repeat_password"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{
                                                $t('descriptions') }}</label>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="p-4 ">
                            <div class="space-y-4">
                                <form class="max-w-md mx-auto">
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input type="text" v-model="data.title_ar" name="title" id=""
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                                            placeholder=" " required />
                                        <label for="title"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{
                                                $t('title_1') }}</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <input v-model="data.author_ar" type="text" name="floating_password"
                                            id="floating_password"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                                            placeholder=" " required />
                                        <label for="floating_password"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{
                                                $t('author_1') }}</label>
                                    </div>
                                    <div class="relative z-0 w-full mb-5 group">
                                        <textarea v-model="data.descriptions_ar" type="textarea" name="repeat_password"
                                            id="floating_repeat_password"
                                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-teal-400 peer"
                                            placeholder=" " required></textarea>
                                        <label for="floating_repeat_password"
                                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{{
                                                $t('descriptions_1') }}</label>
                                    </div>
                                    <div class="grid md:grid-cols-2 md:gap-6">

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div v-if="inValid"
                        class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                        role="alert">
                        <span class="font-medium">{{ $t('alert') }}</span> {{ $t('alert_comp') }}
                    </div>

                    <Btn class="itmes-center" :title="$t('post_btn')" />

                </div>
            </div>

        </form>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const revisedRandId = () => {
    return Math.random().toString(36).replace('0.', 'arti' || '');
}
const inValid = ref(false)

const data = {
    id: revisedRandId(),
    title: "",
    title_ar: "",
    descriptions: "",
    descriptions_ar: "",
    author: "",
    author_ar: ""
}

const validation = () => {

    if (
        data.title == "" ||
        data.title_ar == "" ||
        data.descriptions == "" ||
        data.descriptions_ar == "" ||
        data.author == "" ||
        data.author_ar == ""
    ) {
        console.log("sdasas");
        inValid.value = true
    } else {
        store.dispatch('addArticle', data)
        useRouter().back()
    }
}

const submit = () => {
    inValid.value = false
    validation()

}
</script>

<style  scoped></style>