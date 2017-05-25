import { connect } from 'react-redux';
import CustomerProfile from './CustomerProfile';
import { addCustomer, updateNewCustomerField, getCustomers } from '../../redux/actions/customers';
import { customersById } from '../../redux/selectors/customers';

const mapStateToProps = (state) => {
	return {
		customers: customersById(state),
		newCustomer: state.customers.newCustomer,
		errors: state.customers.newCustomerErrors,
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
		onRetrieveCustomers: () => {
			dispatch(getCustomers());
		},
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);
