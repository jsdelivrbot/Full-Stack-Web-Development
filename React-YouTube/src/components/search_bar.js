// syntactic equivalent of const Component = React.Component
import React, { Component } from 'react';

// class component with all functionality React component has
class SearchBar extends Component {

  // state
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // render function, must contain some JSX
  render() {

    // observe change in input with onChange
    return (
      <div className="search-bar">
        <input
          // controlled component
          value = {this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
