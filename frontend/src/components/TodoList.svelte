<script lang="ts">
    import axios from 'axios';
    import TodoItem from './TodoItem.svelte';
    export let todos: { id: string; title: string; completed: boolean }[];
  
    async function toggleTodo(id: string) {
      const todo = todos.find(t => t.id === id);
      if (todo) {
        const updated = await axios.patch(`/todos/${id}`, { completed: !todo.completed });
        todo.completed = updated.data.completed;
      }
    }
  
    async function deleteTodo(id: string) {
      await axios.delete(`/todos/${id}`);
      todos = todos.filter(t => t.id !== id);
    }
  </script>
  
  <div class="todo-list">
    {#each todos as todo}
      <TodoItem {todo} on:toggle={e => toggleTodo(e.detail.id)} on:delete={e => deleteTodo(e.detail.id)} />
    {/each}
  </div>
  