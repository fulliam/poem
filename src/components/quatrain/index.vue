<template>
  <header>
    <span></span>
    <h1 class="title">{{ poem.title }}</h1>
    <span class="author">{{ poem.author }}</span>
  </header>
  <div
    class="quatrain"
    v-for="(quatrain, index) in poem.quatrains"
    :key="index"
  >
    <article v-if="quatrain.visible">
      <p v-for="(line, i) in quatrain.lines" :key="i">{{ line }}</p>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { IPoem } from '@/types';

defineProps<{
  poem: IPoem;
}>();
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-left: pxToRem(70);
}

.title {
  letter-spacing: pxToRem(0.4);
  @include prima-serif(500, 32);
}

.author {
  position: relative;
  right: pxToRem(-16);
  @include prima-serif(200, 14);
}

.quatrain {
  margin: 0 auto;

  article {
    margin: pxToRem(7);
    min-width: pxToRem(450);
    animation: fadeIn 0.5s linear;
  }

  p {
    letter-spacing: pxToRem(0.7);
    @include prima-serif(200, 18);

    &:nth-child(even) {
      padding-left: pxToRem(30);
    }
  }
}
</style>
