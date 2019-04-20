<template>
  <div>
    <h1 class="title">交換所</h1>
    <section class="section-content">
      <div class="">
      自分: 0x111111111111111
        <b-table :data="data" >
          <template slot-scope="props">
            <b-table-column field="id" label="id" width="40" numeric>
               {{props.row.id}}
            </b-table-column>
            <b-table-column field="name" label="名前" width="400">
               {{props.row.name}} 
            </b-table-column>
            <b-table-column field="picture" label="画像" width="100">
               <img src="~/static/mch_king-arthur.png" width="100" height="100" />
            </b-table-column>
            <b-table-column field="selected" label="選択" width="100">
              <b-checkbox></b-checkbox>
              {{props.row.selected}}
            </b-table-column>
         </template>
        </b-table>
      </div>

      <div class="">
      相手: 0x22222222222222
        <b-table :data="data" >
          <template slot-scope="props">
            <b-table-column field="id" label="id" width="40" numeric>
               {{props.row.id}}
            </b-table-column>
            <b-table-column field="name" label="名前" width="400">
               {{props.row.name}} 
            </b-table-column>
            <b-table-column field="picture" label="画像" width="100">
               <img src="~/static/mch_nobunaga-oda.jpg" width="100" height="100" />
            </b-table-column>
            <b-table-column field="selected" label="選択" width="100">
              <b-checkbox></b-checkbox>
              {{props.row.selected}}
            </b-table-column>
         </template>
        </b-table>
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
          "name": "Oda Nobunaga",
          "picture": "xxx",
          "selected": false
        },
        {
          "id": 2,
          "name": "Oda Nobunaga",
          "picture": "xxx",
          "selected": false
        },
        {
          "id": 3,
          "name": "Oda Nobunaga",
          "picture": "xxx",
          "selected": false
        }
      ],
      opponent_data: [
        {
          "id": 1,
          "name": "Oda Nobunaga",
          "picture": "xxx",
          "selected": false
        },
        {
          "id": 2,
          "name": "Oda Nobunaga",
          "picture": "xxx",
          "selected": false
        },
        {
          "id": 3,
          "name": "Oda Nobunaga",
          "picture": "xxx",
          "selected": false
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
    console.log(this.$route.query.room_id)
    //this.data = res.data  
  },
  methods: {
    showAnalysisDetail(analysisData) {
//      this.$router.push('analysis')
    }
  }
}
</script>

<style></style>

