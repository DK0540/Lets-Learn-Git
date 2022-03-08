import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
               <form>
                   <label> Todod app</label>
                   <input type="text" className='form-control' name='taskTitle'/>
                   <br />
                   <label>Date:</label>
                   <input type="Date" name="date" />
                   <br />
                   <label>Time:</label>
                   <input type="time" />
               </form>
            </div>
        );
    }
}

TodoList.propTypes = {

};

export default TodoList;