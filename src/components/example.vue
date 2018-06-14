<template>
  <div class="hello">
    <SimpleTable :data="dataList" :config="configList" v-model="filter"></SimpleTable>

    {{ filter }}
  </div>
</template>

<script>
export default {
  name: 'Example',
  data () {
    return {
      filter: '',
      dataList: [
        { name: '张三', age: '12', gender: '1' }
      ],
      configList: [
        { type: 'prop', label: '姓名', value: 'name', width: '120' },
        { type: 'prop', label: '年龄', value: 'age', width: '120' },
        { type: 'prop', label: '性别', value: 'gender', width: '120', filter: 'ageFilter' },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello{
  width: 100%;
  height: 100%;
  padding-top: 50px;
}
</style>
