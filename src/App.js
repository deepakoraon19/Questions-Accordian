import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Question and Answers about login</h3>
        <section className="info">
        {data.map((q) => {
          return <SingleQuestion ques={q.title} ans={q.info} key={q.id}></SingleQuestion>;
        })}
        </section>
      </div>
    </main>
  );
}

export default App;
