<template>
  <div>
    <h1 class="title">交換所</h1>
    <section class="section-content">
      <div id="me">
      自分: 0x6079da09E8bfDFb3032eE0aD6f35Eb3e9aa506B6
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
            </b-table-column>
         </template>
        </b-table>
        <div>
          <b-button type="is-primary" @click="">承認</b-button>
        </div>
      </div>

      <div id="opponent">
      相手: 0x2eE0aD6f35Eb3e9aa506B600aD6f35Eb3e9aa506B6
        <b-table :data="opponent_data" >
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
        <div>
          <b-button type="is-primary" @click="" disabled>承認</b-button>
        </div>
      </div>

     </section>
     <div class="">
      チャット
        <b-table :data="messages" >
          <template slot-scope="props">
            <b-table-column field="id" label="id" width="40" numeric>
               {{props.index}}
            </b-table-column>
            <b-table-column field="address" label="名前" width="100">
               {{props.row.address}} 
            </b-table-column>
            <b-table-column field="text" label="メッセージ" width="400">
              {{props.row.text}}
            </b-table-column>
         </template>
        </b-table>
        <b-field label="Name">
            <b-input v-model="input" ></b-input>
        </b-field>
        <div>
          <b-button type="is-success" @click="sendMessage()">送信</b-button>
        </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import io from 'socket.io-client'

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
      messages: [
        {address: "0x11111", text: "信長が欲しいです。"},
        {address: "0x22222", text: "アーサーが欲しいです"},
      ],
      input: "message",
      columns: [
        { field: 'id', label: 'id' },
        { field: 'name', label: 'name' },
        { field: 'isFull', label: 'isFull' },
      ],
      socket: null
    }
  },
  mounted: async function(){
    console.log("mounted")
    console.log(this.$route.query.room_id)
    //this.data = res.data  
    this.socket = io.connect('ws://54.199.108.217:3000');
    this.socket.on('connect',  () => {
      var id = this.socket.io.engine.id;
      var rooms = ['room1'];
      var rand = 0;
      this.socket.emit('add:member', {room: rooms[rand], message: 'join room: ' + rooms[rand]});
//      socket.emit('update:assets' {address: });
    });
    this.socket.on('insert:message',  (response) => {
      console.log("response")
      console.log(response)
      this.messages.push(response)
      //console.log(JSON.stringify(message));
    });
  },
  methods: {
    showAnalysisDetail(analysisData) {
//      this.$router.push('analysis')
    },
    sendMessage(text){
      console.log(this.input)
      this.socket.emit('insert:message', {address: "user 01", text: this.input});
    }
  }

}
</script>

<style>
.section-content {
  display: flex;
}
.section-content > div{
  padding: 2em;
}
</style>

