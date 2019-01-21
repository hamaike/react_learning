import React from 'react'


let SignInForm = props => {
    return <form className="form">
      <div className="field">
        <div className="control">
          <label className="label">First Name</label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Last Name</label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Email</label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Proficiency</label>
          <div className="select">
              <option />
              <option value="beginner">Beginner Dev</option>
              <option value="intermediate">Intermediate Dev</option>
              <option value="expert">Expert Dev</option>
          </div>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Age</label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Gender</label>
          <label className="radio">
            {' '}
            Male
          </label>
          <label className="radio">
            {' '}
            Female
          </label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="checkbox">
            Save Details
          </label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Message</label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
  
    </form>;
  };

  export default SignInForm;