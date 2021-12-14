import makeStyles from '@mui/styles/makeStyles';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    tableStyle: {
        marginTop: "50px",
        boxShadow: "0 .5rem 1rem rgba(0,0,0,.8)",
    },
    optionStyle: {
        padding: "15px 20px",

        '@media (max-width: 820px)': {
            flexDirection: "column",
        },
    },
    stackStyle: {
        marginTop: "4rem",
        justifyContent: "space-between",
    },
    buttonStyle: {
        width: "max-content",
    },
    acompleteStyle: {
        width: "20%",
        display: "inline-block",
        marginLeft: "2rem",
        '@media (max-width: 820px)': {
            width: "100%",
            marginLeft: 0,
            marginTop: "1rem",
        },
    },
    paginationStyle: {
        alignItems: "flex-end",
        marginTop: "2rem",

        "& PaginationItem": {
            fontSize: "5px",
        },
    },
    overrides: {},
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