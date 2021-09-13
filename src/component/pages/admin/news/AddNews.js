import React, { useState } from 'react';
import './AddNews.css';

const AddNews = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('name', info.name);
        formData.append('category', info.category);
        formData.append('shortDis', info.shortDis);
        formData.append('description', info.description);

       

        fetch('https://shrouded-coast-00122.herokuapp.com/addNews', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container">
            <div className="shadow p-5 mt-5 mb-5">
                <h2 className="text-center ">Add Your Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">News Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="news title" />
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Author Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder=" author name" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">News Category</label>
                                    <select onBlur={handleBlur} name="category" type="text" className="form-select">
                                        <option value="1">Food</option>
                                        <option value="2">Sports</option>
                                        <option value="3">International</option>
                                        <option value="4">Technology</option>
                                       
                                    </select>                              
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">News img</label>
                        <input onChange={handleFileChange} type="file" className="form-control" placeholder="import image" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Short Description</label>
                        <textarea maxlength="250" onBlur={handleBlur} type="text" className="form-control" name="shortDis" placeholder="description" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Description</label>
                        <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="description" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;