import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: "Courier New",
    },
    headerbar: {
      backgroundColor: "darkviolet",
    },
    iconbtn: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#FFF",
    },
    headStyle: {
        color: "red",
    },
    sidebar: {
        position: "static",
        right: 0,
    },
    listStyle: {
        display: "block",
    },
    boxStyle: {
        height: "100vh",
        marginTop: "80px",
        marginRight: `${drawerWidth}px`,
        padding: "20px",
    },
    tableStyle: {
        width: "100%",
        border: "1px solid grey",
        borderRadius: "3px",
        marginTop: "50px",
        boxShadow: "0 4px 8px rgba(0,0,0,.8)",
    },
    stackStyle: {
        margin: "30px 0 0 30px",
    },
    buttonStyle: {
        width: "max-content",
        
        padding: "10px 15px",
    },
    optionStyle: {
        padding: "15px 20px",
        '& input': {
            height: "20px",
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
                backgroundColor: "red",
            },
        },
    },
    '@media (max-width: 960px)': {
        root: {
            
        },
        buttonStyle: {
            width: "100%",
        },
    },
}));

export default useStyles;