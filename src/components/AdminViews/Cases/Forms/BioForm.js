import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BioForm extends Component {

   next = () => {
       this.props.history.push('/medical-form')
   }

    backButton = () => {
    this.props.history.push(`/cases`)
  }


    render() {
        return (
            <div>

                <div className="nav">
                <div className="navLeft" onClick={this.backButton}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">BIO</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i class="fas fa-home"></i>
                </Link>
                </div>
                </div>
                
                <center>
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