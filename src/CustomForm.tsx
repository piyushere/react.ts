/**
 * Dhruv Pathak
3:15 PM
Create a regular form component with 4 fields: name, email, phone, pincode. And add validations to it
Dhruv Pathak
3:16 PM
1. Fields should not be empty
2. email should match the regex 
3. Phone should be 10 digits long
4. Pincode should be 6 digits long

Email regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
 */

import React, { useEffect } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  pincode: '',
};
const CustomForm = () => {
  const [formState, setFormState] =
    React.useState<typeof initialState>(initialState);

  const [validity, setValidity] = React.useState<
    Record<keyof typeof initialState, boolean>
  >({
    name: false,
    email: false,
    phone: false,
    pincode: false,
  });
  const [valid, setValid] = React.useState(false);

  const validateFormField = (field: string, value: string) => {
    if (value === '') return false;
    let validationResult = false;
    switch (field) {
      case 'name': {
        validationResult = value.trim().length > 0;
        break;
      }
      case 'email': {
        validationResult =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            value
          );
        break;
      }
      case 'phone': {
        validationResult = value.length === 10;
        break;
      }
      case 'pincode':
        validationResult = value.length === 6;
        break;
      default:
        return false;
    }
    return validationResult;
  };

  useEffect(() => {
    const entries = Object.entries(validity);
    const result = entries.reduce(
      (accum, [index, value]) => accum + Number(value),
      0
    );
    if (entries.length === result) setValid(true);
    else setValid(false);
  }, [validity]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(validity);
        console.log(formState);
      }}
      className="flex flex-col gap-4"
    >
      <label htmlFor="name">
        name:
        <input
          className="bg-slate-800 text-gray-400"
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={(e) => {
            setFormState((state) => ({ ...state, name: e.target.value }));
            setValidity((state) => ({
              ...state,
              name: validateFormField('name', e.target.value),
            }));
          }}
        />
      </label>

      <label htmlFor="email">
        email:
        <input
          className="bg-slate-800 text-gray-400"
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={(e) => {
            setFormState((state) => ({ ...state, email: e.target.value }));
            setValidity((state) => ({
              ...state,
              email: validateFormField('email', e.target.value),
            }));
          }}
        />
      </label>

      <label htmlFor="phone">
        phone:
        <input
          className="bg-slate-800 text-gray-400"
          type="number"
          name="phone"
          id="phone"
          value={formState.phone}
          onChange={(e) => {
            setFormState((state) => ({ ...state, phone: e.target.value }));
            setValidity((state) => ({
              ...state,
              phone: validateFormField('phone', e.target.value),
            }));
          }}
        />
      </label>

      <label
        htmlFor="
      pincode"
      >
        pincode:
        <input
          className="bg-slate-800 text-gray-400"
          type="number"
          name="pincode"
          id="pincode"
          value={formState.pincode}
          onChange={(e) => {
            setFormState((state) => ({ ...state, pincode: e.target.value }));
            setValidity((state) => ({
              ...state,
              pincode: validateFormField('pincode', e.target.value),
            }));
          }}
        />
      </label>

      <button type="submit" disabled={false}>
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
