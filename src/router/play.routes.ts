import EnterPinPage from "@/public-page/user-play-page/player-page/EnterPinPage.vue";
import GreenHootPlay from "@/public-page/user-play-page/player-page/PlayPlayersPage.vue";
import WaitingRoomPage from "@/public-page/user-play-page/player-page/WaitingRoomPage.vue";
import ResultExampage from "@/public-page/user-play-page/FinishExamResult.vue";
import path from "path";
const routes = [
    {
        path:"/enter-pin",
        name: "enterPin",
        component: EnterPinPage,
        meta: { showHeader: false },
    },
    {
        path:"/greenhoot-play",
        name: "userPlay",
        component: GreenHootPlay,
        meta: { showHeader: false },
    },
    {
        path:"/waiting-start",
        name: "WaitingStart",
        component: WaitingRoomPage,
        meta: { showHeader: false },
    },
    {
        path:"/result-exam",
        name: "resultExam",
        component: ResultExampage,
        meta: { showHeader: false },
    }
    ];
export default routes;