const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;


class TodoApp extends React.Component {
	render() {
		return 	(
			<div>
				<TodoHeader 
					title="我的待辦事項"
					username="Goden"
					todoCount={75} />
				<InputField placeholder="新增待辦事項" />
				<TodoList />
			</div>
		);
	}
}

window.App.TodoApp = TodoApp;