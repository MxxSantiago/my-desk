import React from "react";
import { ExportData } from "./ExportData";
import { ImportData } from "./ImportData";

export const DataSection = () => {
    return (
        <div>
            <ImportData />
            <ExportData />
        </div>
    );
};
