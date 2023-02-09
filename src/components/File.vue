<script setup>
defineProps({
  comment: Object,
  showBorderTop: Boolean,
});
</script>

<template>
  <div>
    <div v-if="showBorderTop" class="px-8 md:px-56 mb-4">
      <div class="border-t-2"></div>
    </div>
    <div class="flex flex-col px-10 md:px-64">
      <div
        class="
          text-base
          font-medium
          justify-self-start
          flex
          justify-items-start
        "
      >
        Versión {{ comment.version }}
      </div>
      <div class="flex flex-row justify-between">
        <div class="text-base font-bold text-blue-400">
          Titulo del archivo a subir {{ comment.fileName }}
        </div>
        <div>
          <span class="material-symbols-outlined" style="color: #60a5fa">
            downloading
          </span>
        </div>
      </div>
      <div class="flex flex-row text-base mb-4 font-medium">
        <span class="mr-8">{{ comment.fileType }} ({{ comment.size }})</span>
        <span>{{ comment.date }}</span>
      </div>
    </div>
    <div class="px-8 md:px-56">
      <div class="border-b-2"></div>
    </div>
  </div>
</template>
