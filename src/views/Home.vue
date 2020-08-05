<template>
  <div id="home">
      <h1>{{cmsg}}</h1>
      <h3>{{count}}</h3>
      <button type="button" @click="add">点我</button>
  </div>
</template>
<script lang="ts" >
import {Component,Vue} from 'vue-property-decorator'
import homeMixin from '../utils/Home'
import { mixins } from 'vue-class-component'
@Component
export default class Home extends mixins(homeMixin){
    created () {
        console.log(this.count);
    }
}
</script>
<style>
</style>