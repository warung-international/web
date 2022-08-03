import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Levelling from "../../models/Levelling";
import "inter-ui/inter.css";
import { Heading } from "../../assets/components/Heading";
import { CardNavbar } from "../../assets/components/CardNavbar";
import { FallbackImg } from "../../assets/components/FallbackImg";


/* Allows you to view user card info*/
const LevellingPage = ({ pet }) => {
  return (
    <>
      <Heading />
      <CardNavbar />
      <div className="top-bar"></div>
      <div className="grid wrapper">
        <div key={pet._id}>
          <div className="card animate__animated animate__rubberBand">
            <FallbackImg src={pet.image_url} />
            <h3 className="fpanel-name">{pet.displayname}</h3>
            <div className="main-content">
              <p className="displayname">{pet.displayname}</p>
              <p className="levels">Level {pet.level}</p>
              <p className="stats">Total XP: {pet.formatxp}</p>
              <p className="stats">Total Message: {pet.formatmessage}</p>
              <div className="btn-container">
                <Link href="/discord-leaderboard">
                  <button className="btn view">← Go Back</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

          * {
            font-family: 'Open Sans', sans-serif;
            box-sizing: border-box;
          }
          
          .grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 20%;
          }
          
          /* Styles for Cards */
          .card {
            display: inline-block;
            width: 300px;
            height: 400px;
            overflow: hidden;
            border: 1.25px solid rgb(233, 233, 233);
            border-radius: 16px;
            margin: 10px;
            transition: 0.5s all;
            --shadow: transparent;
            box-shadow: 0 0 10px 5px var(--shadow);
            position: relative;
            font-size: 100%;
          }
          
          .card:hover {
            --shadow: rgba(53, 53, 53, 0.103);
            transform: translate(10px, 10px);
            background: blue;
          }
          
          .card:hover .main-content {
            pointer-events: initial;
            opacity: 1;
          }
          
          .card * {
            margin: 0;
          }
          
          .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .main-content {
            padding: 25px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.9);
            width: 100%;
            height: 100%;
            opacity: 0;
            pointer-events: none;
            transition: 0.5s all;
          }
          
          .stats {
            color: grey;
            font-size: 110%;
          }
          
          .displayname {
            font-weight: bold;
            text-decoration: underline;
            font-size: 170%;
            color: #000;
          }
          
          .levels {
            font-weight: bold;
            font-style: italic;
            font-size: 150%;
            color: #6c757d;
          }
          
          .fpanel-name {
            color: white;
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 200%;
            padding: 10px;
            text-shadow: 0px 0px 4px black;
          }
          
          li {
            list-style-type: none;
            margin: 0;
          }
          
          .label {
            font-weight: bold;
          }
          
          .btn-container {
            text-align: right;
            padding: 10px;
            position: absolute;
            bottom: 10px;
            right: 10px;
          }
          
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
            --accent: green;
            margin-left: 10px;
          }
        `}</style>
    </>
  );
};

export async function getServerSideProps({ params }) {
  await dbConnect();

  const pet = await Levelling.findById(params.id).lean();
  pet._id = pet._id.toString();

  return { props: { pet: JSON.parse(JSON.stringify(pet)) } };
}

export default LevellingPage;
