"use client"
import React, { useEffect, useState } from "react";

function Result({ params }) {
  const [sheetData, setSheetData] = useState(null);
  const SHEET_ID = "1epbPQroqnJ0tyl-rgUXnIukDSpsROTrs_7QIefmAi-w";
  const SHEET_TITLE = "Results";
  const SHEET_RANGE = "A1:C6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;
        const response = await fetch(FULL_URL);
        const text = await response.text();
        const data = JSON.parse(text.substr(47).slice(0, -2));
        setSheetData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {sheetData ? (
        <div>
          <h1>Sheet Data</h1>
          <pre>{JSON.stringify(sheetData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      Resulttrhe5he56hj5 {params.resultId}
    </div>
  );
}

export default Result;

