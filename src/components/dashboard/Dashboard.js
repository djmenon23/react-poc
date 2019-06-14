import React, { Component } from 'react'
import DashBoardMenu from '../dashboardmenu/DashBoardMenu';
import CardList from '../dashboardcards/CardList';
export class Dashboard extends Component {
    render() {
        return (
            <div>
            <DashBoardMenu/>
            <CardList/>
            </div>
        )
    }
}

export default Dashboard
