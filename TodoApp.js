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
				<InputField placeholder="新增待辦事項" />
				<TodoList
					todos={todos}
					onDeleteTodo={(id) => this.setState({
						todos: _deleteTodo(todos, id)
					})}
				/>
			</div>
		);
	}
}

const _deleteTodo = (todos, id) => {
		const idx = todos.findIndex((todo) => todo.id === id);
		if (idx !== -1) {
			todos.splice(idx, 1);
		}
		return todos;
};

window.App.TodoApp = TodoApp;
