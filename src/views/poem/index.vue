<template>
  <section class="container">
    <div class="poem-options">
      <Checkbox
        v-for="(quatrain, index) in poem.quatrains"
        :key="index"
        :modelValue="quatrain.visible"
        :disabled="onlyOneVisible && quatrain.visible"
        @update:modelValue="(value) => toggleVisibility(index, value)"
      />
    </div>

    <div class="poem">
      <Quatraine :poem="poem" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Checkbox from '@/components/checkbox/index.vue';
import Quatraine from '@/components/quatrain/index.vue';
import { Poem } from './data';

const poem = ref(Poem);

const onlyOneVisible = computed(() => {
  return (
    poem.value.quatrains.filter((quatrain) => quatrain.visible).length === 1
  );
});

const toggleVisibility = (index: number, value: boolean) => {
  if (!value && onlyOneVisible.value) return;
  poem.value.quatrains[index].visible = value;
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: pxToRem(20);
}

.poem-options {
  display: flex;
  align-self: flex-start;
  gap: pxToRem(10);
  margin-top: pxToRem(50);
  position: relative;
  left: pxToRem(-20);
}
</style>
