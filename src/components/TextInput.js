import { getNewId } from "../services/idService";

export default function TextInput({
  labelDescription="Descrição do label",
  inputValue="Valor padrão do input",
  onInputChange=null,
  id="input_text",
  autoFocus=false
}) {

  function handleInputChange({currentTarget}) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return(
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        type="text" 
        id={id} 
        value={inputValue}
        className="border p-1"
        onChange={handleInputChange}
      />
    </div>
  )
}