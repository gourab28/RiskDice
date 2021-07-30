import React, {useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getHistory} from '../../store/actions/historyAction';
import Tippy from '@tippy.js/react';
import {Link} from 'react-router-dom';

const BetHistory = () => {
    const dispatch = useDispatch()
    const betList = useSelector(state => state.betList)
    const {loading, error, list} = betList
    useEffect(() => {
        dispatch(getHistory()) 
      }, [dispatch])
  {/* function getNumber (num) {
    
    var units = ["M","B","T","Q"]
    var unit = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
    var r = unit%3
    var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
    return x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
} */}
function numFormatter(num) {
    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }else if(num < 900){
        return num; // if value < 1000, nothing to do
    }
}
    return (
  <Fragment>
   {loading ? "Loading..." : betList.list.length === 0 ? "No Data available" : <Fragment>
          <div className="row">
        <div className="col-sm-3">
          <div className="list-group mtl">
            <Link className="list-group-item" to="/account"><b><span className="icon icon-chevron-thin-right pull-right"></span>Account Information</b></Link>
			<Link className="list-group-item" to="/deposit"><b><span className="icon icon-chevron-thin-right pull-right"></span> Deposit</b></Link>
			<Link className="list-group-item" to="/withdraw"><b><span className="icon icon-chevron-thin-right pull-right"></span> Withdraw</b></Link>
			<Link className="list-group-item active" to="/history"><b><span className="icon icon-chevron-thin-right pull-right"></span> Bet History</b></Link>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="panel panel-default mtl">
            <div className="panel-heading text-center"><b>Bet History</b></div>
            <div className="panel-body ptl pbl">
              <div className="text-center">
                        <table className="table table-bordered table-condensed dark-text text-center">
            <thead>
              <tr className="dark-text">
                <th className="active text-center"><b>BET ID</b></th>
                <th className="active text-center"><b>When</b></th>
                <th className="active col-sm-1 text-center"><b>Lucky</b></th>
                {/*<th className="active col-sm-1 text-center"><b>Target</b></th> */}
                <th className="active col-sm-2 text-center"><b>Bet</b></th>
                <th className="active col-sm-1 text-center"><b>Multiplier</b></th>
              </tr>
            </thead>
            <tbody id="history">
           {betList.list.slice().reverse().map((value, index) => {
        return(
            <tr>
              <th className="betid">{value.betID.substring(20)}</th>
              <td>{value.betTime}</td>
              <td>{value.betLucky === true ? (
              <p><b className="text-success">Win</b></p> ) : (
                <p><b className="text-danger"> Lose </b></p>
                     )}</td>
              <td>
             <Tippy content={value.betAmount}>
              <a>{numFormatter(value.betAmount)}</a>
             </Tippy>
              </td>
              <td>{value.multiplier}</td>
            </tr>
             )
         })}
            </tbody>
          </table>
              </div>
            </div>
          </div>
        </div></div>
    </Fragment>}
        </Fragment>
    )
}

export default BetHistory