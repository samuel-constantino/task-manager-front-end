import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';

export default function RadioWrapper({ buttonsInfo }) {
  const { defaultValue, setValue, options, labels } = buttonsInfo;

  return (
    <RadioGroup
      row
      name="controlled-radio-buttons-group"
      value={ defaultValue }
      onChange={ ({ target }) => setValue(target.value === 'true') }
    >
      {
        options.map((option, index) => (
          <FormControlLabel
            key={ index }
            value={ option }
            control={ <Radio /> }
            label={ labels[index] }
          />
        ))
      }
    </RadioGroup>
  );
}

RadioWrapper.propTypes = {
  buttonsInfo: PropTypes.object,
}.isRequired;
