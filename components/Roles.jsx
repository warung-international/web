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
            <div class="leaderboardSidebarBlockContentWrapper">
              <div class="leaderboardSidebarBlockSeparator"></div>
              <div class="leaderboardSidebarBlockContent">
                <div class="flex flexColumn bottom10">
                  <h5>LEVEL 0</h5>
                  <div class="flex flexRow flexWrap">
                    <div class="leaderboardRole" style={{ borderColor: '#FFFFFF' }, { color: '#FFFFFF' }}>Joined
                    </div>
                  </div>
                </div>
                <div class="flex flexColumn bottom10">
                  <h5>LEVEL 1</h5>
                  <div class="flex flexRow flexWrap">
                    <div class="leaderboardRole" style={{ borderColor: '#FFFFFF' }, { color: '#FFFFFF' }}>Newbie
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};