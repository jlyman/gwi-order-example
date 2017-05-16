function Customer(data) {
  this.id = data && data.id ? data.id : 0;
  this.type = data && data.type ? data.type : '';

  this.name = data && data.name ? data.name : '';
  this.address1 = data && data.address1 ? data.address1 : '';
  this.city = data && data.city ? data.city : '';
  this.state = data && data.state ? data.state : '';
  this.zip = data && data.zip ? data.zip : '';
  this.phone = data && data.phone ? data.phone : '';

  this.preferredCommunication = data && data.preferredCommunication ? data.preferredCommunication : '';
  this.contacts = data && data.contacts ? data.contacts : [];
  this.salesRepId = data && data.salesRepId ? data.salesRepId : '';
  this.showCustomerCO = data && data.showCustomerCO ? data.showCustomerCO : true;
  this.customerBL = data && data.CustomerBL ? data.CustomerBL : false;

  this.deleted = data && data.deleted ? data.deleted : false;
  this.created = data && data.created ? data.created : new Date();
}

export default Customer;
