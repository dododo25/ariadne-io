import { useState } from 'react';

import trashSvg from '../svg/trash.svg';

const Variable = props => {
  const type = props.type * 1 ?? 1;

  const onPostValueChange = (type, value) => {
    if (type === 1) {
      props.onValueChange(undefined);
    } else if (type === 2) {
      props.onValueChange(value === 'true' ? true : false);
    } else if (type === 3) {
      props.onValueChange(value * 1);
    } else if (type === 4) {
      props.onValueChange(value);
    } else if (type === 5) {
      props.onValueChange(value.split(/,\s*/g));
    }
  };

  const onNameChange = e => {
    props.onNameChange(e.target.value);
  };

  const onTypeChange = e => {
    const newType = e.target.value * 1;

    props.onTypeChange(newType);
    onPostValueChange(newType, '');
  };

  const onValueChange = e => {
    onPostValueChange(type, e.target.value);
  };

  const nullElement = <input key='0' type='text' className='form-control' disabled />;

  const selectWhenBooleanElement = (
    <select key='1' className='form-select form-select-sm' aria-label='Variable value' onChange={onValueChange}>
      <option value='true'>true</option>
      <option value='false'>false</option>
    </select>
  );

  const inputElement = <input key='2' type='text' className='form-control' value={props.value ?? ''} onChange={onValueChange} />;

  return (
    <tr>
      <td>
        <input type='text' className='form-control' value={props.name ?? ''} onInput={onNameChange} />
      </td>
      <td>
        <select className='form-select form-select-sm' aria-label='Variable type' value={type} onChange={onTypeChange}>
          <option value='1'>Null</option>
          <option value='2'>Boolean</option>
          <option value='3'>Number</option>
          <option value='4'>String</option>
          <option value='5'>Array</option>
        </select>
      </td>
      <td>
        {type === 1 ? nullElement : (type === 2 ? selectWhenBooleanElement : inputElement)}
      </td>
      <td>
        <button type='button' className='btn btn-danger' onClick={props.onDelete}>
          <img src={trashSvg} alt='delete' />
        </button>
      </td>
    </tr>
  );
};

const Variables = () => {
  const [values, setValues] = useState([]);

  const onClick = () => {
    setValues([...values, {name: '', type: 1, value: undefined}]);
  };

  const onNameChange = (i, v) => {
    values[i].name = v;
    setValues([...values]);
  };

  const onTypeChange = (i, v) => {
    values[i].type = v;
    setValues([...values]);
  };

  const onValueChange = (i, v) => {
    values[i].value = v;
    setValues([...values]);
  };

  const onDelete = i => {
    setValues([...values.slice(0, i), ...values.slice(i + 1)]);
  };

  const parts = [];

  for (let i = 0; i < values.length; i++) {
    parts.push(<Variable key={i} 
      name={values[i].name} 
      type={values[i].type} 
      value={values[i].value} 
      onNameChange={v => onNameChange(i, v)} 
      onTypeChange={v => onTypeChange(i, v)} 
      onValueChange={v => onValueChange(i, v)} 
      onDelete={() => onDelete(i)} />);
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Type</th>
            <th scope='col' colSpan='2'>Value</th>
          </tr>
        </thead>
        <tbody>
          {parts}
        </tbody>
      </table>
      <button className='btn btn-outline-primary' onClick={onClick}>Add new variable</button>
    </div>

  );
}

export default Variables;