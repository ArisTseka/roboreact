import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.jsx';
// import {robots} from './robots';
import Scroll from '../components/Scroll.jsx';
import SearchBox from '../components/SearchBox.jsx';
import ErrorBoundry from '../components/ErrorBoundry.jsx';
import './App.css'

import { setSearchField,requestRobots } from '../actions';

const mapStateToProps = state => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
// In order to have states you must use class syntax
  // constructor(){
  //   super()
  //     this.state = {
  //     robots: [] //declaring the states
  //     // searchfield: ''
  //   }
  // }

  componentDidMount (){
   this.props.onRequestRobots()
  }

  // // Only with () => fucntion this is reffering to the Class
  // onSearchChange = (event) => {
  //   // Change the value of the searchFiled on change the input
  //   this.setState({ searchfield: event.target.value })
  // }

  render( ) {
    // filter the robots Displaying
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filterRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    });


    if (isPending) {
      return <h1 className='tc'>Loading ...</h1>
    }else{
      return (
        <div className="tc">
          <h1 className="--washed-blue">Robo friends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
