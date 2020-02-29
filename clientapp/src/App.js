import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import ListAlbums from "./components/ListAlbums";
import ListArtists from "./components/ListArtists";
import EditAlbum from "./components/EditAlbum";
import AddAlbum from "./components/AddAlbum"
import AddArtist from "./components/AddArtist"


class App extends Component {
  render(){
    return (
      <Router>
        <div className="container">
          <NavBar />
          <Route path="/" exact component={ListAlbums} />
          <Route path="/albums" exact component={ListAlbums} />
          <Route path="/artists" exact component={ListArtists} />
          <Route path="/albums/:id" exact component={EditAlbum} />
          <Route path="/addAlbum" exact component={AddAlbum} />
          <Route path="/addArtist" exact component={AddArtist} />
        </div>
      </Router>
    );
  }
}

export default App;
