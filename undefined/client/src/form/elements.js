import React from 'react';
import DatePicker from 'react-datepicker';
import MultiSelectReact from 'multi-select-react';

class Button extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
          onClick={() => this.props.onClick()}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

class Datalist extends React.Component {
  render() {
    const dataOptions = this.props.options.split(', ');
    const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption} />
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input list={this.props.htmlFor} />

        <datalist
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {dataOptionsList}
        </datalist>
      </fieldset>
    );
  }
};

class Checkbox extends React.Component {
  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='checkbox'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}

class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

class Input extends React.Component {
  render() {
    return (
      <fieldset style={this.props.styles}>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
          value={this.props.value}
          onChange={(e) => this.props.onChange(this.props.htmlFor, e)}
        />
      </fieldset>
    );
  }
}

class Radio extends React.Component {
  render() {
    return (
      <fieldset>
        <label
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        >
          <input
            id={this.props.htmlFor}
            name={this.props.name || null}
            required={this.props.required || null}
            type='radio'
          />
          {this.props.label}
        </label>
      </fieldset>
    );
  }
}

class Select extends React.Component {
  render() {
    const selectOptions = this.props.options.split(', ');

    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <select
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

          {selectOptionsList}
        </select>
      </fieldset>
    );
  }
};

class MultiSelect extends React.Component {
  render() {
    const selectOptions = this.props.options.split(', ');

    const selectedOptionsStyles = {
      color: "#3c763d",
      backgroundColor: "#dff0d8"
    };
    const optionsListStyles = {
      backgroundColor: "#dff0d8",
      color: "#3c763d"
    };

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <MultiSelectReact
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          options={selectOptions}
          selectedOptionsStyles={selectedOptionsStyles}
          optionsListStyles={optionsListStyles} />
      </fieldset>
    );
  }
};

class Textarea extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
      </fieldset>
    );
  }
};

class DateField extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <DatePicker
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        />
      </fieldset>
    );
  }
};

export { Button, Textarea, Select, Radio, Input, Label, Checkbox, Datalist, DateField, MultiSelect };
