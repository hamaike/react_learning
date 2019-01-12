import React from 'react';
import SongList from './SongLIst';
import { selectSong } from '../actions';

const App = () => {
    return (
        <div>
            <SongList />
        </div>
    );
};

export default App;