
const Card = ({ cardInfo, children}) => {
    return (
        <div className={` shadow-lg rounded-md bg-blue-50 p-4 ${cardInfo.customStyle}`}>
            <h2 className="text-xl font-bold">{cardInfo.title} <span className="bg-blue-400 text-white px-2 text-sm rounded-xl pb-[2px]">{cardInfo.status}</span></h2>
            <p>{cardInfo.description}</p>
            {children}
        </div>
    );
};

export default Card;


// lg:w-[23%] sm:w-[75%] sm:mx-auto sm:mr-0 h-[100px] shadow-lg rounded-md bg-blue-50 p-4 text-xl font-bold 