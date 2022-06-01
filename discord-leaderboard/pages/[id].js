import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import Levelling from '../models/Levelling'
import { Grid } from '@geist-ui/core'

/* Allows you to view user card info*/
const LevellingPage = ({ pet }) => {
  return (
    <Grid.Container gap={2} justify="center">
    <div key={pet._id}>
        <div className="card">
          <img 
            src={pet.image_url}
          />
          <h3 className="fpanel-name">{pet.displayname}</h3>
          <div className="main-content">
            <p className="displayname" style={{ color: palette.background }}>{pet.displayname}</p>
            <p className="levels" style={{ color: palette.background }}>Level {pet.level}</p>
            <p className="stats">Total XP: {pet.formatxp}</p>
            <p className="stats">Total Message: {pet.formatmessage}</p>
            <div className="btn-container">
              <Link href="/">
                <button className="btn back">← Go Back</button>
              </Link>
            </div>
          </div>
        </div>
    </div>
    </Grid.Container>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const pet = await Levelling.findById(params.id).lean()
  pet._id = pet._id.toString()

  return { props: { pet } }
}

export default LevellingPage