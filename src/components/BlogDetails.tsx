import React from "react";
import { BlogType } from "./Blog";
import Tags, { Tag } from "./Tags";
import { tags } from "../views/VirtualData";
import { SocialsNetworks } from "./SocialsNetworks";

const BlogDetails = (props: BlogType) => {
  return (
    <div className="border border-1 p-3">
      <div className="post-image" style={{ height: "450px" }}>
        <img src={props.img} alt={props.title} className="w-100 h-100" />
      </div>

      <div className="date-category my-4 d-flex gap-4">
        <div className="p-date fd-color-primary">
          <i className="bi bi-calendar-fill me-2"></i>
          <span>{props.date}</span>
        </div>
      </div>

      <h2 className="fw-bold">{props.title}</h2>

      <div className="opacity-50">
        <p>
          The construction industry is continuously evolving, with new
          technologies and materials improving the efficiency and quality of
          projects. Understanding the latest trends and advancements is crucial
          for staying ahead in this competitive field.
        </p>

        <p>
          One of the most significant developments in recent years is the use of
          eco-friendly materials. Sustainable construction is no longer just a
          trend but a necessity, with builders opting for materials that reduce
          environmental impact without compromising on strength and durability.
        </p>

        <p>
          Steel remains a cornerstone in construction, known for its strength
          and versatility. However, innovations in steel production have led to
          the creation of lighter, stronger, and more flexible varieties, making
          it suitable for a wider range of applications.
        </p>

        <p>
          Cement is another essential material that has seen significant
          improvements. From rapid-hardening cement to more environmentally
          friendly options, the choices available today can greatly influence
          the speed and sustainability of construction projects.
        </p>

        <p>
          Bricks, a timeless building material, have also evolved. Modern
          manufacturing processes allow for the production of high-strength
          bricks that offer better thermal insulation and weather resistance.
          This makes them ideal for both residential and commercial projects.
        </p>

        <p>
          Sand and aggregates play a critical role in concrete production and
          are essential for creating strong foundations. The quality of these
          materials directly impacts the durability and longevity of structures,
          making it important to source them from reputable suppliers.
        </p>

        <p>
          As the construction industry continues to grow, staying informed about
          the latest materials and techniques is vital for success. Whether
          you're a contractor, builder, or DIY enthusiast, investing in quality
          materials will ensure that your projects stand the test of time.
        </p>
      </div>

      <div className="tags">
        <div className="d-flex gap-2 flex-wrap">
          <span className="fw-bold align-self-end">Tags :</span>
          {tags.map((tag) => (
            <Tag {...tag} key={tag.tag_id} />
          ))}
        </div>
      </div>

      <div className="p-share d-flex flex-wrap gap-2 text-black mt-5">
        <h6 className="fw-bold">Share </h6>
        <SocialsNetworks addClass="text-black border border-1 p-2 px-3" />
      </div>
    </div>
  );
};

export default BlogDetails;
