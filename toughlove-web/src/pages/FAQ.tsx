export function FAQ() {
    const faqs = [
        {
            question: "Can you provide advice about my particular situation?",
            answer: "We are very sorry, but TOUGHLOVE® New Zealand simply cannot give you any advice, no matter how much background you provide us. The heart of our program is the advice that you will get from all the members of your support group. And that advice will take you time to believe, to absorb and then to follow. However, if you believe you are in immediate physical danger, please Phone the POLICE! 111"
        },
        {
            question: "What kind of trouble does my teen have to be in for me to need this group?",
            answer: "You are the one who decides what is a problem in your home. TOUGHLOVE Parent Support Groups help parents with a wide range of problems... If you are concerned about your teen’s behaviour, that is enough."
        },
        {
            question: "What if my spouse won’t go with me to the group?",
            answer: "You will find other people in the group in the same situation. Go to the group anyway. If you want you can ask your friends and relatives to go with you and support you."
        },
        {
            question: "Is there a fee?",
            answer: "There is a one-time charge of $50.00 for the materials you will need in the group when you join. There is also a gold coin donation per week requested for each family. If money is a problem, let the group know and they will assist you."
        },
        {
            question: "Does my teen go with me to the group?",
            answer: "No. The group is for parents and other adults that care about you and your family. Your kid does not need to know everything that you are doing."
        },
        {
            question: "Will you tell me what to do?",
            answer: "Changes you need to make may be different from what other people need to do. You are in charge of making decisions about your life and your family. Other parents will offer suggestions based on what has worked for them."
        },
        {
            question: "Why do I need to go to a group when my teen is the one with the problem?",
            answer: "If you ask your teen if he or she has a problem, they will answer no. If someone asks you if you have a problem, you will answer yes. You need to go to the group to create a plan to help your child and that plan includes a support system."
        },
        {
            question: "How long will it take before I see changes in my teen’s behaviour?",
            answer: "Maybe right away, maybe much longer. Your situation took a long time to develop and it will take a long time to change. Also, your teen’s behaviour will change only as a result of changes in your own behaviour."
        },
        {
            question: "Can I just turn up at a TOUGHLOVE meeting or do I need to register in advance?",
            answer: "You can just arrive. No prior registration is required."
        },
        {
            question: "How long does the meeting last for?",
            answer: "Two and a quarter hours. Most start about 7 or 7.30 pm."
        },
        {
            question: "For how long do I need to attend?",
            answer: "We recommend at least 8 to 10 times to give the Programme a chance to start working. Some parents attend for many months for on-going support."
        },
        {
            question: "What happens at my first TOUGHLOVE meeting?",
            answer: "First timers will be taken aside and the TOUGHLOVE program will be explained by experienced group members. We will help you single out key issues to focus on."
        },
        {
            question: "What about the confidentiality of my situation?",
            answer: "TOUGHLOVE operates on the basis of absolute trust. We totally preserve the confidentiality of who you see and what you hear at our meetings."
        },
        {
            question: "Is there a set format for TOUGHLOVE meetings?",
            answer: "Yes. From the 3rd meeting onwards: 30 min small group review, 40 min 'Information Session', 40 min small-group strategy session."
        },
        {
            question: "Are there benefits in kicking my kid out of home if they don’t behave?",
            answer: "No. It is generally a sign that the parent can’t cope. We owe it to our kids to demonstrate love and respect. It’s TOUGH but better to find solutions at home."
        },
        {
            question: "Does TOUGHLOVE believe in physical punishment?",
            answer: "NO! TOUGHLOVE opposes the use of violence in the home. Kids need loving parents prepared to discuss and put in place appropriate consequences."
        },
        {
            question: "What if I’m a single parent, separated or blended family etc?",
            answer: "Whatever your situation, you will be welcome. Ideally children need parents who can role model values, regardless of family structure."
        }
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <details key={index} className="group border border-gray-200 rounded-lg open:shadow-md transition-all">
                        <summary className="flex cursor-pointer items-center justify-between p-6 bg-gray-50/80 rounded-t-lg group-open:bg-red-50/80 group-open:text-red-700 font-medium hover:bg-gray-100/80">
                            {faq.question}
                        </summary>
                        <div className="p-6 text-gray-700 bg-white/80 rounded-b-lg">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
}
