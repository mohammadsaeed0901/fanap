import makeStyles from '@mui/styles/makeStyles';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    headStyle: {
        color: "red",
    },
    tableStyle: {
        width: "100%",
        border: "1px solid grey",
        borderRadius: "3px",
        marginTop: "50px",
        boxShadow: "0 4px 8px rgba(0,0,0,.8)",
    },
    optionStyle: {
        padding: "15px 20px",
        '& input': {
            height: "20px",
        },
    },
    overrides: {},
}));

export default useStyles;