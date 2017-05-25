import { connect } from 'react-redux';
import CustomerProfile from './CustomerProfile';
import { addCustomer, updateNewCustomerField } from '../../redux/actions/customer';

const mapStateToProps = (state) => {
	return {
		newCustomer: state.newCustomer,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddCustomerClick: () => {
			dispatch(addCustomer());
		},
		onUpdateField: (field, value) => {
			dispatch(updateNewCustomerField(field, value));
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);
