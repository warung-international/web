import dbConnect from "../../lib/dbConnect";
import Levelling from "../../models/Levelling";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Roles } from "../../components/Roles";
import { Footer } from "../../components/Footer";
import "inter-ui/inter.css";
import Link from "next/link";

const Index = ({ pets }) => (
  <>
    <Heading />
    <Navbar />
    <section id="about">
      <div className="container">
        <div className="leaderboardBody animate__animated animate__rubberBand ">
          <div className="leaderboardPlayersListContainer">
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
                        <img
                          onerror="this.src=&#39;https://cdn.discordapp.com/embed/avatars/1.png&#39;;"
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
                            Details
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
    </section>
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
