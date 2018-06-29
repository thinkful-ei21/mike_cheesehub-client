import React from 'react';
import { connect } from 'react-redux';

function CheeseList(props){

 const cheeses = props.cheeses.map((cheese, index) => (
    <li key={index}>
      {cheese}
    </li>
  ));

  return (
  <ul className='cheese-list'>
    {cheeses}
  </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    cheeses: state.cheeses
  }

}
  
export default connect(mapStateToProps)(CheeseList);