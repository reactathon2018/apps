import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  SEARCH_LOAD,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeSearch: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'search', value }),

  onSubmit: (search) =>
    dispatch({ type: SEARCH_LOAD, payload: agent.Auth.search(search) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Search extends React.Component {
  constructor() {
    super();
    this.changeSearch = ev => this.props.onChangeSearch(ev.target.value);
    this.submitForm = (search) => ev => {
      ev.preventDefault();
      this.props.onSubmit(search);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const search = this.props.search;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Search</h1>


              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(search)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Search Text"
                      value={search}
                      onChange={this.changeSearch} />
                  </fieldset>


                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Search
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
