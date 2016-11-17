class TodoHeader extends React.Component {
	render() {
		return (
			<div>
				<h1>我的待辦清單</h1>
				<span>哈囉, Goden, 你尚有99項未處理</span>
			</div>
		)
	}
}

window.App.TodoHeader = TodoHeader;