import dbConnect from "../../lib/dbConnect";
import Levelling from "../../models/Levelling";
import Link from "next/link";
import { Grid } from "@geist-ui/core";
import { Heading } from "../../components/Heading";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Button } from "@geist-ui/core";

const Index = ({ pets }) => (
  <>
    <Heading />
    <Navbar />
    <div className="top-bar"></div>
    <Grid.Container gap={2} justify="center">
      <center>
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
                  <div class="leaderboardPlayerStats">
                    <div class="leaderboardPlayerStatBlock remove-mobile nonpriority">
                      <div class="leaderboardPlayerStatName">MESSAGES</div>
                      <div class="leaderboardPlayerStatValue">
                        {pet.formatmessage}
                      </div>
                    </div>
                    <div class="leaderboardPlayerStatBlock remove-mobile nonpriority">
                      <div class="leaderboardPlayerStatName">EXPERIENCE</div>
                      <div class="leaderboardPlayerStatValue">
                        {pet.formatxp}
                      </div>
                    </div>
                    <div class="leaderboardPlayerStatBlock remove-mobile">
                      <div class="leaderboardPlayerStatName">LEVEL</div>
                      <div class="leaderboardPlayerStatValue">{pet.level}</div>
                    </div>
                    <div class="leaderboardPlayerStatBlock">
                      <div class="leaderboardPlayerStatName"></div>
                      <div class="leaderboardPlayerStatValue">
                        <Link
                          href="/discord-leaderboard/[userid]"
                          as={`/discord-leaderboard/${pet._id}`}
                        >
                          <Button auto type="success" ghost>
                            Details
                          </Button>
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
      </div>
      </center>
    </Grid.Container>
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
