import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const suggestions = [
  { label: 'Analyst' },
  { label: 'Consultant' },
  { label: 'Software Engineer' },
  { label: 'Specialist' },
  { label: 'Sr.Consultant' },
  { label: 'Sr.Program Manager' },
  { label: 'Tech-Lead' },
  { label: 'Tech-Manager' },
];

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <Grid container className={classes.root}>
    <Grid container
      spacing={0}
      className={classes.root}
      alignItems='center'
      justify='center'
      direction='column'>
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
    </Grid>
  </Grid>
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 250,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

class SearchCareers extends React.Component {
  state = {
    value: '',
    suggestions: [],
  };

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          classes,
          placeholder: 'Search for Job Title',
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
      <EnhancedTable />
      </Paper>
    );
  }
}
// code for table begins
let counter = 0;
function createData(jobTitle, jobCode, location, availableOpenings, dateCreated) {
  counter += 1;
  return { id: counter, jobTitle, jobCode, location, availableOpenings, dateCreated };
}

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
}

const columnData = [
  { id: 'jobTitle', numeric: false, disablePadding: true, label: 'Job Title' },
  { id: 'jobCode', numeric: true, disablePadding: false, label: 'Job Code' },
  { id: 'location', numeric: true, disablePadding: false, label: 'Location' },
  { id: 'availableOpenings', numeric: true, disablePadding: false, label: 'Available Openings' },
  { id: 'dateCreated', numeric: true, disablePadding: false, label: 'Date Created' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

    render() {
      const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={numSelected === rowCount}
                onChange={onSelectAllClick}
              />
            </TableCell>
            {columnData.map(column => {
              return (
                <TableCell
                  key={column.id}
                  numeric={column.numeric}
                  padding={column.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  <Tooltip
                    title="Sort"
                    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={order}
                      onClick={this.createSortHandler(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              );
            }, this)}
          </TableRow>
        </TableHead>
      );
    }
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };

  const toolbarStyles = theme => ({
    root: {
      paddingRight: theme.spacing.unit,
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    spacer: {
      flex: '1 1 100%',
    },
    actions: {
      color: theme.palette.text.secondary,
    },
    title: {
      flex: '0 0 auto',
    },
  });

  let EnhancedTableToolbar = props => {
    const { numSelected, classes } = props;

    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="title" id="tableTitle">
              Job Openings Listing
            </Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
          <Tooltip title="Delete">
              <IconButton aria-label="Delete">

              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">

              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
  };

  EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
  };

  EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

  const tableStyles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    table: {
      minWidth: 1020,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  });

  class EnhancedTable extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        order: 'asc',
        orderBy: 'jobCode',
        selected: [],
        data: [
          createData('Specialist', 40305, 'Chennai', 2, '03/29/2018'),
          createData('Analyst', 41452, 'Hyderabad', 1, '04/22/2018'),
          createData('Analyst', 40262, 'Chennai', 4, '02/14/2018'),
          createData('Software Engineer', 45521, 'Chennai', 2, '03/14/2018'),
          createData('Specialist', 43356, 'Hyderabad', 1, '10/09/2017'),
          createData('Consultant', 41408,'Chennai', 3, '05/18/2018'),
          createData('Software Engineer', 45237, 'Hyderabad', 1, '02/06/2018'),
          createData('Specialist', 40375, 'Hyderabad', 2, '11/10/2017'),
          createData('Analyst', 42518, 'Chennai', 1, '02/01/2018'),
          createData('Consultant', 42392, 'Hyderabad', 2, '12/06/2018'),
          createData('Sr.Consultant', 40537, 'Hyderabad', 1, '01/29/2018'),
          createData('Tech-Lead', 41444, 'Chennai', 2, '11/16/2017'),
          createData('Tech-Manager', 40366, 'Chennai', 1, '01/18/2018'),
          createData('Sr.Program Manager', 42110, 'Hyderabad', 1, '06/06/2018'),
          createData('Tech-Lead', 44488, 'Hyderabad', 1, '05/15/2018'),
        ],
        page: 0,
        rowsPerPage: 5,
      };
    }

    handleRequestSort = (event, property) => {
      const orderBy = property;
      let order = 'desc';

      if (this.state.orderBy === property && this.state.order === 'desc') {
        order = 'asc';
      }

      this.setState({ order, orderBy });
    };

    handleSelectAllClick = (event, checked) => {
      if (checked) {
        this.setState(state => ({ selected: state.data.map(n => n.id) }));
        return;
      }
      this.setState({ selected: [] });
    };

    handleClick = (event, id) => {
      const { selected } = this.state;
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }

      this.setState({ selected: newSelected });
    };

    handleChangePage = (event, page) => {
      this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
    };

    handleRows = (event, title) => {
      let { data, order, orderBy, selected, rowsPerPage, page } = this.state;
      let dataArrayOfIndexes = [];
      let finalDataArray = [];
      for (let i=0; i< data.length;i++) {
        if (data[i].jobTitle === title) {
          console.log(data[i].id);
          dataArrayOfIndexes[i] = data[i].id;
          console.log(dataArrayOfIndexes)
          if (dataArrayOfIndexes[i] === data[i].id)
          {
            this.setState({
              ...this.state,
              data : finalDataArray
            });
          }
        }
      }
    }

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
      const { classes } = this.props;
      const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

      return (
        <Paper className={classes.root}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
              />
              <TableBody>
                {data
                  .sort(getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map(n => {
                    const isSelected = this.isSelected(n.id);
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleClick(event, n.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={n.id}
                        selected={isSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          {n.jobTitle}
                        </TableCell>
                        <TableCell numeric>{n.jobCode}</TableCell>
                        <TableCell numeric>{n.location}</TableCell>
                        <TableCell numeric>{n.availableOpenings}</TableCell>
                        <TableCell numeric>{n.dateCreated}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 49 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      );
    }
  }

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
EnhancedTable = withStyles(tableStyles)(EnhancedTable);

SearchCareers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchCareers);
