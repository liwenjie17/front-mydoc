<template>
<div  style="margin-top:20px">
<Home v-if="!$route.meta.show"/>
<router-view v-if="$route.meta.show"></router-view>
</div>

</template>

<script>
import Home from '@/pages/Home/index.vue'
export default {
  name:'App',
  components:{Home},

}
</script>

<style lang="less" scoped >
</style>

