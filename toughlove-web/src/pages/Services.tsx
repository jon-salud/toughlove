export function Services() {
    return (
        <div className="space-y-8">
            <section className="max-w-3xl">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Services</h1>
                <p className="text-gray-700 mb-4">
                    TOUGHLOVE is a non-profit, self-help organisation that provides on-going education and active support to families, empowering parents and young people to accept responsibility for their actions and stop destructive behaviours.
                </p>
                <p className="text-gray-700 mb-4">
                    If you are concerned, feeling scared, frustrated or confused, don’t give up. Take the first step and take action by attending a TOUGHLOVE parent support group.
                </p>
                <p className="text-gray-700">
                    TOUGHLOVE can give you no immediate answers to your problems, what we can do is show you that you are not alone, that you have rights and worth and you deserve respect.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-red-700 mb-6">PARENT SUPPORT GROUPS</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Auckland */}
                    <div className="bg-white/80 p-6 rounded-lg shadow border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">AUCKLAND (Henderson)</h3>
                        <p className="text-gray-600 mb-2">Community Waitakere, Level 1, 20 Alderman Drive, Henderson</p>
                        <p className="text-gray-600 mb-2">(Building in front of West wave pools)</p>
                        <p className="text-sm font-semibold text-red-600">Mondays 7.00pm to 9.00pm</p>
                        <p className="text-sm text-gray-500 mt-2">Email: toughlovenlpsg@gmail.com</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">HIBISCUS COAST</h3>
                        <p className="text-gray-600 mb-2">On-line only</p>
                        <p className="text-sm font-semibold text-red-600">Tuesdays 7.00pm - 9.15pm</p>
                        <p className="text-sm text-gray-500 mt-2">Email: toughlove.hbc@gmail.com</p>
                        <p className="text-sm text-gray-500">Phone: 027 291 3862</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">PUKEKOHE</h3>
                        <p className="text-gray-600 mb-2">On-line only</p>
                        <p className="text-sm font-semibold text-red-600">Thursdays 7.00pm - 9.00pm</p>
                        <p className="text-sm text-gray-500 mt-2">Email: tlpukekohe@gmail.com</p>
                    </div>

                    {/* Christchurch */}
                    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">CHRISTCHURCH CENTRAL</h3>
                        <p className="text-sm text-gray-500 mt-2">Email: toughloveusi@gmail.com</p>
                        <p className="text-sm text-gray-500">Phone: 027 603 5064</p>
                    </div>

                    {/* Online Support */}
                    <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ON-LINE SUPPORT</h3>
                        <p className="font-semibold text-gray-800">Toughlove FERAL</p>
                        <p className="text-gray-600 mb-2">Six week self-help email course</p>
                        <p className="text-sm text-gray-500 mt-2">Email: feral@orcon.net.nz</p>
                        <p className="text-sm text-gray-500">Txt: 021 169 2284</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
