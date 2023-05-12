import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPageEnum } from "./typesEnum";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPageEnum) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
            className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
            onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
            href={`#${SelectedPageEnum.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton;