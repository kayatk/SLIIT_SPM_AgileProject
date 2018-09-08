import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import './App';
//import '../../src/App.css';

export default class Form1_emp extends Component {

    constructor(props) {
        super(props);
        this.state={
            ename: "",            
            Address: "",           
            sname:"",            
            number:"",            
            title:"",           
            email:"",            
            Sdate:"",           
            Edate:"",            
            hours:"",            
            tasks: "",            
            name:"",
            
        };
    }
    handleChange = e =>{
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(this.state);
    };

    validate = () => {
        let tempState = this.state;
        for(let key in tempState) {
            if(tempState[key].length < 5) {
                return false;
            }
        }
        return true;
    };

    handleSubmit = e =>{
        console.log('came')
        e.preventDefault();
        const err = this.validate()
        console.log(err);
    }
    render() {
        const {classes} = this.props;

        return (
        <div className="container-contact100">
            <div className="wrap-contact100">
        <div className="wrap-input10 ">
        <input type ="text" id = "name" className="input" placeholder = "Student name" name= "name" />
            </div>
                
            <form className="contact100-form validate-form" onSubmit={this.handleSubmit} >
                <span className="contact100-form-title">
                            Employers 
                        </span>

            <div className="wrap-input100 validate-input bg1">
                <span className="label-input100"> Employer's Name </span>
                <input required type ="text" pattern="[A-Za-z]+" id = "ename" className="input100" placeholder = "Enter your name" name= "ename" value={this.state.ename} onChange={this.handleChange} />
            </div>

            <div className="wrap-input100 validate-input bg1">
                <span className="label-input100"> Employer's Address </span>
                <input required type ="text" id = "Address" className="input100" placeholder = "Enter your Address" name= "Address"/>
            </div>
                    
            <div className="wrap-input100 validate-input bg1 rs1-wrap-input100">
                <span className="label-input100"> Supervisor's Name </span>
                <input required type ="text" pattern="[A-Za-z]+" id = "sname" className="input100" placeholder = "Enter Supervisor's Name" name= "sname"/>
            </div>

            <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100"> Supervisor's Phone </span>
                <input required type ="text" pattern ="\d{10}" id = "number" className="input100" placeholder = "Enter valid number" name= "number"/>
            </div>

            <div className="wrap-input100 validate-input bg1 rs1-wrap-input100">
                <span className="label-input100"> Supervisor's Title  </span>
                <input required type ="text" pattern="[A-Za-z]+"  id = "title" className="input100" placeholder = "Enter Supervisor's Title" name= "title"/>
            </div>

            <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100"> Supervisor's Email  </span>
                <input required type ="email" id = "email" className="input100" placeholder = "Enter valid Email" name= "email"/>
            </div>

            <div className="wrap-input100 validate-input bg1 rs1-wrap-input100">
                <span className="label-input100"> Internship Start Date  </span>
                <input required type ="date" id = "Sdate" className="input100" placeholder = "Internship Start Date" name= "Sdate"/>
            </div>

            <div className="wrap-input100 bg1 rs1-wrap-input10s0">
                <span className="label-input100"> Internship End Date  </span>
                <input required type ="date" id = "Edate" className="input100" placeholder = "Internship End Date " name= "Edate"/>
            </div>

            <div className="wrap-input100 validate-input bg1">
                <span className="label-input100"> No of hours per week  </span>
                <input required type ="number" id = "hours"  className="input100" placeholder = "No of hours per week  " name= "hours"/>
            </div>

            <div className="wrap-input100 validate-input bg0 rs1-alert-validate">
                <span className="label-input100">Please list the tasks the students is expected to complete</span>
                <textarea required className="input100" id="tasks"></textarea>
            </div>

            <div className="wrap-input100 validate-input bg0 rs1-alert-validate">
                <span className="label-input100">List what the student will learn during the internship period</span>
                <textarea required className="input100" id="tasks"></textarea>
            </div>
            
            <div className="wrap-input100 bg1 rs1-wrap-input100">
                <span className="label-input100"> external Supervisor's Name </span>
                <input required type ="text" pattern="[A-Za-z]+" id = "name" className="input100" placeholder = " Supervisor's Name" name= "name"/>
            </div>

            <div className="wrap-input100 validate-input bg1 rs1-wrap-input100">
                <span className="label-input100"> Date  </span>
                <input required type ="date" id = "Edate" className="input100" placeholder = "click here  to enter date " name= "Edate"/>
            </div>    

            <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn">
                            <span>
                                Submit
                                
                                <button label="Submit" onClick={e => this.onSubmit(e)} primary />
                            </span>
                        </button>
                    </div>
            
        </form>

        </div>

    </div>
    );
  }
}

// Form1_emp.propTypes = {
//     classes : PropTypes.object.isRequired
// }

//export default withStyles(styles)(Form1_emp);
