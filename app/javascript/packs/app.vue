<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    	title: 'hello world'
    }
  }
}
</script>

<style scoped>
	h1 {
		margin-left: 40px;
	}
</style>