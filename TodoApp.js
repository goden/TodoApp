const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;

const todos = [
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
];

class TodoApp extends React.Component {
	render() {
		return 	(
			<div>
				<TodoHeader 
				title="我的待辦清單" 
				username="Goden" 
				todoCount={todos.filter((todo) => !todo.complete).length} />
				<InputField placeholder="新增待辦事項" />
				<TodoList todos={todos}/>
			</div>
		);
	}
}

window.App.TodoApp = TodoApp;