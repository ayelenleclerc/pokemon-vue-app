<template>
    <Dialog v-model:visible="isVisible" modal header="Pokemon Details" style="width: 25rem" closable>
        <slot name="body" />
    </Dialog>
</template>


<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
    visible: {
        type: Boolean,
        required: true
    },

});

const emit = defineEmits(['update:visible']);
const isVisible = ref(props.visible);
const closeDialog = () => {
    emit('update:visible', false);
};
watch(() => props.visible, (newVal) => {
    isVisible.value = newVal;
});

watch(isVisible, (newVal) => {
    emit('update:visible', newVal);
});
</script>

<style lang="scss" scoped></style>