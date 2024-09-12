import { useParams } from "react-router-dom"

function Advertisment() {
  const { id } = useParams()
  
  return (
    <div>{id}</div>
  )
}

export default Advertisment