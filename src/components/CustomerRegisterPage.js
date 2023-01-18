import React,{Component} from "react";
import classes from "./CustomerRegisterPage.module.css"

class CustomerRegisterPage extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"",
            dateOfBirth:"",
            gender:"",
            nationality:"",
            mobileNo:"",
            emailId:"",
            panCardNo:"",
            adhaarCardNo:"",
            currentAddress:"",
            city:"",
            pincode:"",
            state:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    namehandler=(event) => {
        this.setState({
            name: event.target.value
        })
    }
    dobhandler=(event) => {
        this.setState({
            dateOfBirth: event.target.value
        })
    }
    genderhandler=(event) => {
        this.setState({
            male: event.target.value,
            female: event.target.value
        })
    }
    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }
    nationalityhandler=(event) => {
        this.setState({
            nationality: event.target.value
        })
    }
    mobilenohandler=(event) => {
        this.setState({
            mobileNo: event.target.value
        })
    }
    emailidhandler=(event) => {
        this.setState({
            emailId: event.target.value
        })
    }
    pancardnohandler=(event) => {
        this.setState({
            panCardNo: event.target.value
        })
    }
    adhaarhandler=(event) => {
        this.setState({
            adhaarCardNo: event.target.value
        })
    }
    addresshandler=(event) => {
        this.setState({
            currentAddress: event.target.value
        })
    }
    cityhandler=(event) => {
        this.setState({
            city: event.target.value
        })
    }
    pincodehandler=(event) => {
        this.setState({
            pincode: event.target.value
        })
    }
    statehandler=(event) => {
        this.setState({
            state: event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.name} Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            name:"",
            dateOfBirth:"",
            gender:"",
            nationality:"",
            mobileNo:"",
            emailId:"",
            panCardNo:"",
            adhaarCardNo:"",
            currentAddress:"",
            city:"",
            pincode:"",
            state:"",
        })
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className={classes.registerform}>
                <div className={classes.cover}><br/>
                <h1>Customer Registration</h1><br/>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.name} placeholder="Enter Your Full Name"></input>
                <br/>
                <label>Date Of Birth</label>
                <input type="text" value={this.state.dateOfBirth} onChange={this.dateOfBirth} placeholder="dd-mm-yyyy"></input>
                <br/>
                <div className="radio">
                <label>Gender</label>
                    <input type="radio" value="Male"
                        checked={this.state.selectedOption === "Male"}
                        onChange={this.onValueChange}
                    />Male
                <input
                type="radio"
              value="Female"
              checked={this.state.selectedOption === "Female"}
              onChange={this.onValueChange}
            />
            Female
        
        </div>  
                <label>Nationality</label>
                <input type="text" value={this.state.nationality} onChange={this.nationality} placeholder="Your Nationality"></input>
                <br/>
                <label>Mobile No</label>
                <input type="text" value={this.state.mobileNo} onChange={this.mobileNo} placeholder="Enter Your 10 digit Mobile No"></input>
                <br/>
                <label>Email Id</label>
                <input type="text" value={this.state.emailId} onChange={this.emailId} placeholder="Enter Valid Email Id"></input>
                <br/>
                <label>Pan card No</label>
                <input type="text" value={this.state.panCardNo} onChange={this.panCardNo} placeholder="Enter Pand Card No"></input>
                <br/>
                <label>Adhaar Card No</label>
                <input type="text" value={this.state.adhaarCardNo} onChange={this.adhaarCardNo} placeholder="Enter 12 digit Adhaar No"></input>
                <br/>
                <label>Current Address</label>
                <input type="text" value={this.state.currentAddress} onChange={this.currentAddress} placeholder="Please Enter Your Current Addrss"></input>
                <br/>
                <label>City</label>
                <input type="text" value={this.state.city} onChange={this.city} placeholder=""></input>
                <br/>              
                <label>Pincode</label>
                <input type="text" value={this.state.pincode} onChange={this.pincode} placeholder="Enter Pincode"></input>
                <br/>
                <label>State</label>
                <input type="text" value={this.state.state} onChange={this.state} placeholder=""></input>
                <br/>
                <label>Enter Password</label>
                <input type="password" placeholder="Enter New Password"></input>
                <br/>
                <label>Confirm Password</label>
                <input type="password" placeholder="Re-enter Password"></input>
                <br/>
                

                <button type="onClick">REGISTER</button><br/><br/>
                </div>
        </form>
    </div>
    )
    }
}

export default CustomerRegisterPage
