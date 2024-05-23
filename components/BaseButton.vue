<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';
import { NuxtLink } from '#components';

const props = defineProps({
  to: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  variant: {
    type: String as PropType<'primary' | 'outline' | 'ghost'>,
    default: 'primary',
    validator: (v: string) => ['primary', 'outline', 'ghost'].includes(v),
  },
});

const tag = computed(() => (props.to ? NuxtLink : props.href ? 'a' : 'button'));

const baseBtn =
  'inline-flex min-w-44 lg:min-w-50 justify-center py-3.5 rounded-2 border border-solid border-grey-100 ';

const btn = {
  primary: `${baseBtn} bg-grey-100 text-white`,
  outline: `${baseBtn} border border-primary text-primary`,
  ghost: 'text-primary',
};
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="href && '_blank'"
    :rel="href && 'external'"
    :class="btn[props.variant]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss"></style>
