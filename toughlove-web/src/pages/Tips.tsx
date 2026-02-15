export function Tips() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Parenting Tips</h1>

            <div className="space-y-6">
                <details className="group border border-gray-200 rounded-lg open:shadow-md transition-all">
                    <summary className="flex cursor-pointer items-center justify-between p-6 bg-gray-50/80 rounded-t-lg group-open:bg-red-50/80 group-open:text-red-700 font-semibold text-lg hover:bg-gray-100/80 dark:hover:bg-gray-800">
                        Coping with legal highs and other drugs
                    </summary>
                    <div className="p-6 text-gray-700 space-y-4 bg-white/80 rounded-b-lg">
                        <h3 className="font-semibold">Recommendations for parents of drug-taking teens:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Declare your home a drug free zone</li>
                            <li>If you think your teen is using legal highs or other drugs, search the house for them (including their bedroom)</li>
                            <li>Confiscate any legal highs, other drugs or drug-related implements you find</li>
                            <li>Don’t let things fester. Speak to your teen at an early point about what you’ve discovered</li>
                            <li>Don’t confront in anger. It could lead to a slanging match or worse</li>
                            <li>Set consequences for further drug use and make sure your teen understands what’s involved</li>
                            <li>Make sure your teen understands that you still love him/her and are serious about helping</li>
                            <li>For further advice, contact us</li>
                            <li>Join a TOUGHLOVE Parent Support Group and learn effective and proven strategies for coping.</li>
                        </ul>
                    </div>
                </details>

                <details className="group border border-gray-200 rounded-lg open:shadow-md transition-all">
                    <summary className="flex cursor-pointer items-center justify-between p-6 bg-gray-50 rounded-t-lg group-open:bg-red-50 group-open:text-red-700 font-semibold text-lg hover:bg-gray-100">
                        Parent’s checklist for Christmas period
                    </summary>
                    <div className="p-6 text-gray-700 space-y-4 bg-white rounded-b-lg">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>However busy you are, spending time with your teen must be high on your priority list.</li>
                            <li>Encourage your teens to make good use of their time (e.g., looking for a holiday job).</li>
                            <li>If not returning to school, help them draft a CV (but let them write it).</li>
                            <li>You don’t have to micro-manage, but knowing where they are and who they are with is important.</li>
                            <li>Discuss holiday plans well in advance to avoid surprises.</li>
                            <li>Share household responsibilities; ask them to select jobs from a list.</li>
                            <li>Involve them in organizing family celebrations or Christmas dinner.</li>
                            <li>Praise efforts; build them up rather than knock them down.</li>
                            <li>If paying for chores, pay only after the job is done.</li>
                            <li>If it's your custom, expect them to be there for Christmas Day family time.</li>
                            <li>Be prepared for both reconnection and potential conflicts during family gatherings.</li>
                            <li>Don’t try to buy good behaviour with expensive presents. A heartfelt card can mean more.</li>
                            <li>If behaviour is unacceptable, be prepared to explain why a present might be reduced.</li>
                            <li>Use holidays to explore new activities together to build your relationship.</li>
                            <li>If you reached your limit, contact us at <a href="mailto:secretarytlnz@gmail.com" className="text-blue-600 hover:underline">secretarytlnz@gmail.com</a>.</li>
                        </ul>
                    </div>
                </details>
            </div>
        </div>
    );
}
