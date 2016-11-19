const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;


class TodoApp extends React.Component {
	render() {
		return 	(
			<div>
				<TodoHeader />
				<InputField placeholder="新增待辦事項" />
				<TodoList />
			</div>
		);
	}
}

window.App.TodoApp = TodoApp;