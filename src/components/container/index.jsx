import Reaction from "./icon/Reaction";
import Verbal from "./icon/Verbal";
import Visual from "./icon/Visual";
import Memory from "./icon/memory";

function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="first-box">
          <p>Your Result</p>
          <div className="circle">
            <h1 className="score">76</h1>
            <small>of 100</small>
          </div>
          <h3>Great</h3>
          <div className="last-line">
            <small>
              You scored higher than 65% of <br /> the people who have taken{" "}
              <br /> these tests.
            </small>
          </div>
        </div>

        <div className="second-box">
          <h4>Summary</h4>
          <div className="w-100">
            <div className="reaction detail-card">
              <div className="detail-icon-message">
                <Reaction/>
                <h5>Reaction</h5>
              </div>
              <p className="light-lavender font-14">
                <span className="drak-gray-blue">80</span> / 100
              </p>
            </div>
            <div className="memory detail-card">
              <div className="detail-icon-message">
              <Memory />
                <h5>Memory</h5>
              </div>
              <p className="light-lavender font-14">
                <span className="drak-gray-blue">92</span> / 100
              </p>
            </div>
            <div className="verbal detail-card">
              <div className="detail-icon-message">
                <Verbal/>
                <h5>Verbal</h5>
              </div>
              <p className="light-lavender font-14">
                <span className="drak-gray-blue">61</span> / 100
              </p>
            </div>
            <div className="visual detail-card">
              <div className="detail-icon-message">
                <Visual/>
                <h5>Visual</h5>
              </div>
              <p className="light-lavender font-14">
                <span className="drak-gray-blue">72</span> / 100
              </p>
            </div>
          </div>
          <button className="btn">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
