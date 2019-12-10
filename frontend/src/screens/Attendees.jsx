import React, { useEffect, useState } from "react";

const styles = {
  photo: {
    display: "inline-block",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    padding: "2px"
  },
  name: {
    display: "block"
  }
};

const Events = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    (async function() {
      try {
        const response = await fetch("http://localhost/attendees/");

        setState(await response.json());
      } catch (e) {}
    })();
  }, []);

  const generateImage = a => {
    return (
      <img
        src={a.photo}
        style={styles.photo}
        alt={a.name}
        key={a.id}
        onClick={() => alert(a.name)}
      />
    );
  };

  const renderGoing = () => {
    return state
      .filter(a => a.going === "yes" && a.photo !== "")
      .map(generateImage);
  };

  const renderNotGoing = () => {
    return state
      .filter(a => a.going === "no" && a.photo !== "")
      .map(generateImage);
  };

  const renderWaitList = () => {
    return state
      .filter(a => a.going === "waitlist" && a.photo !== "")
      .map(generateImage);
  };

  const renderNoPictures = () => {
    return state
      .filter(a => a.photo === "")
      .map(a => (
        <span style={styles.name} key={a.id}>
          {a.name}
        </span>
      ));
  };

  return state.length > 0 ? (
    <div>
      <h1>Attendees</h1>
      <h2>Confirmed</h2>
      {renderGoing()}
      <h2>Waiting list</h2>
      {renderWaitList()}
      <h2>Not going</h2>
      {renderNotGoing()}
      <h2>Where is your picture?</h2>
      {renderNoPictures()}
    </div>
  ) : (
    <h1>Wait next event.</h1>
  );
};

export default Events;
