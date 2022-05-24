import React from 'react'
import MainLayout from './layouts/MainLayout'

import Tracks from './components/tracks/Tracks'
import PlayList from './components/playlist/PlayList'
import TopChart from './components/topChart/TopChart'

const App = () => {
    return (
        <MainLayout>
            <Tracks />
            <div className="flex overflow-hidden">
                <TopChart />
                <PlayList />
            </div>
        </MainLayout>
    )
}

export default App