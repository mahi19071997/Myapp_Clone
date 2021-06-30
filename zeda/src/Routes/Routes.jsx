import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { Dashboard } from '../Pages/Dashboard'
import { MovieData } from '../Pages/MovieData'

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
                
            </Switch>
            
        </div>
    )
}
