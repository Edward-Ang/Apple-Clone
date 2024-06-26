import data from '../assets/footer.json';

const Footer: React.FC = () => {
    return (
        <>
            <div style={{ background: '#f5f5f7' }}>
                <div className="w-[980px] mx-auto flex flex-col justify-center items-center">
                    <div className="mt-2 pt-4 pb-3 text-xs border-b border-gray-300" style={{color: 'rgb(0, 0, 0, 0.56)'}}>
                        <p className='mb-2.5'>{data.Qualified_Purchasers}</p>
                        <p className='mb-2.5'>{data.Monthly_pricing}</p>
                        <p className='mb-2.5 text-black font-medium'>◊◊ Terms & Conditions of 0% interest for 6-, 12- and 24-month instalment payment plans</p>
                        <p className='mb-2.5'>{data.Terms_Conditions_of_0_interest}</p>
                        <p className='mb-2.5'>{data.Installment}</p>
                        <p className='mb-2.5'>The information is current as of 24 May 2024.</p>
                        <p className='mb-2.5'>{data.Trade_in_service}</p>
                        {data.Notes.map((note, index) => (
                            <p key={index} className='mb-2.5'>{note}</p>
                        ))}
                        <p className='mb-2.5'>{data.Location_Usage}</p>
                    </div>
                    <div className='py-4'>
                        <span>hello</span>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;