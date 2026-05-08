import React from "react";
import { Github, Linkedin, Mail, Code, Palette, Smartphone, ExternalLink } from 'lucide-react';

const About = ({ hasAnimated }) => {
    const features = [
        {
            icon: <Code className="w-8 h-8 mb-4 text-black" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code following best practices"
        },
        {
            icon: <Palette className="w-8 h-8 mb-4 text-black" />,
            title: "UI/UX Design",
            description: "Creating intuitive interfaces with attention to detail"
        },
        {
            icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
            title: "Responsive",
            description: "Mobile-first approach ensuring great experience on all devices"
        },
        {
            icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
            title: "Performance",
            description: "Optimizing for fast load times and smooth interactions"
        }
    ];

    return (
        <section id="about" className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className={`transition-all duration-1000 delay-200 ${hasAnimated.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p>
                                I’m a passionate Full Stack Developer and Data Engineer with strong experience building end-to-end digital solutions — from intuitive user interfaces to scalable backend systems and data pipelines. I specialize in modern web technologies, API development, and data engineering workflows that transform raw data into meaningful insights.

</p>
<br></br>
<p>My journey began with a deep curiosity about how systems work behind the scenes. Over time, that curiosity evolved into expertise in designing robust applications, architecting databases, and building reliable ETL pipelines. I enjoy working across the entire stack — crafting seamless frontend experiences, developing secure and efficient backend services, and engineering data systems that power intelligent decision-making.</p><br></br><p>

With a solid foundation in software architecture and growing knowledge in data science, I focus on building scalable, performance-driven solutions that bridge the gap between application development and data engineering.
                            </p>
                            <div className="flex space-x-4">
                                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    {feature.icon}
                                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;