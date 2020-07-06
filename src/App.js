import React from 'react';
import './App.css';
import Booklist from "./components/Booklist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      pub:"",
      books: []
    };
     
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePubChange = this.handlePubChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handlePubChange(e) {
    this.setState({ pub: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    let newBook = { title: this.state.title, pub: this.state.pub };
    this.setState({ books: [...this.state.books, newBook] });
  }

  render() {
    return (
      <div className="App">
        {/* Form to add new book */}
        <div>
          <form onSubmit={this.handleSubmit} >
            <input 
              type="text" 
              placeholder="Book Title" 
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <br />
            <input 
              type="text" 
              placeholder="Publisher" 
              value={this.state.pub} 
              onChange={this.handlePubChange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>

        {/* List of books */}
        <div>
          {this.state.books.map((book, index) => ( 
            <Booklist title={book.title} pub={book.pub} key={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
