import { useState } from 'react';
import './NewEventForm.css';

function NewEventForm() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');


  const resetForm = () => {
    setTitle('')
    setDate('')
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
       id: Math.floor(Math.random() * 10000)
    }
    console.log(event);
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
        <button>Submit</button>
        <p>title - {title}, date- {date} </p>
        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  )
}

export default NewEventForm
