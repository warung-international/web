import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  id: {
    /* The discord userid of this specific user */

    type: Number,
  },
  xp: {
    /* The xp of this user */

    type: Number,
  },
  username: {
    /* The discord username */

    type: String,
  },
  discrim: {
    /* The discord discriminator */

    type: String,
  },
  messagecount: {
    /* This user message count */

    type: Number,
  },
  image_url: {
    /* This user image avatar */

    type: String,
  },
  level: {
    /* This user levels */

    type: Number,
  },
  formatxp: {
    /* Formatted XP */

    type: String,
  },
  formatmessage: {
    /* The formatted version of message count */

    type: String,
  },
  displayname: {
    /* This user display name */

    type: String,
  },
  last_message: {
    /* when the last message sended? */

    type: String,
  },

}, 
{ 
  /* collection will correspond to a collection in your MongoDB database. */
  collection: 'levelling' 
}
)

export default mongoose.models.Levelling || mongoose.model('Levelling', schema)
