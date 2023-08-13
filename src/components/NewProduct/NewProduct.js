import {useAddProductMutation} from "../../app/services/api.js"
import './style.css'

const NewProduct = (props) => {
    const {input, setInput} = props;
    const [addProduct] = useAddProductMutation();

    const onSubmitClick = () => {
        addProduct(input);
        setInput("");
    }

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    return(
        <div className="input-container">
            <label>Add New Product</label>
            <input onChange={onInputChange} value={input}></input>
            <button onClick={onSubmitClick} disabled={!input || input?.length === 0}>Submit</button>
        </div>
    )
}

export default NewProduct;