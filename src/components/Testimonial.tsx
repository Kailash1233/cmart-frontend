import React from "react";
import Reviews from "./Reviews";

type TestimonialType = {
  authorName: string;
  authorImg: string;
  rating: number;
  text: string;
};

const Testimonial = (props: TestimonialType) => {
  return (
    <div className="testimonial shadow bg-white py-3 px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-wrap gap-2 text-black">
          <div>
            <img
              src={props.authorImg}
              className="rounded-5"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div className="authorNames align-self-center">
            <h5>{props.authorName}</h5>
            <Reviews rating={5} />
          </div>
        </div>
        <div>
          <img src="/img/qoute.png" alt="" className="w-75" />
        </div>
      </div>
      <p className="my-3 opacity-75 fw-bold text-black">{props.text}</p>
    </div>
  );
};

export default Testimonial;
