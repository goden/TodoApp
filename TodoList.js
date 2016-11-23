const { TodoItem } = window.App;

class TodoList extends React.Component {

	render() {

		const {
			todos,
			onDeleteTodo,
			onToggleTodo
		} = this.props;

		const elements = todos.map((todo) => (
			<li key={todo.id}>
				<TodoItem
					title={todo.title}
					complete={todo.complete}
					onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
					onToggle={(complete) => onToggleTodo && onToggleTodo(todo.id, complete)} />
			</li>
		));
		return <ul>{elements}</ul>
	}
}

TodoList.propTypes = {
	todos: React.PropTypes.array,
	onDeleteTodo: React.PropTypes.func,
	onToggleTodo: React.PropTypes.func
};

window.App.TodoList = TodoList;
