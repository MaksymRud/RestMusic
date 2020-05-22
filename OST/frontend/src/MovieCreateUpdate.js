import  React, { Component } from  'react';
import Select from 'react-select';
import MovieService from './Movie';
import OSTService from './Ost';

const MovieService = new MovieService();
const ostService = new OSTService();

class  MovieCreateUpdate  extends  Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
                                          
    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk)
        {
            MovieService.getMovie(params.pk).then((c)=>{
                this.refs.Name.value  =  c.name;
                this.refs.Num_seasons.value = c.num_seasons;
            })
        }
    }

    handleCreate(){
        MovieService.createOST(
            {
            "name":  this.refs.Name.value,
            "num_seasons": this.refs.Num_seasons.value,
            }).then((result)=>{
                    alert("OST created!");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.\nCheck OST Name should have OST at the end');
            });
    }

    handleUpdate(pk){
        MovieService.updateOST(
            {
            "id":  pk,
            "name":  this.refs.Name.value,
            "num_seasons": this.refs.Num_seasons.value,
            }
            ).then((result)=>{
                alert("OST updated!");
            }).catch(()=>{
                alert('There was an error! Please re-check your form.\nCheck OST Name should have OST at the end');
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

    render() {
        let ost_options = [];
        ostService.getAllOST().then(function(result) {
            ost_options = result.data;
        });
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">

            <label>
              Name:</label>
              <input className="form-control" type="text" ref='Name' />

            <label>
            Number of seasons:</label>
            <input className="form-control" type="number" ref='Num_seasons' min="1" max="30" />

            <label>
            Category:</label>
            <input className="form-control" type="text" ref='Name' />

            <Select
                name="OST"
                value="one"
                options={ost_options}

            />

            <input className="btn btn-primary" style={{marginTop: "10px"}} type="submit" value="Submit" />
            </div>
          </form>
        );
    }

}
export default MovieCreateUpdate;