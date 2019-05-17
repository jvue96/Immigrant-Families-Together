import React, { Component } from 'react';

class BioForm extends Component {

   next = () => {
       this.props.history.push('/medical-form')
   }

    render() {
        return (
            <div>
                <center>
                <div className="navbar">
                    <div className="navigation" onClick={this.toResumePage}>
                        <h2 className="h2nav">EVENTS</h2>
                    </div>
                    <div className="navigation"onClick={this.toWorkPage}>
                        <h2 className="h2nav">BIO</h2>
                    </div>
                    <div className="navigation"onClick={this.toDevPage}>
                        <h2 className="h2nav">LEGAL</h2>
                    </div>
                    <div className="navigation" onClick={this.toResumePage}>
                        <h2 className="h2nav">AID</h2>
                    </div>
                    <div className="navigation"onClick={this.toWorkPage}>
                        <h2 className="h2nav">TEAM</h2>
                    </div>
                    <div className="navigation"onClick={this.toDevPage}>
                        <h2 className="h2nav">NOTES</h2>
                    </div>
                </div>
                    <div>
                        <h1>
                            BIO FORM
                        </h1>
                    </div>
                    <div className="formDivs" >
                        <label>FIRST NAME</label> <br />
                        <input type="text" /> <br />
                        <label>LAST NAME</label> <br />
                        <input type="text" /> <br />
                        <label>D.O.B</label> <br />
                        <input type="text" /> <br />
                        <label>SPOUSE NAME</label> <br />
                        <input type="text" /> <br />
                        <label>SPOUNSE D.O.B</label> <br />
                        <input type="text" /> <br />
                        <label>PHONE</label> <br />
                        <input type="text" /> <br />
                        <label>ENCRYPTED</label> <br />
                        <input type="text" /> <br />
                        <label>EMAIL</label> <br />
                        <input type="text" /> <br />
                        <label>ADDRESS</label> <br />
                        <input type="text" /> <br />
                        <label>REFERRED BY</label> <br />
                        <input type="text" /> <br />
                        <label>REFERENCE DATE</label> <br />
                        <input type="text" /> <br />
                        <label>PASSPORT Y/N</label> <br />
                        <input type="text" /> <br />
                        <label>USA I.D Y/N</label> <br />
                        <input type="text" /> <br />
                        <button className="formButton" onClick={this.next}>NEXT</button> 
                        <br/>
                    </div>
                </center>
            </div>
        );
    }
}

export default BioForm;