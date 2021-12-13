import makeStyles from '@mui/styles/makeStyles';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'sans-serif',
    },
    headerbar: {
        backgroundColor: "darkviolet",
    },
    iconbtn: {
        marginRight: "1.5rem",
    },
    title: {
        color: "#FFF",
    },
    boxStyle: {
        height: "100vh",
        marginTop: "8rem",
        marginRight: `${drawerWidth}px`,
        padding: "20px",
    },
    stackStyle: {
        margin: "4rem 0 0 3rem",
    },
    listStyle: {
        width: "100%",
    },
    buttonStyle: {
        padding: "1.5rem 3rem",
        marginRight: "75%",
    },
    containerStyle: {
        textAlign: "center",
    },
    overrides: {
        MuiTableCell: {
            root: {
                color: "blueviolet",
            },
        },
        MuiButton: {
            backgroundColor: "yellowgreen",
            root: {
                padding: "2px 10px",
            },
        },
        '& MuiAppBar': {
            colorPrimary: {
                backgroundColor: "darkred",
            },
        },
    },
    '@media (max-width: 960px)': {
        root: {

        },
        buttonStyle: {
            width: "100%",
            marginRight: "50%",
            padding: "1rem 2rem",
        },
    },
}));

export default useStyles;