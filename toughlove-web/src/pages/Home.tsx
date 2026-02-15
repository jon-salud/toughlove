import { Link } from 'react-router-dom';
import { Users, Heart, Phone, ArrowRight, MapPin } from 'lucide-react';

export function Home() {
    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-8 py-12 md:py-20">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    Reclaiming Parents.<br />
                    <span className="text-red-700">Saving Families.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    A loving solution for families torn apart by unacceptable adolescent behaviour. You are not alone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-700 rounded-full hover:bg-red-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        <Users className="w-5 h-5 mr-2" />
                        Find a Support Group
                    </Link>
                    <Link to="/emergency" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-red-700 bg-red-50 border-2 border-red-100 rounded-full hover:bg-red-100 transition">
                        <Phone className="w-5 h-5 mr-2" />
                        Emergency Help
                    </Link>
                </div>
            </section>

            {/* Problem / Empathy Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-sm">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Do you feel trapped, helpless, or frightened?</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Are you struggling to retain control of your life and your family? Toughlove provides a supportive network of parents who have been where you are. We help you set boundaries, find strength, and restore balance to your home.
                    </p>
                </div>
            </section>

            {/* Support Groups Feature Cards */}
            <section className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Join a Support Group</h2>
                    <p className="text-gray-600 mt-2">Connect with other parents in your region.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { city: 'Auckland', desc: 'Meets in Henderson', link: '/services' },
                        { city: 'Hamilton', desc: 'Weekly Meetings', link: '/services' },
                        { city: 'Christchurch', desc: 'Community Support', link: '/services' }
                    ].map((group) => (
                        <Link key={group.city} to={group.link} className="group bg-white/80 hover:bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100/50 hover:border-red-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{group.city}</h3>
                            <p className="text-gray-500 mb-4">{group.desc}</p>
                            <span className="text-red-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Testimonials - Styled as cards */}
            <section className="bg-gradient-to-br from-gray-50/80 to-red-50/30 rounded-3xl p-8 md:p-12">
                <div className="text-center mb-10">
                    <Heart className="w-10 h-10 text-red-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Real Stories, Real Change</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white/90 p-8 rounded-xl shadow-sm italic text-gray-700 relative">
                        <span className="text-6xl text-red-100 absolute top-4 left-4 font-serif leading-none">"</span>
                        <p className="relative z-10">"The relief to have someone understand what we were going through was immense. I learned I wasn't alone."</p>
                    </div>
                    <div className="bg-white/90 p-8 rounded-xl shadow-sm italic text-gray-700 relative">
                        <span className="text-6xl text-red-100 absolute top-4 left-4 font-serif leading-none">"</span>
                        <p className="relative z-10">"I changed my attitude completely towards my son. Toughlove gave me my life back."</p>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <Link to="/stories" className="text-gray-600 font-medium hover:text-red-700 underline decoration-red-300 decoration-2 underline-offset-4">
                        Watch video testimonials
                    </Link>
                </div>
            </section>

            {/* Funders Grid */}
            <section className="text-center pt-12 pb-4 border-t border-gray-200/50">
                <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-8">Proudly Supported By</p>
                <div className="flex flex-wrap justify-center items-center gap-12 grayscale hover:grayscale-0 transition-all duration-500">
                    <img src="/images/four-winds.png" alt="Four Winds Foundation" className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition" />
                    <img src="/images/lgb-logo.jpg" alt="Lottery Grants Board" className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition mix-blend-multiply" />
                </div>
            </section>
        </div>
    );
}
