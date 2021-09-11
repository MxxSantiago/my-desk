import React from "react";

export const ExportData = () => {
    const copyData = () => {
        navigator.clipboard.writeText(JSON.stringify(localStorage));
        alert("Data copied to clipboard successfully!!");
    };

    return (
        <div>
            <h2 className="mb-3">Export data</h2>
            <li>
                If the export button doesn't work, copy the content directly.
            </li>
            <textarea
                className="form-control data-txt mt-2"
                spellCheck={false}
                value={JSON.stringify(localStorage)}
            />
            <div className="d-flex">
                <button
                    onClick={copyData}
                    className=" btn btn-primary text-light mt-2 ms-1"
                >
                    Export current data
                </button>
            </div>
        </div>
    );
};
