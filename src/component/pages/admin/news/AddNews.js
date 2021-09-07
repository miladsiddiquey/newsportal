import React from 'react';
import './AddNews.css';

const AddNews = () => {
    return (
        <div className="container">
            <h2 className="text-right mt-5">Add your Post</h2>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">News Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="news title"/>  
                </div>
                <div classNameName="row">
                    <div classNameName="col-md-6">
                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Author Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" author name"/>  
                </div>
                    </div>
                    <div classNameName="col-md-6">
                    <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">News Category</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="news category"/>  
                </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">News img</label>
                    <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="import image"/>  
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="description"/>  
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddNews;