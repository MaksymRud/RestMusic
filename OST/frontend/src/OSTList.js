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
    }

    componentDidMount() {
        ostService.getAllOST().then((result) => {
            this.setState({ ostes:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        ostService.deleteOST({pk}).then(()=>{
            var  newArr  =  this.state.ostes.filter(function(obj) {
                return  obj.id  !==  pk;
            });
            this.setState({ ostes:  newArr })
        });
    }

    nextPage(){
        ostService.getOSTByURL(this.state.nextPageURL).then((result) => {
            this.setState({ ostes:  result.data, nextPageURL:  result.nextlink})
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