<!-- <template>
  <div class="simple-table">
    <el-button type="text" size="mini" @click="emitClick">button</el-button>
  </div>
</template> -->
<style src="./table.scss" lang="scss" scoped></style>

<script>
export default {
  name: 'SimpleTable',
  props: {
    data: {
      type: Array,
      default: () => { return [] }
    },
    config: {
      type: Array,
      default: () => { return [] }
    }
  },
  mounted () {
    console.log('..data', this.data)
    console.log('..config', this.config)
  },
  methods: {
    emitClick: function () {
      this.$emit('input', '向外发射的绑定数据')
    }
  },
  render: function (h) {
    const data = Array.isArray(this.data) ? this.data : []
    const config = Array.isArray(this.config) ? this.config : []

    // labels
    const labels = h('tr', {})

    const rows = data.map((row, index) => {
      return h('tr', {
        key: index,
        props: {
          'data-index': index
        }
      }, config.map(col => { return col.value }))
    })

    const header = h('thead', [labels])
    const body = h('tbody', rows)
    return h('div', { class: { 'table-wrap': this.wrapped } }, [h('table', { class: 'table' }, [header, body])])
  }
}
</script>
