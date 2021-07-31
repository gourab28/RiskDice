import React, {useEffect, Fragment} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getHistory} from '../../store/actions/historyAction';
import Tippy from '@tippy.js/react';


export default function Table(props) {
  const dispatch = useDispatch()
  const betList = useSelector(state => state.betList)
  const {loading, error, list} = betList
    useEffect(() => {
        dispatch(getHistory()) 
      },[])
      
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
        <div className="panel panel-default">
          <table className="table table-bordered table-condensed text-center">
            <thead>
              <tr>
              {/*  <th className="active text-center"><b>BET ID</b></th> */}
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
            {/*  <th 
              style={{textAlign: 'center'}}
              className="betid">{value.betID.substring(20)}</th> */}
              <td>{value.betTime}</td>
              <td>{value.betLucky === true ? (
              <p><b className="text-success">Win</b></p> ) : (
                <p><b className="text-danger"> Lose </b></p>
                     )}</td>
              <td><Tippy content={value.betAmount}>
              <a>{numFormatter(value.betAmount)}</a>
             </Tippy></td>
              <td>{value.multiplier}</td>
              
            </tr>
             )
         })}
            </tbody>
          </table>
        </div>
      </Fragment>}
    </Fragment>
    )
}