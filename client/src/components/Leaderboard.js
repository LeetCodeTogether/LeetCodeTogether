import { Paper, Typography, Divider } from "@material-ui/core"
import React from 'react'

const topScores = {
    mostChallenges: [
        {name: "Eric", n: 100},
        {name: "Jerry", n: 1},
    ],
    mostEasy: [
        {name: "Eric", n: 100},
        {name: "Jerry", n: 1},
    ],
    mostMed: [
        {name: "Eric", n: 100},
        {name: "Jerry", n: 1},
    ],
    mostHard: [
        {name: "Eric", n: 100},
        {name: "Jerry", n: 1},
    ],
};

const Leaderboard = (props) => {
    return (
        <Paper style={props.styles.frame} >
            <Typography variant="button" style={{ paddingLeft: "8px" }}>Leaderboard</Typography>
            <Divider />
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Challenges</Typography>
                {topScores.mostChallenges.map(user => (
                    <Paper elevation={0} style={props.styles.challenge}>
                        Name: {user.name} <br/>
                        Completed: {user.n}
                    </Paper>
                ))}
            </Paper>
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Easy</Typography>
                {topScores.mostEasy.map(user => (
                    <Paper elevation={0} style={props.styles.challenge}>
                        Name: {user.name} <br/>
                        Completed: {user.n}
                    </Paper>
                ))}
            </Paper>
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Medium</Typography>
                {topScores.mostMed.map(user => (
                    <Paper elevation={0} style={props.styles.challenge}>
                        Name: {user.name} <br/>
                        Completed: {user.n}
                    </Paper>
                ))}
            </Paper>
            <Paper variant="elevation" style={props.styles.challenge}>
                <Typography variant="subtitle2">Most Hard</Typography>
                {topScores.mostHard.map(user => (
                    <Paper elevation={0} style={props.styles.challenge}>
                        Name: {user.name} <br/>
                        Completed: {user.n}
                    </Paper>
                ))}
            </Paper>
        </Paper>
    )
}
export default Leaderboard