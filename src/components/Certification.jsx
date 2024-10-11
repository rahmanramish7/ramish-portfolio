import { motion } from 'framer-motion';

const Certification = () => {
    const CERTIFICATIONS = [
        {
            title: 'Introduction to Front-End Development',
            provider: 'Simplilearn'
        },
        {
            title: 'React.js',
            provider: 'Great Learning'
        },
        {
            title: 'Node.js',
            provider: 'Scalar'
        }
    ];

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Certifications
            </motion.h1>
            <div>
                {CERTIFICATIONS.map((certification, index) => (
                    <div
                        key={index}
                        className='mb-8 flex flex-wrap lg:justify-center'
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        />
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                <span className='inline-flex items-center rounded-full bg-neutral-900 p-2 mr-2'>
                                    •
                                </span>
                                {certification.title} - <span className='text-sm text-purple-100'>{certification.provider}</span>
                            </h6>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Certification;
