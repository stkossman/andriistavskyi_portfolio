import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
    return (
    <section id="projects" className='min-h-screen flex items-center justify-center py-20'>
        <RevealOnScroll>

            <div className='max-w-5xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'> Featured Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 over:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
                        <h3 className='text-xl font-bold mb-2'> Creepstat.gg</h3>
                        <p className='text-gray-400 mb-4'>
                            Web interface for casual users and players of game Dota 2 to get in depth statistics, share games, their profiles, and better understand the game.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["C#", "ASP.NET", "Entity Framework", "MSSQL", "TailwindCSS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <a href="https://github.com/tosentai/CreepStat" className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center space-x-2'>
                                <span>View Project</span>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 over:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'> sociopathic unstable vaccine</h3>
                        <p className='text-gray-400 mb-4'>
                            A merchandise website created using TailwindCSS and Vanilla JS, showcasing a variety of unique and edgy products.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["HTML", "JavaScript", "TailwindCSS"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center space-x-2'>
                                <span>View Project</span>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 over:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'> Kossman's Education Instance Management</h3>
                        <p className='text-gray-400 mb-4'>
                            A desktop application designed to efficiently create, edit, and view class schedules for educational institutions.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["C#", "MSSQL", "Entity Framework", "QuestPDF", "WinForms"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <a href="https://github.com/stkossman/Education-Instance-Management" className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center space-x-2'>
                                <span>View Project</span>
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 over:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all'>
                        <h3 className='text-xl font-bold mb-2'> Musical Instruments Management System</h3>
                        <p className='text-gray-400 mb-4'>
                            A Python-based application using Docker, PostgreSQL, and SQLAlchemy for managing musical instruments and manufacturers with CRUD functionalities.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {["Python", "Docker", "SQLAlchemy", "PostreSQL", "Pydantic", "Alembic", "Uvicorn"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex justify-between items-center'>
                            <a href="https://github.com/stkossman/Final_Project_Python1year" className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center space-x-2'>
                                <span>View Project</span>
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </RevealOnScroll>
    </section>
    );
};