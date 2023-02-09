<script setup>
import File from './File.vue'
import Message from './Message.vue'
import { useChatStore } from "../store/store.js";

const store = useChatStore();
</script>

<template>
  <div>
    <div v-for="(comment, index) in store.comments" :key="comment.id">
       <File v-if="comment.type === 'file'" :showBorderTop="index > 0" :comment="comment" /> 
       <Message v-if="comment.type === 'text'" :comment="comment" /> 
    </div>
  </div>
</template>

