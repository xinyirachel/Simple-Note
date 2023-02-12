import React from "react";
import axios from 'axios';
import ArticleIcon from '@mui/icons-material/Article';

class Quotes extends React.Component {
  constructor(props){
    super(props);
    this.state = {quote:" "}
  }
  componentDidMount(){
    //load data and set state with that data
    axios.get("https://api.github.com/zen").then(response => {
      this.setState({quote: response.data});
    });
  }
  render(){
    return(
      <div>
        <h1>A random quote<ArticleIcon/></h1>
        <p>You will get a motivation quote from Github Zen every time you open this app.</p>
        <p>"{this.state.quote}"</p>
      </div>
    )
  }
}

export default Quotes;