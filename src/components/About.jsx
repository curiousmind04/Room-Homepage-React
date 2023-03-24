import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.container}>
      <div className={classes.dark}>
        <img src="/images/image-about-dark.jpg" alt="image dark" />
      </div>
      <div className={classes.info}>
        <h1>About our furniture</h1>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className={classes.light}>
        <img src="/images/image-about-light.jpg" alt="image light" />
      </div>
    </div>
  );
}

export default About;
