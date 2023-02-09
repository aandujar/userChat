<script setup>
defineProps({
  comment: Object,
});
</script>

<template>
  <div class="message px-10 md:px-64 max-w-full my-4">
    <div
      v-if="comment.senderId !== 1"
      class="message-left flex flex-row justify-start items-center" style="max-width: 90%"
    >
      <img
        class="h-8 w-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png"
        alt="avatar"
      />
      <div class="bg-zinc-100 ml-5 p-4 flex flex-col justify-start" style="max-width: 90%">
        <div class="text-base font-medium whitespace-pre-line break-words" style="max-width: 90%">{{ comment.message }}</div>
        <div class="flex justify-start text-sm font-normal">
          {{ comment.date }}
        </div>
      </div>
    </div>
    <div
      v-if="comment.senderId === 1"
      class="message-right flex flex-row justify-end items-center text-white" style="max-width: 90%"
    >
      <div class="bg-blue-500 ml-5 p-4 flex flex-col justify-end" style="max-width: 90%">
        <div class="text-base font-medium whitespace-pre-line break-words" style="max-width: 90%">{{ comment.message }}</div>
        <div class="flex justify-start text-sm font-normal mt-4">
          {{ comment.date }}
        </div>
      </div>
      <img
        class="h-8 w-8 rounded-full ml-5"
        src="https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_1280.png"
        alt="avatar"
      />
    </div>
  </div>
</template>

<style scoped>
.message-left {
  position: relative;
}
.message-left:before {
  border: 15px solid rgb(244 244 245);
  content: "";
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  position: absolute;
  bottom: (50% + 15px);
  left: 30px;
}

.message-right {
  position: relative;
}
.message-right:before {
  border: 15px solid rgb(59 130 246);
  content: "";
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
  position: absolute;
  bottom: (50% + 15px);
  right: 30px;
}
</style>