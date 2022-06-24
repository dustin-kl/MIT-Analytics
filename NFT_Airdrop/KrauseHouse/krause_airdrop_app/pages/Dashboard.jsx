
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import { useState, useEffect } from "react";
import styles from "./Test.module.css";

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


    const columns = [
        {
            field: "id",
            headerName: "Account Number",
            width: "200",
            align: "left",
        },
        {
            field: "address",
            headerName: "Wallet Address",
            sortable: false,
            width: "400",
            align: "left",
        },
        {
            field: "sent",
            headerName: "Already Sent",
            width: "200",
            type: "bool",
        },
        {
            field: "balance",
            headerName: "Balance (ETH)",
            width: "170",
            type: "number",
        },
        {
            field: "nfts",
            headerName: "Number of Basketball NFTs",
            width: "300",
            type: "number",
        },
    ];

    const rows = [
        {
            id: 1,
            address: "0x0000000000000000000000000000000000000000",
            sent: false,
            balance: 0,
            nfts: 0,
        }];

    // const rows = Object.keys(myData).map((add, index) => {
    //     return {
    //         id: index + 1,
    //         address: add,
    //         sent: listSent.includes(add) ? true : false,
    //         balance: myData[add][1].toFixed(3),
    //         nfts: myData[add][0],
    //     };
    // });

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

                {/* <DataGrid
                    className={classes.root}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    isRowSelectable={(params) => params.row.sent == false}
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {
                        setSelectionModel(newSelectionModel);
                    }}
                    selectionModel={selectionModel}
                /> */}
            </div>
        </div>


    )

};