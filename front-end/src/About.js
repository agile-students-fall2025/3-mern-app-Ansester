import { useEffect, useState } from "react"

const About = () => {
  const [about, setAbout] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/about") // proxy forwards to backend
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then((data) => setAbout(data))
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p>Error: {error}</p>
  if (!about) return <p>Loading...</p>

  return (
    <article>
      <h1>{about.title}</h1>
      <p>{about.content}</p>
    </article>
  )
}

export default About
