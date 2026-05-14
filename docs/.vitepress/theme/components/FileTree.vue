<script setup>
import { computed } from "vue";

const props = defineProps({
  structure: { type: Array, required: true },
});

function flatten(nodes, depth) {
  const result = [];
  for (const node of nodes) {
    const hasChildren = node.children && node.children.length > 0;
    result.push({ name: node.name, note: node.note, isFolder: hasChildren, depth });
    if (hasChildren) {
      result.push(...flatten(node.children, depth + 1));
    }
  }
  return result;
}

const flat = computed(() => flatten(props.structure, 0));
</script>

<template>
  <div class="file-tree">
    <div
      v-for="(item, i) in flat"
      :key="i"
      class="file-tree-row"
      :style="{ paddingLeft: (item.depth * 20) + 'px' }"
    >
      <span class="file-tree-icon">
        <svg v-if="item.isFolder" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      </span>
      <span class="file-tree-name" :class="{ folder: item.isFolder }">{{ item.name }}</span>
      <span v-if="item.note" class="file-tree-note">{{ item.note }}</span>
    </div>
  </div>
</template>

<style scoped>
.file-tree {
  background: var(--vp-code-block-bg, var(--vp-c-bg-soft));
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 10px 14px;
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.9;
  overflow-x: auto;
}

.file-tree-row {
  display: flex;
  align-items: baseline;
  white-space: nowrap;
}

.file-tree-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 6px;
  flex-shrink: 0;
  color: var(--vp-c-text-3);
}

.file-tree-name {
  color: var(--vp-c-text-2);
}

.file-tree-name.folder {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.file-tree-note {
  margin-left: 12px;
  color: var(--vp-c-text-3);
  font-size: 12px;
}
</style>
