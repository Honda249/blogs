<template>
    <div :dir=" locale == 'en-US'?'ltr':'rtl' " class="flex flex-col min-h-screen">
        <div>
            <header>
                <Header/>
            </header>
        </div>
        <div class="p-4 flex-grow">
            <slot/>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
</template>

<script setup>
    const {locale} = useI18n()
</script>

<style scoped>

</style>