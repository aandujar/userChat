<script setup>
import { useChatStore } from "../store/store.js";
import { ref } from "vue";

const message = ref("");

const store = useChatStore();

function sendMessage(){
  store.addMessage(message.value);
  message.value = '';
}
</script>

<template>
  <div class="px-8 md:px-56 border-t-2 my-8 pt-8 pb-8 flex flex-row items-center">
    <input
      type="text"
      id="comment"
      class="bg-zinc-100 border-2 border-slate-300 rounded-full w-11/12 p-2"
      v-model="message"
      @keyup.enter="sendMessage"
    />
    <div class="bg-blue-500 h-9 w-9 rounded-full flex ml-4 cursor-pointer" @click="sendMessage">
    <span class="text-white material-symbols-outlined" style="margin:auto"> send </span></div>
  </div>
</template>

<style scoped>
</style>
