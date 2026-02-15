import { Mail } from 'lucide-react';

export function Contact() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>

            <div className="bg-white/80 p-8 rounded-lg shadow max-w-2xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Toughlove New Zealand Inc</h2>

                <div className="flex items-center space-x-3 text-lg text-gray-700">
                    <Mail className="w-6 h-6 text-red-600" />
                    <span>
                        TLNZ Secretary: <a href="mailto:secretary@tlnz.org" className="text-blue-600 hover:underline">secretary@tlnz.org</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
