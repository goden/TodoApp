const { TodoItem } = window.App;

class TodoList extends React.Component {
	render() {

		const {todos} = this.props;
		const elements = todos.map((todo) => (
			<li key={todo.id}>
				<TodoItem 
					title={todo.title} 
					complete={todo.complete} />
			</li>
		));
		return <ul>{elements}</ul>
	}
}

window.App.TodoList = TodoList;