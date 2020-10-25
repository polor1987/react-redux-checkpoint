import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.Count);
  return (
    <div className="count-content">
      <div className="count">{count}</div>
      <div className="btn-content">
        <div
          className="btn green"
          onClick={() =>
            count < 100
              ? dispatch({
                  type: "SET_STATE",
                  payload: { ...count, count: count + 1 },
                })
              : count
          }
        >
          +
        </div>
        <div
          className="btn red"
          onClick={() =>
            count > 0
              ? dispatch({
                  type: "SET_STATE",
                  payload: { ...count, count: count - 1 },
                })
              : count
          }
        >
          -
        </div>
      </div>
    </div>
  );
};

export default Count;
