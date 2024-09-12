import React, { useState, useEffect } from 'react';
import Card from './Card.js';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          "name": "Ireland",
          "flagUrl": "https://flagsapi.com/IE/flat/64.png",
          "contactUrl":"https://onewindow.co/countries/study-abroad-ireland/",
          "academic_reputation": {
            "university_rankings": {
              "QS_World_Ranking": "2 universities in the top 200",
              "Times_Higher_Education": "3 universities in the top 300"
            },
            "accreditation": "Internationally recognized qualifications"
          },
          "cost_of_education": {
            "tuition_fees": "€10,000 - €25,000 per year"
          },
          "living_expenses": {
            "cost_of_living": "€9,000 - €12,000 per year"
          },
          "rating":4,
        },
        {
          "name": "UK",
          "flagUrl": "https://flagsapi.com/GB/flat/64.png",
          "contactUrl":"https://onewindow.co/countries/study-abroad-united-kingdom/",
          "academic_reputation": {
            "university_rankings": {
              "QS_World_Ranking": "4 of the top 10",
              "Times_Higher_Education": "3 of the top 10"
            },
            "accreditation": "Global recognition and high standards"
          },
          "cost_of_education": {
            "tuition_fees": "£10,000 - £30,000 per year"
          },
          "living_expenses": {
            "cost_of_living": "£9,000 - £12,000 per year"
          },
          "rating":5,
        }
      ];
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className='content'>
      <h1 className="H1">Get To Know About Education in Various Countries</h1>
      <div className="card_container">
        {countries.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
      </div>
    </div>
    
  );
};

export default App;
