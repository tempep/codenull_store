import React from "react";
import axios from "axios";

export const NewProduct = () => {
    const [dataProduct, setDataProduct] = React.useState({
        name: "",
        price: 0,
        stock: 0,
        image: "",
        description: ""
    });
    console.log(process.env.REACT_APP_BACKEND_URL);

    function handleSubmit() {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/products`, dataProduct)
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setDataProduct((prevState) => {
            return {
                ...prevState, [name]: value
            }
        })
    }


    return (
        <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
                <div className="card">
                    <div className="card-header text-center"><h4>New Product</h4></div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating">
                                <input className="form-control" id="name" name="name" type="text" onChange={handleChange} />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" id="price" name="price" type="number" onChange={handleChange} />
                                <label htmlFor="price">Price</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" id="stock" name="stock" type="number" onChange={handleChange} />
                                <label htmlFor="stock">Stock</label>
                            </div>
                            <div className="form-floating">
                                <input className="form-control" id="image" name="image" type="file" onChange={handleChange} />
                                <label htmlFor="image">Image</label>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" id="description" name="description" onChange={handleChange} />
                                <label htmlFor="description">Description</label>
                            </div>
                            <div className="text-end">
                                <button className="btn btn-primary bg-gradient m-2" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}