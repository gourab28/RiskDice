import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../../store/actions/usersAction';
import Clipboard from 'react-clipboard.js';
import {useHistory} from "react-router-dom";

export default function SignUp() {
  let history = useHistory();
  const dispatch = useDispatch();
  const usersList = useSelector(state => state.usersList);
  const {loading, error, users} = usersList;
  const access = localStorage.getItem('user');
  
  useEffect(() => {
        dispatch(getUsers()) 
      }, [dispatch]);
  const continueLogin = () => {
    history.push('/login');
  }
  if(access) {
    return (
      <Fragment>
        <h1> Already Have an Account</h1>
      </Fragment>
      )
  } else {
  return (
    <Fragment>
     {loading ? "Loading..." : error ? "Server Error" :
       <Fragment>
              <div className="col-sm-12">
        <div className="panel panel-default mtl">
          <div className="panel-heading text-center"><b>Registration Information</b></div>
          <div className="panel-body ptl pbl">
            <div className="text-center">
              <div className="row mtm mbl">
                <div className="col-md-6 col-md-offset-3"> 
                 <ul className="list-group mbs">
                 <li className="list-group-item"><b>User ID:</b><span className="wordbrk"> {users.userID} <Clipboard className="clipb pull-right user" data-clipboard-text={users.userID}><i class="far fa-clipboard"></i></Clipboard></span></li>
                 <li className="list-group-item"><b>Password:</b><span className="wordbrk"> {users.password} <Clipboard className="clipb pull-right user" data-clipboard-text={users.password}><i class="far fa-clipboard"></i></Clipboard></span></li>
			            <li className="list-group-item"><b>Depsit Address:</b><span className="wordbrk"> {users.account_address} <Clipboard className="clipb pull-right user" data-clipboard-text={users.account_address}><i class="far fa-clipboard"></i></Clipboard></span></li>

			        </ul>
                </div>
              </div>
       <div className="form-group">
        <button onClick={continueLogin} className="btn btn-primary btn-block" type="submit">Continue Login</button>
       </div>
              <small><center><b>Note:</b> Accounts are created only after the first deposit!</center></small>
              <div className="text-center">
                <hr className="mbl mts" />
                <small><b className="text-danger">Warning:</b> Make sure you save your login credential. If you deleted your cookies and/or forgot your User ID and/or Password and since we do not require <br /> an email address, password reset is not automated. Use the contact link at the bottom of the page. You will need to prove that you own one of the <br /> originating addresses of your first deposit. </small>
              </div>
            </div>
          </div>
        </div>
      </div>
       </Fragment>
       }
    </Fragment>
    )
  }
}
