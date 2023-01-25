import React from "react";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <section className={classes.home}>
      <h2>V A R I E T I E S</h2>
      <div className={classes["first-container"]}>
        <div className={classes["first-container__left-side"]}>
          <img src="images/Bitmap.png" alt="Bitmap.png" />
        </div>
        <div className={classes["first-container__right-side"]}>
          <img src="images/Bitmap2.png" alt="Bitmap2.png" />
          <img src="images/Bitmap3.png" alt="Bitmap3.png" />
          <img src="images/Bitmap4.png" alt="Bitmap4.png" />
          <img src="images/Bitmap1.png" alt="Bitmap1.png" />
        </div>
      </div>
      <div className={classes["second-container"]}>
        <div className={classes.wrapper}>
          <h3>Indian Cuisine</h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </span>
        </div>
        <div className={classes.wrapper}>
          <h3>American Cuisine</h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </span>
        </div>
        <div className={classes.wrapper}>
          <h3>Chinese Cuisine</h3>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </span>
        </div>
      </div>
      <div className={classes["chef-section"]}>
        <h2>T O P {"  "} C H E F S</h2>
        <img src="images/image 2.png" alt="" />
        <div className={classes.stepper}>
          <div>
            <img src="images/image 4.png" alt="" />
            <h3>Eileen Johnson</h3>
            <span>Executive Chef, USA</span>
          </div>
          <div className={classes.card}>
            <img src="images/image 3.png" alt="" />
            <h3>Robert Downey Jr</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </div>
          <div>
            <img src="images/image 5.png" alt="" />
            <h3>Eileen Johnson</h3>
            <span>Executive Chef, USA</span>
          </div>
        </div>
      </div>
      <div className={classes["food-guide"]}>
        <h3>F O O D G U I D E</h3>
        <h2>m</h2>
        <img src="images/4th Food Banner 3.png" alt="" />
        <div className={classes.vegetable}>
          <h5>VEGETABLES</h5>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </span>
        </div>
        <div className={classes.whole}>
          <h5>WHOLE GRAINS</h5>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
        </div>
        <div className={classes.fruits}>
          <h5>FRUITS</h5>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's.
          </span>
        </div>
        <div className={classes.protein}>
          <h5>HEALTHY PROTEIN</h5>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;
