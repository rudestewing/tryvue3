<template>
    <h3>
        Todo
    </h3>
    <div>
        <div>
            Total Items: {{todo.totalItems.value}}
        </div>
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
    <router-link to="/"> Home </router-link>

</template>

<script>
import useTodo from '@/compose/useTodo';
import InputNormal from '@/components/InputNormal.vue';

export default {
    name: 'Todo',
    components: {
        InputNormal
    },

    setup(props, context) {
        const todo = useTodo();

        console.log(todo);

        return {
            todo,
        }
    }
}
</script>