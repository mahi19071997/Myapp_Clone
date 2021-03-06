import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { Dashboard } from '../Pages/Dashboard.jsx'
import { MovieData } from '../Pages/MovieData.jsx'
import { SearchResults } from '../Pages/SearchResults.jsx'


export function Routes() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path={"/"}>
                  <Dashboard/>  
                </Route>

                <Route path={"/moviedata/:id"}>
                  <MovieData/>
                </Route>

                <Route path={"/searchresults"}>
                  <SearchResults/>
                </Route>
                
            </Switch>
            
        </div>
    )
}
