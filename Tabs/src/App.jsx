import { useState, useEffect } from 'react'
import './App.css'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

export default function App(){
  const [loading, setLoading] = useState(() => true)
  const [data, setData] = useState(() => [])
  const [value, setValue] = useState(() => 0)

  const fetchJobs = async () =>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setData(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [0])

  console.log(data)

  if(loading){
    return(
      <section className='section loading'>
        <h2>Loading...</h2>
      </section>
    )
  }
  const {company, title, dates, duties} = data[value]
  return(
    <section className="section">
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((item, index) => {
            return(
              <button key={item.id} className={`job-btn ${index===value && "active-btn"}`} onClick={() => setValue(index)}>{item.company}</button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) =>{
            return(
            <div className="job-desc" key={index}>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}
