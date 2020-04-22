import React, { Component } from 'react'
import './Home.css'

import CovidImage from "../assets/covid.png"
import CountryPicker from './CountryPicker'
import {fetchData} from '../API'

export class Home extends Component {

    state = {
        data: {},
        country: 'Global',
    }
    
    async componentDidMount() {
        const fetchedData = await fetchData();

        //console.log(fetchedData);
        this.setState({data: fetchedData})
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        console.log(fetchedData)
        //fetch data
        //set state
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const { data:{confirmed, recovered, deaths, lastUpdate} } = this.state;
        const {country} = this.state;
        if(!confirmed){
            return 'Loading...';
        }
        return (
            <div className="Home">
                <h1 className="Title">COVID-Tracker</h1>
                <div className="TitleDescWImg">
                    <h2 className="TitleDescription">Stay up to date with COVID-19</h2>
                    <img id="CovidImage"src={CovidImage} alt="coronavirus"/>
                </div>
                <CountryPicker className="CountryPicker" handleCountryChange={this.handleCountryChange}/>

                <h1 className="CountryName">{country}</h1>
                <div className="DataDiv">
                    <p className="Data">Confirmed: {confirmed.value}</p>
                    <p className="Data">Deaths: {deaths.value}</p>
                    <p className="Data">Recovered: {recovered.value}</p>
                </div>
            </div>
        )
    }
}

export default Home
