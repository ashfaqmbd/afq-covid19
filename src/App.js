import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
        <h1>COVID-19 Global Tracking System</h1>
        </div>
        
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <Cards data={data} />
       <div className={styles.footer}>All Rights Reserved to Ashfaq Ahmed-PIAIC/PANACLOUD </div>
        
      </div>
    );
  }
}

export default App;