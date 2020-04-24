import { styles } from '../../../config'

const {
    colors,
    breakpoints,
} = styles

export default {
    container: {
        '& > *': {
            
        },
        
        [breakpoints.md]: {
            display: 'flex',
            flexDirection: 'row',
            minHeight: '100vh',

            '& > *': {
                flexBasis: '50%',
            }
        },
    },

    section: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        
        minHeight: '50vh',

        textAlign: 'center',
        
        backgroundColor: 'white',
        padding: 32,

        '&:nth-child(even)': {
            backgroundColor: 'black',
            color: 'white',
        },

        [breakpoints.md]: {
            flexBasis: '50%',
        },
    },

    logo: {
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        fontWeight: 200,
        fontSize: 50,
        margin: 0,
        
        display: 'flex',
        flexDirection: 'row',

        '& > *': {
            padding: '2px 5px 5px 5px',
            border: '2px solid white',

            '&:first-child': {
                border: '2px solid black',
            },
        },
    },
    subtitle: {
        letterSpacing: '0.55rem',
        fontSize: 17,
        marginTop: 15,
    },

    white: {
        color: 'white',
    },

    icons: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        
        [breakpoints.md]: {
            left: '50%',
            width: '50%',
        },
    }
}