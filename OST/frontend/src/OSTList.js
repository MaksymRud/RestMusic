import  React, { Component } from  'react';

import OSTService from './Ost';

const ostService = new OSTService();

class  OSTList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            ostes: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        ostService.getAllOST().then(function (result) {
            self.setState({ ostes:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        ostService.deleteOST({pk :  pk}).then(()=>{
            var  newArr  =  self.state.ostes.filter(function(obj) {
                return  obj.id  !==  pk;
            });
            self.setState({ ostes:  newArr })
        });
    }

    nextPage(){
        var  self  =  this;
        ostService.getOSTByURL(this.state.nextPageURL).then((result) => {
            self.setState({ ostes:  result.data, nextPageURL:  result.nextlink})
        });
    }

    render() {

        return (
        <div  className="ost--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.ostes.map( c  =>
                    <tr  key = {c.id}>
                        <td>{c.id}  </td>
                        <td>{c.name}</td>
                        <td>
                            <button  onClick={(e)=>  this.handleDelete(e, c.id) }> Delete</button>
                            <a  href={"/ost/" + c.id}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        );
    }
}

export  default  OSTList;