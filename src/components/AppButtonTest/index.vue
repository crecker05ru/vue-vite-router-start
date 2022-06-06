<template>
    <button
        type="button"
        @click="handleBtnClick"
    >{{ text }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import type { PropType } from 'vue';

import type { AppButtonTestProps, AppButtonTestInstance } from './types'

export default defineComponent({
    name: 'AppButtonText',

    props: {
        text: {
            type: String as PropType<string | null>,
            default: null
        }
    },

    setup(props: AppButtonTestProps, ctx): AppButtonTestInstance {
        const isLoading = ref<boolean>(false)

        const classes = computed<Record<string, boolean>>(() => ({
            'is_loading': isLoading.value
        }))

        const handleBtnClick = (): void => {}

        return {
            isLoading,
            classes,
            handleBtnClick
        }
    }
})
</script>
