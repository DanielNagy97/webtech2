import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


export default class ListArtists extends Component {
    constructor(props){
      super(props);
      this.state = {
        artists: []
      }
    }
    componentDidMount(){
      this.updateDatas()
    }

    updateDatas(){
      axios.get("http://localhost:9000/artists")
      .then(res => {
          this.setState({
            artists:res.data
          })
      })
    }

    deleteItem(index){
      axios.delete("http://localhost:9000/artists/"+index)
      .then(res => {
        if(res.data.ok === 1){
          this.updateDatas()
        }
      })
    }

    render(){
      const columns = [
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Country",
          accessor: "country"
        },
        {
          Header: "Description",
          accessor: "description",
          sortable:false,
          filterable:false
        },
        {
          Header: "Actions",
          Cell:props=>{
            let link = "/artists/edit/"+props.original._id
            return(
              <div>
                <Link to={link} className="btn btn-info">Edit</Link>

                <button type="button" className="btn btn-danger" onClick={()=>{
                  this.deleteItem(props.original._id);
                }}>Remove</button>
              </div>
            )
          },
          sortable:false,
          filterable:false,
          width:170,
          maxWidth:170,
          minWidth:170
        }
      ]
      return (
        <div className="cointainer">
          <h2>List of artists</h2>
          <ReactTable
            columns={columns}
            data={this.state.artists}
            filterable
            defaultPageSize={10}
            noDataText={"Loading data..."}
          >

          </ReactTable>
        </div>
      );
    }
}
