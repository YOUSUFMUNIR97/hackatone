import React, { useState } from 'react';

const DynamicTable = () => {
  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevFormData:any) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setData((prevData:any) => [...prevData, formData]);
    setFormData({ id: '', name: '', age: '' });
    console.log(formData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleInputChange}>Add</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:any, index:any) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
