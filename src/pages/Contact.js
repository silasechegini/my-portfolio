import React from 'react';




class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            zipCode: "",
            cityName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.onInactive = this.onInactive.bind(this);
        this.fillCity = this.fillCity.bind(this);
        this.fixZipCode = this.fixZipCode.bind(this);
        this.setZip = this.setZip.bind(this);
    }

    handleChange(event) {
        const value = event.value;
        const name = event.name;

        this.setState({
            [name]: value
        });
        // console.log(`target: ${event}, target value: ${value}, target name: ${name}`);
    }

    onInactive(name) {
        switch (name) {
            case 'country':
                this.setState({
                    country: document.getElementById("country").value
                });
                break;
            case 'email':
                this.setState({
                    email: document.getElementById("email").value
                });
                break;
            default:
                break;
        }
        // document.getElementById("comm").style.backgroundColor = "White";
    }

    fillCity() {
        var zipEntered = this.state.zipCode;
        var zip = zipEntered.slice(0, 3).toUpperCase();
        var ottawa = ["K1R", "K2P", "K2C", "K2B", "K2A", "K1Z", "K1V", "K1S", "K1P", "K1N", "K1M", "K1L", "K1K",
            "K1H", "K1G", "K2G", "K2H", "K2J", "K2R", "K2E", "K1B", "K1C", "K1J", "K1T", "K1W", "K1X", "K2K", "K2L", "K2M", "K2T", "K2V", "K2W"];
        var kingston = ["K7K", "K7L", "K7M", "K7P"];
        var peterborough = ["K9K", "K9L", "K9H", "K9J"];

        if (this.state.country === 'Canada') {
            if (ottawa.indexOf(zip) >= 0) {
                document.getElementById("cityName").value = "Ottawa";
                this.setState({ cityName: "Ottawa" });
            }
            else if (kingston.indexOf(zip) >= 0) {
                document.getElementById("cityName").value = "Kingston";
                this.setState({ cityName: "Kingston" });
            }
            else if (peterborough.indexOf(zip) >= 0) {
                document.getElementById("cityName").value = "Peterborough";
                this.setState({ cityName: "Peterborough" });
            }
            else {
                document.getElementById("cityName").value = "";
                document.getElementById("zipCode").placeholder = "xxx xxx";
                document.getElementById("cityName").placeholder = "enter city name";
            }
        } else {
            document.getElementById("zipCode").placeholder = "xxx xxx";
        }
        this.fixZipCode();
    }

    fixZipCode() {
        let zip = this.state.zipCode;
        if (zip.length >= 6 && (this.state.country === 'Canada')) {
            var head = zip.slice(0, 3);
            var tail = zip.slice((zip.length - 3), zip.length);
            document.getElementById("zipCode").value = head.toUpperCase() + " " + tail.toUpperCase();
            this.setState({ zipCode: document.getElementById("zipCode").value });
        }
    }

    setZip() {
        if (this.state.country === 'Canada') {
            document.getElementById("zipCode").value = "";
            document.getElementById("cityName").value = "";
            document.getElementById("zipCode").placeholder = "xxx xxx";
            document.getElementById("cityName").placeholder = "enter city name";
            document.getElementById("zipCode").maxLength = 7;
        } else {
            document.getElementById("zipCode").maxLength = 10;
            document.getElementById("cityName").value = "";
            document.getElementById("zipCode").value = "";
            document.getElementById("zipCode").placeholder = "xxx xxx";
            document.getElementById("cityName").placeholder = "enter city name";
        }
    }



    render() {
        return (
            <div className="mx-auto pt-3" style={{ "width": "77%", "backgroundColor": "#603F83CC" }}>
                <h1 className="ml-5">Contact Me</h1>
                <form className=" p-5 mx-auto contact-fonts" action="/" method="POST">
                    <div className="row mb-5">
                        <div className="mb-3 col " >
                            <label htmlFor="firstName" className="form-label fa-lg">First name: </label>
                            <input type="text" className="form-control mb-4" id="firstName" name="firstName" aria-describedby="" placeholder="first name"
                                onChange={(e) => this.handleChange(e.target)} />
                            <label htmlFor="lastName" className="form-label fa-lg">Last name: </label>
                            <input type="text" className="form-control mb-4" id="lastName" name="lastName" aria-describedby="" placeholder="last name"
                                onChange={(e) => this.handleChange(e.target)} />
                            <label htmlFor="email" className="form-label fa-lg">Email address</label>
                            <input type="email" className="form-control mb-4" id="email" name="email" aria-describedby="" placeholder="email address"
                                onChange={(e) => this.handleChange(e.target)} />
                        </div>
                        <div className="col">
                            <label htmlFor="country" className="form-label fa-lg"> Select Country: </label>
                            <select className="form-select form-select-xl mb-4 form-control" name="country" id="country"
                                onChange={(e) => this.handleChange(e.target)}
                                onBlur={this.setZip} >
                                <option value="0: null">Select One</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Canada">Canada</option>
                                <option value="Czech Republi">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="Greece">Greece</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Italy">Italy</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Norway">Norway</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Republic Of Ireland">Republic Of Ireland</option>
                                <option value="Romania">Romania</option>
                                <option value="Spain">Spain</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="Not Listed">Not Listed</option>
                            </select>

                            <label htmlFor="zipCode" className="form-label fa-lg" > Zip code: </label>
                            <input className="form-control mb-4" type="text" id="zipCode" name="zipCode" maxLength="10" placeholder="XXX XXX"
                                onBlur={this.fillCity}
                                onChange={(e) => this.handleChange(e.target)}
                            />
                            <label htmlFor="cityName" className="form-label fa-lg"> City name: </label>
                            <input className="form-control mb-4" type="text" id="cityName" name="cityName" placeholder="enter city name" maxLength="40"
                                onChange={(e) => this.handleChange(e.target)} />
                        </div>
                    </div>
                    <div className="row">
                    </div>

                    <div className="mb-5">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="google" id="google" value="google" />
                            <label className="form-check-label" htmlFor="google" ><i className="fab fa-google"></i> Google</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input " type="radio" name="twitter" id="twitter" value="twitter" />
                            <label className="form-check-label " htmlFor="twitter"><i className="fab fa-twitter"></i> Twitter</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="linkedin" id="linkedin" value="linkedin" />
                            <label className="form-check-label " htmlFor="linkedin"><i className="fab fa-linkedin"></i> LinkedIn</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="facebook" id="facebook" value="facebook" />
                            <label className="form-check-label " htmlFor="facebook"><i className="fab fa-facebook"></i> Facebook</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="comments" className="form-label fa-lg">Comments</label>
                        <textarea className="form-control" id="comments" name="comments" rows="5"
                            onChange={(e) => this.handleChange(e.target)}
                        ></textarea>
                    </div>
                    <button id="submit" name="submit" value="Submit" type="submit" className="btn"
                        style={{ "backgroundColor": "#603F83CC", "color": "white" }}><i className="fas fa-paper-plane" >
                        </i> Submit</button>
                </form>
            </div>
        );
    };
}

export default Contact;