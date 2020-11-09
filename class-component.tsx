// 1. Clone this repo locally.
// 2. Create a new branch.
// 3. Update this React class component to be a React functional component.
// 4. Commit your work to your new branch.

import React, {Component} from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null,
      isLoading: false,
      error: null
    }
  }
  
  async loadAsyncData() {
    this.setState({isLoading: true, error: null});
    
    try {
      const resp = await fetch(`https://...?id=${this.props.id}`).then(r=>r.json());
      this.setState({isLoading: false, data: resp});
    } catch(e) {
      this.setState({isLoading: false, error: e});
    }
  }
  
  componentDidMount() {
    this.loadAsyncData();
  }
  
  render() {
    if(this.state.isLoading) return (<p>Loading...</p>);
    if(this.state.error) return (<p>Something went wrong</p>);
    if(this.state.data) return (<p>The data is: {data}</p>);
    return (<p>No data yet</p>);
  }
}