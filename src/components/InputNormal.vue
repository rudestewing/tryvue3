<template>
    <input type="text" :value="modelValue" @input="(e) => $emit('update:modelValue', e.target.value)" placeholder="input normal nih">
</template>

<script>
export default {
    props: [
        'modelValue'
    ],
}
</script>