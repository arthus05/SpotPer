import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home';
import {Playlist} from './pages/Playlist';

export function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/playlists" exact component={Playlist} />
        </BrowserRouter>
    )
}