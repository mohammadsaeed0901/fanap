import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    headerbar: {
      backgroundColor: "darkviolet",
    },
    iconbtn: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#000",
    },
    sidebar: {
        position: "static",
        right: 0,
    },
    listStyle: {
        display: "block",
    },
    tableStyle: {
        margin: "100px auto",
        maxWidth: "1000px"
    },
    rowStyle: {
        color: "blueviolet",
    },
    stackStyle: {
        margin: "20px 30px",
    },

}));

export default useStyles;