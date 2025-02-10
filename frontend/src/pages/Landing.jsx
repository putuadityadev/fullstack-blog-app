import CreateUser from "../components/CreateUser"
import Login from "../components/Login"
import { useState } from "react"


const Landing = () => {

  const [view, setView] = useState(0)
  function handleView() {
    setView(!view)
  }

  return (
    <section>
      {
        !view
          ? <div className="flex flex-col gap-2">
            <Login view = {handleView}/>
          </div>
          : <div className="flex flex-col gap-2">
            <CreateUser view={handleView}/>
          </div>
      }
    </section>
  )
}

export default Landing