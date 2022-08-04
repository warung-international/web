import dbConnect from "../../lib/dbConnect";
import Levelling from "../../models/Levelling";
import { Heading } from "../../assets/components/Heading";
import { Navbar } from "../../assets/components/Navbar";
import { Roles } from "../../assets/components/Roles";
import { Footer } from "../../assets/components/Footer";
import "inter-ui/inter.css";
import Link from "next/link";
import { FallbackImg } from "../../assets/components/FallbackImg";

const Index = ({ pets }) => (
  <>
    <Heading />
    <Navbar />
    <section id="about">
      <div className="container">
        <div className="row animate__animated animate__rubberBand ">
          <div className="tabs">
            <input type="radio" name="tabs" defaultChecked={true} />
            <label>Default</label>
            <div className="tab">
              <div className="leaderboardBody animate__animated animate__rubberBand ">
                <div className="col-lg-8 mx-auto leaderboardPlayersListContainer">
                  <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="leaderboardPlayersList">
                    {pets.map((pet, index) => (
                      <player key={pet._id}>
                        <div className="leaderboardPlayer">
                          <div className="leaderboardPlayerLeft">
                            <div
                              className={
                                index === 0
                                  ? "leaderboardRank leaderboardRankFirst"
                                  : index === 1
                                    ? "leaderboardRank leaderboardRankSecond"
                                    : index === 2
                                      ? "leaderboardRank leaderboardRankThird"
                                      : "leaderboardRank"
                              }
                            >
                              {index + 1}
                            </div>
                            <div className="leaderboardPlayerIcon">
                              <FallbackImg
                                src={pet.image_url}
                              />
                            </div>
                            <div className="leaderboardPlayerUsername">
                              {pet.displayname}
                            </div>
                          </div>
                          <div className="leaderboardPlayerStats">
                            <div className="leaderboardPlayerStatBlock remove-mobile nonpriority">
                              <div className="leaderboardPlayerStatName">MESSAGES</div>
                              <div className="leaderboardPlayerStatValue">
                                {pet.formatmessage}
                              </div>
                            </div>
                            <div className="leaderboardPlayerStatBlock remove-mobile nonpriority">
                              <div className="leaderboardPlayerStatName">EXPERIENCE</div>
                              <div className="leaderboardPlayerStatValue">
                                {pet.formatxp}
                              </div>
                            </div>
                            <div className="leaderboardPlayerStatBlock remove-mobile">
                              <div className="leaderboardPlayerStatName">LEVEL</div>
                              <div className="leaderboardPlayerStatValue">
                                {pet.level}
                              </div>
                            </div>
                            <div className="leaderboardPlayerStatBlock">
                              <div className="leaderboardPlayerStatName"></div>
                              <div className="leaderboardPlayerStatValue">
                                <Link
                                  className="btn btn-primary"
                                  href="/discord-leaderboard/[userid]"
                                  as={`/discord-leaderboard/${pet._id}`}
                                >
                                  <button className="btn view">Details</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="leaderboardPlayerSep"></div>
                      </player>
                    ))}
                  </div>
                </div>
                <Roles />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
          .btn {
            --accent: grey;
            cursor: pointer;
            background: transparent;
            border: 1.5px solid var(--accent);
            color: var(--accent);
            border-radius: 10px;
            padding: 10px 15px;
            font-size: 90%;
            letter-spacing: 1px;
            transition: 0.5s all;
            outline: none;
          }
          
          .btn:hover {
            background: var(--accent);
            color: white;
          }
          
          .view.btn {
            --accent: lightblue;
            margin-left: 10px;
          }
        `}</style>
    <Footer />
  </>
);

/* Retrieves user(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Levelling.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });
  const sorted = pets.sort((a, b) => b.xp - a.xp);
  return { props: { pets: sorted } };
}

export default Index;
