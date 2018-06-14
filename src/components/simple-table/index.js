import SimpleTable from './src/index'

SimpleTable.install = Vue => {
  Vue.component(SimpleTable.name, SimpleTable);
};

export default SimpleTable;
