import { Component } from 'react';
import { Form, InputForm } from './Searchbar.styled';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return alert('Please');
    }

    this.props.onSearch(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <header>
        <Form onSubmit={this.handleSubmit}>
          <InputForm
            type="text"
            value={this.state.value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </Form>
      </header>
    );
  }
}
