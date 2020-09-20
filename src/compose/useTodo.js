import { reactive, watch, computed, toRefs } from 'vue';

function useTodo() {
    let state = reactive({
        items: [
            {
                id: 1,
                title: '1',
                complete: false,
            }
        ],
        title: '',
    });

    const totalItems = computed(() => {
        return state.items.length;
    })

    watch(state, (newVal, oldVal) => {
        console.log(newVal.title, oldVal.title);
    });

    function handleSubmit() {
        state.items = [...state.items, {
            id: Math.random(),
            title: state.title,
            complete: false
        }];

        state.title = '';
    }

    function setComplete(id) {
        const _items = [...state.items].map(item => {
            if(item.id == id) {
                return {
                    ...item,
                    complete: true,
                }
            } else {
                return item;
            }
        });
        state.items = _items;
    }

    function removeItem(id) {
        const _items = [...state.items].filter(item => {
            return item.id != id;
        });
        state.items = _items;
    }

    return {
        ...toRefs(state),
        setComplete,
        handleSubmit,
        removeItem,
        totalItems
    }
}
export default useTodo;
