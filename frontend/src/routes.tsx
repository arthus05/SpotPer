import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Album from "./pages/Album";

import Home from './pages/Home/index';
import {Playlist} from './pages/Playlist';

export function Routes() {
    return (
        <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/playlists" exact component={Playlist} />
        <Route path="/albums" exact component={Album} />
        </BrowserRouter>
    )
}