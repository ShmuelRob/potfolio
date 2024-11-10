import {motion} from 'framer-motion';
import Header from "../components/header";
import Footer from "../components/footer";
import useStyles from "./layout.css.ts"


interface Props {
    children: React.ReactNode;
}

const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 1 }
};

const pageTransition = {
    type: "tween",
    duration: 0.5,

};

const LayoutPage = ({children}: Props) => {
    const classes = useStyles({});

    return (
        <div className={classes.website}>
            <Header/>
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                {children}
            </motion.div>
            <Footer/>
        </div>
    )
}

export default LayoutPage
