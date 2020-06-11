import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
function getSuggestions(value, data) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }
    
    const regex = new RegExp('^' + escapedValue, 'i');

    return data
        .map(section => {
            return {
                title: section.title,
                options: section.options.filter(option => regex.test(option.name))
            };
        })
        .filter(section => section.options.length > 0);
}
  
function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

function renderSectionTitle(section) {
    return (
        <strong>{section.title}</strong>
    );
}

function getSectionSuggestions(section) {
    return section.options;
}

class InputAutosuggest extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            suggestions: [],
            value: ''
        };

        this.populateData = this.populateData.bind(this);
        this.populateValue = this.populateValue.bind(this);
    }

    populateData() {
        const newData = [
            {
              title: 'States',
              options: [
                {
                    name: 'Colorado'
                },
                {
                    name: 'New York'
                },
                {
                    name: 'Alaska'
                },
                {
                    name: 'Alaska 2'
                },
                {
                    name: 'California'
                },
                {
                    name: 'Illinois'
                }
              ]
            }
        ];

        this.setState({data: newData});
    }

    populateValue() {
        const value = this.props.value ? this.props.value : '';
        console.log(this.props);
        
        this.setState({value: value})
    }

    componentDidMount() {
        this.populateData();
        this.populateValue();
    }

    onChange = (_, { newValue }) => {
        const {id, onChange, index} = this.props;
        
        this.setState({
          value: newValue
        });
        
        onChange(id, newValue, index);
      };
      
    onSuggestionsFetchRequested = async ({ value }) => {
        this.setState({
            suggestions: await getSuggestions(value, this.state.data)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    
    render() {
        const { id, placeholder } = this.props;
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder,
            value,
            onChange: this.onChange
        };
        
        return (
            <Autosuggest 
                id={id}
                suggestions={suggestions}
                multiSection={true}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                renderSectionTitle={renderSectionTitle}
                getSectionSuggestions={getSectionSuggestions}
                inputProps={inputProps} 
            />
        );
    }
}

export default InputAutosuggest;