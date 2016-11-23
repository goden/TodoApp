const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;


class TodoApp extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: [
				{
					id: 0,
					title: 'Item 1',
					complete: false
				},
				{
					id: 1,
					title: 'Item 2',
					complete: false
				},
				{
					id: 2,
					title: 'Item 3',
					complete: false
				}
			]
		};
	}

	render() {
		const {todos} = this.state;
		return 	(
			<div>
				<TodoHeader
				title="我的待辦清單"
				username="Goden"
				todoCount={todos.filter((todo) => !todo.complete).length} />
				<InputField
					placeholder="新增待辦事項"
					onSubmitEditing={(title) => this.setState({
						todos: _createTodo(todos, title)
					})}
				/>
				<TodoList
					todos={todos}
					onToggleTodo={(id, complete) => this.setState({
						todos: _toggleTodo(todos, id, complete)
					})}
					onDeleteTodo={(id) => this.setState({
						todos: _deleteTodo(todos, id)
					})}
				/>
			</div>
		);
	}
}

const _createTodo = (todos, title) => {
	todos.push({
		id: todos[todos.length - 1].id + 1,
		title,		// In ES6, this will transform 'title: title'
		complete: false
	});
	return todos;
};

const _toggleTodo = (todos, id, complete) => {
	const target = todos.find((todo) => todo.id === id);
	if (target) {
		target.complete = complete;
	}
	return todos;
}

const _deleteTodo = (todos, id) => {
		const idx = todos.findIndex((todo) => todo.id === id);
		if (idx !== -1) {
			todos.splice(idx, 1);
		}
		return todos;
};

window.App.TodoApp = TodoApp;
