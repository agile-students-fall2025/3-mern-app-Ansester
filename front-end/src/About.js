import { useEffect, useState } from 'react'
import './About.css'

const About = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(json => setData(json))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading…</p>
  if (!data) return <p>Error loading About Us page</p>

  return (
    <article className="About-article">
      <h2 className="About-title">{data.title}</h2>
      <div className="About-header">
        <img src={data.photoUrl} alt={data.name} className="About-photo" />
        <h3 className="About-name">{data.name}</h3>
      </div>
      <div className="About-text">
        {data.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  )
}

export default About
