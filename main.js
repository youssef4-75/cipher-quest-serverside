// a server code, made to deal with the front end part of our project in the web class
import express from 'express';
import cors from 'cors';
import { registerUserEndPoint } from './endpoints/user.js';
import { loginUserEndPoint } from './endpoints/login.js';
import { dashboardGamesEndPoint } from './endpoints/dashboard.js';
import { gamePlayEntryEndPoint } from './endpoints/entry.js';
import { getGamesEndPoint, setGamesEndPoint } from './endpoints/gamePlay.js';
import { highlightEndPoint } from './endpoints/highlight.js';
import { getHintEndPoint } from './endpoints/hint.js';
import { getLBoardEndPoint, getMyRankEndPoint } from './endpoints/leaderboard.js';
import { losingEndPoint } from './endpoints/lose.js';
import { getMyProfileEndPoint } from './endpoints/my_profile.js';
import { getPowerEndPoint } from './endpoints/profile.js';
import { recoveringEndPoint } from './endpoints/recovery.js';
import { submitAnswerEndPoint } from './endpoints/submit.js';
import { PurchaseEndPoint } from './endpoints/purchase.js';
import { getInvEndPoint, useItemEndPoint } from './endpoints/inventory.js';
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
// Add your endpoints here ...
registerUserEndPoint(app); // POST '/user' 
loginUserEndPoint(app); // POST '/login'
dashboardGamesEndPoint(app);  // POST '/dashboard'
gamePlayEntryEndPoint(app); // POST '/entry'
getGamesEndPoint(app); // POST '/game'
setGamesEndPoint(app); // PUT '/game'
highlightEndPoint(app); // POST '/highlight'
getHintEndPoint(app); // POST '/hint'
getLBoardEndPoint(app); // GET '/leaderboard'
getMyRankEndPoint(app); // POST '/leaderboard'
losingEndPoint(app); // POST '/lose'
getMyProfileEndPoint(app); // POST '/my_profile'
useItemEndPoint(app); // PUT '/profile'
getPowerEndPoint(app); // POST '/profile'
recoveringEndPoint(app); // POST '/recovery'
PurchaseEndPoint(app); // PUT '/purchase'
submitAnswerEndPoint(app); // PUT '/submit'
getInvEndPoint(app); // GET '/inventory'

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
