const FormRowSelect = ({ name, labelText, list, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
      >
        {list.map((job, index) => (
          <option key={index} value={job}>
            {job}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
