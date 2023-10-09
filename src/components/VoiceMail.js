import React from "react";
import { useState } from "react";

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database

export default function VoiceMail({isUKR}) {
  const [name, setName] = useState("");
  const [contact_number, setcontact_number] = useState("");
  const [note, setNote] = useState("");
  const [callMe, setCallMe] = useState(false);

  function handleCallMe() {
    setCallMe((prev) => !prev);
  }

  //   async function insertData() {
  //     const { data, error } = await supabase
  //       .from("students")
  //       .insert({ contact_number: "276171", name:"evujasc", note: " eiwvniac" });

  //   }
  // const supabase = createClient(
  //   "https://abdulkcysybmhiqbcmsl.supabase.co",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZHVsa2N5c3libWhpcWJjbXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3ODQ1MzgsImV4cCI6MjAxMDM2MDUzOH0.EgEFvZ56mXm5kP1_9N_wvKk6fTvKSj9gL-ta26H9DzA"
  // );

  async function insertData() {
    const supabase = createClient(
      "https://vivygrjyesqawxkahwut.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdnlncmp5ZXNxYXd4a2Fod3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MjA5NTYsImV4cCI6MjAxMTM5Njk1Nn0.cw4FWQqG6g3DVoVNHy8z22CcauXmYTjGYYe_xYkO9TM"
    );

    try {
      const { error } = await supabase.from("students").insert({
        contact_number: {contact_number},
        name: {name},
        note: {note},
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  }

  //   async function fetchData() {
  //     const supabase = createClient(
  //       "https://abdulkcysybmhiqbcmsl.supabase.co",
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZHVsa2N5c3libWhpcWJjbXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3ODQ1MzgsImV4cCI6MjAxMDM2MDUzOH0.EgEFvZ56mXm5kP1_9N_wvKk6fTvKSj9gL-ta26H9DzA"
  //     );
  //     try {
  //       // Send the FETCH request

  //       const { dataBRO, error } = await supabase.from("myStudents").select();
  //       console.log(dataBRO);

  //       if (error) {
  //         throw error;
  //       }

  //       // Log the inserted data (optional)
  //       //   console.log("Inserted data:", data);
  //     } catch (error) {
  //       //   console.error("Error inserting data:", error);
  //     }
  //   }

  return (
    <div className="container text-bg-secondary p-5 rounded mb-4 lead" id="JOINNOW">
      <h2 className="pb-2">
        {!isUKR && `Leave your details, we'll call you ))`}
        {isUKR && `Залиште свої дані, ми вам передзвонимо ))`}
      </h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contact Number</label>
        <input
          className="form-control"
          onChange={(e) => setcontact_number(e.target.value)}
        />
        <div className="form-text">
          We'll never share your contact with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Notes</label>
        <input
          className="form-control"
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="form-text">
          Let us know if you have any questions or requests!
        </div>
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          onChange={handleCallMe}
        />
        <label className="form-check-label">Please Call Me Back {callMe}</label>
      </div>
      <button
        className="btn btn-primary"
        onClick={insertData}
      >
        Submit
      </button>
    </div>
  );
}
