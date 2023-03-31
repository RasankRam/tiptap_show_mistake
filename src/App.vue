<template>
  <vuetify-tiptap v-model="content" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const content = ref('init content');
</script>
