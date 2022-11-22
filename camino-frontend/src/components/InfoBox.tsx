import {Albergue} from "../types/albergue";

type Props = {
    albergue: Albergue;
    onClose: () => void;
}

const InfoBox = ({ albergue, onClose}: Props): JSX.Element => {
    const bookingUrl = albergue.bookingUrl
    return (
        <div className="absolute bg-white bottom-0 left-0 min-w-40 min-h-40 p-3 rounded" data-cy='infoBox'>
            <span onClick={onClose} className="absolute right-1.5 top-1.5 hover:cursor-pointer text-xs font-bold hover:text-blue border border-lightGrey hover:border-blue px-1">X</span>
            <h2 className="p-2 font-bold text-base text-blue">{albergue.name}</h2>
            <p className="text-sm pb-2"><span className="font-bold">Town:</span> {albergue.town}</p>
            <p className="text-sm pb-2"><span className="font-bold">Address:</span> {albergue.address}</p>
            {bookingUrl !== null && (<p className="text-sm font-bold underline"><a href={bookingUrl} className="hover:text-blue" target="_blank">Book now</a></p>)}
        </div>
    );
};

export default InfoBox;