function Order(data) {
  this.id = data && data.id ? data.id : 0;
  this.type = data && data.type ? data.type : '';
  this.refNo = data && data.refNo ? data.refNo : 0;
  this.equipmentNo = data && data.equipmentNo ? data.equipmentNo : 0;
  this.billTo = data && data.billTo ? data.billTo : '';
  this.customer = data && data.customer ? data.customer : 0;
  this.useTemplate = data && data.useTemplate ? data.useTemplate : true;
  this.deliverToFilter = data && data.deliverToFilter ? data.deliverToFilter : '';
}

export default Order;
