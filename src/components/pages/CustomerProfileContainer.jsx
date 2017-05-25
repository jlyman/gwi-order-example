import { connect } from 'react-redux';
import CustomerProfile from './CustomerProfile';
import { addCustomer, updateNewCustomerField } from '../../redux/actions/customers';

const mapStateToProps = (state) => {
	return {
		newCustomer: state.customers.newCustomer,
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
