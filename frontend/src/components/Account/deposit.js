import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Clipboard from 'react-clipboard.js';
 
export default function Account (props) {
  let Udata = localStorage.getItem("user");
  let obj = JSON.parse(Udata);
  const [data] = useState(obj);
  const [baldata, setBaldata] = useState();
  //const [copy, setCopy] = useState("");
  
  useEffect(() => {
    get_Balance();
  },[]);
  
  const get_Balance = async() => {
    try {
      const userd = { "userID": data.userID, "password": data.password };
     const response = await axios.post('http://localhost:5000/api/balance', userd)
     setBaldata(response.data);
    } catch (e) {
      console.log(e)
    }
  }
  const refresh = async () => {
    try {
     get_Balance();
    } catch (e) {
      alert("something wrong");
    }
  }
  
  if (baldata) {
  return (
    <Fragment>
      <div className="row">
	<div className="col-sm-3">
		<div className="list-group mtl">
			<Link className="list-group-item" to="/account"><b><span className="icon icon-chevron-thin-right pull-right"></span>Account Information</b></Link>
			<Link className="list-group-item active" to="/deposit"><b><span className="icon icon-chevron-thin-right pull-right"></span> Deposit</b></Link>
			<Link className="list-group-item" to="/withdraw"><b><span className="icon icon-chevron-thin-right pull-right"></span> Withdraw</b></Link>
			<Link className="list-group-item" to="/history"><b><span className="icon icon-chevron-thin-right pull-right"></span> Bet History</b></Link>
		</div>
	</div>
	<div className="col-sm-9">
		<div className="panel panel-default mtl">
		<div className="panel-heading text-center"><b>Deposit Information</b></div>
		<div className="panel-body ptl pbl">
			<div className="text-center">
	        <br/>
	        <b>Your balance ( <b>{baldata.balance}</b> ) $RISK will be available next time you visit this website by means of a cookie.</b>
	        <br/>
	        <b>If you would like to use your balance on another computer you may login at <Link to="/login">https://riskdice.com/login</Link> <br/>using the following credentials:</b>
	        </div>
	        <br/>

	        <div className="row mtm mbl">
	            <div className="col-md-6 col-md-offset-3"> 
					<ul className="list-group mbs">
			            <li className="list-group-item"><b>Depsit Address:</b><span className="wordbrk"> {data.account_address}</span> <Clipboard className="clipb" data-clipboard-text={data.account_address}><i className="far fa-clipboard"></i></Clipboard></li>

			        </ul>
	            </div>
	
	        </div>
	        <small><center><b>Note:</b> Accounts are created only after the first deposit!</center></small>
	        <p onClick={refresh} className="btn btn-success btn-block">Refresh Balance</p>

	        <div className="text-center">
	            <hr className="mbl mts"/>
	            <small><b className="text-danger">Warning:</b> Make sure you save your login credential. If you deleted your cookies and/or forgot your User ID and/or Password and since we do not require <br/> an email address, password reset is not automated. Use the contact link at the bottom of the page. You will need to prove that you own the <br/> originating addresses of your first deposit. </small>
	        </div>

	    </div>
		</div>
	</div>
</div>

    </Fragment>
    )
  }
  return (
    <>
    <Fragment>
      <div className="row text-center">
        <div className="line-2"></div>
      </div>
    </Fragment>
    </>
    )
}