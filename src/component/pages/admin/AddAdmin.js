import React from 'react';

const AddAdmin = () => {
    return (
        <div className="shadow mt-5 mb-5 p-5">
            <h2 className="text-center ">Add Admin</h2>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                  
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Admin Email" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddAdmin;