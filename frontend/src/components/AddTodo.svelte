<!-- src/components/AddTodo.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    let text = '';
    const dispatch = createEventDispatcher();
  
    function submitTodo() {
      if (text.trim()) {
        dispatch('add', { text });
        text = ''; // Clear the input after adding
      }
    }
  </script>
  
  <form on:submit|preventDefault={submitTodo}>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      type="text"
      bind:value={text}
      autofocus />
    <button type="submit">Add</button>
  </form>
  
  <style>
    .new-todo {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
    }
  </style>
  