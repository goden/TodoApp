class TodoItem extends React.Component {
	render() {
		return (
				<div>
					<input type="checkbox" />
					Item 1
					<button>X</button>
				</div>
		)
	}
}

window.App.TodoItem = TodoItem;