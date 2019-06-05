import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment'; 

class BioFamilyInfo extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BIO searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_BIO_INFO', payload: searchObject.id });
        console.log('GET_BIO_INFO', this.props.reduxState.bioReducer);
    }

    // if date is null, will display empty <p> instead of "Invalid Date" on DOM 
    checkDate = (property) => {
        if(property === null) {
        property = ''
        return property; 
        } else {
            property =  moment(property).subtract(10, 'days').calendar();
            return property; 
        }
    }
    
    render() {

        let emptyFamily;
        if(this.props.reduxState.bioReducer.length === 0) {
            emptyFamily = <div className="bioCard">
                            <hr/>
                            <label>FIRST NAME:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>LAST NAME:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>DOB:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>SPOUSE NAME:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>SPOUSE DOB:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>PHONE:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>WHATSAPP USERNAME:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>EMAIL:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>REGION/STATE:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>REFERRED BY:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>REFERRAL DATE:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>PASSPORT:</label>  
                            <p className="PCard"></p>
                            <hr/>
                            <label>USA I.D.:</label>  
                            <p className="PCard"></p>
                            <hr/>
                        </div>   
                    } 

        return (
            <div>
                <Nav pageName='FAMILY INFO' volunteer home='/home' />

                    <center>
                        <div>
                            {emptyFamily}
                            {this.props.reduxState.bioReducer.map((bio,index) =>
                                <div className="bioCard" key={index}>
                                    <hr/>
                                    <label>FIRST NAME:</label>  
                                    <p className="PCard">{bio.first_name}</p>
                                    <hr/>
                                    <label>LAST NAME:</label>  
                                    <p className="PCard">{bio.last_name}</p>
                                    <hr/>
                                    <label>DOB:</label>  
                                    <p className="PCard">{this.checkDate(bio.dob)}</p>
                                    <hr/>
                                    <label>SPOUSE NAME:</label>  
                                    <p className="PCard">{bio.spouse_first_name}</p>
                                    <hr/>
                                    <label>SPOUSE DOB:</label>  
                                    <p className="PCard">{this.checkDate(bio.spouse_dob)}</p>
                                    <hr/>
                                    <label>PHONE:</label>  
                                    <p className="PCard">{bio.phone}</p>
                                    <hr/>
                                    <label>WHATSAPP USERNAME:</label>  
                                    <p className="PCard">{bio.encrypted}</p>
                                    <hr/>
                                    <label>EMAIL:</label>  
                                    <p className="PCard">{bio.email}</p>
                                    <hr/>
                                    <label>REGION/STATE:</label>  
                                    <p className="PCard">{bio.address}</p>
                                    <hr/>
                                    <label>REFERRED BY:</label>  
                                    <p className="PCard">{bio.referred_by}</p>
                                    <hr/>
                                    <label>REFERRAL DATE:</label>  
                                    <p className="PCard">{this.checkDate(bio.reference_date)}</p>
                                    <hr/>
                                    <label>PASSPORT:</label>  
                                    <p className="PCard">{String(bio.passport)}</p>
                                    <hr/>
                                    <label>USA I.D.:</label>  
                                    <p className="PCard">{String(bio.us_id)}</p>
                                    <hr/>
                                </div>
                            )}

                    </div>
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioFamilyInfo);