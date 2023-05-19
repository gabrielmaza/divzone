import { EnumType } from "typescript";
import { SelectedPageEnum } from "./typesEnum";

type Props = {
    page: SelectedPageEnum;
    label: string
    setSelectedPage: (value: SelectedPageEnum) => void;
}

const ActionButton: React.FC<Props> = ({ page, label, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPageEnum;
    return (
        <a
            className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {label}
        </a>
    )
}

export default ActionButton;