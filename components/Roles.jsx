/*  ./components/Roles.jsx     */
import {useState} from 'react';

export const Roles = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <>
        <div className={isActive ? 'leaderboardSidebarBlock' : 'leaderboardSidebarBlock open'}>
            <h1 onClick={handleClick}>Role Rewards</h1>
            <div className="leaderboardSidebarBlockContentWrapper">
              <div className="leaderboardSidebarBlockSeparator"></div>
              <div className="leaderboardSidebarBlockContent">
                <div className="flex flexColumn bottom10">
                  <h5>LEVEL 0</h5>
                  <div className="flex flexRow flexWrap">
                    <div className="leaderboardRole" style={{ borderColor: '#FFFFFF' }, { color: '#FFFFFF' }}>Joined
                    </div>
                  </div>
                </div>
                <div className="flex flexColumn bottom10">
                  <h5>LEVEL 1</h5>
                  <div className="flex flexRow flexWrap">
                    <div className="leaderboardRole" style={{ borderColor: '#FFFFFF' }, { color: '#FFFFFF' }}>Newbie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};