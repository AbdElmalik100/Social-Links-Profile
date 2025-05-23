import { useState } from "react"

function App() {
  const [links, setLinks] = useState([
    "GitHub",
    "Frontend Mentor",
    "Linkedin",
    "Twitted",
    "Instagram",
  ])
  return (
    <main className="min-h-screen bg-Grey-900 grid place-items-center">
      <div className="box w-[400px] p-8 bg-Grey-800 items-center rounded-xl flex flex-col gap-3">
        <img className="rounded-full w-24 mb-4" src="/images/avatar-jessica.jpeg" alt="Avatar" />
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-white text-2xl">Jessica Randell</h1>
          <span className="font-bold text-Green">London, United Kingdom</span>
        </div>
        <span className="mt-4 text-gray-300">"Front-end developer and avid reader."</span>
        <div className="social-links flex flex-col gap-4 w-full mt-4">
          {
            links.map(link => (
              <div key={link} className="p-4 bg-Grey-700 rounded-lg text-white w-full text-center transition-all ease-out hover:bg-Green hover:text-black font-bold cursor-pointer">
                {link}
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App
