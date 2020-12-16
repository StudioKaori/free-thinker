import React from "react";

// ========================================================================
// One Card for assignment display in teacher side - create assignment page
function AssignCard({ onDeleteClick, assign }) {

    return (
        <div className="card mt-4">
            <div className="card-body">
                <div>
                    <h2>{assign.title}</h2>
                    <p>{assign.instruction}</p>
                </div>
            </div>

            <div>
                <button className="btn btn-danger m-2" onClick={() => onDeleteClick(assign.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
};

export default AssignCard;
