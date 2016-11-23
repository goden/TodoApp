const {InputField} = window.App;

class TodoItem extends React.Component {

	constructor(props, context) {
		super(props, context);

		// 利用類別建構子初始元件狀態
		this.state = { editable: false };

		// 在ES6 component class中，必須手動綁定this
		this.toggleEditMode = this.toggleEditMode.bind(this);
	}

	// 更新元件狀態來初換模式
	toggleEditMode() {

		// 使用setState()來更新state，亦可在更新當下觸發事件
		this.setState({editable: !this.state.editable});
	}

	test() {
		console.log(111);
	}

	// 根據元件狀態來渲染不同畫面
	render() {
		return this.state.editable ?
					this.renderEditMode() :
					this.renderViewMode();
	}

	renderViewMode() {
		const {
			title,
			complete,
			onDelete,
			onToggle
		} = this.props;

		return (
				<div>
					<input type="checkbox"
								checked={complete}
								onChange={() => onToggle && onToggle(!complete)} />
					<span onDoubleClick={this.toggleEditMode}>{title}</span>
					<button onClick={() => onDelete && onDelete()}>X</button>
				</div>
		);
	}

	renderEditMode() {
			return (
				<InputField
					autoFocus
					placeholder="編輯待辦事項"
					value={this.props.title}
					onBlur={this.toggleEditMode}
					onKeyDown={(e) => {
							if (e.keyCode === 27) {
								e.preventDefault();
								this.toggleEditMode();
							}
					}}
				/>
			);
	}

}

TodoItem.propTypes = {
		title: React.PropTypes.string.isRequired,
		complete: React.PropTypes.bool.isRequired,
		onDelete: React.PropTypes.func,
		onToggle: React.PropTypes.func
}

window.App.TodoItem = TodoItem;
