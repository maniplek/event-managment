import { useDispatch } from "react-redux"
import { deleteAttendee } from "../redux/actions/Actions";
import { Link } from 'react-router-dom'


const Attendee = ({name,status,email, id,surname,telephone }) => {
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(deleteAttendee(id))
    }

    return (
    <Link to={`/attendee/${id}`} className="flex justify-between p-1 gap-6">
        
        <h3 className="">{name}</h3>
        <div>
        <h3>{email}</h3>
        </div>
        
        <div>
        <h3>{status}</h3>
        </div>
        
        <div className="flex gap-4">
          <div className="mx-3">
          <button className="bg-green-200 p-2 border border-green-800 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
          <button className="bg-red-200 p-2 border border-red-800 rounded" onClick={handleClick} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          </div>
       
        </div>
        
    </Link>
  )
}

export default Attendee