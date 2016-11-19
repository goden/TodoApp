const { TodoItem } = window.App;

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<TodoItem title="Item 1" complete={true} />
				</li>
				<li>
					<TodoItem title="Item 2" complete={true} />
				</li>
				<li>
					<TodoItem title="Item 3" complete={false} />
				</li>
			</ul>
		)
	}
}

window.App.TodoList = TodoList;