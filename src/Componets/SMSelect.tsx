import React from 'react';

// type Option = {
//   value: string;
//   displayName: string;
// };

// type Props = {
//   options: Option[];
//   label: string;
//   getValue: (value: string) => void;
// };

// const SMSelect: React.FC<Props> = ({ options, label, getValue }) => {
//   const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedValue = e.target.value;
//     getValue(selectedValue);
//   };

type propstype = {
  options: any[];
  label: string;
  getValue: any;
}





const SMSelect = (props:propstype) => {
  const { options, label, getValue } = props;


  let selectChange = (val:any) => {
    const newVal = val;
    getValue(newVal);
  };

  return (
    <div >
      <label>{label}</label>
      <select className="mb-4 w-100" aria-label="Default select example"
      onChange={(e) => selectChange(e)}>
        { options.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SMSelect;
