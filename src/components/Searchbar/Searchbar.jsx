import s from './Searchbar.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchName: '',
  };
  handleChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') return;

    this.props.handleFormSubmit(this.state.searchName);
    // this.setState({ searchName: '' });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <BiSearchAlt2
              style={{ width: '24px', height: '24px', fill: 'grey' }}
            />
          </button>

          <input
            className={s.SearchFormInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
