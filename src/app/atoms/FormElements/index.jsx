import React, { useEffect } from 'react';
import { Form, DatePicker } from 'antd';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

export const SelectField = (props) => {
  const { fieldname, label, control, iProps, rules, selectOption, isRequired, initValue, validate, validMessage } = props;

  useEffect(() => {
    props.valueGot && props.setValue(fieldname, props.valueGot);
  }, []);

  return (
    <Form.Item
      required={isRequired ? isRequired : false}
      label={label}
      validateStatus={validate}
      help={validMessage}
      noStyle={props.noStyle}
      className={props.class}
    >
      <Controller
        name={fieldname}
        control={control}
        defaultValue={initValue ? initValue : ''}
        rules={rules}
        render={({ onBlur, value, onChange }) => (
          <Select
            value={value}
            className="customSelect"
            styles={{
              control: (val) => ({ ...val, minHeight: 32 }),
              valueContainer: (vcontain) => ({
                ...vcontain,
                padding: '5px 15px'
              }),
              dropdownIndicator: (icontain) => ({ ...icontain, padding: 5 }),
              indicatorSeparator: (icontain) => ({
                ...icontain,
                backgroundColor: '#000',
              }),
              option: (vcontain, state) => ({
                ...vcontain,
                color: '#fff',
                backgroundColor: state.isFocused ? '#0077B6' : '#171717',
              }),
              multiValue: (styles, { data }) => {
                return {
                  ...styles,
                  backgroundColor: '#0e0e0e',
                  borderRadius: 8,
                  padding: '0 4px',
                };
              },
              multiValueLabel: (styles) => ({
                ...styles,
                color: '#fff',
              }),
              multiValueRemove: (styles) => ({
                ...styles,
                color: '#7c7c7c',
                ':hover': {
                  backgroundColor: '#0e0e0e',
                  color: 'white',
                },
              }),
              placeholder: (place) => ({ ...place, color: 'rgba(0,0,0,.3)' }),
            }}
            onChange={(e) => {
              onChange(e);
              props.onChange && props.onChange(e);
            }}
            onBlur={props.onBlur}
            {...iProps}
            options={selectOption}
            theme={(theme) => ({
              ...theme,
              borderRadius: 2,
              colors: { ...theme.colors, primary: '#767676' },
            })}
          />
        )}
      />
    </Form.Item>
  );
};

export const DateField = (props) => {
  const { fieldname, label, control, iProps, rules, initValue, isRequired, validate, validMessage } = props;

  useEffect(() => {
    props.valueGot && props.setValue(fieldname, props.valueGot);
  }, [props.valueGot]);

  return (
    <>
      <Form.Item
        required={isRequired ? isRequired : false}
        label={label}
        validateStatus={validate}
        help={validMessage}
        className={props.class}
      >
        <Controller
          name={fieldname}
          control={control}
          defaultValue={initValue ? initValue : ''}
          rules={rules}
          render={({ value, onChange }) => (
            <DatePicker
              style={{ background: '#1bc5bd', color: '#fff' }}
              value={value}
              onChange={(e) => {
                onChange(e);
                props.onChange && props.onChange(e);
              }}
              {...iProps}
            />
          )}
        />
      </Form.Item>
    </>
  );
};
