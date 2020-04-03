import { Paper, Typography, Divider } from "@material-ui/core"
import React from 'react'
import RotatedBarChart from './RotatedBarChart.js'

const topScores = {
    mostChallenges: [
        {name: "Jerry", n: 1},
        {name: "Eric", n: 100},
    ],
    mostEasy: [
        {name: "Jerry", n: 1},
        {name: "Eric", n: 100},
    ],
    mostMed: [
        {name: "Jerry", n: 1},
        {name: "Eric", n: 100},
    ],
    mostHard: [
        {name: "Jerry", n: 1},
        {name: "Eric", n: 100},
    ],
};

const Leaderboard = (props) => {
    return (
        <Paper style={props.styles.frame} >
            <Typography variant="button" style={{ paddingLeft: "8px" }}>Leaderboard</Typography>
            <Divider />
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Challenges</Typography>
                <RotatedBarChart data={topScores.mostChallenges} />
            </Paper>
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Easy</Typography>
                <RotatedBarChart data={topScores.mostEasy} />
            </Paper>
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Medium</Typography>
                <RotatedBarChart data={topScores.mostMed} />
            </Paper>
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Hard</Typography>
                <RotatedBarChart data={topScores.mostHard} />
            </Paper>
        </Paper>
    )
}
export default Leaderboard