export function Stories() {
    const stories = [
        { name: "Jacquie - violent son", src: "https://toughlove.org.nz/videos/Jacquie - violent son.mp4" },
        { name: "Karen - the support to follow through on plans", src: "https://toughlove.org.nz/videos/Karen - the support to follow through on plans.mp4" },
        { name: "Tracey - I learned to change myself", src: "https://toughlove.org.nz/videos/Tracey - I learned to change myself.mp4" },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">True Stories</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story) => (
                    <div key={story.name} className="space-y-2">
                        <h3 className="font-semibold text-gray-800">{story.name}</h3>
                        <div className="aspect-video bg-black rounded overflow-hidden">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                src={story.src}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-gray-500 italic text-sm">
                Video not playing? Your browser may not support the mp4 video format.
            </p>
        </div>
    );
}
