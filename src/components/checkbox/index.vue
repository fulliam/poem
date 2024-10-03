<template>
  <button
    class="checkbox"
    :class="[{ checked: checked }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="box"></div>
  </button>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, watchEffect } from 'vue';
import type { ICheckbox } from '@/types';

const props = defineProps<ICheckbox>();

const emit = defineEmits(['update:modelValue', 'changeState', 'changeValue']);

const checked = ref<boolean>(false);

const handleClick = () => {
  checked.value = !checked.value;
  emit('changeValue', checked.value);
};

watch(checked, () => {
  emit('update:modelValue', checked.value);
  emit('changeState', checked.value);
});

onMounted(() => {
  checked.value = props.modelValue ?? props.value ?? false;
});

watchEffect(() => {
  if (props.observeValue !== undefined) {
    checked.value = props.observeValue;
    return;
  }
  if (props.modelValue !== undefined) checked.value = props.modelValue;
});
</script>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: pxToRem(16);

  border: pxToRem(1) solid $checkbox-color;
  background: none;
  padding: 0;

  font-size: pxToRem(14);
  line-height: 120%;
  font-weight: 400;
  letter-spacing: pxTorem(1);
  color: $checkbox-color;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &.checked {
    .box {
      background-color: $checkbox-checked-bg;
    }
  }

  &:not(.checked) {
    .box > svg {
      visibility: hidden;
      opacity: 0;
    }
  }
}

.box {
  width: pxToRem(17);
  height: pxToRem(17);

  background-color: $checkbox-bg;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    transition:
      visibility 0.2s,
      opacity 0.2s;
  }
}
</style>
