import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"


interface IAccordionMobile {
    title: string
    children: React.ReactNode
}


const AccordionMobile: React.FC<IAccordionMobile> = ({
    title,
    children
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ul className="relative flex flex-col">
            <button
                className="text-sm flex items-center justify-between"
                onClick={toggleDropdown}
            >
                <div className="flex items-center">
                    {title}
                </div>
                {isOpen ? <ChevronDown /> : <ChevronRight />}
            </button>
            {isOpen && (
                <motion.ul
                    className="flex flex-col gap-2"
                    layout
                    initial={{ y: 0, }}
                    animate={{ y: 10, }}
                    exit={{ y: 0 }}
                >
                    {children}
                </motion.ul>
            )}
        </ul>
    )
}

const AccordionMobileItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <li className="w-full text-sm mb-3">
            {children}
        </li>
    )
}

const AccordionMobileSub: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ul className="relative flex flex-col pl-2">
            <button
                className="text-sm flex items-center justify-between"
                onClick={toggleDropdown}
            >
                <div className="flex items-center">
                    {title}
                </div>
                {isOpen ? <ChevronDown /> : <ChevronRight />}
            </button>
            {isOpen && (
                <motion.ul
                    className="flex flex-col pl-3"
                    layout
                    initial={{ y: 0, }}
                    animate={{ y: 10, }}
                    exit={{ y: 0 }}
                >
                    {children}
                </motion.ul>
            )}
        </ul>
    )
}

const AccordionMobileSubItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <li className="w-full text-sm mb-3">
            {children}
        </li>
    )
}


export { AccordionMobile, AccordionMobileItem, AccordionMobileSub, AccordionMobileSubItem }