export function Emergency() {
    const helplines = [
        { name: 'Lifeline', contact: '0800 543 354 or (09) 5222 999' },
        { name: 'Suicide Crisis Helpline', contact: '0508 828 865 (0508 TAUTOKO)' },
        { name: 'Depression Helpline', contact: '0800 111 757 or free text 4202' },
        { name: 'OUTLine NZ', contact: '0800 688 5463 (OUTLINE)' },
        { name: 'Youthline', contact: '0800 376 633, free text 234' },
        { name: "What's Up", contact: '0800 942 8787' },
        { name: 'Kidsline', contact: '0800 54 37 54' },
        { name: 'Alcohol and Drug Helpline', contact: '0800 787 797' },
        { name: 'Are You OK', contact: '0800 456 450' },
        { name: 'Anxiety phone line', contact: '0800 269 4389' },
        { name: 'Shine', contact: '0508 744 633' },
        { name: "Women's Refuge Crisis line", contact: '0800 733 843' },
        { name: 'Shakti Crisis Line', contact: '0800 742 584' },
        { name: 'Rape Crisis', contact: '0800 883 300' },
    ];

    return (
        <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <h1 className="text-2xl font-bold text-red-700 mb-2">In case of emergency… don’t hesitate…</h1>
                <p className="text-xl text-red-800 font-semibold">
                    If you or someone you know is in IMMEDIATE danger, phone 111
                </p>
            </div>

            <section>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Other helplines that may be of use...</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    {helplines.map((line) => (
                        <div key={line.name} className="bg-white/80 p-4 rounded shadow-sm border border-gray-100 flex flex-col">
                            <span className="font-bold text-gray-800">{line.name}</span>
                            <span className="text-blue-600 font-medium">{line.contact}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
