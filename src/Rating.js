import React from "react";

export function Rating({ rating }) {
  return (
    <span
      className={`${rating <= 2.5 && "very-bad"}
                    ${rating <= 5 && rating >= 2.6 && "bad"}
                    ${rating <= 7.5 && rating >= 5.1 && "good"}
                    ${rating <= 10 && rating >= 7.6 && "very-good"}`}
    >
      {rating <= 2.5 && "Very-bad"}
      {rating <= 5 && rating >= 2.6 && "Bad"}
      {rating <= 7.5 && rating >= 5.1 && "Good"}
      {rating <= 10 && rating >= 7.6 && "Very-good"}
    </span>
  );
}
