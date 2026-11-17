import React from 'react'
import '../../css/addProduct.css'
function AddProduct() {


  return (
    <>
        <div className="add-product-container">
      <h2 className="title">Add Product</h2>
      <form className="product-form">
        <label>
          Product Name:
          <input type="text" placeholder="Enter product name" />
        </label>

        <label>
          Description:
          <textarea placeholder="Enter product description"></textarea>
        </label>

        <label>
          Product Price:
          <input type="number" placeholder="Enter price" />
        </label>

        <label>
          Product Quantity:
          <input type="number" placeholder="Enter quantity" />
        </label>

        <label>
          Select Category:
          <select>
            <option value="">-- Select --</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="grocery">Grocery</option>
            <option value="others">Others</option>
          </select>
        </label>

        <label>
          Add Image:
          <input type="file" />
        </label>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </>
  )
}

export default AddProduct