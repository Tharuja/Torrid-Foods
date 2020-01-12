import React, { Component } from 'react';



class Additem extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
<div class="row">
<div class="col-md-4"></div>
<div class="col-md-4">

<div class="card mx-xl-5">

    <div class="card-body"> 
    <div class="card-title badge badge-secondary text-wrap" style={{width:"18rem"}}><h3 >Add New Item</h3></div>

        <form>
            <label for="defaultFormCardNameEx" class="grey-text font-weight-light">Item name</label>
            <input type="text" id="defaultFormCardNameEx" class="form-control"/>

            <br/>

            <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">Description</label>
            <input type="text" id="defaultFormCardEmailEx" class="form-control"/>

             <br/>

            <label for="defaultFormCardEmailEx" class="grey-text font-weight-light">Price</label>
            <input type="Number" id="defaultFormCardEmailEx" class="form-control"/>
            
            <br/>

            <div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose Image</label>
  </div>
</div>
            <div class="text-center py-4 mt-3">
                <button class="btn btn-outline-purple" type="submit">Add<i class="fa fa-paper-plane-o ml-2"></i></button>
            </div>
        </form>
    </div>
</div>

</div>
</div>
      </div>
    );
  }
}

export default Additem;
