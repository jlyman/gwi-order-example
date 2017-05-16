function Contact(data) {
  this.id = data && data.id ? data.id : 0;
  this.type = data && data.type ? data.type : '';
  this.name = data && data.name ? data.name : '';
  this.phone = data && data.phone ? data.phone : '';
  this.email = data && data.email ? data.email : '';
}

export default Contact;
