import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleName(e){
    setName(e.target.value)
  }
  
  function handleCat(e){
    setCategory(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault()
    const newItem = ({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    });
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCat} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
