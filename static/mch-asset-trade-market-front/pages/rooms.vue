<template>
  <div>
    <h1 class="title">チャットルーム一覧</h1>
    <section class="section-content">
      <div class="">
        <b-table :data="data" >
          <template slot-scope="props">
            <b-table-column field="id" label="id" width="40" numeric>
               {{props.row.id}}
            </b-table-column>
            <b-table-column field="name" label="名前" width="400">
              <a @click="" > {{props.row.name}} </a>
            </b-table-column>
            <b-table-column field="isFull" label="満員？" width="100">
              {{props.row.isFull}}
            </b-table-column>
         </template>
        </b-table>
        <div>
          <b-button type="is-success" @click="clickMe">新規作成</b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
  data() {
    return {
      data: [
        {
          "id": 1,
          "name": "信長交換部屋！",
          "isFull": false
        }
     ],
      columns: [
        { field: 'id', label: 'id' },
        { field: 'name', label: 'name' },
        { field: 'isFull', label: 'isFull' },
      ]
    }
  },
  mounted: async function(){
    console.log("mounted")
    const res = await this.$axios("http://54.199.108.217:3001/rooms")
    this.data = res.data  
  },
  methods: {
    showAnalysisDetail(analysisData) {
//      this.$router.push('analysis')
    }
  }
}
</script>

<style></style>

