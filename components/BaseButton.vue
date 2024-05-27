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
  minWidth: {
    type: Boolean,
    default: true,
  },
  variant: {
    type: String as PropType<'primary' | 'primaryLight' | 'outline' | 'ghost'>,
    default: 'primary',
    validator: (v: string) =>
      ['primary', 'primaryLight', 'outline', 'ghost'].includes(v),
  },
});

const tag = computed(() => (props.to ? NuxtLink : props.href ? 'a' : 'button'));

let baseBtn =
  'inline-flex px-9 justify-center py-3.5 rounded-lg border-grey-100 text-nowrap';

if (props.minWidth) {
  baseBtn += ' min-w-44 lg:min-w-64';
}

const btn = {
  primary: `${baseBtn} bg-grey-100 text-white text-p1-bold border border-solid`,
  primaryLight: `${baseBtn} bg-turquoise-40 text-grey-100 text-p1-bold`,
  outline: `${baseBtn} border border-primary text-primary text-p1-bold border border-solid`,
  ghost: 'text-p1-bold text-nowrap',
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
