<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let todo: { id: string; title: string; completed: boolean };
  
    const dispatch = createEventDispatcher();
  
    function toggleCompleted() {
      dispatch('toggle', { id: todo.id });
    }
  
    function deleteTodo() {
      dispatch('delete', { id: todo.id });
    }
  </script>
  
  <div class="todo-item {todo.completed ? 'completed' : ''}">
    <input type="checkbox" bind:checked={todo.completed} on:click={toggleCompleted}>
    <span>{todo.title}</span>
    <button on:click={deleteTodo}>Delete</button>
  </div>
  
  <style>
    .completed {
      text-decoration: line-through;
    }
  </style>
  