import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "../UserContext";

export const ImportData = () => {
    const { dispatch } = useContext(UserContext);

    const [formValues, handleInputChange, resetForm] = useForm({
        description: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = JSON.parse(formValues.description);

        if (formValues.description.trim().length <= 0) {
            alert("Enter at least one character");
            return;
        } else if (typeof data === "object") {
            for (let key in data) {
                if (key === "todos") {
                    dispatch({
                        type: "import",
                        payload: JSON.parse(data[key]),
                    });
                }

                if (data.hasOwnProperty(key)) {
                    localStorage.setItem(key, data[key]);
                }
            }

            alert("Data imported successfully!!");
        } else {
            alert("An error occurred");
            return;
        }

        resetForm();
    };

    return (
        <div>
            <h2 className="mb-3">Import data</h2>
            <hr />
            <h5>Attention:</h5>
            <li>
                You must provide the data exactly as the copy current data
                button gives you.
            </li>
            <br />
            <li>After importing, the data you had will be deleted.</li>
            <br />
            <li>
                If the data provided is incorrect there will not be any change.
            </li>
            <form className="d-flex" onSubmit={handleSubmit}>
                <textarea
                    className="form-control data-txt mt-2"
                    name="description"
                    onChange={handleInputChange}
                    placeholder="Paste data here.."
                    required={true}
                    spellCheck={false}
                    value={formValues.description}
                />
                <button
                    className="btn btn-primary text-light mx-2 mt-2"
                    disabled={formValues.description.length <= 0 ? true : false}
                    type="submit"
                >
                    Import
                </button>
            </form>
            <hr />
        </div>
    );
};
