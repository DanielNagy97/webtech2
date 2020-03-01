import React, { Component } from 'react';
import axios from 'axios'


export default class AddArtist extends Component {
  constructor(props){
    super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            country: '',
            description: ''
        }
    }

    componentDidMount(){
        console.log("Component mounted");
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onChangeCountry(e){
        this.setState({
            country: e.target.value
        });
    }

    onChangeDesc(e){
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const artist = {
            name: this.state.name,
            country: this.state.country,
            description: this.state.description
        }
        console.log(artist)
        axios.post("http://localhost:9000/artists", artist)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            country: '',
            description: ''
        })
    }

    render(){
      return (
            <div>
                <h2>Add new artist</h2>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Country: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.country}
                            onChange={this.onChangeCountry}>
                        </input>
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <textarea class="form-control"
                          rows="3"
                          value={this.state.description}
                          onChange={this.onChangeDesc}>
                          </textarea>
                    </div>

                    <button type="submit" value="Add a new artist" className="btn btn-primary">Submit</button>
                </form>
            </div>
      );
    }
}