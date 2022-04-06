import {Form,Input, TextArea,Label} from "semantic-ui-react";

function AddProductForm(changeOptions){
    function handleChange(event){
        changeOptions({[event.target.name]:event.target.value});
        
    }
    return(
<div>
<h4>Add New Product</h4>
    <Form>
    <Form.Field
          id="form-input-control-productName"
          control={Input}
          label="Product Name"
          placeholder="productName"
          onChange = {(e)=>handleChange(e)}
        />
        <Label>AMD</Label>
        <Form.Field
            
          id="form-input-control-productPrice"
          control={Input}
          type="number"
          label="Product Price"
          placeholder="0.0"
          value={"productPrice"}
          onChange = {(e)=>handleChange(e)}
        />
        <Form.Field
          id="form-input-control-productDescription"
          control={TextArea}
          label="Product Description"
          placeholder="productDescription"
          onChange = {(e)=>handleChange(e)}
        />
        <Form.Field
          id="form-input-control-productCount"
          control={Input}
          type="number"
          label="Product Count"
          placeholder="productCount"
          onChange = {(e)=>handleChange(e)}
        />
    </Form>
</div>
    )

}
export default AddProductForm;