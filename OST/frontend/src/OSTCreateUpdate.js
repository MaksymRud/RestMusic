import  React, { Component } from  'react';

import OSTService from './Ost';

const ostService = new OSTService();

class  OSTCreateUpdate  extends  Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
                                          
    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk)
        {
            ostService.getOST(params.pk).then((c)=>{
                this.refs.Name.value  =  c.name;
            })
        }
    }

    handleCreate(){
        ostService.createOST(
            {
            "name":  this.refs.Name.value,
            }).then((result)=>{
                    alert("OST created!");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.\nCheck OST Name should have OST at the end.\nNames are unique');
            });
    }

    handleUpdate(pk){
        ostService.updateOST(
            {
            pk,
            "name":  this.refs.Name.value,
            }
            ).then((result)=>{
                alert("OST updated!");
            }).catch(()=>{
                alert('There was an error! Please re-check your form.\nCheck OST Name should have OST at the end');
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name:</label>
              <input className="form-control" type="text" ref='Name' />

            <input className="btn btn-primary" style={{marginTop: "10px"}} type="submit" value="Submit" />
            </div>
          </form>
        );
    }

}
export default OSTCreateUpdate;