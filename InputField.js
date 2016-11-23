class InputField extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown(e) {
		const {
			onSubmitEditing,
			onKeyDown
		} = this.props;

		const {value} = e.target;

		switch (e.keyCode) {
			case 13: // 13 indicates 'enter'
				// indeicates input filed not blank
				if (value.trim()) {
					// append new todo item into list
					onSubmitEditing && onSubmitEditing(value);
				}
				e.target.value = '';
				break;
		}
		onKeyDown && onKeyDown(e);
	}

	render() {
		return (
			<input type="text"
						{...this.props}
						onKeyDown={this.handleKeyDown} />
		)
	}
}

InputField.propTypes = {
  onSubmitEditing: React.PropTypes.func
};

window.App.InputField = InputField;
