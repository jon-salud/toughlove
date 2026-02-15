import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navigation = [
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'TIPS', href: '/tips' },
    { name: 'STORIES', href: '/stories' },
    { name: 'FAQs', href: '/faq' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'HOW TO HELP', href: '/how-can-i-help', isButton: true, variant: 'primary' },
    { name: 'EMERGENCY', href: '/emergency', isButton: true, variant: 'urgent' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Banner Area */}
            <div className="bg-red-700 text-white py-2 text-center md:hidden">
                <p className="font-semibold text-sm">Parent Support Services</p>
            </div>

            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <img
                                src="/images/ToughLoveLogo.svg"
                                alt="Toughlove Logo"
                                className="h-8 w-auto lg:hidden"
                            />
                            <img
                                src="/images/ToughLove.webp"
                                alt="Toughlove New Zealand"
                                className="h-16 w-auto hidden lg:block object-contain"
                            />
                            <span className="lg:hidden text-lg font-bold text-red-600">TLNZ</span>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-4 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-sm font-semibold leading-6 px-3 py-2 rounded-lg transition-colors ${item.isButton
                                    ? item.variant === 'urgent'
                                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-sm ml-2'
                                        : 'bg-red-50 text-red-700 hover:bg-red-100 ml-2'
                                    : location.pathname === item.href
                                        ? 'text-red-600'
                                        : 'text-gray-900 hover:text-red-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <img
                                    src="/images/ToughLoveLogo.svg"
                                    alt="Toughlove Logo"
                                    className="h-8 w-auto"
                                />
                                <span className="text-xl font-bold text-red-600">Toughlove NZ</span>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${item.isButton
                                                    ? item.variant === 'urgent'
                                                        ? 'bg-red-600 text-white hover:bg-red-700 mt-2 text-center'
                                                        : 'bg-red-50 text-red-700 hover:bg-red-100 mt-2 text-center'
                                                    : 'text-gray-900 hover:bg-gray-50'
                                                }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
