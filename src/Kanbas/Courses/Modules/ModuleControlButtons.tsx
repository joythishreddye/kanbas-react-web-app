import {IoEllipsisVertical} from "react-icons/io5";
import {BsPlus} from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import {FaTrash} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";
import Faculty from "../Faculty";

export default function ModuleControlButtons({moduleId, deleteModule, editModule,}: {
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void;
}) {
    return (
        <div className="float-end">
            <Faculty>
                <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)}/>
                <FaTrash className="text-danger me-2" onClick={() => deleteModule(moduleId)}/>
            </Faculty>
            <GreenCheckmark/>
            <BsPlus className="fs-4"/>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}
