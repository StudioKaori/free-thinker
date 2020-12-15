
import React from "react";

function AssignCard({ onDeleteClick,assign}) {

    return  (
                    <div className="card mt-4">
                       <div className="card-body">
                           <div>
                                <h2>{assign.title}</h2>
                                <p>{assign.id}</p>
                                <p>{assign.instruction}</p>
                                
                           </div>
                       </div>
                    
                        <div>
                            <button className="btn btn-danger m-2" onClick={() => onDeleteClick(assign)}>
                            Delete

                            </button>
                      </div>
                    </div>
      
    )};
  
export default AssignCard;
