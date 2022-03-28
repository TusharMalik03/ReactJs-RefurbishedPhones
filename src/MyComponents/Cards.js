import React from 'react';

const Cards = (props) => {

    // let url = props.mobileUrl;
    // if (props.site === 'Cashify') {
    //     url = "https://store.cashify.in" + url;
    // }

    return (
        <div className="border-4 w-fit md:w-full mx-auto rounded-md p-2 bg-slate-200 border-black">

                <span className="badges bg-red-700 p-1 text-white rounded-sm">{props.site}</span>
                <div className="maincontainer-1">
                    <div className="details" id="detail-container">

                        <div className='flex flex-col a:flex-row p-4 a:space-y-0 a:space-x-6 space-y-6 lg:space-x-16'>
                        <img src={props.imageUrl} className='h-48' alt="Card Cap" />
                        <div className='flex flex-col -mt-3 lg:p-2 font-semibold'>

                            <div className="label-display">
                                <p className="font-bold">Model is:</p>
                                <p>{props.model}</p>
                            </div>

                            <div className="label-display">
                                <p className="font-bold">Price:</p>
                                <p>{props.price}</p>
                            </div>

                            <div className="label-display">
                                <p className="font-bold">Storage:</p>
                                <p>{props.storage}</p>
                            </div>

                            <div className="label-display">
                                <p className="font-bold">Condition:</p>
                                <p>{props.condition}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cards