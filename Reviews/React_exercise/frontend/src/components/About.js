export default function About() {
    return (
        <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-0 -z-10 " />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left
             " />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <img alt="" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" className="mx-auto h-12" />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p className={"font-mono"}>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </blockquote>
                    <div className={"flex justify-center gap-10"}>
                        <figcaption className="mt-10">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="mx-auto h-10 w-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center flex-col space-x-3 text-base text-center">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <div className="text-gray-600 hidden md:inline">CEO of Workcation</div>
                            </div>
                        </figcaption>
                        <figcaption className="mt-10">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="mx-auto h-10 w-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center flex-col space-x-3 text-base text-center">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <div className="text-gray-600 hidden md:inline">CEO of Workcation</div>
                            </div>
                        </figcaption>
                        <figcaption className="mt-10">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="mx-auto h-10 w-10 rounded-full"
                            />
                            <div className="mt-4 flex items-center justify-center flex-col space-x-3 text-base text-center">
                                <div className="font-semibold text-gray-900">Judith Black</div>
                                <div className="text-gray-600 hidden md:inline">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </div>
        </section>
    )
}
