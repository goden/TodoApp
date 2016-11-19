class TodoItem extends React.Component {
	render() {
		const {
			title, 
			complete
		} = this.props;
		return (
				<div>
					<input type="checkbox" checked={complete} />
					{title}
					<button>X</button>
				</div>
		)
	}
}

window.App.TodoItem = TodoItem;