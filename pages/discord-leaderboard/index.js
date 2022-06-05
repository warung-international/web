import dbConnect from '../../lib/dbConnect'
import Levelling from '../../models/Levelling'
import Link from 'next/link'
import { Grid } from '@geist-ui/core'
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const Index = ({ pets }) => (
  <>
  <Heading />
      <div className="top-bar">
        <Navbar />
      </div>
      <div className="grid wrapper">
  <Grid.Container gap={2} justify="center">
    {/* Create a card for each user */}
    {pets.map((pet) => (
      <div key={pet._id}>
        <div className="card">
          <img 
            src={pet.image_url}
          />
          <h3 className="fpanel-name">{pet.displayname}</h3>
          <div className="main-content">
            <p className="displayname">{pet.displayname}</p>
            <p className="levels">Level {pet.level}</p>
            <div className="btn-container">
              <Link href="/discord-leaderboard/[userid]" as={`/discord-leaderboard/${pet._id}`}>
                <button className="btn view">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
    </Grid.Container>
    </div>
    <Footer />
  </>
)

/* Retrieves user(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Levelling.find({})
  const pets = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = pet._id.toString()
    return pet
  })
  const sorted = pets.sort((a, b) => b.xp - a.xp)
  return { props: { pets: sorted } }
}

export default Index
