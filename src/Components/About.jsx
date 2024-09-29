/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an MCA student at REVA University with a passion for MERN Stack development. I enjoy solving complex problems and creating scalable solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
"Backend Development",
  "SQL",
  "Python",
  "Java",
  "C/C++",
  "HTML & CSS",
  "JavaScript",
  "Problem Solving",
  "AI/ML for Geospatial Data Analysis",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about backend development and building scalable solutions. My expertise lies in solving complex problems using technologies like MERN Stack, Python, and AI/ML for geospatial data analysis. I constantly strive to learn and innovate, ensuring that the solutions I create are efficient and effective.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            ul {
              columns: 1 !important;
            }
            div {
              width: 90% !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
