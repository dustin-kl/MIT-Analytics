
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";
import styles from "./Test.module.css";
import swal from 'sweetalert2';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#F4EFE9",
    },
    gradtext: {
        backgroundImage: "linearGradient(to bottom, #FF005B, #FFD4A9)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
});

export default function Home() {

    const classes = useStyles();
    const [selectionModel, setSelectionModel] = useState([]);

    const style_stats = {
        display: "flex",
        color: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop: "40px",
        fontFamily: "Aclonica",
        marginLeft: "200px",
        marginRight: "50px",
    }

    return (
        <div
            style={{
                backgroundColor: "#0F0F12",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        marginLeft: "120px",
                        marginRight: "120px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "80px",
                            fontFamily: "SK Cuber",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        Dashboard
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                        marginTop: "40px",
                        fontFamily: "headline-gothic-atf",
                        marginLeft: "120px",
                        marginRight: "120px",
                    }}
                >
                    <h1
                        className={styles.test}
                        style={{
                            fontSize: "120px",
                            display: "inline",
                        }}
                    >
                        Stats:
                    </h1>
                </div>
                <div style={style_stats}>
                    <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
                    <h1
                        className={style_stats}
                        style={{
                            fontSize: "50px",
                            display: "inline",
                        }}
                    >
                        Number of NFTs sent:
                    </h1>
                </div>
                <div style={style_stats}>
                    <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
                    <h1
                        className={style_stats}
                        style={{
                            fontSize: "50px",
                            display: "inline",
                        }}
                    >
                        Conversion Rate:
                    </h1>
                </div>
                <div style={style_stats}>
                    <link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'></link>
                    <h1
                        className={style_stats}
                        style={{
                            fontSize: "50px",
                            display: "inline",
                        }}
                    >
                        Put here the stats you want to track:
                    </h1>
                </div>

            </div>
        </div>


    )

};