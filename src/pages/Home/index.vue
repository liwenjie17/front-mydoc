<template>
<div class="container" style="margin-top:20px">
<Header/>
<Main/>
</div>

</template>

<script>
import Header from '@/pages/Home/Header/Header.vue';
import Main from '@/pages/Home/Main/Main.vue'
export default {
  name:'Home',
  components:{Header,Main},

}
</script>

<style lang="less" scoped >
</style>

