import React from "react";

export default function About(props) {
  return (
    <div className="container my-4">
      <h1>About Us</h1>
      <div className="accordion my-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "white" : "black",
                color: props.mode === "info" ? "white" : "black",
              }}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "black",
              color: props.mode === "info" ? "white" : "black",
            }}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils gives you a way to analyze your text quickly and
              <code> efficiently.</code> Be it word count, character count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "white" : "black",
                color: props.mode === "info" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> Free to use</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "black",
              color: props.mode === "info" ? "white" : "black",
            }}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant
              character count & word <code>count</code> statistics for a given
              text. TextUtils reports the number of words and characters. Thus
              it is suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "white" : "black",
                color: props.mode === "info" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "black",
              color: props.mode === "info" ? "white" : "black",
            }}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in<code> facebook, blog, books, excel document, pdf document, essays,etc.</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
