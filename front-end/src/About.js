import { useEffect, useState } from "react";
import axios from "axios";

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const base = process.env.REACT_APP_API || "";
    axios.get(`${base}/api/about`)
      .then(r => setData(r.data))
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading…</p>;
  if (err) return <p style={{color:"crimson"}}>Error: {err}</p>;
  if (!data) return null;

  return (
    <main style={{maxWidth: 780, margin: "40px auto", padding: "0 16px"}}>
      <h1>{data.title}</h1>
      <img
        src={data.photoUrl}
        alt={data.name}
        style={{width: 220, borderRadius: 12, display: "block", margin: "16px 0"}}
      />
      <h2 style={{marginTop: 0}}>{data.name}</h2>
      {data.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
    </main>
  );
}
