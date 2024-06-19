import styles from "./Select.module.css";

function Select({  text,name, option, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>

      <label htmlFor={name}>{text}</label>

      <select id={name} name={name} >
        <option> Selecione uma opção</option>
      </select>
      
    </div>
  );
}

export default Select;
