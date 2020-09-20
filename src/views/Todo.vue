<template>
    <h3>
        Todo
    </h3>
    <div>
        <ul>
            <li v-for="todoItem in todo.state.items" :key="todoItem.id"  style="border: 1px solid lightgray; padding: 10px; margin-bottom: 5px;">
                <div>
                    {{todoItem.id}}
                </div>
                <div>
                    {{todoItem.title}} 
                </div>
                <div>
                    {{todoItem.complete ? 'complete' : 'ongoing'}}
                </div>
                <div>
                    <button @click.prevent="todoItem.complete = !todoItem.complete">Set</button>
                </div>
                <div>
                    <button @click.prevent="todo.removeItem(todoItem.id)">remove</button>
                </div>
            </li>
        </ul>
    </div>
    <div>
        <div>
            <input-normal v-model="todo.state.title"></input-normal>
        </div>
        <div>
            <button type="button" @click="todo.handleSubmit">Submit Todo</button>    
        </div>
    </div>
</template>

<script>
import { reactive, watch, ref } from 'vue';
import InputNormal from '@/components/InputNormal.vue';

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
    })

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
        state,
        setComplete,
        handleSubmit,
        removeItem,
    }
}

export default {
    name: 'Todo',
    components: {
        InputNormal
    },
    setup() {
        const todo = useTodo();

        return {
            todo,
        }
    }
   
}
</script>