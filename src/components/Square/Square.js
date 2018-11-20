import React, { Component } from 'react';


class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: null
        }

        this.click = this.click.bind(this)
    }
    click(){
        this.setState({value: 'X'})
    }


  render() {

    return (
        <button style={{height: '50px', width: '50px', border: 'solid black 2px'}} onClick={this.props.onClick}>
            {this.props.value}
        </button>
    );
  }
}

export default Square;