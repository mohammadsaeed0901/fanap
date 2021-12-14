import makeStyles from '@mui/styles/makeStyles';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'sans-serif',
    },
    headerbar: {
        backgroundColor: "#006064",
    },
    iconbtn: {
        marginRight: "1.5rem",
    },
    title: {
        color: "#FFF",
    },
    drawerStyle: {
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",

            '@media (max-width: 820px)': {
                width: `calc(${drawerWidth}px - 100px)`,
            },

            '@media (max-width: 520px)': {
               display: "none",
            },
        },
        '@media (max-width: 820px)': {
            width: `calc(${drawerWidth}px - 100px)`,
        },
    },
    boxStyle: {
        height: "100vh",
        marginTop: "8rem",
        marginRight: `${drawerWidth}px`,
        padding: "20px",

        '@media (max-width: 820px)': {
            marginRight: `calc(${drawerWidth}px - 100px)`,
            marginTop: "3rem",
        },

        '@media (max-width: 520px)': {
            marginRight: 0,
        },
    },
    stackStyle: {
        margin: "4rem 0 0 3rem",
    },
    listStyle: {
        width: "100%",
    },
    buttonStyle: {
        width: "max-content",
        marginRight: "75%",
    },
    containerStyle: {
        textAlign: "center",
    },
    expandStyle: {
        position: "absolute",
        right: 0,
    },
    paginationStyle: {
        alignItems: "flex-end",
        marginTop: "2rem",

        "& PaginationItem": {
            fontSize: "5px",
        },
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