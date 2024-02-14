import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Curly Coding</h1>
          <p>Solution to all your tech problems!</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            omnis illo cumque pariatur? Distinctio eaque saepe impedit dicta
            voluptas maxime, mollitia similique, nobis et, ut fugit commodi iure
            enim velit. Consequuntur cupiditate et odit maxime sapiente ipsum,
            ullam nisi reprehenderit omnis quae dignissimos molestias ipsam
            placeat obcaecati rerum accusamus neque. Delectus ullam cumque sequi
            praesentium nisi deleniti ipsa laudantium iste? Iusto dolores quo
            illo consequuntur voluptates similique minima quia, eum dicta
            assumenda perferendis ea distinctio. Nemo fugiat officiis ipsam
            delectus quam necessitatibus ipsa, aliquid distinctio facilis facere
            hic similique omnis.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;