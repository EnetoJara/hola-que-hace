import PropTypes from "prop-types";

const For = props => {
	const { list, callback } = props;
	if (list.length < 1) return null;

	return list.map(item => {
		return callback(item);
	});
};

For.propTypes = {
	list: PropTypes.array,
	callback: PropTypes.func
};

For.defaultProps = {
	list: []
};

export default For;
