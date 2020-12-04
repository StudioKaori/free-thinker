
import { Link } from "react-router-dom";
import Map from "../student/home/map/Map";
import Dropdown from "./Dropdown";


export default function TeacherHomePage() {
    return (
    <div class="container p-3 my-3">
        <div>
            <h4 className="card-title"> Class Settings</h4>
              <div>
                 <Link to="/create-lecture" className="btn btn-info">Create New Lecture</Link>
                 <Link to="/create-assignment" className="btn btn-info m-2">Create New Assignment</Link>
                   <div>
                   <Dropdown />
                   </div>
                   <div>
                      <Map />
                   </div>
              </div>
         </div>
    </div>
  )
}
