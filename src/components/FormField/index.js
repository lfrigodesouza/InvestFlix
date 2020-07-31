import React from 'react';
import PropTypes from 'prop-types';

function FormField({
  label, name, type, value, onChange,
}) {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <input
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
