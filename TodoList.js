const { TodoItem } = window.App;

class TodoList extends React.Component {
	render() {

		const {
			todos,
			onDeleteTodo
		} = this.props;
		const elements = todos.map((todo) => (
			<li key={todo.id}>
				<TodoItem
					title={todo.title}
					complete={todo.complete}
					onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)} />
			</li>
		));
		return <ul>{elements}</ul>
	}
}

TodoList.propTypes = {
	todos: React.PropTypes.array,
	onDeleteTodo: React.PropTypes.func
};

window.App.TodoList = TodoList;
