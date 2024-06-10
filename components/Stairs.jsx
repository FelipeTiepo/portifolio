import { animate, easeInOut, motion } from "framer-motion"

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

//calculando o index reverso depois do delay
const reverseIndex = (index) => {
    const totalSteps = 6; //numero de passos
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representing a step of the stairs;
        
        Each div will have the some animation defined by by the stairsAnimation object.
        The delay for each div is calculated dynamically based it's reversed index,
        crear   
        */}
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.2,
                            ease: easeInOut,
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                )
            })}
        </>
    )
}

export default Stairs
