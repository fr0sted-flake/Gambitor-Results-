"use client";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import styles from "./result.module.css";

function Result() {
  const [sheetData, setSheetData] = useState(null);
  const SHEET_ID = "1epbPQroqnJ0tyl-rgUXnIukDSpsROTrs_7QIefmAi-w";
  const SHEET_TITLE = "Results";
  const SHEET_RANGE = "A1:C6";
  const params = useParams();
  const name1 = params.resultId;
  const fullName = decodeURIComponent(name1);
  const searchParams = useSearchParams();
  const emailId = searchParams.get("email");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;
        const response = await fetch(FULL_URL);
        const text = await response.text();
        const data = JSON.parse(text.substr(47).slice(0, -2));

        const filteredData = data.table.rows.filter((row) => {
          const name = row.c[0].v;
          const email = row.c[1].v;
          return name === fullName && email === emailId;
        });

        if (filteredData.length > 0) {
          const marks = filteredData[0].c[2].v;
          setSheetData(marks);
        } else {
          setSheetData(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setSheetData(null);
      }
    };

    fetchData();
  }, [fullName, emailId]);

  return (
    <div>
      {sheetData !== null ? (
        <div className={styles.main_div}>
          <h1 className={styles.marks_h1}>
            Marks for {fullName} with email id: {emailId} is {sheetData}!!
          </h1>
          <div><button>Print Certificate</button></div>
        </div>
      ) : (
        <p className={styles.error}>
          No data found for {fullName} ({emailId}).
        </p>
      )}
    </div>
  );
}

export default Result;
