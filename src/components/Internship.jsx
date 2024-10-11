import { motion } from 'framer-motion';

const Internship = () => {
    const INTERNSHIPS = [
        {
            year: '2024',
            role: 'Web Developer Intern',
            company: 'Prodigy Infotech',
            description: [
                'Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.js.',
                'Improved website performance by 30%.',
                'Collaborated with teams to enhance user experience through REST API integration and responsive design.'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'REST API']
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
                Internship
            </motion.h1>
            <div>
                {INTERNSHIPS.map((internship, index) => (
                    <div
                        key={index}
                        className='mb-8 flex flex-wrap lg:justify-center'
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <p className="mb-2 text-sm text-neutral-400">
                                {internship.year}
                            </p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold">
                                {internship.role} - <span className='text-sm text-purple-100'>{internship.company}</span>
                            </h6>
                            <ul className='mb-4 list-disc pl-6 text-neutral-400'>
                                {internship.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                            {internship.technologies.map((tech, index) => (
                                <span key={index}
                                    className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Internship;
