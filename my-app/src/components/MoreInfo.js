import {useSelector, useDispatch} from 'react-redux';
import React, { useState } from "react";

export default function Recipes({instructions}) {

    const dispatch = useDispatch()

    const [isVisible, setVisible] = useState();

    function setText(vis) {
      if (vis === true) {
        return "Hide";
      } else {
        return "Show";
      }
    }

    return (
      <div>
        <button
          style={{
            position: "relative",
          }}
          onClick={() => {
            setVisible(!isVisible);
          }}
        >
          {setText(isVisible)} Instructions
        </button>
        {isVisible && (
          <h6>{instructions}</h6>
        )}
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
}
