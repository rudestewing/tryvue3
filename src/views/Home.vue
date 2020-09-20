<template>
    <div>
        Total Todo you get it {{todo.totalItems.value}}
    </div>
    <div>
        state counter : {{counter}}
    </div>
    <div>
        <button @click.prevent="increment"> Add </button>
    </div>
</template>

<script>
import useTodo from '../compose/useTodo';
import {mapActions, mapMutations, mapState} from 'vuex';

export default {
    
    name: 'Home',
    setup() {
        return {
            todo: useTodo()
        }
    },
    computed: {
        ...mapState({
            counter: state => state.counter
        }),
    },
    methods: {
        ...mapMutations([
            'increment'
        ])
    }
}
</script>