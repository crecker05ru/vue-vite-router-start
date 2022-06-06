import type { Ref, ComputedRef } from 'vue'

export interface AppButtonTestProps {
    text: string | null;
}

export interface AppButtonTestInstance {
    isLoading: Ref<boolean>;
    classes: ComputedRef<
        Record<string, boolean>
    >;
    handleBtnClick: () => void;
}
