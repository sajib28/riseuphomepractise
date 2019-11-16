import React, { Component } from 'react'
import $ from 'jquery';
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            contactmessage: '',
            nameError: '',
            emailError: '',
            phoneError: '',
            messageError: '',

            
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value }, () => {
            this.validateName();
        });
    }
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
        });
    }
    handlephoneChange = (event) => {
        this.setState({ phone: event.target.value }, () => {
            this.validatephone();
        });
    }
    handlecontactmessagee = (event) => {
        this.setState({ contactmessage: event.target.value }, () => {
            this.validatecontactmessage();
        });
    }
    validateName = () => {
        const { name } = this.state;
        if(name==''){
            this.setState({
                nameError:'Please type your name'
            });
        }  
        else if(name.length<3){
        this.setState({
            nameError:'Name must be longer than 2 characters'
        });
        }
       else if (name.match(/^\s+$/) !== null) {
        this.setState({
            nameError:'Please type valid name'
        });
        }
        else{
            this.setState({
                nameError:''
            });  
        }
        // this.setState({
        //     nameError:
        //         name.length > 3 ? null : 'Name must be longer than 3 characters'
        // });
    }
    validateEmail = () => {
        const { email } = this.state;
        if(email==''){
            this.setState({
                       emailError:'Please Enter your email'
                   });
           }
else if(!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
 this.setState({
            emailError:'Please Enter Valid email'
               
        });
}
else{
    this.setState({
        emailError:''
    
    });
}
        // this.setState({
        //     emailError:
        //         email.length > 3 ? null : 'Name must be longer than 3 characters'
        // });
    }
    validatephone = () => {
        const { phone } = this.state;
        if(phone==''){
            this.setState({
              phoneError:'Please type your number'
          });
  
          }
      else if(isNaN(phone)){
          this.setState({
            phoneError:'Please type only number'
        });

        }
        else{
            this.setState({
                phoneError:''
            });
     
        }
        // this.setState({
        //     phoneError:
        //         phone.length > 3 ? null : 'Name must be longer than 3 characters'

        // });
    }
    validatecontactmessage = () => {
        const { contactmessage } = this.state;
        if(contactmessage==''){
            this.setState({
                messageError:'Please type your message'
                    
            });
        }
        else{
            this.setState({
                messageError:''
                    
            });
        }
       
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.validateName();
        this.validateEmail();
        this.validatephone();
        this.validatecontactmessage();
        const { name, email, phone, contactmessage,nameError,emailError,phoneError,messageError } = this.state
        if(nameError!=''){
            $('html, body').animate({ scrollTop: $('#name').offset().top-150}, 'slow');
            return false;
        }
        else if(emailError!=''){
            $('html, body').animate({ scrollTop: $('#email').offset().top -150}, 'slow');
            return false;
        }

        else if(phoneError!=''){
            $('html, body').animate({ scrollTop: $('#phone').offset().top-150}, 'slow');
            return false;
        }
        else if(messageError!=''){
            $('html, body').animate({ scrollTop: $('#contactmessage').offset().top-150}, 'slow');
            return false;
        }

        else{
            alert('no error');
            alert(`Your state values: \n 
                name: ${name}
                email: ${email}
                phone: ${phone}
                contactmessage: ${contactmessage}`)
        }
    }
    render() {
        return (
            <section className="contact-from" data-ui="light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <div className="title text-left">
                                    <h2 className="text-left">
                                        <span className="text-color">Let's</span> Talk!</h2>
                                    <p>We’d love to hear what you are working on.<br />
                                        Drop us a note here and we’ll get back to you within 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form id="ContactForm" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="names" className={`form-control ${this.state.nameError ? 'is-invalid' : ''}`} id="name" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange} onBlur={this.validateName} />
                                    <div className='invalid-feedback'>{this.state.nameError}</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="email" name="email" className={`form-control ${this.state.emailError ? 'is-invalid' : ''}`} id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} onBlur={this.validateEmail} />
                                    <div className='invalid-feedback'>{this.state.emailError}</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="phone" className={`form-control ${this.state.phoneError ? 'is-invalid' : ''}`} id="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handlephoneChange} onBlur={this.validatephone} />
                                    <div className='invalid-feedback'>{this.state.phoneError}</div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <input type="text" name="company" className="form-control" id="companyName" placeholder="Company (Optional)" value={this.state.company} />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea className={`form-control ${this.state.messageError ? 'is-invalid' : ''}`} name="contactmessage" id="contactmessage" placeholder="Message" value={this.state.contactmessage} onChange={this.handlecontactmessagee} onBlur={this.validatecontactmessage}></textarea>
                                    <div className='invalid-feedback'>{this.state.messageError}</div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group float-right">
                                    <button type="submit" className="cus-btn">Send <span className="red-text">Message</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default ContactUs;