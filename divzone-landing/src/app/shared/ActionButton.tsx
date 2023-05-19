import { EnumType } from "typescript";
import { SelectedPageEnum } from "./typesEnum";

type Props = {
    page: string;
    selectedPage: SelectedPageEnum;
    setSelectedPage: (value: SelectedPageEnum) => void;
}

export default function ActionButton({ page, selectedPage, setSelectedPage }: Props) {
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPageEnum;
    return (
        <a
            className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </a>
    )
}