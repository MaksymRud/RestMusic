import  React, { Component } from  'react';

import MovieService from './Ost';

const MovieService = new OSTService();

class  MovieList  extends  Component {

    constructor(props) {
        super(props);
        this.state  = {
            movies: [],
            nextPageURL:  ''
        };
        this.nextPage  =  this.nextPage.bind(this);
        this.handleDelete  =  this.handleDelete.bind(this);
    }

    componentDidMount() {
        var  self  =  this;
        MovieService.getAllMovies().then(function (result) {
            self.setState({ movies:  result.data, nextPageURL:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        MovieService.deleteMovie({pk :  pk}).then(()=>{
            var  newArr  =  self.state.movies.filter(function(obj) {
                return  obj.id  !==  pk;
            });
            self.setState({ movies:  newArr })
        });
    }

    nextPage(){
        var  self  =  this;
        MovieService.getMovieByURL(this.state.nextPageURL).then((result) => {
            self.setState({ movies:  result.data, nextPageURL:  result.nextlink})
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
                    <th>Num Seasons</th>
                    <th>Descr</th>
                    <th>Category</th>
                    <th>OST</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.movies.map( c  =>
                    <tr  key = {c.id}>
                        <td>{c.id}  </td>
                        <td>{c.name}</td>
                        <td>{c.num_seasons}</td>
                        <td>{c.descr}</td>
                        <td>{c.categories}</td>
                        <td>{c.ost.name}</td>
                        <td>
                            <button  onClick={(e)=>  this.handleDelete(e, c.id) }> Delete</button>
                            <a  href={"/movie/" + c.id}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
        );
    }
}

export  default  MovieList;