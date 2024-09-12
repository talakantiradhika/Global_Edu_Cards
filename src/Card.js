import React from 'react';
import { FaHeart,FaPhoneAlt,FaStar} from 'react-icons/fa'; 
import './Card.css';

const Card = ({ country }) => {
  const contactUrl = country.contactUrl;
  return (
    <div className="card">
      <div className='card_header'>
      <img 
          className="country_icon"
          src={country.flagUrl} 
          alt={`${country.name} flag`}
        />
        
        <h1 className="card_title">{country.name}</h1>
        <div className='icons'>
        <a href={contactUrl} target="_blank" rel="noopener noreferrer">
            <FaPhoneAlt className="contact_icon" />
          </a>
        <FaHeart className="heart_icon" />
        </div>
      </div>

      
      <div className="card_content">
        <h2 className='academic_rep'>Academic Reputation</h2>
        <h3>University Rankings</h3>
        <div className='rankings'>
          <p><strong>QS World Ranking:</strong> {country.academic_reputation.university_rankings.QS_World_Ranking}</p>
          <p><strong>Times Higher Education:</strong> {country.academic_reputation.university_rankings.Times_Higher_Education}</p>
        </div>

        <div className='accredation'>
          <h3>Accreditation:</h3> {country.academic_reputation.accreditation}
        </div>

        <div className='fees'>
          <h3>Cost of Education</h3>
          <p><strong>Tuition Fees:</strong> {country.cost_of_education.tuition_fees}</p>
        </div>

        <div className='expense'>
          <h3>Living Expenses</h3>
          <p><strong>Cost of Living:</strong> {country.living_expenses.cost_of_living}</p>
        </div>
      </div>
      <div className="rating">
        <span>{country.rating}</span>
        <FaStar className="star_icon" />
      </div>


    </div>

    
  );
};

export default Card;
