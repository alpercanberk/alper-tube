
import React,{Component} from 'react';




class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term : ''}


  }
  render(){

  return(
    <div className = "search-bar">
    <div className = "col-md-3 col-xs-2 "/><h1 className = "logo col-md-4 col-xs-8">AlperTube</h1><div className = "col-md-4 col-xs-2"/>
    <input

      onChange ={(event) => this.onInputChange(event.target.value)}

      value={this.state.term}

    />

    </div>
  );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}

export default SearchBar;
