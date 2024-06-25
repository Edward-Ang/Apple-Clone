import { Link } from 'react-router-dom'; 
import data from '../assets/chip.json';
import M3 from '../assets/M3.png';
import m3pro from '../assets/m3pro.png';
import m3max from '../assets/m3max.png';
import memory from '../assets/memory.png';
import '../App.css';

const ProductConfigure: React.FC = () => {
    const getImagePath = (path: string) => {
        switch (path) {
            case 'M3':
                return M3;
            case 'M3Pro':
                return m3pro;
            case 'M3Max':
                return m3max;
            default:
                return memory;
        }
    };

    return (
        <>
            <div className="pt-12 pb-11 flex flex-col justify-center items-center" style={{ margin: '0 14.64%' }}>
                <div className='pb-14 flex flex-col justify-center items-center '>
                    <h2 className="text-2xl font-semibold font-stack">What to consider when choosing your MacBook Pro.</h2>
                    <p className='mt-3 text-lg'>Configure your laptop on the next step.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 w-full">
                    {data.chips.map((chip, index) => (
                        <div key={index} className='flex flex-col px-5'>
                            <div className='flex items-center' style={{maxWidth: '36px'}}>
                                <img src={getImagePath(chip.path)} alt={chip.name} />
                            </div>
                            <span className='mt-5 text-sm font-semibold'>{chip.name}</span>
                            <p className='mt-4 text-sm'>{chip.description}</p>
                            <div className=''>
                                <ul className='text-sm list-disc ml-4'>
                                    {chip.features.map((feature, index) => (
                                        <li key={index} className='mt-3'>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                    )}
                </div>
                <div className='w-full flex justify-center items-center pt-14 text-xs'>
                    <span>Have questions about buying a Mac? <Link to='/' className='text-blue-500'>Chat with a Mac Specialist.</Link></span>
                </div>
            </div >
        </>
    );
}

export default ProductConfigure;