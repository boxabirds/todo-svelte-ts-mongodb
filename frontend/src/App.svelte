<script>
    import AddTodo from './components/AddTodo.svelte';
    import TodoList from './components/TodoList.svelte';
    import { onMount } from 'svelte';
    import axios from 'axios';

	console.log("hi")
    let todos = [];
    const baseURL = 'http://localhost:5001'; // Define the base URL for backend requests

    onMount(async () => {
        try {
            const response = await axios.get(`${baseURL}/todos`); // Use the full URL for the GET request
            todos = response.data;
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    });

    function handleAdd(event) {
        const newTodo = { title: event.detail.text, completed: false };
        axios.post(`${baseURL}/todos`, newTodo) // Use the full URL for the POST request
            .then(response => {
                todos = [...todos, response.data];
            })
            .catch(error => {
                console.error('Error adding todo:', error);
            });
    }
</script>

<main>
    <h1>Todo Apps</h1>
    <AddTodo on:add={handleAdd} />
    <TodoList {todos} />
</main>
