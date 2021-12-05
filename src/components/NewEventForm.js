import { useState } from 'react';
import './NewEventForm.css';

function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Sydney')


  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('Sydney')
  }
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setTitle(e.target.value);
  // }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
       title: title,
       date: date,
       location: location,
       id: Math.floor(Math.random() * 10000)
    }
    console.log(event);

    addEvent(event)
    resetForm()
  }

  return (
    <div>
      <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
          <span>Event Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            />
        </label>
        <label>
          <span>Event Date:</span>
          <input 
            type="date" 
            onChange={(e) => setDate(e.target.value)} 
            value={date}
            />
        </label>
        <label>
          <span>Event location:</span>
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="london">London</option>
            <option value="newyork">New York</option>
            <option value="losangeles">Los Angeles</option>
          </select>
        </label>
        <button>Submit</button>
        <p>title - {title}, date- {date} </p>
        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  )
}

export default NewEventForm
