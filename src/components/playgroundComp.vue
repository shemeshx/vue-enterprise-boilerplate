<script>
import {playgroundMethods,playgroundComputed} from '@state/helpers'
export default {
  components: {  },

  data(){
        return{
            fields: [ 'id','avatar','email','first_name','last_name'],
        }

      },
  computed: {
    ...playgroundComputed,
  },
  methods: {...playgroundMethods},
  mounted(){
    this.loadData();
  },


}
</script>

<template>
  <div>
    <b-table hover striped :fields="fields" :items="getData">
      <template v-slot:cell(avatar)="item">
        <b-avatar :src="item.value"></b-avatar>
      </template>
    </b-table>
  </div>
</template>

<style lang="scss" module>
@import '@design';
.VueTable-filter {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
