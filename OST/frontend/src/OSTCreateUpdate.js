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
                    alert('There was an error! Please re-check your form.');
            });
    }

    handleSubmit(event) {
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }

    handleUpdate(pk){
        ostService.updateOST(
            {
            "pk":  pk,
            "name":  this.refs.Name.value,
            }
            ).then((result)=>{
                alert("Customer updated!");
            }).catch(()=>{
                alert('There was an error! Please re-check your form.');
            });
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name:</label>
              <input className="form-control" type="text" ref='Name' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
    }

}
export default OSTCreateUpdate;